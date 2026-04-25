import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HabitCore - Build habits that actually stick',
  description: 'Modern SaaS landing page for a Habit Tracking App.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F5F5F5] text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
