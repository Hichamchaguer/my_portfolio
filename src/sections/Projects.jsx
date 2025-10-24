import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project_placeholder_1.png';
import project2 from '../assets/project_placeholder_2.png';
import project3 from '../assets/project_placeholder_3.jpg';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
    image: project1,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    demo: 'https://demo-ecommerce.example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Designed for productivity and ease of use.',
    image: project2,
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
    github: 'https://github.com/johndoe/task-manager',
    demo: 'https://demo-taskmanager.example.com',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description:
      'An analytics dashboard for social media management with data visualization, scheduling features, and multi-platform integration. Helps businesses track their online presence.',
    image: project3,
    technologies: ['React', 'Django', 'Redis', 'Chart.js', 'AWS'],
    github: 'https://github.com/johndoe/social-dashboard',
    demo: 'https://demo-socialdash.example.com',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description:
      'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather data. Features a clean, intuitive interface with smooth animations.',
    image: project1,
    technologies: ['React Native', 'OpenWeather API', 'Redux', 'Expo'],
    github: 'https://github.com/johndoe/weather-app',
    demo: 'https://demo-weather.example.com',
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description:
      'A headless CMS specifically designed for portfolio websites with drag-and-drop interface, custom fields, and API-first architecture. Perfect for designers and developers.',
    image: project2,
    technologies: ['Vue.js', 'Express', 'MySQL', 'Docker', 'GraphQL'],
    github: 'https://github.com/johndoe/portfolio-cms',
    demo: 'https://demo-cms.example.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description:
      'A comprehensive fitness tracking application with workout logging, progress charts, and personalized recommendations. Helps users achieve their fitness goals.',
    image: project3,
    technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Material Design'],
    github: 'https://github.com/johndoe/fitness-tracker',
    demo: 'https://demo-fitness.example.com',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in
            building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

