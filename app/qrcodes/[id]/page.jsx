'use server';

import { notFound, redirect } from 'next/navigation';
import QRCodeForm, { QRCodeFormType } from '@/components/QRCodeForm';
import styles from './QRCodeEditPage.module.css';
import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';

export default async function QRCodeEditPage({params}) {
  const { id } = await params
  await dbConnect();
  const raw = await QRCode.findById(id).lean()
  if (!raw) {
    notFound();
  }
  const qrcode = JSON.parse(JSON.stringify(raw))
  async function handleSubmit(values) {

    await dbConnect();
    await QRCode.findByIdAndUpdate(id, values);
    redirect('/qrcodes');
  }
  return  (
    <div className={styles.page}>
      <h1 className={styles.title}>QRCode 수정하기</h1>
      <QRCodeForm type={QRCodeFormType.Edit} initialValues={qrcode} onSubmit={handleSubmit} />
    </div>
  );
}