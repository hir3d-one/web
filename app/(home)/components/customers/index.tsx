'use client';

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation, m, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import type { ComponentProps } from 'react';
import { useTheme } from 'next-themes';

type CustomersProperties = ComponentProps<'section'> & {
  readonly count: number;
};

import Elvaston from './logos/elvaston.png';
import Qam from './logos/qam.png';
import Mukwano from './logos/mukwano.png';
import Hotel from './logos/hotelafricana.png';
import Bmk from './logos/bmk.png';

const logos = [
  { 
    src: Elvaston, 
    name: 'Elvaston Capital',
    className: "object-contain" 
  },
  { 
    src: Qam, 
    name: 'QAM Consultants',
    className: "object-contain",
    customStyle: {
      maxWidth: '95%',
      transform: 'scale(1.2)'
    }
  },
  { 
    src: Mukwano, 
    name: 'Mukwano Group',
    className: "object-contain",
    customStyle: {
      maxWidth: '95%',
      transform: 'scale(1.2)'
    }
  },
  { 
    src: Hotel, 
    name: 'Hotel Africana',
    className: "object-contain" 
  },
  { 
    src: Bmk, 
    name: 'BMK Group',
    className: "object-contain" 
  },
];

export const Customers = ({
  className,
  count,
  ...properties
}: CustomersProperties) => {
  const reference = useRef<HTMLDivElement>(null);
  const inView = useInView(reference, { once: true, amount: 'some' });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Round count down to the nearest 50
  const closest = Math.floor(count / 50) * 50;

  return (
    <section
      className={cn('overflow-hidden py-6 bg-transparent dark:bg-black', className)}
      ref={reference}
      {...properties}
    >
      <LazyMotion features={domAnimation}>
        <Container className="relative flex flex-col items-center justify-between gap-12 border-x border-transparent dark:border-gray-800 py-2 sm:flex-row sm:gap-16">
          <m.p
            className="text-lg text-muted-foreground dark:text-gray-300 sm:max-w-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Join {closest}+ companies hiring talent with HIR3D
          </m.p>
          <div className="grid w-full grid-cols-2 gap-x-8 gap-y-14 place-items-center sm:grid-cols-5 sm:gap-x-6">
            {logos.map(({ src, name, className, customStyle }, index) => (
              <m.div
                key={name}
                className="flex items-center justify-center w-full"
                initial={{ opacity: 0, transform: 'translateY(1rem)' }}
                animate={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(1rem)',
                }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-full max-w-[280px] h-[100px] flex items-center justify-center overflow-hidden rounded-xl shadow-sm">
                  <div className="p-0 w-full h-full flex items-center justify-center bg-transparent transition-colors">
                    <div className="relative w-full h-full flex items-center justify-center p-3">
                      <Image
                        src={src}
                        alt={name}
                        className={cn("w-auto max-h-full", className)}
                        style={{
                          filter: 'grayscale(100%) brightness(0.85) contrast(1.4)',
                          maxWidth: '85%',
                          ...(customStyle || {})
                        }}
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </Container>
      </LazyMotion>
    </section>
  );
};
