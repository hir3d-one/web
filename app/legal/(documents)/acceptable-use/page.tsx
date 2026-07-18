import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const title = 'Acceptable Use Policy';
const description =
  'Rules for using the Hir3d portfolio showcase websites and related demo apps.';

export const metadata: Metadata = createMetadata({
  title,
  description,
});

const AcceptableUse = () => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <hr />
    <p>
      Hir3d provides these sites as a <strong>deprecated portfolio showcase</strong>{' '}
      of a retired recruiting product. This policy protects the showcase,
      visitors, and the broader internet community from abusive use.
    </p>
    <h2>Fair use</h2>
    <p>
      Use the showcase for exploration, evaluation, and portfolio review. Do not
      treat demo environments as production systems for real hiring workflows or
      large-scale data processing.
    </p>
    <h2>Prohibited activity</h2>
    <p>You may not use Hir3d sites or demo apps to:</p>
    <ul>
      <li>
        upload or process personal data (including candidate CVs) without a
        lawful basis and authorization;
      </li>
      <li>
        send spam, phishing, malware, or other abusive or unlawful content;
      </li>
      <li>
        attack, overload, scrape abusively, or otherwise disrupt hosting or
        related services;
      </li>
      <li>
        attempt unauthorized access to accounts, systems, or data;
      </li>
      <li>
        impersonate Hir3d or misrepresent a commercial relationship with Hir3d;
      </li>
      <li>
        engage in harassment, hate speech, or activity that violates applicable
        law.
      </li>
    </ul>
    <h2>Enforcement</h2>
    <p>
      We may rate-limit, block, reset, or shut down access to the showcase
      without notice if this policy is violated or if continued operation becomes
      impractical.
    </p>
    <h2>Changes</h2>
    <p>
      We may revise this policy by publishing an updated version on this page.
      Changes take effect when published.
    </p>
    <h2>Contact</h2>
    <p>
      Questions about this policy:{' '}
      <a href="https://github.com/hir3d-one">github.com/hir3d-one</a>.
    </p>
  </>
);

export default AcceptableUse;
