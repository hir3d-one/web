'use client';

import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Prose } from '@/components/prose';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { sites } from '@/lib/sites';
import { ArrowUpRightIcon } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import type { ComponentProps } from 'react';
import Balancer from 'react-wrap-balancer';
import { CTAButton } from '../cta-button';

type HeroProperties = ComponentProps<'section'> & {
  readonly latestUpdate: string | undefined;
};

export const Hero = ({
  className,
  latestUpdate,
  ...properties
}: HeroProperties) => (
  <section className={cn('overflow-hidden', className)} {...properties}>
    <LazyMotion features={domAnimation}>
      <Container className="border-x p-4 text-center">
        <div className="rounded-xl border bg-background p-8 shadow-sm sm:p-16 md:p-24">
          <div className="relative z-10 flex flex-col items-center">
            {latestUpdate ? (
              <m.div
                animate={{ opacity: 1, translateY: 0 }}
                initial={{ opacity: 0, translateY: 16 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="w-full"
              >
                <a
                  aria-label="View latest update on Hir3d changelog page"
                  href={`${sites.app}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="outline"
                    className="max-w-full gap-2 rounded-full py-0.5 pr-3 pl-0.5 font-medium"
                  >
                    <span
                      className="shrink-0 truncate rounded-full bg-foreground/5 px-2.5 py-1 text-muted-foreground text-xs"
                      style={{
                        boxShadow: 'inset 0 1px 0 0 hsla(0,0%,100%,.08)',
                      }}
                    >
                      Latest update
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <span className="w-full truncate">{latestUpdate}</span>
                      <ArrowUpRightIcon
                        size={16}
                        className="shrink-0 text-muted-foreground"
                      />
                    </span>
                  </Badge>
                </a>
              </m.div>
            ) : null}
            <Prose className="mt-8 max-w-6xl">
              <m.h1
                initial={{ opacity: 0, translateY: 16 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className={cn(
                  'mb-4 font-semibold tracking-tighter',
                  'text-[2.125rem] sm:text-5xl md:text-6xl lg:text-7xl'
                )}
              >
                The intelligent recruitment automation platform
              </m.h1>
              <m.p
                className="mx-auto mt-0 max-w-3xl text-muted-foreground sm:text-lg"
                initial={{ opacity: 0, translateY: 16 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
              >
                <Balancer>
                  Revolutionize your hiring with AI-powered precision. Screen
                  smarter, match faster, and build stronger teams by automating
                  the tedious parts of recruitment while focusing on what
                  matters - finding exceptional talent.
                </Balancer>
              </m.p>
            </Prose>
            <m.div
              className="mt-8 flex max-w-lg flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, translateY: 16 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
            >
              <CTAButton size="lg" />
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </m.div>
          </div>
        </div>
      </Container>
    </LazyMotion>
  </section>
);
