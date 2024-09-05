import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";

import { use } from "react";
import { User } from "@prisma/client";

export const authOptions = {
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/login"
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            idToken: true,

            authorization: {
                params: {
                    scope: "openid profile email",
                },
            },
        }),
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com",
                },
                password:
                {
                    label: "Password",
                    type: "password"
                },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user) throw new Error("User not exist!");

                // This is Naive Way of Comparing The Passwords
                // const isPassowrdCorrect = credentials?.password === user.password;
                if (!credentials?.password) throw new Error("Please Provide Your Password");
                const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);

                if (!isPassowrdCorrect) throw new Error("Password is not correct");
                
                if (!user.emailVerified) throw new Error("Please verify your email first!");

                const { password, ...userWithoutPass } = user;
                return userWithoutPass;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },

        async session({ token, session }) {
            session.user = token.user;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }