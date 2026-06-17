import dbConnect from '@/db/dbConnect';
import mongoose from 'mongoose';
import QRCode from '@/db/models/QRCode';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const qrCode = await QRCode.findById(id);
  return Response.json(qrCode);
}

export async function POST() {
  await dbConnect();
  // console.log(mongoose.connection.readyState);
  console.log(QRCode);
  return Response.json(
    {
      title: '위키피디아 Next.js',
      url: 'https://en.wikipedia.org/wiki/Next.js',
    },
    { status: 201 }
  );
}

export async function PATCH(request, {params}) {
  await dbConnect();
  const { id } = await params;
  const body = await request.json();
  const updatedQRCode = await QRCode.findByIdAndUpdate(id, body, { new: true });
  return Response.json(updatedQRCode);
}

export async function DELETE(request, { params }) { 
  await dbConnect();
  const { id } = await params;
  await QRCode.findByIdAndDelete(id);
  return new Response(null, { status: 204 });
}