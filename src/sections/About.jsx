import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Hello! I'm Hicham Chaguer, a passionate Full Stack Developer with a deep love for creating
              innovative web applications that solve real-world problems. My journey in technology
              began several years ago when I discovered the power of code to transform ideas into
              reality.
            </p>

            <p>
              Throughout my career, I've had the privilege of working on diverse projects ranging
              from e-commerce platforms to enterprise-level applications. I thrive in collaborative
              environments where I can contribute my technical expertise while continuously learning
              from talented colleagues.
            </p>

            <p>
              My technical toolkit includes a wide range of modern technologies. On the frontend, I
              specialize in <strong>React</strong>, <strong>Next.js</strong>, and{' '}
              <strong>TypeScript</strong>, creating responsive and intuitive user interfaces. For
              backend development, I work extensively with <strong>Node.js</strong>,{' '}
              <strong>Django</strong>, and <strong>Flask</strong>, building robust APIs and server
              architectures.
            </p>

            <p>
              I'm also experienced with cloud platforms like <strong>AWS</strong> and{' '}
              <strong>Azure</strong>, containerization using <strong>Docker</strong>, and modern
              DevOps practices. Database technologies I work with include both SQL (PostgreSQL,
              MySQL) and NoSQL (MongoDB, Redis) solutions.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community through blog
              posts and mentoring. I believe in continuous learning and staying current with
              industry trends to deliver the best solutions possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

