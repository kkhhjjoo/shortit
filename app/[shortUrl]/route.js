import { redirect } from 'next/navigation';
import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';

export async function GET(_request, { params }) {
  await dbConnect();
  const { shortUrl } = await params;
  const shortLink = await ShortLink.findOne({ shortUrl });

  if (!shortLink) {
    return new Response('Not found', { status: 404 });
  }

  redirect(shortLink.url);
}
