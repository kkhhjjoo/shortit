import QRCodeList from '@/components/QRCodeList';
import Button from '@/components/Button';
import Link from '@/components/Link';
import styles from './QRCodeListPage.module.css';
import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';

export const metadata = {
  title: 'QRCode 만들기 - Shortit'
}

export default async function QRCodeListPage() {
  await dbConnect();
  const qrCodes = await QRCode.find().lean();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>QRCode 만들기</h1>
        <Button as={Link} href="/qrcodes/new">새로 만들기</Button>
      </header>
      <QRCodeList items={JSON.parse(JSON.stringify(qrCodes))} />
    </div>
  );
}