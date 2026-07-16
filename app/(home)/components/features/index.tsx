import { Card } from '@/app/(home)/components/card';
import { FeatureHero } from '@/components/feature-hero';
import { features } from '@/lib/features';
import { Container } from '@/components/container';
import type { HTMLAttributes } from 'react';
import { EditorGraphic } from './components/editor-graphic';
import { FeatureStatusGraphic } from './components/feature-status-graphic';
import { RiceGraphic } from './components/rice-graphic';
import { RankingGraphic } from './components/ranking-graphic';
import { WritingGraphic } from './components/writing-graphic';
import { CandidateShowcase } from './components/candidate-showcase';

type FeaturesProperties = HTMLAttributes<HTMLDivElement>;

export const Features = (properties: FeaturesProperties) => (
  <section {...properties}>
    <Container className="flex flex-col gap-8 border-x px-4 pt-16 pb-4">
      <FeatureHero {...features.features} formerly="" />
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

        <div className="h-full md:col-span-6">
          <CandidateShowcase />
        </div>

        <Card
          className="h-full md:col-span-6"
          feature="Contextual Ranking System"
          title="Contextual CV Ranking"
          description="Automatically ranks candidate CVs for employers based on job fit, surfacing the best‑suited applicants first."
          contentClassName="h-[260px] sm:h-[300px] md:h-[340px]"
        >
          <RankingGraphic />
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
