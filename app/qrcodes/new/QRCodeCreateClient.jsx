'use client';

import QRCodeForm from '@/components/QRCodeForm';
import styles from './QRCodeCreatePage.module.css';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

export default function QRCodeCreateClient() {
  const router = useRouter();
  async function handleSubmit(values) {
    await axios.post('/qrcodes', values);
    router.push('/qrcodes');
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>새 QRCode 추가</h1>
      <QRCodeForm onSubmit={handleSubmit} />
    </div>
  );
}
