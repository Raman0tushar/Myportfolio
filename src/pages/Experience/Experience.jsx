// src/pages/Experience/Experience.jsx

import { Code2, Layers } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 — Present",
    description: "Building modern web applications using React, Node.js, and cloud services. Creator of Olova.js framework.",
    icon: Code2,
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects",
    period: "2021 — 2022",
    description: "Developed responsive UIs with React, Tailwind CSS, and animations using Framer Motion.",
    icon: Layers,
  },
  {
    title: "Self-Taught Developer",
    company: "Independent Learning",
    period: "2020 — 2021",
    description: "Mastered JavaScript, React, Git, Linux, and modern development tools.",
    icon: Code2,
  },
];

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-card/80 border border-border p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      <div className="flex justify-between text-muted-foreground mb-4">
        <span className="font-medium">{company}</span>
        <span className="text-sm bg-accent/50 px-3 py-1 rounded-full">{period}</span>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into digital reality, one project at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}