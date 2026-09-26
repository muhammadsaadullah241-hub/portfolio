import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/siteData.js'
import Section from '../common/Section.jsx'
import Stagger from '../common/Stagger.jsx'
import { staggerItem } from '../../lib/motion.js'
import Badge from '../common/Badge.jsx'
import SystemVisual from '../common/SystemVisual.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Work() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Section
        id="work"
        number="03"
        eyebrow="Selected work"
        tone="light"
        align="center"
        title={
          <>
            Real systems, built for <span className="italic-accent">real businesses.</span>
          </>
        }
        description="Six recent builds — each one a working product, not a mockup. Open any project for the full story: the problem, what I built, and the numbers it moved."
      >
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.08}>
          {projects.map((project) => (
            <motion.button
              type="button"
              key={project.id}
              variants={staggerItem}
              onClick={() => setSelected(project)}
              className="card card-hover group flex flex-col overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light"
              aria-label={`View the ${project.name} case study`}
            >
              <div className="relative border-b border-line bg-cream/60 p-4">
                <div className="h-[340px]">
                  <SystemVisual variant={project.visual} client={project.name} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {project.category}
                  </span>
                  <Badge variant="moss" dot>
                    Live
                  </Badge>
                </div>

                <h3 className="mt-3 text-[20px] font-semibold">{project.name}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-muted">{project.tagline}</p>

                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-[22px] font-bold leading-none tracking-[-0.02em] text-ink">
                      {project.headline}
                    </p>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      Headline result
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-rust">
                    Read
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </Stagger>
      </Section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
