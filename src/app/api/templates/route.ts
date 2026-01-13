import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const templates = await prisma.template.findMany();
  return NextResponse.json(templates);
}

export async function POST(req: NextRequest) {
  const { name, category, imageUrl, previewUrl } = await req.json();
  const newTemplate = await prisma.template.create({
    data: { name, category, imageUrl, previewUrl },
  });
  return NextResponse.json(newTemplate, { status: 201 });
}
