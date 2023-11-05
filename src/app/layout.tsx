import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiattisak (Beaw) Sanburee | Portfolio Website',
  description: 'Kiattisak Sanburee Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1164170305158258728/1164384105677475951/asdasdadad.png?ex=65430434&is=65308f34&hm=7c513d3bcd5ef65bab8cc033aa5e4fed75ac9224456b3c862b7d3e4803580d41&=&width=2160&height=952" />
        <meta property="og:title" content="beaw.bio" />
        <meta property="og:description" content="Kiattisak Sanburee Portfolio Website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
