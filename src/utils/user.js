import { v4 as uuidv4 } from 'uuid';
import prisma from '../lib/prisma';

export async function createUserWithAccount({ name, email, password }) {
    try {
        const result = await prisma.user.create({
            data: {
                name,
                email,
                password,
                accounts: {
                    create: {
                        type: 'credentials',
                        provider: 'email',
                        providerAccountId: uuidv4()
                    }
                }
            },
            include: {
                accounts: true
            }
        })
        return result

    } catch (error) {
        console.error('Error creating user with account: ', error);
        throw error;
    }
}

export async function getUserByEmail(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.error('Error getting user by email: ', error);
        throw error;
    }
}
export async function getFlowerByID(id) {
    try {
        const flower = await prisma.flower.findUnique({
            where: {
                id,
            },
        });
        return flower;
    } catch (error) {
        console.error('Error getting flower by id: ', error);
        throw error;
    }
}