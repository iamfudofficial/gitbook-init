import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Zieladresse für Bewerbungen (bitte anpassen!)
const TO_EMAIL = 'maxkarmi@gmail.com';
const FROM_EMAIL = 'bewerbung@fibertexx.de'; // Absender (Resend erlaubt beliebige, aber am besten eigene Domain)

export async function POST(request: Request) {
  try {
    // Formulardaten parsen (multipart/form-data)
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const tel = formData.get('tel') as string;
    const datenschutz = formData.get('datenschutz') ? 'Ja' : 'Nein';
    const file = formData.get('file') as File | null;

    // E-Mail-Inhalt
    const text = `Neue Bewerbung:\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${tel}\nDatenschutz akzeptiert: ${datenschutz}`;

    // Attachment vorbereiten (optional)
    let attachments = [];
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // E-Mail senden
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: 'Neue Bewerbung über die Website',
      text,
      replyTo: email,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    return NextResponse.json({ success: false, error: 'E-Mail-Versand fehlgeschlagen.' }, { status: 500 });
  }
}

