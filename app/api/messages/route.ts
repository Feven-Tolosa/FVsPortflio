import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!email || !message || !name) {
      return NextResponse.json(
        { success: false, error: 'Missing fields' },
        { status: 400 }
      )
    }

    // Create transporter (use your email provider credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // your Gmail or domain email
        pass: process.env.SMTP_PASS, // your App Password (not your real password)
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL || 'feventolosa14@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
