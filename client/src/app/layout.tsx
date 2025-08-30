import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyanshu Patel - General Manager & Technical Head Portfolio',
  description: 'Professional portfolio of Priyanshu Patel, General Manager & Technical Head at Triostack Technologies Private Limited. View projects, experience, and skills.',
  keywords: 'Priyanshu Patel, General Manager, Technical Head, Triostack Technologies, Next.js, TypeScript, Node.js, React, MongoDB, portfolio, web development, India',
  authors: [{ name: 'Priyanshu Patel' }],
  creator: 'Priyanshu Patel',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Priyanshu Patel - General Manager & Technical Head Portfolio',
    description: 'Professional portfolio showcasing leadership, technical expertise, and development skills.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Priyanshu Patel Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Priyanshu Patel - General Manager & Technical Head Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Patel - General Manager & Technical Head Portfolio',
    description: 'Professional portfolio showcasing leadership, technical expertise, and development skills.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>
            {children}
          </main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
