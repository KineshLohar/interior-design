import { sendMail } from "@/lib/send-mail";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { fullName, email, type, message } = await req.json();

        if (!fullName || !email || !type || !message) {
            return new NextResponse("Full Name , Email , Message all are required!", { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new NextResponse("Invalid email format", { status: 400 });
        }

        const emailSubject = `New Contact Request from ${fullName}`;
        const emailText = `You have received a new contact request from ${fullName} (${email}).\n\nMessage: \n${message}`;

        const emailHtml = `
            <html lang="en">
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 20px;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 5px;
                            border: 1px solid #ddd;
                        }
                        h2 {
                            color: #333;
                        }
                        p {
                            font-size: 14px;
                            color: #555;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <h2>New Contact Request</h2>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Type:</strong> ${type}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                </body>
            </html>
        `;

        await sendMail({
            email: email,  // User's email address as the "From"
            subject: emailSubject,
            text: emailText,  // Plain text version
            html: emailHtml,  // HTML version
        });

        return NextResponse.json({
            "status": "success",
            "message": "Thank you! Your message has been received. Our team will be in touch shortly."
        });
    } catch (error) {
        console.log("[API ERROR CONTACT]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}