import Navbar from '@/components/Navbar/Navbar';
import Bar from '@/components/Bar/Bar';
import { Providers } from "@/redux/provider";
import Head from './Head';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
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