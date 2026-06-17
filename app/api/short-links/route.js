import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';
import createShortURL from '@/lib/createShortURL';
import mongoose from 'mongoose';

export async function GET() {
  await dbConnect();
  const shortLinks = await ShortLink.find();
  return Response.json(shortLinks);
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  const { title, url } = body;
  const shortUrl = createShortURL(url);
  const shortLink = await ShortLink.create({
    title,
    url,
    shortUrl
  });
  return Response.json(shortLink, { status: 201 });
}

export async function PATCH() {
  return Response.json(
    { status: 404 }
  );
}