import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'beaw.bio',
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
        <meta property="og:image" content="https://media.discordapp.net/attachments/1164170305158258728/1164381637291823184/Group_2.png?ex=654301e7&is=65308ce7&hm=652586cd2771b503e06fe71fa08bdbcdc98dbfe71fa08bdbcdc98dbfe71fa08bdbcdc98d777f&=&width=2160&height=952" />
        <meta property="og:title" content="beaw.bio" />
        <meta property="og:description" content="Kiattisak Sanburee Portfolio Website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
