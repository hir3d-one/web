import { Card } from '@/app/(home)/components/card';
import { FeatureHero } from '@/components/feature-hero';
import { features } from '@/lib/features';
import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';

type PortalProperties = HTMLAttributes<HTMLDivElement>;

export const Portal = (properties: PortalProperties) => (
  <section {...properties}>
    <Container className="flex flex-col gap-8 border-x px-4 pt-16 pb-4">
      <FeatureHero {...features.portal} formerly="" />
      <div className="grid gap-4 md:grid-cols-6">
        <Card
          className="h-full md:col-span-6"
          feature="Portal"
          title="Share job openings, attract top talent"
          description="Create a public job board where candidates can browse positions and apply directly to your organization."
        >
          <div className="not-prose group flex h-full w-full items-center justify-center">
            <Image
              src="/portal-preview.jpg"
              className="absolute top-0 left-0 m-0 h-full w-full object-cover blur-sm transition-all group-hover:blur-sm sm:blur-none"
              alt=""
              width={2136}
              height={1282}
            />
            <Button variant="secondary" asChild className="relative z-10">
              <Link href="https://hir3d-app.vercel.app/">See the Hir3d Job Portal</Link>
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  </section>
);
