import { Card } from '@/app/(home)/components/card';
import { FeatureHero } from '@/components/feature-hero';
import { features } from '@/lib/features';
import { Container } from '@/components/container';
import type { HTMLAttributes } from 'react';
import { EditorGraphic } from './components/editor-graphic';
import { FeatureStatusGraphic } from './components/feature-status-graphic';
import { RiceGraphic } from './components/rice-graphic';
import { WritingGraphic } from './components/writing-graphic';
import { CVDemoCard } from './components/cv-demo-card';
import { CVDemoGraphic } from './components/cv-demo-graphic';

type FeaturesProperties = HTMLAttributes<HTMLDivElement>;

export const Features = (properties: FeaturesProperties) => (
  <section {...properties}>
    <Container className="flex flex-col gap-8 border-x px-4 pt-16 pb-4">
      <FeatureHero {...features.features} />
      <div className="grid gap-4 md:grid-cols-6">
        {/*<Card
          className="h-full md:col-span-3"
          feature="Powerful Writing Tools"
          title="A smart, rich editor"
          description="Embed Figma designs, YouTube videos, images, code snippets, tables and more with our incredibly advanced editor."
        >
          <EditorGraphic />
        </Card>
        <Card
          className="h-full md:col-span-3"
          feature="AI-Assisted Writing"
          title="Rephrase, summarize, and more"
          description="Use AI to help rephrase, summarize or continue sentences; or even generate new ideas."
        >
          <WritingGraphic />
        </Card>*/}
        
        {/* CV Analysis Demo Card - Takes full width */}
        <CVDemoCard
          className="h-full md:col-span-6"
          feature="AI CV Analysis"
          title="Get instant insights from candidate resumes"
          description="Hir3d's AI analyzes candidate resumes to extract key skills, experience, and generates tailored recommendations to help you make better hiring decisions quickly."
        >
          <CVDemoGraphic />
        </CVDemoCard>
        
        <Card
          className="h-full md:col-span-3"
          feature="Predictive AI Prioritization"
          title="AI RICE scoring"
          description="Hir3d will automatically best-guess Reach, Impact, Confidence, Effort to help you prioritize your backlog."
        >
          <RiceGraphic />
        </Card>
        {/*<Card
          className="h-full md:col-span-3"
          feature="Customizable Feature Statuses"
          title="Define your own feature statuses"
          description="Go beyond just 'To Do', 'In Progress', 'Done'. Add your own custom statuses to fit your workflow."
        >
          <FeatureStatusGraphic />
        </Card>*/}
        {/* <Card
    className="h-full md:col-span-6"
    feature="AI Feature-Insight Correlation"
    title="Find the signal in the noise"
    description="Hir3d can find relevant feedback for a feature, so you can tie your solutions back to the customer's pain points."
    badge="Coming Soon"
  >
    <CorrelationGraphic />
  </Card> */}
      </div>
    </Container>
  </section>
);
