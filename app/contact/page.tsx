import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { Prose } from '@/components/prose';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const title = 'Contact';
const description =
  'Hir3d is a deprecated portfolio showcase. Contact for sales and support is closed.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Contact = () => (
  <section>
    <Container className="grid gap-8 border-x sm:grid-cols-2 sm:gap-24 sm:divide-x">
      <div className="flex flex-col gap-1 py-4 sm:p-8">
        <Prose className="max-w-md">
          <h1 className="mt-0 mb-4 font-semibold text-3xl tracking-tighter sm:text-5xl">
            {title}
          </h1>
          <p className="mt-0 text-lg">{description}</p>
        </Prose>
      </div>
      <div className="py-4 sm:p-8">
        <Prose className="max-w-none">
          <h2 className="mt-0">Contact unavailable</h2>
          <p>
            This marketing site is kept online as a portfolio showcase of a
            retired AI recruiting product. The contact form is disabled — messages
            are not delivered, and there is no sales or support inbox.
          </p>
          <p>
            For questions about the open-source repositories or this showcase,
            use the{' '}
            <Link href="https://github.com/hir3d-one">hir3d-one GitHub org</Link>
            .
          </p>
        </Prose>
      </div>
    </Container>
  </section>
);

export default Contact;
