// import { env } from '@/env';
import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  ArrowRightIcon,
  CreditCardIcon,
  MessageSquareIcon,
} from 'lucide-react';
import { LazyMotion, domAnimation } from 'motion/react';

const links = [
  {
    href: '/pricing',
    label: 'Pricing',
    icon: CreditCardIcon,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: MessageSquareIcon,
  },
];

export const Navbar = () => (
  <LazyMotion features={domAnimation}>
    <nav className="sticky top-0 z-50 border-b">
      <Container className="grid grid-cols-[40px_1fr_40px] items-center gap-4 border-x bg-backdrop/90 py-3 backdrop-blur-sm md:grid-cols-[120px_1fr_120px]">
        <div>
          <Link href="/" className="hidden md:block">
            <Logo showName />
          </Link>
          <Link href="/" className="block md:hidden">
            <Logo />
          </Link>
        </div>
        <nav aria-label="Main" className="flex items-center justify-center">
          {links.map(({ href, label, icon: Icon }) => (
            <Button key={href} variant="ghost" asChild>
              <Link href={href}>
                <Icon className="h-4 w-4 md:hidden" aria-hidden="true" />
                <span className="hidden md:inline">{label}</span>
                <span className="sr-only md:hidden">{label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex justify-end">
          <Button asChild className="hidden md:flex">
            <a href="https://hir3d-app.vercel.app">Dashboard</a>
          </Button>
          <Button asChild size="icon" className="flex md:hidden">
            <a href="https://hir3d-app.vercel.app">
              <ArrowRightIcon size={16} />
            </a>
          </Button>
        </div>
      </Container>
    </nav>
  </LazyMotion>
);
