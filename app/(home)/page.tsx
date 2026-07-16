
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Activity } from './components/activity';
import { Changelog } from './components/changelog';
import { Customers } from './components/customers';
import { Features } from './components/features';
import { Hero } from './components/hero';
import { Initiatives } from './components/initiatives';
import { Integrations } from './components/integrations';
import { Portal } from './components/portal';
import { Releases } from './components/releases';
import { Reviews } from './components/reviews/reviews';
import { Roadmap } from './components/roadmap';
import { Widget } from './components/widget';

export const metadata: Metadata = createMetadata({
  title: 'AI-powered recruiting and candidate discovery',
  description:
    'Hir3d helps recruiting teams analyze resumes, discover candidates, and streamline hiring workflows with AI.',
});

const Home = async (): Promise<ReactElement> => {
  // Replaced database calls with hardcoded responses
  const latestUpdate = { title: "Exciting New Feature Release" };
  const organization = 250; // Hardcoded organization count

  return (
    <>
      <Hero id="hero" latestUpdate={latestUpdate?.title} />
      <Customers id="customers" count={organization} />
      <Features id="features" />
      <Portal id="portal" />
      <Reviews id="reviews" />
    </>
  );
};

export default Home;
