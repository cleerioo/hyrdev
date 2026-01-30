import './globals.css';
import type { Metadata } from 'next';
import Starfield from '@/components/Starfield';
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Hyrdev — Make Your Small Business Global',
  description: 'Premium websites at minimum charges. We help small businesses reach a global audience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen text-[var(--text-primary)]">
        <Starfield />
        <main className={styles.main}>
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
