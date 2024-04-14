import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Amadeus Kang',
  description: 'Personal website of Amadeus Kang',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 to-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
