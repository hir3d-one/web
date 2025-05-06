'use client';

import config from '@/tailwind.config';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { TooltipProvider } from './precomposed/tooltip';
import { Toaster } from './ui/sonner';
import violet from 'tailwindcss/colors';

type DesignSystemProviderProperties = ThemeProviderProps & {
  readonly children: ReactNode;
};

const IframelyEmbed = () => {
  const { resolvedTheme } = useTheme();
  if (!process.env.NEXT_PUBLIC_IFRAMELY_API_KEY) {
    return null;
  }

  const scriptUrl = new URL('https://cdn.iframe.ly/embed.js');

  scriptUrl.searchParams.set(
    'api_key',
    process.env.NEXT_PUBLIC_IFRAMELY_API_KEY
  );
  scriptUrl.searchParams.set('theme', resolvedTheme ?? 'light');

  return <Script src={scriptUrl.toString()} async />;
};

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...properties}
  >
    <TooltipProvider>{children}</TooltipProvider>
    <Toaster />
    <ProgressBar
      height="2px"
      color={(violet as any)["500"]}
      options={{ showSpinner: false }}
      shallowRouting
    />
    <IframelyEmbed />
  </NextThemesProvider>
);
