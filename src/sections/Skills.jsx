import { Code2, Database, Cloud, GitBranch, BarChart3, Brain } from "lucide-react";

const SkillItem = [
  {
    icon: <Code2 className="w-8 h-8" />,
    name: "Python",
    description: "Backend Development",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    name: "JavaScript",
    description: "Web Development",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    name: "TypeScript",
    description: "Type Safety",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    name: "React",
    description: "Frontend",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    name: "AWS",
    description: "Cloud Services",
  },
  {
    icon: <Database className="w-8 h-8" />,
    name: "Docker",
    description: "Containerization",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    name: "CI/CD",
    description: "DevOps",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    name: "Kubernetes",
    description: "Orchestration",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    name: "Analytics",
    description: "Data Analysis",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    name: "TensorFlow",
    description: "ML/AI",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SkillItem.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors group cursor-pointer"
            >
              <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
