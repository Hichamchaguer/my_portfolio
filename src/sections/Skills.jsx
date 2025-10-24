import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  GitBranch,
  Server,
  Box,
} from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    id: 2,
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Django', 'Flask', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    id: 3,
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'Mongoose'],
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx'],
  },
  {
    id: 5,
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA'],
  },
  {
    id: 6,
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Wireframing', 'Prototyping'],
  },
  {
    id: 7,
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Git Flow', 'Code Review'],
  },
  {
    id: 8,
    title: 'Tools & Others',
    icon: Box,
    skills: ['VS Code', 'Postman', 'Webpack', 'Vite', 'Jest', 'Cypress'],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-muted text-foreground rounded-md text-sm hover:bg-primary/20 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build
            modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

