import Image from 'next/image';
import { Noto_Sans_KR } from 'next/font/google';
import logoImage from '@/public/logo.svg';
import styles from './layout.module.css'
import "./globals.css";
import Link from '@/components/Link';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500'],
  subsets: ['latin']
});

export const metadata = {
  title: "Shortit",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <div className={styles.app}>
          <header className={styles.header}>
            <nav className={`${styles.nav} ${styles.container}`}>
              <Link href="/">
                <Image width={93} height={26} src={logoImage} alt="Shortit" />
              </Link>

              <div className={styles.links}>
                <Link href="/short-links">주소 줄이기</Link>
                <Link href="/qrcodes">QR코드</Link>
              </div>
            </nav>
          </header>
          
          <main className={`${styles.main} ${styles.container}`}>
            {children}
          </main>
        </div>
        
      </body>
    </html>
  );
}
