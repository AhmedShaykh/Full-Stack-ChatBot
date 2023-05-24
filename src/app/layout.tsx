"use client";
import Navbar from '@/components/Navbar/Navbar';
import Bar from '@/components/Bar/Bar';
import { Providers } from "@/redux/provider";
import './globals.css';

export const metadata = {
  title: 'Cheap Car Hire, Compare Rental Prices',
  description: 'Cheap Car Hire, Compare Rental Prices - Rentalcars.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Bar />
        </Providers>
      </body>
    </html>
  )
};