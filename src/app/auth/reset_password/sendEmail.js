"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (payload) => {
    const data = await resend.emails.send(payload);

    console.log("Email sent successfully")

    return data;
}