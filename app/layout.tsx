import type { Metadata } from 'next';
import { Inter, Josefin_Sans, Cabin, Jost, Red_Hat_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

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

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const red_hat = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat',
});

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
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
    <html lang="pt-BR">
      <body className={`
      ${inter.variable} ${josefin.variable}
          ${cabin.variable} ${jost.variable} ${red_hat.variable} ${space_grotesk.variable}
        font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
