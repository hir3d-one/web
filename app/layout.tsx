import './globals.css';
import { CallToAction } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { DesignSystemProvider } from '@/components/provider';
import { fonts } from '@/lib/fonts';
import { createMetadata, organizationJsonLd } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = createMetadata({
  title: 'Web',
  description:
    'Hir3d helps recruiting teams analyze resumes, discover candidates, and streamline hiring workflows with AI.',
});

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </head>
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
