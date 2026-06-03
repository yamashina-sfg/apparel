import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hakuro.example"),
  title: {
    default: "HAKURO / 白露 | Quiet garments for humid cities.",
    template: "%s | HAKURO"
  },
  description:
    "日本の湿度と都市生活に寄り添う架空の国内向けプレミアムアパレルブランド、HAKUROのEC兼ブランドサイト提案。",
  keywords: ["HAKURO", "白露", "日本アパレル", "プレミアムウェア", "ECサイト", "ブランドサイト"],
  openGraph: {
    title: "HAKURO / 白露",
    description: "都市で働く大人のための、静かな機能服。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=88",
        width: 1200,
        height: 630,
        alt: "HAKURO campaign visual"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
