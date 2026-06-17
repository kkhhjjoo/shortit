'use client';

import ShortLinkForm from '@/components/ShortLinkForm';
import styles from './ShortLinkCreatePage.module.css';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

export default function ShortLinkCreatePage() {
  const router = useRouter();

  async function handleSubmit(values) {
    await axios.post('short-links', values);
    router.push('/short-links/');
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>새 URL 추가</h1>
      <ShortLinkForm onSubmit={handleSubmit} />
    </div>
  );
}
