import { useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'
import { TESTIMONIALS } from '../data'

function StarRating({ color }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill={color}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef()
  const visible = useVisible(ref)

  return (
    <section id="testimonials" className="py-24 bg-[#161b27]/50 border-y border-[#1f2937]" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="06" title="Testimonials" />
        <p className="font-outfit text-gray-400 mb-12 max-w-xl">
          What colleagues and leads have said about working with me.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#0d0d0d] border border-[#1f2937] rounded-xl p-6 card-hover flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <StarRating color={t.color} />

              {/* Decorative quote mark */}
              <div
                className="font-serif text-5xl leading-none mb-3"
                style={{ color: t.color, opacity: 0.3 }}
              >
                "
              </div>

              <p className="font-outfit text-sm text-gray-400 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#1f2937]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-sm flex-shrink-0 text-ink"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-syne font-bold text-white text-sm">{t.name}</div>
                  <div className="font-fira text-xs text-gray-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
