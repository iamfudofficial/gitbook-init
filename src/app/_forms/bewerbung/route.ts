import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Netlify erkennt den POST und verarbeitet die Daten automatisch
  return NextResponse.json({ success: true });
}
