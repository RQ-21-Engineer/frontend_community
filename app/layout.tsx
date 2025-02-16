import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RQ '21 Software Engineering Club",
  description: "RQ '21 Software Engineering Club - Building the future of technology together through collaboration, learning, and innovation",
  keywords: ["software engineering", "programming", "coding club", "RQ21", "technology", "learning"],
  authors: [{ name: "RQ '21 Software Engineering Club" }],
  creator: "RQ '21 Software Engineering Club",
  publisher: "RQ '21 Software Engineering Club",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "RQ '21 Software Engineering Club",
    description: "RQ '21 Software Engineering Club - Building the future of technology together",
    // url: "https://rq21-sec.vercel.app",
    siteName: "RQ '21 Software Engineering Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RQ '21 Software Engineering Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RQ '21 Software Engineering Club",
    description: "RQ '21 Software Engineering Club - Building the future of technology together",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
