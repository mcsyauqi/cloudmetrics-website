import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CloudMetrics - Ubah Data Menjadi Keputusan",
  description: "Platform analitik real-time untuk bisnis modern. Lihat Segalanya. Ketahui Segalanya. Tumbuh Lebih Cepat.",
  keywords: ["analitik", "business intelligence", "analisis data", "dashboard", "SaaS", "enterprise"],
  authors: [{ name: "CloudMetrics" }],
  openGraph: {
    title: "CloudMetrics - Ubah Data Menjadi Keputusan",
    description: "Platform analitik real-time untuk bisnis modern",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudMetrics - Ubah Data Menjadi Keputusan",
    description: "Platform analitik real-time untuk bisnis modern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
