"use server";

import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export const changePassword = async (token, password) => {
    const user = await prisma.user.findUnique({
        where: {
            token: token
        }
    })

    if (!user) {
        throw new Error('User not found');
    }

    const resetPasswordTokenExpiry = user.token;
    if (!resetPasswordTokenExpiry) {
        throw new Error('Token expired');
    }

    const today = new Date();

    if (today > resetPasswordTokenExpiry) {
        throw new Error('Today Token expired');
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            password: hashPassword,
            token: null,
            expires: null,
        }
    })

    return "Password changed successfully"
}