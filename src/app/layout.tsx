import type { Metadata } from 'next';
import './globals.scss';
import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart built with Next.js',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={ inter.className }>
        { children }
      </body>
    </html>
  )
};

export default RootLayout;
