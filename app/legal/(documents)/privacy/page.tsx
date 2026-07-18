import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const title = 'Privacy Policy';
const description =
  'How Hir3d handles information on this deprecated portfolio showcase website.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const Privacy = () => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <hr />
    <p>
      Hir3d is a retired AI recruiting product. This marketing site and the
      linked demo apps are maintained as a <strong>portfolio showcase</strong>,
      not as an active commercial service. This policy explains what limited
      information may be processed when you visit.
    </p>
    <h2>Who we are</h2>
    <p>
      Hir3d operates this showcase. We do not publish a physical business
      address. For privacy or repository questions, contact us via{' '}
      <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>.
    </p>
    <h2>Scope</h2>
    <p>
      This policy covers the public marketing site (typically hosted on Vercel).
      If you navigate to linked apps such as the recruiter dashboard or CV upload
      portal, those apps may process additional data under their own
      configurations and third-party services. Review any notices shown in those
      apps before submitting personal data.
    </p>
    <h2>Information we may collect</h2>
    <h3>Automatically collected</h3>
    <p>
      When you visit this site, hosting infrastructure may collect standard
      request logs such as IP address, user agent, requested URL, and timestamps.
      This is typical for any website and is used to operate, secure, and
      diagnose the site.
    </p>
    <h3>Voluntarily provided</h3>
    <p>
      The contact form on this site is disabled. We do not solicit or deliver
      contact messages through this showcase. Do not send sensitive personal data
      through demo apps unless you are authorized to do so and accept that demo
      environments are not production systems.
    </p>
    <h2>How we use information</h2>
    <ul>
      <li>to host and deliver the portfolio showcase;</li>
      <li>to maintain security and investigate abuse;</li>
      <li>to comply with legal obligations when required.</li>
    </ul>
    <p>
      We do not sell personal information. We do not run an active marketing or
      subscription funnel from this site.
    </p>
    <h2>Subprocessors</h2>
    <p>
      For this Next.js marketing site, the primary processor is:
    </p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Purpose</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vercel</td>
          <td>Hosting, CDN, and related infrastructure for this site</td>
          <td>Global (primarily USA)</td>
        </tr>
      </tbody>
    </table>
    <p>
      Linked showcase apps (for example the recruiter app or upload portal) may
      use additional services such as databases, authentication, AI providers, or
      analytics when you use those apps. Those services are outside the scope of
      this marketing-site policy.
    </p>
    <h2>International transfers</h2>
    <p>
      Infrastructure providers may process data in the United States or other
      countries. Where required, transfers rely on appropriate safeguards under
      applicable law (such as standard contractual clauses offered by the
      provider).
    </p>
    <h2>Retention</h2>
    <p>
      Server logs are retained only as long as needed for security and
      operations, then deleted or anonymized according to the host&apos;s
      practices. Demo app data may be wiped at any time.
    </p>
    <h2>Your rights</h2>
    <p>
      Depending on where you live, you may have rights to access, correct,
      delete, or restrict processing of personal data we hold about you. Because
      this showcase collects little personal data beyond hosting logs, many
      requests may not apply. To make a request, open an issue or discussion via{' '}
      <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>.
    </p>
    <h2>Children</h2>
    <p>
      This showcase is not directed at children under 16, and we do not knowingly
      collect their personal information.
    </p>
    <h2>Changes</h2>
    <p>
      We may update this policy by posting a new version on this page. Continued
      use of the site after changes means you accept the updated policy.
    </p>
    <h2>Governing law</h2>
    <p>
      This policy is interpreted in accordance with the laws of Spain, without
      prejudice to mandatory data-protection rights that may apply where you
      live (including GDPR where applicable).
    </p>
    <h2>Contact</h2>
    <p>
      Privacy questions: <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>.
      There is no postal address or active contact form for this showcase.
    </p>
  </>
);

export default Privacy;
