import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

const title = 'Terms of Service';
const description =
  'Terms governing use of the Hir3d portfolio showcase websites and related demo apps.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Terms = () => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <hr />
    <p>
      Hir3d is a retired AI recruiting product. The websites and apps linked from
      this site (including the marketing site, recruiter app, and upload portal)
      are provided as a <strong>deprecated portfolio showcase</strong>, not as
      an active commercial SaaS offering. By accessing these sites, you agree to
      these Terms.
    </p>
    <p>
      If you do not agree, do not use the showcase. We may update these Terms by
      posting a revised version on this page; changes take effect when published.
    </p>
    <h2>Nature of the service</h2>
    <p>
      Features, pricing, trials, and billing described on this site are historical
      or illustrative. Accounts, subscriptions, and paid plans are not offered.
      Demo environments may be reset, limited, or unavailable without notice.
    </p>
    <h2>Limitations of use</h2>
    <p>You agree not to:</p>
    <ol>
      <li>
        reverse engineer, scrape at abusive scale, or disrupt the showcase or its
        infrastructure;
      </li>
      <li>
        use the showcase to transmit unlawful, harassing, or fraudulent content;
      </li>
      <li>
        misrepresent affiliation with Hir3d or use the brand to sell unrelated
        services;
      </li>
      <li>
        upload sensitive personal data you are not authorized to process (for
        example, real candidate CVs containing third-party personal data) into
        any demo environment.
      </li>
    </ol>
    <h2>Intellectual property</h2>
    <p>
      Materials on these sites are owned by or licensed to Hir3d and protected by
      applicable intellectual property law, except where open-source licenses
      apply (see the repositories under{' '}
      <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>). Source
      code licensed under MIT (or another stated license) may be used according
      to that license.
    </p>
    <h2>User content</h2>
    <p>
      If you submit content to a demo app, you retain ownership of that content.
      You grant Hir3d a limited license to host and process it solely to operate
      the showcase. Do not submit confidential or regulated data. Demo data may
      be deleted at any time.
    </p>
    <h2>Disclaimer and liability</h2>
    <p>
      The showcase is provided &apos;as is&apos; without warranties of any kind.
      To the fullest extent permitted by law, Hir3d is not liable for any
      indirect, incidental, or consequential damages arising from use of or
      inability to use the showcase.
    </p>
    <h2>Links</h2>
    <p>
      Links to third-party sites (including Vercel-hosted apps and GitHub) are
      provided for convenience. Hir3d does not control those sites and is not
      responsible for their content or practices.
    </p>
    <h2>Pricing</h2>
    <p>
      The <Link href="/pricing">Pricing</Link> page shows historical plan
      structure for portfolio context. It does not constitute an offer to sell
      subscriptions.
    </p>
    <h2>Governing law</h2>
    <p>
      These Terms are governed by the laws of Spain. You submit to the exclusive
      jurisdiction of the courts of Spain, without prejudice to mandatory
      consumer protections that may apply in your country of residence.
    </p>
    <h2>Contact</h2>
    <p>
      There is no sales or support inbox for this showcase. For repository or
      portfolio questions, use{' '}
      <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>.
    </p>
  </>
);

export default Terms;
