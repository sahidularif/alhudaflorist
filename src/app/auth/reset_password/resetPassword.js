'use server';

import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { ResetPasswordEmailTemplate } from '@/app/components/layout/email_template';
import { sendEmail } from './sendEmail';

export const resetPassword = async (email) => {
    // Check user is exist or not
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return "User not exists!"
    }
    // Generate token & token expiry date
    const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
    const today = new Date();
    const expiryDate = new Date(today.setDate(today.getDate() + 1)); // 24 hours from now
    const payload = {
        to: email,
        token: resetPasswordToken
    }
    // set token to database
    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            token: resetPasswordToken,
            expires: expiryDate
        },
    })
    // sending email to user
    await sendEmail({
        from: 'Admin <info@alhudaflorist.com>',
        to: [email],
        subject: 'Reset your password',
        react: ResetPasswordEmailTemplate(payload)
    });

    return "Password reset email sent"
};
