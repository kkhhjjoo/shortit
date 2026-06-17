import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';

export async function GET(_request, { params }) {
  await dbConnect();
  const { id } = await params;
  const shortLink = await ShortLink.findById(id);
  return Response.json(shortLink);
}

export async function POST() {
  return Response.json(
    {
      title: '위키피디아 Next.js',
      url: 'https://en.wikipedia.org/wiki/Next.js',
    },
    { status: 201 }
  );
}

export async function PATCH(request, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await request.json();
  const updatedShortLink = await ShortLink.findByIdAndUpdate(id, body, {new: true});
  return Response.json(updatedShortLink);
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = await params;
  await ShortLink.findByIdAndDelete(id);
  return new Response(null, { status: 204 });
}
