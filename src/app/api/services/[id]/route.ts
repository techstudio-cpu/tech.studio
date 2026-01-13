import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const service = await prisma.service.findUnique({ where: { id: parseInt(params.id) } });
  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }
  return NextResponse.json(service);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { name, price, description, features } = await req.json();
  const updatedService = await prisma.service.update({
    where: { id: parseInt(params.id) },
    data: { name, price, description, features },
  });
  return NextResponse.json(updatedService);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.service.delete({ where: { id: parseInt(params.id) } });
  return new NextResponse(null, { status: 204 });
}
