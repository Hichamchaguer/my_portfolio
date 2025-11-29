import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   links: {
//     demo?: string;
//     github: string;
//   };
// }

const projects = [
  {
    title: "Cloud-Native E-commerce Platform",
    description:
      "A microservices-based e-commerce application deployed on Kubernetes, featuring real-time inventory management and a completely checkout function.",
    image: "☁️",
    tags: ["Kubernetes", "AWS", "Python"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Data Processing Pipeline",
    description:
      "An automated ETL pipeline built with Python and Apache Airflow to process and analyze large datasets. Includes a business intelligence dashboard.",
    image: "📊",
    tags: ["Python", "Airflow", "Docker"],
    links: {
      github: "#",
    },
  },
  {
    title: "Data Processing Pipeline",
    description:
      "An automated ETL pipeline built with Python and Apache Airflow to process and analyze large datasets. Includes a business intelligence dashboard.",
    image: "📊",
    tags: ["Python", "Airflow", "Docker"],
    links: {
      github: "#",
    },
  },
  {
    title: "Data Processing Pipeline",
    description:
      "An automated ETL pipeline built with Python and Apache Airflow to process and analyze large datasets. Includes a business intelligence dashboard.",
    image: "📊",
    tags: ["Python", "Airflow", "Docker"],
    links: {
      github: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-border bg-card hover:border-accent/50 transition-colors group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-border text-foreground hover:bg-card"
                      asChild
                    >
                      <a href={project.links.demo}>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-border text-foreground hover:bg-card"
                    asChild
                  >
                    <a href={project.links.github}>
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
