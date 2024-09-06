import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divine Will School",
  description: "Portfolio website for Divine Will School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
