import useTypewriter from '../hooks/useTypewriter'

const ROLES = ['Frontend Developer', 'React Specialist', 'UI Craftsman', 'Full-Stack Builder']

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="hero" className="min-h-screen grid-bg flex items-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-neon/5 blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-neon2/5 blur-3xl pointer-events-none"
        style={{ animation: 'glow2 4s 2s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left — text */}
        <div>
          <div className="badge mb-6">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse-slow" />
            Open to opportunities
          </div>

          <h1 className="font-syne font-bold text-5xl md:text-6xl leading-tight mb-3 text-white">
            Kunal
            <br />
            <span className="gradient-text">Sawant</span>
          </h1>

          {/* Typewriter */}
          <div className="font-fira text-xl text-gray-300 mb-6 h-8 flex items-center gap-0.5">
            <span>{typed}</span>
            <span className="text-neon animate-blink text-2xl leading-none">|</span>
          </div>

          <p className="font-outfit text-gray-400 leading-relaxed mb-8 max-w-md">
            Passionate frontend developer building fast, responsive, and delightful web experiences.
            Skilled in React, JavaScript ES6+, and modern UI engineering — turning complex ideas into
            clean, performant interfaces.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="bg-neon text-ink font-syne font-bold px-6 py-3 rounded hover:bg-neon/90 transition-all text-sm"
              style={{ boxShadow: '0 0 24px rgba(0,245,160,0.25)' }}
            >
              View Projects ↓
            </a>
            <a
              href="#contact"
              className="border border-[#1f2937] text-gray-300 font-outfit px-6 py-3 rounded hover:border-neon/40 hover:text-white transition-all text-sm"
            >
              Contact Me →
            </a>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="mailto:kunalsawant30122612@gmail.com" className="font-fira text-xs text-gray-500 hover:text-neon transition-colors">✉ Email</a>
            <a href="tel:9022519462"                       className="font-fira text-xs text-gray-500 hover:text-neon transition-colors">📞 9022519462</a>
            <a href="https://linkedin.com/in/contact-kunal-sawant" target="_blank" rel="noreferrer" className="font-fira text-xs text-gray-500 hover:text-neon transition-colors">in LinkedIn</a>
          </div>
        </div>

        {/* Right — floating card */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            <div
              className="w-64 h-64 rounded-2xl glow flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg,rgba(0,245,160,0.08),rgba(0,217,245,0.08))',
                border: '1px solid rgba(0,245,160,0.2)',
              }}
            >
              <span className="text-9xl">👨‍💻</span>
              <div className="absolute -top-4 -right-5 bg-[#161b27] border border-[#1f2937] rounded-lg px-3 py-2 font-fira text-xs text-neon whitespace-nowrap">
                const dev = "Kunal";
              </div>
              <div className="absolute -bottom-4 -left-5 bg-[#161b27] border border-[#1f2937] rounded-lg px-3 py-2 font-fira text-xs text-neon2 whitespace-nowrap">
                {`{ code: 'clean' }`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <span className="font-fira text-xs text-gray-600">scroll</span>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
