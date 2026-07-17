import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { sites } from '@/lib/sites';
import { FooterLink } from './footer-link';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Upload',
    href: `${sites.upload}/upload?ref=nav`,
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Recruiter portal',
    href: sites.app,
  },
  {
    name: 'Legal',
    href: '/legal',
  },
];

const legal = [
  {
    name: 'Privacy Policy',
    href: '/legal/privacy',
  },
  {
    name: 'Terms of Service',
    href: '/legal/terms',
  },
  {
    name: 'Acceptable Use Policy',
    href: '/legal/acceptable-use',
  },
];

export const Footer = () => (
  <section className="relative overflow-hidden border-t">
    <Container className="grid grid-cols-4 items-start border-x px-4 py-8">
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Logo showName />
        </Link>
        <p className="text-muted-foreground text-sm">
          &copy; Hir3d {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
      <div className="col-start-3 flex flex-col gap-4">
        {links.map(({ href, name }) => (
          <FooterLink key={name} href={href} name={name} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {legal.map(({ href, name }) => (
          <FooterLink key={name} href={href} name={name} />
        ))}
      </div>
    </Container>
  </section>
);
