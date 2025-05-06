import '@/styles/globals.css';
import { CallToAction } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { env } from '@/env';
import { AnalyticsProvider } from '@repo/analytics';
import { DesignSystemProvider } from '@/components/provider';
import { fonts } from '@/lib/fonts';
import Script from 'next/script';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body className="min-h-screen bg-backdrop">
      <AnalyticsProvider>
        <DesignSystemProvider>
          <Navbar />
          <main className="divide-y">
            {children}
            <CallToAction />
            <Footer />
          </main>
        </DesignSystemProvider>
      </AnalyticsProvider>
      <Script id="widget">{`
      (function() {
        window.Hir3dWidgetId = 'clypdre7w0001kguhztlazqik';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '${new URL('/widget.js', env.HIR3D_WIDGET_URL).toString()}';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })();
    `}</Script>
    </body>
  </html>
);

export default RootLayout;
