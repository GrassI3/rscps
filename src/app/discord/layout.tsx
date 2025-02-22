import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../discord/globals.css';
import { DiscordContextProvider } from './contexts/DiscordContext';
import { AuthProvider } from './contexts/AuthContext';
import { auth } from '../firebase/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Powered by Stream Chat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <DiscordContextProvider>
          <body className={inter.className}>{children}</body>
        </DiscordContextProvider>
      </html>
    </AuthProvider>
  );
}