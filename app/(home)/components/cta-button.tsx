'use client';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export const CTAButton = ({ size, ...properties }: ButtonProps) => (
  <Button asChild size={size} {...properties}>
    <a href="https://app.hir3d.one">
      <span className="relative z-10">Get started for free</span>
      <ArrowRightIcon size={size ? 12 : 16} />
    </a>
  </Button>
);
