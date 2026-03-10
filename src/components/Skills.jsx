import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'
import { SKILLS } from '../data'

const CATEGORIES = ['Frontend', 'Backend', 'Tools']

const BAR_COLORS = {
  Frontend: 'linear-gradient(90deg, #00b4ff, #00d9f5)',
  Backend: 'linear-gradient(90deg, #00d9f5, #60a5fa)',
  Tools: 'linear-gradient(90deg, #a78bfa, #f472b6)',
}

const MARQUEE_TAGS = [
  'React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Bootstrap',
  'Tailwind', 'jQuery', 'REST API', 'Git', 'CI/CD', 'SignalR', 'HTML5', 'CSS3',
]

export default function Skills() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="skills" className="py-24 bg-[#161b27]/50 border-y border-[#1f2937]" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="02" title="Tech Stack" />

        <div className="grid md:grid-cols-3 gap-6">
          {CATEGORIES.map(cat => (
            <div key={cat} className="bg-[#0d0d0d] border border-[#1f2937] rounded-xl p-6">
              <div className="font-fira text-xs text-neon mb-6">// {cat.toLowerCase()}</div>
              <div className="space-y-5">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-outfit text-sm text-gray-300">{skill.name}</span>
                      <span className="font-fira text-xs text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          background: BAR_COLORS[cat],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden opacity-30 select-none">
          <div className="marquee-inner">
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
              <span
                key={i}
                className="font-fira text-sm text-gray-400 px-6 border-r border-[#1f2937] last:border-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
