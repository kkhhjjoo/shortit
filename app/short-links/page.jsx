import ShortLinkList from '@/components/ShortLinkList';
import Button from '@/components/Button';
import Link from '@/components/Link';
import styles from './ShortLinkListPage.module.css';
import ShortLink from '@/db/models/ShortLink';
import dbConnect from '@/db/dbConnect';

export const metadata = {
  title: '주소 줄이기 - Shortit'
}

export default async function ShortLinkListPage() {
  await dbConnect();
  const shortLinks = await ShortLink.find().lean();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>주소 줄이기</h1>
        <Button as={Link} href="/short-links/new">새로 만들기</Button>
      </header>
      <ShortLinkList items={JSON.parse(JSON.stringify(shortLinks))} />
    </div>
  );
}