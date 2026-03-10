import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'

const EXPERIENCE = [
  {
    emoji: '💼',
    color: '#00b4ff',
    role: 'Frontend Developer',
    company: 'Shardeen IT Solutions Pvt Ltd',
    period: 'Jul 2024 – Aug 2025',
    type: 'Full-time',
    bullets: [
      'Designed and developed Regnoz — a mobile-first social media web app with real-time battle mode',
      'Implemented WebSocket (SignalR) for live score tracking and instant multiplayer updates',
      'Built a gamification system converting user reactions into in-game advantages',
      'Created modular, reusable UI components improving maintainability and load performance',
      'Optimized for responsive design, mobile performance, and cross-browser compatibility',
      'Boosted trial user session duration by 45% through UX and performance improvements',
    ],
    stack: 'JavaScript · Bootstrap · jQuery · CSS · C# · SignalR',
  },
]

export default function Experience() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="03" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1f2937] hidden md:block" />

          <div className="space-y-8">
            {/* Work experience */}
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="md:pl-16 relative">
                <div
                  className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full items-center justify-center border-2 text-lg"
                  style={{ borderColor: item.color, background: '#0d0d0d' }}
                >
                  {item.emoji}
                </div>

                <div className="bg-[#161b27] border border-[#1f2937] rounded-xl p-7 card-hover">
                  <div className="flex flex-wrap gap-3 justify-between items-start mb-5">
                    <div>
                      <div className="font-syne font-bold text-xl text-white">{item.role}</div>
                      <div className="font-outfit text-sm mt-0.5" style={{ color: item.color }}>
                        {item.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-fira text-xs text-gray-500 bg-[#0d0d0d] border border-[#1f2937] px-3 py-1 rounded">
                        {item.period}
                      </span>
                      <span
                        className="font-fira text-xs px-3 py-1 rounded border"
                        style={{ borderColor: item.color + '30', color: item.color, background: item.color + '08' }}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 font-outfit text-sm text-gray-400">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: item.color }}>▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#1f2937]">
                    <span className="font-fira text-xs text-gray-600">Stack: </span>
                    <span className="font-fira text-xs text-gray-400">{item.stack}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
