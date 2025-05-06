'use client';

import { Link } from '@/components/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type FooterLinkProperties = {
  readonly href: string;
  readonly name: string;
};

export const FooterLink = ({ href, name }: FooterLinkProperties) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-foreground text-sm hover:underline',
        active && 'underline'
      )}
    >
      {name}
    </Link>
  );
};
