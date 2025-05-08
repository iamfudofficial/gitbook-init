import { NextResponse } from 'next/server';

export async function POST() {
  // Netlify erkennt den POST und verarbeitet die Daten automatisch
  return NextResponse.json({ success: true });
}
