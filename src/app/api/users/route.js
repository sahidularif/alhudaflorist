import { signJwt } from '@/lib/jwt';
import { createUserWithAccount, getUserByEmail } from '@/utils/user';
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import { sendEmail } from '@/app/auth/reset_password/sendEmail';
import { VerifyAccountEmailTemplate } from '@/app/components/layout/verify_email_template';

export const POST = async (req, res) => {
    const { name, email, password } = await req.json();
    // console.log(name, email, password);
    try {

        // Check if the email already exists in the database
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({
                message: "Email is already in use.",
            }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Salt round of 10

        // Create the new user if the email doesn't exist
        const newUser = await createUserWithAccount({
            name,
            email,
            password: hashedPassword, // Use the hashed password
        });
        console.log(newUser)
        const jwtUserId = signJwt({
            id: newUser.id,
          });

        const payload = {
            to: email,
            jwt: jwtUserId
        }
        
        await sendEmail({
            from: 'Admin <onboarding@resend.dev>',
            to: [email],
            subject: 'Verify your account',
            react: VerifyAccountEmailTemplate(payload)
        });

        return NextResponse.json({
            message: "User created",
            data: {
                ...newUser
            }
        }, { status: 201 })

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            message: "Error",
            err
        }, { status: 500 });
    }
}
