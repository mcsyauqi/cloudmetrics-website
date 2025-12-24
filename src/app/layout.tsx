import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CloudMetrics - Turn Data Into Decisions",
  description: "Real-time analytics platform for modern businesses. See Everything. Know Everything. Grow Faster.",
  keywords: ["analytics", "business intelligence", "data analytics", "dashboards", "SaaS", "enterprise"],
  authors: [{ name: "CloudMetrics" }],
  openGraph: {
    title: "CloudMetrics - Turn Data Into Decisions",
    description: "Real-time analytics platform for modern businesses",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudMetrics - Turn Data Into Decisions",
    description: "Real-time analytics platform for modern businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
