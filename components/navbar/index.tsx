// import { env } from '@/env';
import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import {
  ArrowRightIcon,
  BookIcon,
  CalendarIcon,
  CodeIcon,
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
  {
    href: process.env.HIR3D_DOCS_URL || 'https://docs.example.com',
    label: 'Docs',
    icon: BookIcon,
  },
  {
    href: 'https://hir3d.hir3d.one',
    label: 'Roadmap',
    icon: CalendarIcon,
  },
  {
    href: 'https://github.com/daniensi/hir3d',
    label: 'Source Code',
    icon: CodeIcon,
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
        <div className="flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      '!bg-transparent text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <Link href={link.href}>
                      <span className="hidden md:block">{link.label}</span>
                      <span className="block md:hidden">
                        <link.icon size={16} />
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end">
          <Button asChild className="hidden md:flex">
            <a href=" https://prod-hir3d.vercel.app">Get started</a>
          </Button>
          <Button asChild size="icon" className="flex md:hidden">
            <a href=" https://prod-hir3d.vercel.app">
              <ArrowRightIcon size={16} />
            </a>
          </Button>
        </div>
      </Container>
    </nav>
  </LazyMotion>
);
