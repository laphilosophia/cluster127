'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { PROJECTS } from './projects'

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Her eleman 0.1sn arayla gelsin
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-void text-[#E0E0E0] font-sans selection:bg-white selection:text-black flex flex-col justify-between">
      <motion.header
        variants={itemVariants}
        className="sticky top-0 z-10 px-8 md:px-16 md:py-12 flex justify-between items-center mix-blend-difference bg-black/5 backdrop-blur-2xl">
        <div className="flex items-center gap-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
            <rect x="2.5" y="2.5" width="19" height="19" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <rect x="1" y="1" width="4" height="4" fill="#050505" />
          </svg>

          <h1 className="text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase text-gray-500">
            <span className="block mb-2">Cluster 127</span>
            <div className="h-px w-12 bg-white/20"></div>
          </h1>
        </div>

        <div className="text-right">
          <p className="text-[10px] md:text-xs font-mono text-gray-600 leading-relaxed">
            System Status: Nominal <br />
            Lat: 41.0082° N
          </p>
        </div>
      </motion.header>

      {/* 2. MAIN LIST */}
      <main className="grow flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-6xl">
          {PROJECTS.map((project) => (
            <motion.a
              variants={itemVariants}
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block border-t border-white/10 py-10 md:py-14 transition-all duration-500 hover:border-white/40"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* ID & Name */}
                <div className="flex items-baseline gap-6 md:gap-16">
                  <span className="w-14 font-mono text-xs text-gray-700 group-hover:text-white transition-colors duration-300">
                    /{project.id}
                  </span>
                  <h2 className="flex-1 text-3xl md:text-7xl font-light tracking-tight text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 ease-out">
                    {project.name}
                  </h2>
                </div>

                {/* Description & Tags */}
                <div className="flex flex-col items-end gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out max-w-96">
                  <span className="font-sans text-sm md:text-lg font-light text-right text-gray-300">
                    {project.desc}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded text-gray-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
          <motion.div variants={itemVariants} className="border-t border-white/10"></motion.div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <motion.footer
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-between items-end gap-8 p-8 md:p-16">
        <div className="max-w-md">
          <p className="text-sm md:text-base font-sans font-light leading-relaxed text-gray-500">
            <span className="text-white block mb-2 font-medium">Manifesto</span>
            We give machines the wisdom to forget. <br />
            Architecting synthetic consciousness that sleeps, dreams, and decays.
          </p>
        </div>

        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-600">
          <a
            href="https://github.com/laphilosophia"
            target="_blank"
            className="hover:text-white transition-colors duration-300">
            Github
          </a>
          <a
            href="https://erdemarslan.hashnode.dev/"
            className="hover:text-white transition-colors duration-300">
            Hashnode
          </a>
          <a
            href="https://laphilosophia.substack.com/"
            className="hover:text-white transition-colors duration-300">
            SubStack
          </a>
          <a
            href="mailto:erdemarslan@ymail.com"
            className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>
      </motion.footer>
    </motion.div>
  )
}
