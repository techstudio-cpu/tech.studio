import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const template = await prisma.template.findUnique({ where: { id: parseInt(params.id) } });
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 });
  }
  return NextResponse.json(template);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { name, category, imageUrl, previewUrl } = await req.json();
  const updatedTemplate = await prisma.template.update({
    where: { id: parseInt(params.id) },
    data: { name, category, imageUrl, previewUrl },
  });
  return NextResponse.json(updatedTemplate);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.template.delete({ where: { id: parseInt(params.id) } });
  return new NextResponse(null, { status: 204 });
}
