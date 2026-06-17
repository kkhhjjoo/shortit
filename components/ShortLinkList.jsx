'use client';

import Image from 'next/image';
import styles from './ShortLinkList.module.css';
import formatDate from '@/lib/formatDate';
import calendarIcon from '@/public/calendar.svg';
import linkIcon from '@/public/link.svg';
import replyIcon from '@/public/reply.svg';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from '@/components/Link';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

function ShortLinkItem({ value, onDelete }) {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div>
          <div className={styles.title}>{value.title}</div>
          <div className={styles.date}>
            <Image src={calendarIcon} alt="calendar" />
            {formatDate(value.createdAt)}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="outline" as={Link} href={`/short-links/${value._id}`}>수정</Button>
          <Button variant="minimal" type="button" onClick={() => onDelete(value._id)}>삭제</Button>
        </div>
      </div>
      <Card.Footer>
        <div className={styles.link}>
          <Image src={linkIcon} alt="link" />
          <Link variant="primary" href={`/${value.shortUrl}`} target="_blank">
            {process.env.NEXT_PUBLIC_BASE_URL}/{value.shortUrl}
          </Link>
        </div>
        <div className={styles.link}>
          <Image src={replyIcon} alt="reply" />
          <Link variant="secondary" href={value.url} target="_blank">
            {value.url}
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default function ShortLinkList({ items = [] }) {
  const router = useRouter();

  async function handleDelete(id) {
    await axios.delete(`short-links/${id}`);
    router.refresh();
  }

  return (
    <ul className={styles.shortLinkList}>
      {items.map((url) => (
        <li key={url._id}>
          <ShortLinkItem value={url} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}