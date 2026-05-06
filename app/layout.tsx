import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVITOX STORE",
  description: "Premium AI-powered landing page builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
