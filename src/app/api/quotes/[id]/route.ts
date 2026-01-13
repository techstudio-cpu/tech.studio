import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const quote = await prisma.quote.findUnique({ where: { id: parseInt(params.id) } });
  if (!quote) {
    return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
  }
  return NextResponse.json(quote);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.quote.delete({ where: { id: parseInt(params.id) } });
  return new NextResponse(null, { status: 204 });
}
