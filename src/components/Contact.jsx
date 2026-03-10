import { useState, useRef } from 'react'
import useVisible from '../hooks/useVisible'
import SectionHeader from './SectionHeader'
import { CONTACT_INFO } from '../data'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = '⚠ Name is required'
  else if (form.name.trim().length < 2) errors.name = '⚠ Minimum 2 characters'
  if (!form.email.trim()) errors.email = '⚠ Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = '⚠ Enter a valid email'
  if (!form.subject.trim()) errors.subject = '⚠ Subject is required'
  else if (form.subject.trim().length < 5) errors.subject = '⚠ Minimum 5 characters'
  if (!form.message.trim()) errors.message = '⚠ Message is required'
  else if (form.message.trim().length < 20) errors.message = '⚠ Minimum 20 characters'
  return errors
}

export default function Contact() {
  const ref = useRef()
  const visible = useVisible(ref)

  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = () => {
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    const mailto =
      `mailto:kunalsawant30122612@gmail.com` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`

    window.location.href = mailto

    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus('idle'), 7000)
    }, 900)
  }

  const btnStyle = () => {
    if (status === 'sent') return { background: 'rgba(0,180,255,0.1)', border: '1px solid #00b4ff' }
    if (status === 'error') return { background: 'rgba(248,113,113,0.1)', border: '1px solid #f87171' }
    return { background: '#00b4ff', color: '#0d0d0d' }
  }

  const btnLabel = { idle: '→ Send Message', sending: '⟳ Opening mail app...', sent: '✓ Check your mail app!', error: '✗ Try again' }

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className={`max-w-6xl mx-auto px-5 reveal ${visible ? 'on' : ''}`}>
        <SectionHeader number="07" title="Contact" />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-outfit text-gray-400 leading-relaxed mb-6">
              Got a project, opportunity, or just want to say hi? Drop me a message — I typically
              respond within 24 hours.
            </p>

            {CONTACT_INFO.map(info => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-[#161b27] border border-[#1f2937] rounded-xl hover:border-neon/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center font-fira text-sm text-neon group-hover:bg-neon/20 transition-all">
                  {info.icon}
                </div>
                <div>
                  <div className="font-fira text-xs text-gray-500">{info.label}</div>
                  <div className="font-outfit text-sm text-gray-300 group-hover:text-white transition-colors break-all">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="p-4 bg-[#161b27] border border-neon/20 rounded-xl">
              <div className="font-fira text-xs text-neon mb-2">// availability</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse-slow" />
                <span className="font-outfit text-sm text-gray-300">Open to full-time & freelance</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3 bg-[#161b27] border border-[#1f2937] rounded-xl p-7">
            <div className="font-fira text-xs text-neon mb-6">// send_message()</div>

            <div className="space-y-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-fira text-xs text-gray-500 block mb-2">name *</label>
                  <input
                    className={`form-field ${errors.name ? 'err' : ''}`}
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                  />
                  {errors.name && <div className="emsg">{errors.name}</div>}
                </div>
                <div>
                  <label className="font-fira text-xs text-gray-500 block mb-2">email *</label>
                  <input
                    className={`form-field ${errors.email ? 'err' : ''}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                  {errors.email && <div className="emsg">{errors.email}</div>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="font-fira text-xs text-gray-500 block mb-2">subject *</label>
                <input
                  className={`form-field ${errors.subject ? 'err' : ''}`}
                  placeholder="Job Offer / Project / Collaboration"
                  value={form.subject}
                  onChange={e => handleChange('subject', e.target.value)}
                />
                {errors.subject && <div className="emsg">{errors.subject}</div>}
              </div>

              {/* Message */}
              <div>
                <label className="font-fira text-xs text-gray-500 block mb-2">
                  message * <span className="text-gray-600">(min 20 chars)</span>
                </label>
                <textarea
                  className={`form-field ${errors.message ? 'err' : ''}`}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  style={{ resize: 'vertical' }}
                />
                <div className="flex justify-between">
                  <div>{errors.message && <span className="emsg">{errors.message}</span>}</div>
                  <span className={`font-fira text-xs mt-1 ${form.message.length >= 20 ? 'text-neon' : 'text-gray-600'}`}>
                    {form.message.length}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full py-3 rounded font-syne font-bold text-sm transition-all disabled:opacity-60"
                style={btnStyle()}
              >
                {btnLabel[status]}
              </button>

              {status === 'sent' && (
                <p className="font-fira text-xs text-neon/60 text-center">
                  If the app didn't open →{' '}
                  <a href="mailto:kunalsawant30122612@gmail.com" className="text-neon hover:underline">
                    kunalsawant30122612@gmail.com
                  </a>
                </p>
              )}

              <p className="font-fira text-xs text-gray-600 text-center">
                🔒 Your information is never shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
