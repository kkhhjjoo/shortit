'use client';

import ShortLinkForm, { ShortLinkFormType } from '@/components/ShortLinkForm';
import styles from './ShortLinkEditPage.module.css';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

export default function ShortLinkEditPage({ id, initialValues }) {
  const router = useRouter();

  async function handleSubmit(values) {
    await axios.patch(`short-links/${id}`, values);
    router.push('/short-links');
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>수정하기</h1>
      <ShortLinkForm
        type={ShortLinkFormType.Edit}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
