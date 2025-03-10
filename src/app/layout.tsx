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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${mPlus1p.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
