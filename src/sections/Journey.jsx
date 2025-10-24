import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, GraduationCap, Rocket, Award, Code } from 'lucide-react';

const milestones = [
  {
    id: 1,
    year: '2018',
    title: 'Started Learning Web Development',
    description:
      'Began my journey into web development by learning HTML, CSS, and JavaScript. Built my first static websites and discovered my passion for creating digital experiences.',
    icon: Code,
  },
  {
    id: 2,
    year: '2019',
    title: 'First Full-Stack Application',
    description:
      'Developed my first full-stack application using React and Node.js. This project taught me the fundamentals of building complete web applications from front to back.',
    icon: Rocket,
  },
  {
    id: 3,
    year: '2020',
    title: 'Internship at Tech Startup',
    description:
      'Joined a fast-paced startup as a software development intern. Worked on real-world projects, collaborated with experienced developers, and learned agile methodologies.',
    icon: Briefcase,
  },
  {
    id: 4,
    year: '2021',
    title: 'Bachelor\'s Degree in Computer Science',
    description:
      'Graduated with honors from State University with a degree in Computer Science. Specialized in software engineering and web technologies.',
    icon: GraduationCap,
  },
  {
    id: 5,
    year: '2022',
    title: 'Junior Full Stack Developer',
    description:
      'Started my professional career as a Junior Full Stack Developer at a digital agency. Built multiple client projects and expanded my technical skill set significantly.',
    icon: Briefcase,
  },
  {
    id: 6,
    year: '2023',
    title: 'AWS Certification',
    description:
      'Earned AWS Certified Solutions Architect certification. Deepened my knowledge of cloud architecture and modern deployment practices.',
    icon: Award,
  },
  {
    id: 7,
    year: '2024',
    title: 'Senior Full Stack Developer',
    description:
      'Promoted to Senior Full Stack Developer. Now leading projects, mentoring junior developers, and architecting scalable solutions for enterprise clients.',
    icon: Briefcase,
  },
  {
    id: 8,
    year: '2025',
    title: 'Open Source Contributor',
    description:
      'Actively contributing to open-source projects and building tools for the developer community. Sharing knowledge through technical blog posts and workshops.',
    icon: Code,
  },
];

function TimelineItem({ milestone, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = milestone.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{milestone.year}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
            <p className="text-muted-foreground">{milestone.description}</p>
          </div>
        </div>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Spacer for alignment */}
        <div className="flex-1 hidden md:block" />
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">My IT Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A timeline of key milestones and achievements throughout my career in technology.
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

