import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "台湾日本Radio Express オンラインサロン",
  description: "日台をつなぐ架け橋へ──台湾日本Radio Express オンラインサロンでしか体験できないクロスカルチャーの世界",
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://radineer.github.io/taiwan_radio_lp'),
  openGraph: {
    title: '台湾日本Radio Express オンラインサロン',
    description: '日台をつなぐ架け橋へ──台湾日本Radio Express オンラインサロンでしか体験できないクロスカルチャーの世界',
    url: 'https://radineer.github.io/taiwan_radio_lp',
    siteName: '台湾日本Radio Express オンラインサロン',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
