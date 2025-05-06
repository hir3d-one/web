
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Activity } from './components/activity';
import { Changelog } from './components/changelog';
import { Customers } from './components/customers';
import { Features } from './components/features';
import { Feedback } from './components/feedback';
import { Hero } from './components/hero';
import { Initiatives } from './components/initiatives';
import { Integrations } from './components/integrations';
import { Portal } from './components/portal';
import { Releases } from './components/releases';
import { Reviews } from './components/reviews/reviews';
import { Roadmap } from './components/roadmap';
import { Widget } from './components/widget';

export const metadata: Metadata = createMetadata({
  title: 'Build your product roadmap at lightspeed',
  description:
    'Hir3d is a home for product teams to explore problems, ideate solutions, prioritize features and plan roadmaps with the help of AI.',
});

const Home = async (): Promise<ReactElement> => {
  // Replaced database calls with hardcoded responses
  const latestUpdate = { title: "Exciting New Feature Release" };
  const organization = 250; // Hardcoded organization count

  return (
    <>
      <Hero id="hero" latestUpdate={latestUpdate?.title} />
      <Customers id="customers" count={organization} />
      <Feedback id="feedback" />
      <Features id="features" />
      <Initiatives id="initiatives" />
      <Roadmap id="roadmap" />
      <Activity id="activity" />
      <Changelog id="changelog" />
      <Portal id="portal" />
      <Widget id="widget" />
      <Releases id="releases" />
      <Integrations id="integrations" />
      <Reviews id="reviews" />
    </>
  );
};

export default Home;
