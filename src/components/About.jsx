import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'

const STATS = [
  { value: '1+ Year', label: 'Experience' },
  { value: '4+ Projects', label: 'Shipped' },
  { value: 'BCA 2027', label: 'Education' },
  { value: 'Pune, IN', label: 'Location' },
]

const FACTS = [
  { icon: '🎓', title: 'BCA — Manipal University Jaipur', sub: 'Jan 2024 – 2027 (Pursuing)' },
  { icon: '💼', title: 'Frontend Dev — Shardeen IT Solutions', sub: 'Jul 2024 – Aug 2025' },
  { icon: '🏆', title: 'HSC — Modern College, Pune', sub: '67.33%' },
  { icon: '🌐', title: 'Languages', sub: 'English · Hindi · Marathi' },
  { icon: '❤️', title: 'Interests', sub: 'Open-source · UI/UX · Competitive Programming' },
]

export default function About() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — bio + stats */}
          <div>
            <p className="font-outfit text-gray-300 leading-relaxed mb-4">
              I'm a <span className="text-neon font-medium">Frontend Developer</span> based in Pune,
              with hands-on experience building real-world applications — from social gaming platforms
              to full-stack travel planners.
            </p>
            <p className="font-outfit text-gray-400 leading-relaxed mb-4">
              Currently pursuing my{' '}
              <span className="text-white font-medium">BCA at Manipal University Jaipur</span>{' '}
              (graduating 2027), while actively shipping production-grade software. I worked at{' '}
              <span className="text-white font-medium">Shardeen IT Solutions</span>, where I delivered
              Regnoz — a social platform that boosted user session duration by 45%.
            </p>
            <p className="font-outfit text-gray-400 leading-relaxed mb-8">
              I care deeply about the details: smooth animations, fast load times, accessible markup,
              and code that the next developer will actually enjoy reading. Outside work I enjoy
              open-source contribution, following UI/UX trends, and competitive programming.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#161b27] border border-[#1f2937] rounded-xl p-4 card-hover cursor-default"
                >
                  <div className="font-syne font-bold text-2xl text-neon">{value}</div>
                  <div className="font-fira text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quick facts */}
          <div>
            <div className="bg-[#161b27] border border-[#1f2937] rounded-xl p-6">
              <div className="font-fira text-xs text-neon mb-5">// quick_facts</div>
              {FACTS.map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="flex gap-3 py-3 border-b border-[#1f2937] last:border-0"
                >
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-outfit text-sm text-white">{title}</div>
                    <div className="font-fira text-xs text-gray-500 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
