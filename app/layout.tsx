
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

import "./globals.css";

import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={montserrat.variable}>
        <TanStackProvider>
          <AuthProvider>
            <Header />

              <main>
                {children}
              </main>
              
              {modal}
            
            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
