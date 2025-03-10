import type { Metadata } from "next";
import { Noto_Sans_JP, M_PLUS_1p } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const mPlus1p = M_PLUS_1p({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-m-plus-1p",
});

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
    <html lang="ja" className={`${notoSansJP.variable} ${mPlus1p.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-white">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
