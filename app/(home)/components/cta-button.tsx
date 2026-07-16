'use client';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export const CTAButton = ({ size, ...properties }: ButtonProps) => (
  <Button asChild size={size} {...properties}>
    <a href="https://hir3d-app.vercel.app">
      <span className="relative z-10">Get started for free</span>
      <ArrowRightIcon size={size ? 12 : 16} />
    </a>
  </Button>
);
