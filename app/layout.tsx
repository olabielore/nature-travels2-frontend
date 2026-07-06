
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

import "./globals.css";

import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700'],
  variable: '--font-family', 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: 'Природні Мандри',
  description: 'Платформа для екологічних мандрів Україною: відкривайте нові місця, діліться історіями та знаходьте однодумців.',
  openGraph: {
    title: 'Природні Мандри',
    description: 'Платформа для екологічних мандрів Україною: відкривайте нові місця, діліться історіями та знаходьте однодумців.',
    url: "https://nature-travels2-backend.onrender.com",
  },
};

export default function RootLayout({
  children
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={montserrat.variable}>
        <TanStackProvider>
          <AuthProvider>
                {children}
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
