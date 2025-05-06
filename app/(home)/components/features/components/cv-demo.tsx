"use client"

import type React from "react"
import { useState, useCallback, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/design-system/components/ui/card"
import { Button } from "@repo/design-system/components/ui/button"
import { Badge } from "@repo/design-system/components/ui/badge"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/design-system/components/ui/drawer"
import {
  Star,
  StarHalf,
  Trophy,
  Target,
  Briefcase,
  GraduationCap,
  Info,
  User,
  Mail,
  FileText,
  Wrench,
  FolderGit2,
  X
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/design-system/components/ui/tooltip"

interface AIAnalysis {
  [key: string]: {
    summary: string
    details: string
    icon: React.ReactNode
  }
}

interface RankingMetric {
  label: string
  score: number
  icon: React.ReactNode
  description: string
}

const CVDemo: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [displayedSection, setDisplayedSection] = useState<string | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

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
  }), [])

  const overallSummary = "Highly qualified senior software engineer with proven expertise in full-stack development and emerging technologies. Strong leadership potential demonstrated through team mentoring and successful project delivery. Continuous learner with active community involvement."

  const rankingMetrics: RankingMetric[] = [
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
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleSectionHover = useCallback((section: string | null) => {
    setActiveSection(section)
    if (section) {
      setDisplayedSection(section)
    }
  }, [])

  const renderSection = useCallback(
    (sectionName: string, content: React.ReactNode) => {
      const section = (
        <section
          className={`p-2 transition-all duration-200 ease-in-out ${
            activeSection === sectionName ? "bg-accent rounded-lg" : ""
          } ${isMobile ? "cursor-pointer" : "lg:cursor-default"}`}
          onMouseEnter={() => handleSectionHover(sectionName)}
          onMouseLeave={() => handleSectionHover(null)}
        >
          {content}
        </section>
      )

      // On mobile, wrap with drawer
      if (isMobile) {
        return (
          <Drawer key={sectionName}>
            <DrawerTrigger asChild>
              {section}
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="text-left">
                  <div className="flex items-center gap-2">
                    {aiAnalysis[sectionName].icon}
                    <DrawerTitle className="capitalize">{sectionName}</DrawerTitle>
                  </div>
                </DrawerHeader>
                <div className="px-4 pb-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <FileText className="h-4 w-4" />
                      <h4 className="font-medium">Summary</h4>
                    </div>
                    <p className="text-sm">
                      {aiAnalysis[sectionName].summary}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Info className="h-4 w-4" />
                      <h4 className="font-medium">Detailed Analysis</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {aiAnalysis[sectionName].details}
                    </p>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        )
      }

      // On desktop, just return the section
      return section
    },
    [activeSection, handleSectionHover, aiAnalysis, isMobile],
  )

  const renderStarRating = (score: number) => {
    const fullStars = Math.floor(score)
    const hasHalfStar = score % 1 >= 0.5
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {hasHalfStar && <StarHalf className="h-4 w-4 fill-primary text-primary" />}
      </div>
    )
  }

  const renderRankingMetrics = () => (
    <div className="mt-8 space-y-6">
      <h3 className="text-xl font-semibold text-center mb-4">Candidate Rankings</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {rankingMetrics.map((metric, i) => (
          <div key={i} className="p-4 rounded-lg border bg-card space-y-2">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                {metric.icon}
                <h3 className="text-lg font-medium">{metric.label}</h3>
              </div>
              <span className="text-xl font-semibold">{metric.score}</span>
            </div>
            <p className="text-muted-foreground pl-7 hidden sm:block">
              {metric.description}
            </p>
            <div className="flex justify-end sm:hidden lg:flex">
              {renderStarRating(metric.score)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  useEffect(() => {
    if (!activeSection) {
      const timer = setTimeout(() => {
        setDisplayedSection(null)
      }, 300) // Delay before clearing the displayed section
      return () => clearTimeout(timer)
    }
  }, [activeSection])

  return (
    <TooltipProvider>
      <Card className="max-w-[1200px] mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center">Interactive CV Analysis Demo</CardTitle>
          <p className="text-center text-muted-foreground text-sm mt-2 lg:hidden">
            Tap on sections to see AI insights
          </p>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row gap-8 p-6">
          <div className="w-full lg:w-2/3 space-y-6">
            {renderSection(
              "name",
              <>
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Senior Software Engineer</p>
              </>,
            )}

            {renderSection(
              "contact",
              <>
                <p>john.doe@techcorp.com | (123) 456-7890</p>
                <p>linkedin.com/in/johndoe | github.com/johndoe</p>
                <p>San Francisco, CA (Open to Remote)</p>
              </>,
            )}

            {renderSection(
              "summary",
              <>
                <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
                <p>
                  Experienced software engineer with over 10 years in full-stack web development. Specialized in building
                  scalable, efficient applications using React.js and Node.js. Passionate about leveraging cutting-edge
                  technologies to solve complex problems. Proven track record of leading teams and mentoring junior
                  developers.
                </p>
              </>,
            )}

            {renderSection(
              "skills",
              <>
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">RESTful APIs</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">SQL (PostgreSQL)</Badge>
                  <Badge variant="secondary">NoSQL (MongoDB)</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Agile Methodologies</Badge>
                  <Badge variant="secondary">Machine Learning (TensorFlow)</Badge>
                </div>
              </>,
            )}

            {renderSection(
              "experience",
              <>
                <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
                <div className="mb-4">
                  <h3 className="font-semibold">Senior Software Engineer, Tech Corp</h3>
                  <p className="text-muted-foreground">2018 - Present</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Led development of company&apos;s flagship SaaS product, improving performance by 40%</li>
                    <li>Architected and implemented a microservices-based backend, enhancing system scalability</li>
                    <li>
                      Mentored a team of 5 junior developers, conducting regular code reviews and knowledge sharing
                      sessions
                    </li>
                    <li>Introduced and implemented CI/CD pipelines, reducing deployment time by 60%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Software Engineer, StartUp Inc</h3>
                  <p className="text-muted-foreground">2015 - 2018</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed and maintained multiple client-facing web applications using React.js</li>
                    <li>Collaborated with UX designers to implement responsive, accessible user interfaces</li>
                    <li>Optimized database queries, resulting in a 30% reduction in API response times</li>
                    <li>Participated in Agile development processes, consistently meeting sprint goals</li>
                  </ul>
                </div>
              </>,
            )}

            {renderSection(
              "education",
              <>
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <p>
                  <strong>BS in Computer Science</strong>, University of Technology
                </p>
                <p className="text-muted-foreground">Graduated: 2015, GPA: 3.8/4.0</p>
                <p className="mt-2">
                  <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Database Systems, Machine Learning
                </p>
                <p className="mt-2">
                  <strong>Continuing Education:</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>Deep Learning Specialization, Coursera (2022)</li>
                  <li>AWS Certified Developer - Associate (2021)</li>
                </ul>
              </>,
            )}

            {renderSection(
              "projects",
              <>
                <h2 className="text-xl font-semibold mb-2">Key Projects</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">E-commerce Platform Overhaul</h3>
                    <p>
                      Led the redesign and implementation of a high-traffic e-commerce platform using React, Node.js, and
                      GraphQL. Resulted in a 25% increase in conversion rates and 50% faster page load times.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Machine Learning for Predictive Maintenance</h3>
                    <p>
                      Developed a Python-based machine learning model to predict equipment failures, reducing downtime by
                      15% for a manufacturing client.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Open Source Contribution</h3>
                    <p>
                      Active contributor to a popular React component library, with several merged pull requests improving
                      accessibility and performance.
                    </p>
                  </div>
                </div>
              </>,
            )}
          </div>

          <Card className="w-full lg:w-1/3 sticky top-4 h-fit hidden lg:block">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-xl">
                AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="transition-all duration-300 ease-in-out min-h-[200px]">
                {displayedSection ? (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      {aiAnalysis[displayedSection].icon}
                      <h4 className="font-semibold capitalize">{displayedSection}</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        
                        <p className="text-sm">
                          {aiAnalysis[displayedSection].summary}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Info className="h-4 w-4" />
                          <h4 className="font-medium">Detailed Analysis</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {aiAnalysis[displayedSection].details}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">Hover over sections of the CV to see AI insights</p>
                )}
              </div>
              <Button className="mt-6 w-full" onClick={() => setShowSummary(!showSummary)}>
                {showSummary ? "Hide" : "Show"} Overall Summary
              </Button>
              {showSummary && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Overall Summary</h4>
                    <p className="text-sm leading-relaxed">{overallSummary}</p>
                  </div>
                  {renderRankingMetrics()}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="lg:hidden">
            <Button className="w-full" onClick={() => setShowSummary(!showSummary)}>
              {showSummary ? "Hide" : "Show"} Overall Summary
            </Button>
            {showSummary && (
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Overall Summary</h4>
                  <p className="text-sm leading-relaxed">{overallSummary}</p>
                </div>
                {renderRankingMetrics()}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}

export default CVDemo 