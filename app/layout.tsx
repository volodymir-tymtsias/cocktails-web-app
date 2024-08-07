import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Cocktails DB',
  description: 'A web app that allows users to search for cocktail recipes, store favorite ones and add new ones to DB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-gray lg:bg-gradient-to-r lg:from-paynes-gray lg:from-50% lg:to-light-gray lg:to-50%">
        <Header />
        {children}
      </body>
    </html>
  );
}
