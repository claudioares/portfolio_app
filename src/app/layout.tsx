import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MyHeader } from './components/Header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cláudio Soares, portfolio',
  description: 'Page dedicated to service provision and portfolio'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
