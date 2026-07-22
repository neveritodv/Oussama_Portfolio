import type {Metadata} from 'next';
import { Kanit } from 'next/font/google';
import { CustomCursor } from '@/components/CustomCursor';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oussama Moujane -- Full Stack & Mobile Developer',
  description: 'Full Stack & Mobile Developer based in Marrakech, Morocco. Specialized in React, Laravel, Flutter, Node.js, and AI solutions.',
  icons: {
    icon: [
      { url: '/assets/oussama_logo.png' },
      { url: '/assets/oussama_logo.png', type: 'image/png' },
    ],
    shortcut: '/assets/oussama_logo.png',
    apple: '/assets/oussama_logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${kanit.variable} bg-[#0C0C0C] text-[#D7E2EA] antialiased`}>
      <head>
        <link rel="icon" href="/assets/oussama_logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/oussama_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
