"use client";
import { SessionProvider } from "next-auth/react";


export default async function AuthProvider({ children }) {
// const session = await auth()
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )

}