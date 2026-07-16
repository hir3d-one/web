import { CTAButton } from '@/app/(home)/components/cta-button';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const CallToAction = () => (
  <section className="relative overflow-hidden">
    <Container className="border-x p-4">
      <div className="grid gap-4 rounded-xl border bg-background p-8 shadow-sm sm:grid-cols-2 sm:gap-8 sm:p-16">
        <h2 className="mt-0 mb-4 font-semibold text-3xl tracking-tighter sm:text-5xl">
          <Balancer>Build a stronger candidate pipeline with AI</Balancer>
        </h2>
        <div className="flex flex-col items-start gap-4">
          <p className="text-muted-foreground sm:text-xl">
            <Balancer>
              Analyze resumes, find relevant candidates, and move from job
              description to shortlist faster.
            </Balancer>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton size="lg" />
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                See pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
