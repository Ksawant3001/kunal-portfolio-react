import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'
import { PROJECTS } from '../data'

export default function Projects() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="05" title="Projects" />

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="bg-[#161b27] border border-[#1f2937] rounded-xl overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-5">
                {/* Left — details */}
                <div className="md:col-span-3 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <div className="font-syne font-bold text-white text-xl">{project.title}</div>
                      <div className="font-fira text-xs mt-0.5" style={{ color: project.color }}>
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(tag => (
                      <span
                        key={tag}
                        className="font-fira text-xs px-2 py-1 rounded border"
                        style={{
                          borderColor: project.color + '30',
                          color:       project.color,
                          background:  project.color + '08',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="font-fira text-xs border border-[#1f2937] text-gray-400 hover:text-neon hover:border-neon/30 px-4 py-2 rounded transition-all"
                    >
                      ↗ Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="font-fira text-xs border border-[#1f2937] text-gray-400 hover:text-neon hover:border-neon/30 px-4 py-2 rounded transition-all"
                    >
                      ⌥ GitHub
                    </a>
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="md:col-span-2 p-7 bg-[#0d0d0d] border-t md:border-t-0 md:border-l border-[#1f2937]">
                  <div className="font-fira text-xs text-gray-500 mb-4">// key_highlights</div>
                  <ul className="space-y-2.5">
                    {project.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 font-outfit text-sm text-gray-400">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: project.color }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Result badge */}
                  {project.result && (
                    <div
                      className="mt-5 p-4 rounded-xl border"
                      style={{ borderColor: project.color + '30', background: project.color + '06' }}
                    >
                      <div className="font-fira text-xs mb-1" style={{ color: project.color }}>
                        📊 Measured Result
                      </div>
                      <div className="font-syne font-bold text-3xl text-white">{project.result.value}</div>
                      <div className="font-outfit text-xs text-gray-500 mt-0.5">{project.result.label}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
