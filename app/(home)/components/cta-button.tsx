'use client';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { sites } from '@/lib/sites';
import { ArrowRightIcon } from 'lucide-react';

export const CTAButton = ({ size, ...properties }: ButtonProps) => (
  <Button asChild size={size} {...properties}>
    <a href={sites.app}>
      <span className="relative z-10">Open the app</span>
      <ArrowRightIcon size={size ? 12 : 16} />
    </a>
  </Button>
);
