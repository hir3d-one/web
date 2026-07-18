import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Customers } from './components/customers';
import { Features } from './components/features';
import { Hero } from './components/hero';
import { Portal } from './components/portal';
import { Reviews } from './components/reviews/reviews';

export const metadata: Metadata = createMetadata({
  title: 'AI-powered recruiting and candidate discovery',
  description:
    'Hir3d helps recruiting teams analyze resumes, discover candidates, and streamline hiring workflows with AI. Deprecated portfolio showcase.',
});

const Home = async (): Promise<ReactElement> => (
  <>
    <Hero id="hero" />
    <Customers id="customers" />
    <Features id="features" />
    <Portal id="portal" />
    <Reviews id="reviews" />
  </>
);

export default Home;
