// src/app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: '¡Portfolio! <onboarding@resend.dev>',
      to: ['montesagustin99@gmail.com'],
      subject: `Nuevo mensaje de ${firstName}`,
      text: `Email: ${email}\n\nMensaje:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Error enviando mail' }, { status: 500 })
  }
}
