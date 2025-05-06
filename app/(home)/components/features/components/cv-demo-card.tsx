'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, type ReactNode, useMemo } from 'react';
import Balancer from 'react-wrap-balancer';
import { Star, StarHalf, Trophy, Target, Briefcase, GraduationCap, Info, User, Mail, FileText, Wrench, FolderGit2 } from 'lucide-react';

interface AIAnalysis {
  [key: string]: {
    summary: string
    details: string
    icon: React.ReactNode
  }
}

interface CVDemoCardProps {
  readonly feature: string;
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly badge?: string;
}

export const CVDemoCard = ({
  feature,
  title,
  description,
  children,
  className,
  badge,
}: CVDemoCardProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [displayedSection, setDisplayedSection] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  // Using the exact AI analysis data structure from the provided code
  const aiAnalysis = useMemo<AIAnalysis>(() => ({
    name: {
      summary: "Male professional with senior-level technical background.",
      details: "Title and experience indicate hands-on software engineering expertise with leadership capabilities.",
      icon: <User className="h-5 w-5" />,
    },
    contact: {
      summary: "Professional contact details with strong online presence.",
      details: "LinkedIn and GitHub profiles suggest active industry involvement and open-source contributions.",
      icon: <Mail className="h-5 w-5" />,
    },
    summary: {
      summary: "Senior software engineer with full-stack expertise.",
      details: "Shows leadership potential and strong interest in emerging technologies. Demonstrates ability to lead teams and deliver complex projects.",
      icon: <FileText className="h-5 w-5" />,
    },
    skills: {
      summary: "Strong technical foundation in modern web development.",
      details: "Versatile skill set covering frontend, backend, DevOps, and machine learning. Demonstrates adaptability and continuous learning.",
      icon: <Wrench className="h-5 w-5" />,
    },
    experience: {
      summary: "Steady career progression in diverse environments.",
      details: "Proven track record in both startup and established companies. Strong leadership and mentoring capabilities.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    education: {
      summary: "Solid computer science foundation.",
      details: "Continuous professional development through relevant certifications and ongoing learning initiatives.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    projects: {
      summary: "Diverse portfolio with significant impact.",
      details: "Technical depth, business impact, and community involvement through open source contributions.",
      icon: <FolderGit2 className="h-5 w-5" />,
    },
  }), []);

  // Overall summary from the provided code
  const overallSummary = "Highly qualified senior software engineer with proven expertise in full-stack development and emerging technologies. Strong leadership potential demonstrated through team mentoring and successful project delivery. Continuous learner with active community involvement.";

  // Ranking metrics exactly as defined in the provided code
  const rankingMetrics = [
    { 
      label: "Technical Skills", 
      score: 4.8, 
      icon: <Wrench className="h-5 w-5" />,
      description: "Exceptional technical proficiency across full-stack development"
    },
    { 
      label: "Experience", 
      score: 4.5, 
      icon: <Briefcase className="h-5 w-5" />,
      description: "Strong track record in diverse environments"
    },
    { 
      label: "Leadership", 
      score: 4.2, 
      icon: <Trophy className="h-5 w-5" />,
      description: "Demonstrated leadership through team mentoring"
    },
    { 
      label: "Education", 
      score: 4.0, 
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Solid foundation with ongoing development"
    },
    { 
      label: "Growth Potential", 
      score: 4.6, 
      icon: <Target className="h-5 w-5" />,
      description: "High potential based on adaptability"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const renderStarRating = (score: number) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.5;
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {hasHalfStar && <StarHalf className="h-4 w-4 fill-primary text-primary" />}
      </div>
    );
  };

  const handleSectionHover = (section: string | null) => {
    setActiveSection(section);
    if (section) {
      setDisplayedSection(section);
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm',
        'md:grid md:grid-cols-12 md:gap-8',
        className
      )}
    >
      {/* Header */}
      <div className="col-span-12 mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {feature}
        </div>
        {badge ? (
          <Badge variant="outline" className="rounded-full">
            {badge}
          </Badge>
        ) : null}
      </div>

      {/* CV Display - Left Side */}
      <div className="col-span-12 mb-6 md:col-span-5 md:mb-0">
        <div className="relative h-[500px] md:h-[550px] lg:h-[600px] overflow-auto rounded-lg border bg-background shadow-sm">
          {/* CV content with hover interaction for sections */}
          <div className="h-full w-full">
            <div 
              className="w-full h-full"
              onMouseLeave={() => handleSectionHover(null)}
            >
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Display - Right Side */}
      <div className="col-span-12 flex flex-col md:col-span-7">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">
            <Balancer>{description}</Balancer>
          </p>
        </div>

        {/* Analysis content */}
        <div className="mt-4 flex-1 rounded-lg border bg-background/50 p-4 shadow-sm">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            {/* Slide 1: Basic Profile (Name and Contact) */}
            {currentSlide === 0 && (
              <div>
                <h4 className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Basic Profile
                </h4>
                <div className="mt-4 space-y-4">
                  {/* Name analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.name.icon}
                      <h4 className="font-medium">Name</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.name.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.name.details}</p>
                  </div>
                  
                  {/* Contact analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.contact.icon}
                      <h4 className="font-medium">Contact</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.contact.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.contact.details}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2: Professional Summary */}
            {currentSlide === 1 && (
              <div>
                <h4 className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Professional Profile
                </h4>
                <div className="mt-4 space-y-4">
                  {/* Summary analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.summary.icon}
                      <h4 className="font-medium">Summary</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.summary.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.summary.details}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Slide 3: Technical Qualifications (Skills and Experience) */}
            {currentSlide === 2 && (
              <div>
                <h4 className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Technical Qualifications
                </h4>
                <div className="mt-4 space-y-4">
                  {/* Skills analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.skills.icon}
                      <h4 className="font-medium">Skills</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.skills.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.skills.details}</p>
                  </div>
                  
                  {/* Experience analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.experience.icon}
                      <h4 className="font-medium">Experience</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.experience.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.experience.details}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Slide 4: Educational Background (Education and Projects) */}
            {currentSlide === 3 && (
              <div>
                <h4 className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Educational Background
                </h4>
                <div className="mt-4 space-y-4">
                  {/* Education analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.education.icon}
                      <h4 className="font-medium">Education</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.education.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.education.details}</p>
                  </div>
                  
                  {/* Projects analysis */}
                  <div className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      {aiAnalysis.projects.icon}
                      <h4 className="font-medium">Projects</h4>
                    </div>
                    <p className="text-sm">{aiAnalysis.projects.summary}</p>
                    <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.projects.details}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Slide 5: Overall Assessment */}
            {currentSlide === 4 && (
              <div>
                <h4 className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Overall Assessment
                </h4>
                <p className="mt-2">
                  {overallSummary}
                </p>
                <div className="mt-4">
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setShowSummary(!showSummary)}
                  >
                    {showSummary ? "Hide" : "Show"} Detailed Rankings
                  </Button>
                  
                  {showSummary && (
                    <div className="mt-4 space-y-3">
                      {rankingMetrics.map((metric, idx) => (
                        <div key={idx} className="p-3 rounded-lg border bg-card space-y-1">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                              {metric.icon}
                              <h3 className="text-sm font-medium">{metric.label}</h3>
                            </div>
                            <span className="text-sm font-semibold">{metric.score}</span>
                          </div>
                          <p className="text-xs text-muted-foreground pl-7">
                            {metric.description}
                          </p>
                          <div className="flex justify-end">
                            {renderStarRating(metric.score)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-4 flex justify-between">
          <Button variant="outline" size="sm" onClick={prevSlide}>
            Previous
          </Button>
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  'h-2 w-2 rounded-full',
                  currentSlide === idx ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={nextSlide}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}; 