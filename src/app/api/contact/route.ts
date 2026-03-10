import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    const { data, error } = await resend.emails.send({
      // While testing, Resend requires you to use this 'onboarding' email as the sender
      from: 'Marlayer Contact Form <onboarding@resend.dev>', 
      
      // IMPORTANT: Change this to the email address you signed up to Resend with!
      to: ['daniel.marlayer@gmail.com'], 
      
      subject: `New Inquiry (${service}): ${name}`,
      replyTo: email, // This lets you click "Reply" in your inbox to email the client back directly
      html: `
        <h2 style="color: #0A4731;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="padding: 12px; border-left: 4px solid #45B1A0; background-color: #f9f9f9;">
          ${message}
        </p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}