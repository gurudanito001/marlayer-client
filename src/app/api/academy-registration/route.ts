import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, course, level } = body;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Marlayer Academy <onboarding@resend.dev>', // Update to your verified domain (e.g., info@marlayer.com) when ready
      to: process.env.CONTACT_EMAIL || 'daniel.marlayer@gmail.com', // Your receiving email
      subject: `New Academy Registration: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; color: #11241E; max-w-[600px];">
          <h2 style="color: #0A4731;">New Academy Application Received</h2>
          <p>A new student has submitted an application for the Marlayer Tech Academy.</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Course of Interest:</strong> ${course}</p>
          <p><strong>Experience Level:</strong> ${level}</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
          <p style="font-size: 12px; color: #6B7280;">This email was sent automatically from the Marlayer Academy Registration form.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process registration' }, { status: 500 });
  }
}
