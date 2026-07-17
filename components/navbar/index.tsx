import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { sites } from '@/lib/sites';
import {
  ArrowRightIcon,
  Building2Icon,
  CreditCardIcon,
  MessageSquareIcon,
  UploadCloudIcon,
} from 'lucide-react';
import { LazyMotion, domAnimation } from 'motion/react';

const links = [
  {
    href: '/',
    label: 'Company',
    icon: Building2Icon,
    external: false,
  },
  {
    href: `${sites.upload}/upload?ref=nav`,
    label: 'Upload',
    icon: UploadCloudIcon,
    external: true,
  },
  {
    href: '/pricing',
    label: 'Pricing',
    icon: CreditCardIcon,
    external: false,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: MessageSquareIcon,
    external: false,
  },
];

const headerNavButtonClassName =
  'h-9 w-9 shrink-0 gap-0 px-0 md:w-auto md:px-3';
const headerActionButtonClassName =
  'h-9 w-9 shrink-0 gap-2 px-0 sm:w-auto sm:min-w-[8.5rem] sm:px-4';

export const Navbar = () => (
  <LazyMotion features={domAnimation}>
    <header className="public-navbar sticky top-0 z-50 border-b bg-backdrop/90 backdrop-blur-sm">
      <Container className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 border-x py-3">
        <div>
          <Link href="/" className="hidden md:block">
            <Logo showName />
          </Link>
          <Link href="/" className="block md:hidden">
            <Logo />
          </Link>
        </div>
        <nav
          aria-label="Main"
          className="flex items-center justify-center gap-0.5 md:gap-1"
        >
          {links.map(({ href, label, icon: Icon, external }) => (
            <Button
              key={label}
              variant="ghost"
              className={headerNavButtonClassName}
              asChild
            >
              {external ? (
                <a href={href} aria-label={label}>
                  <Icon className="size-4 md:hidden" aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                </a>
              ) : (
                <Link href={href} aria-label={label}>
                  <Icon className="size-4 md:hidden" aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              )}
            </Button>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-1">
          <Button className={headerActionButtonClassName} asChild>
            <a href={sites.app} aria-label="Dashboard">
              <span className="hidden sm:inline">Dashboard</span>
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  </LazyMotion>
);
