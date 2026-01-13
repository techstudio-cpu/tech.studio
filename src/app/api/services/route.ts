import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(req: NextRequest) {
  const { name, price, description, features } = await req.json();
  const newService = await prisma.service.create({
    data: { name, price, description, features },
  });
  return NextResponse.json(newService, { status: 201 });
}
