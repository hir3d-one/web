import './globals.css';
import { CallToAction } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { DesignSystemProvider } from '@/components/provider';
import { fonts } from '@/lib/fonts';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://hir3d-web.vercel.app'),
};

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body className="min-h-screen bg-backdrop">
        <DesignSystemProvider>
          <Navbar />
          <main className="divide-y">
            {children}
            <CallToAction />
            <Footer />
          </main>
        </DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
