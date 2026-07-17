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

const headerNavButtonClassName = 'w-10 px-0 md:w-20 md:px-4';
const headerActionButtonClassName = 'w-9 px-0 sm:w-36 sm:px-4';

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
        <nav aria-label="Main" className="flex items-center justify-center">
          {links.map(({ href, label, icon: Icon, external }) => (
            <Button
              key={label}
              variant="ghost"
              className={headerNavButtonClassName}
              asChild
            >
              {external ? (
                <a href={href}>
                  <Icon className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                  <span className="sr-only md:hidden">{label}</span>
                </a>
              ) : (
                <Link href={href}>
                  <Icon className="h-4 w-4 md:hidden" aria-hidden="true" />
                  <span className="hidden md:inline">{label}</span>
                  <span className="sr-only md:hidden">{label}</span>
                </Link>
              )}
            </Button>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-1">
          <Button className={headerActionButtonClassName} asChild>
            <a href={sites.app}>
              <span className="hidden sm:inline">Dashboard</span>
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only sm:hidden">Dashboard</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  </LazyMotion>
);
