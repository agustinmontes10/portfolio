// src/app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Servicio de mail no configurado' }, { status: 500 })
  }
  const resend = new Resend(process.env.RESEND_API_KEY)

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
    console.log(err);
    return NextResponse.json({ error: 'Error enviando mail' }, { status: 500 })
  }
}
