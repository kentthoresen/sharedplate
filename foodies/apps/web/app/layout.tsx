import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

/**
 * Root layout renders shared chrome (navbar/footer) and wraps children with
 * context providers (TanStack Query, NextAuth session). We keep this file lean
 * and comment intent so newcomers know where application-wide dependencies live.
 */
export const metadata: Metadata = {
  title: 'Love of Food — Shared Plate',
  description: 'Community-owned recipes and shared cooking experiences.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
