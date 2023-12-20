import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { MyHeader } from './components/Header/header';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin']
});

const montserrat = Montserrat({
  subsets:['latin'],
  weight: ['200', '300', '400', '500'],
  display:'swap',
  variable: '--font-mon'
})

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
      <body className={`${inter.className} ${montserrat.className}`}>
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
