import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';
import mongoose from 'mongoose';

export async function GET() { 
  await dbConnect();
  const qrCodes = await QRCode.find();
  return Response.json(qrCodes);
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const newQRCode = await QRCode.create(body);
  return Response.json(newQRCode, { status: 201 });
}

export async function PATCH() {
  return Response.json({
    status: 404
  })
}