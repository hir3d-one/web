import { CodeBlock } from '@/components/code-block';

const codeString = `const payload = {
  title: 'Senior backend engineer',                       // String, required
  text: 'Looking for Node.js and PostgreSQL experience',  // String, required
  user: {                                                 // Object, optional 
    name: 'Jane Recruiter',                               // String, required
    email: 'jane@acme.com',                               // String, required
  },
  organization: {                                         // Object, optional
    name: 'Acme Inc',                                     // String, required
    domain: 'acme.com',                                   // String, required
  },
}
  
const response = await fetch('https://hir3d-app.vercel.app/api/••••••••', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer ••••••••••••\`,
  },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  throw new Error(response.statusText);
}`;

export const APIGraphic = () => (
  <div className="not-prose h-full w-full">
    <CodeBlock language="javascript" code={codeString} />
  </div>
);
