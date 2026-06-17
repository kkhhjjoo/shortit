import ShortLinkEditPage from './ShortLinkEditPage';
import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';

export const metadata = {
  title: '주소 수정하기 - Shortit'
}

export default async function Page({ params }) {
  const { id } = await params;
  await dbConnect();
  const shortLink = await ShortLink.findById(id);
  return (
    <ShortLinkEditPage
      id={id}
      initialValues={{ title: shortLink.title, url: shortLink.url }}
    />
  );
}