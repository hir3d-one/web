'use client';

import { useState } from 'react';
import { cn } from '@repo/design-system/lib/utils';
import { Badge } from '@repo/design-system/components/ui/badge';

export function CVDemoGraphic() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Updated resume data based on the provided code
  const resumePages = [
    {
      name: "John Doe",
      title: "Senior Software Engineer",
      contact: {
        email: "john.doe@techcorp.com",
        phone: "(123) 456-7890",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        location: "San Francisco, CA (Open to Remote)"
      },
      summary: "Experienced software engineer with over 10 years in full-stack web development. Specialized in building scalable, efficient applications using React.js and Node.js. Passionate about leveraging cutting-edge technologies to solve complex problems. Proven track record of leading teams and mentoring junior developers.",
      skills: [
        "React.js", "Node.js", "Python", "RESTful APIs", "GraphQL", 
        "SQL (PostgreSQL)", "NoSQL (MongoDB)", "AWS", "Docker", 
        "CI/CD", "Agile Methodologies", "Machine Learning (TensorFlow)"
      ],
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Corp",
          period: "2018 - Present",
          responsibilities: [
            "Led development of company's flagship SaaS product, improving performance by 40%",
            "Architected and implemented a microservices-based backend, enhancing system scalability",
            "Mentored a team of 5 junior developers, conducting regular code reviews and knowledge sharing sessions",
            "Introduced and implemented CI/CD pipelines, reducing deployment time by 60%"
          ]
        },
        {
          title: "Software Engineer",
          company: "StartUp Inc",
          period: "2015 - 2018",
          responsibilities: [
            "Developed and maintained multiple client-facing web applications using React.js",
            "Collaborated with UX designers to implement responsive, accessible user interfaces",
            "Optimized database queries, resulting in a 30% reduction in API response times",
            "Participated in Agile development processes, consistently meeting sprint goals"
          ]
        }
      ],
      education: {
        degree: "BS in Computer Science",
        school: "University of Technology",
        graduation: "2015",
        gpa: "3.8/4.0",
        coursework: ["Data Structures", "Algorithms", "Database Systems", "Machine Learning"],
        continuingEducation: [
          "Deep Learning Specialization, Coursera (2022)",
          "AWS Certified Developer - Associate (2021)"
        ]
      },
      projects: [
        {
          name: "E-commerce Platform Overhaul",
          description: "Led the redesign and implementation of a high-traffic e-commerce platform using React, Node.js, and GraphQL. Resulted in a 25% increase in conversion rates and 50% faster page load times."
        },
        {
          name: "Machine Learning for Predictive Maintenance",
          description: "Developed a Python-based machine learning model to predict equipment failures, reducing downtime by 15% for a manufacturing client."
        },
        {
          name: "Open Source Contribution",
          description: "Active contributor to a popular React component library, with several merged pull requests improving accessibility and performance."
        }
      ]
    }
  ];

  const currentResume = resumePages[currentPage];

  return (
    <div className="h-full w-full overflow-auto bg-black p-6 text-black">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center">
          <h1 className="text-2xl font-bold text-white">{currentResume.name}</h1>
          <h2 className="text-lg font-medium text-white">{currentResume.title}</h2>
        </div>
        
        {/* Contact */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center text-sm text-white">
          <p>{currentResume.contact.email} | {currentResume.contact.phone}</p>
          <p>{currentResume.contact.linkedin} | {currentResume.contact.github}</p>
          <p>{currentResume.contact.location}</p>
        </div>
        
        {/* Summary */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center">
          <h3 className="mb-2 text-md font-semibold text-white">Professional Summary</h3>
          <p className="text-sm text-white">{currentResume.summary}</p>
        </div>
        
        {/* Skills */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center">
          <h3 className="mb-2 text-md font-semibold text-white">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {currentResume.skills.map((skill, idx) => (
              <span key={idx} className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-white-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Experience */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center">
          <h3 className="mb-2 text-md font-semibold text-white">Work Experience</h3>
          {currentResume.experience.map((exp, index) => (
            <div key={index} className={cn("mb-3", index > 0 && "mt-3")}>
              <div className="flex flex-wrap items-center justify-between">
                <h4 className="text-sm font-medium">{exp.title}, {exp.company}</h4>
                <span className="text-xs text-white">{exp.period}</span>
              </div>
              <ul className="mt-1 list-inside list-disc text-xs text-white">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="mt-1">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div className="mb-4 border-b border-gray-200 pb-3 text-center">
          <h3 className="mb-2 text-md font-semibold text-white">Education</h3>
          <p className="text-sm font-medium">{currentResume.education.degree}, {currentResume.education.school}</p>
          <p className="text-xs text-white">Graduated: {currentResume.education.graduation}, GPA: {currentResume.education.gpa}</p>
          <p className="mt-1 text-xs font-medium text-white">Relevant Coursework: {currentResume.education.coursework.join(", ")}</p>
          <p className="mt-1 text-xs font-medium text-white">Continuing Education:</p>
          <ul className="list-inside list-disc text-xs text-white">
            {currentResume.education.continuingEducation.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        </div>
        
        {/* Projects */}
        <div>
          <h3 className="mb-2 text-md font-semibold text-white text-center">Key Projects</h3>
          {currentResume.projects.map((project, index) => (
            <div key={index} className="mb-2">
              <h4 className="text-sm font-medium">{project.name}</h4>
              <p className="text-xs text-white">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 