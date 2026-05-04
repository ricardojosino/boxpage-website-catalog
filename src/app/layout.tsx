import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RGPD from "@/components/RGPD";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NODE_ENV === 'development' 
  ? process.env.NEXT_PUBLIC_SITE_URL_DEV! 
  : process.env.NEXT_PUBLIC_SITE_URL_PROD!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BoxPage Studio | Catálogo de Modelos Premium",
    template: "%s | BoxPage"
  },
  description: "Escolha o melhor modelo de site para o seu negócio com o catálogo exclusivo do BoxPage Studio. Designs de alta conversão e performance.",
  keywords: ["modelos de site", "landing pages", "design premium", "boxpage studio", "catálogo de sites"],
  authors: [{ name: "BoxPage Studio", url: "https://boxpage.pt" }],
  creator: "BoxPage Studio",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: baseUrl,
    siteName: "BoxPage Studio",
    images: [
      {
        url: "/images/screenshot-style.jpg",
        width: 1200,
        height: 630,
        alt: "BoxPage Studio Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoxPage Studio | Catálogo de Modelos Premium",
    description: "Modelos de sites exclusivos e de alta performance.",
    images: ["/images/screenshot-style.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <RGPD />
      </body>
    </html>
  );
}


