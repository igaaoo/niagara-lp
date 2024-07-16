import type { Metadata } from 'next';
import { Inter, Josefin_Sans, Space_Grotesk, Rubik } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import LanguageContextProvider from '@/context/LanguageContextProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
});

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});


const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Niagara Studios | 3D Projects',
  description: 'Estúdio especilizado em desenvolvimento de projetos 3D Unreal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageContextProvider>
      <html lang="pt-BR">
        <body className={`${inter.variable} ${josefin.variable} ${rubik.variable} font-sans`}>
          <Navbar />
          {children}
        </body>
      </html>
    </LanguageContextProvider>
  );
}
