import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'
import { SERVICES } from '../data'

export default function Services() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="services" className="py-24 bg-[#161b27]/50 border-y border-[#1f2937]" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="04" title="What I Do" />
        <p className="font-outfit text-gray-400 mb-12 max-w-xl">
          From idea to deployment — here's how I can help you build something great.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card bg-[#0d0d0d] border border-[#1f2937] rounded-xl p-6 card-hover cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="service-icon text-4xl mb-4">{service.icon}</div>
              <div className="font-syne font-bold text-white mb-2">{service.title}</div>
              <div className="w-10 h-0.5 rounded mb-3" style={{ background: service.color }} />
              <p className="font-outfit text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
