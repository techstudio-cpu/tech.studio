import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const quotes = await prisma.quote.findMany();
  return NextResponse.json(quotes);
}

export async function POST(req: NextRequest) {
  const { name, email, service, message } = await req.json();
  const newQuote = await prisma.quote.create({
    data: { name, email, service, message },
  });
  return NextResponse.json(newQuote, { status: 201 });
}
