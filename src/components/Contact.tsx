import { useEffect, useRef, useState, type FormEvent } from 'react'

// Get your free access key at https://web3forms.com — enter your email, they send it
// instantly, no signup/password required. Paste it below. This key is safe to expose
// client-side (Web3Forms is designed for that — it's not a secret like an API key).
const WEB3FORMS_ACCESS_KEY = "441cf9c3-71af-461e-a1c7-8e1c4725edff"
const contactLinks = [
  {
    label: 'Email',
    value: 'muhammad6fouad@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:muhammad6fouad@gmail.com',
    color: 'from-primary/20 to-primary/5 border-primary/20 hover:border-primary/50',
    accent: 'text-primary',
  },
  {
    label: 'Phone',
    value: '+20 109 800 5360',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: 'tel:+201098005360',
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/50',
    accent: 'text-emerald-400',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammadkhalidfouad',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: 'https://linkedin.com/in/muhammadkhalidfouad',
    color: 'from-blue-600/20 to-blue-600/5 border-blue-600/20 hover:border-blue-500/50',
    accent: 'text-blue-400',
  },
  {
    label: 'GitHub',
    value: 'github.com/mo-khalid6',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    href: 'https://github.com/mo-khalid6',
    color: 'from-slate-500/20 to-slate-500/5 border-slate-500/20 hover:border-slate-400/50',
    accent: 'text-slate-300',
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('muhammad6fouad@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Full name is required'
    if (!form.email.trim()) {
      next.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address'
    }
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio inquiry from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-card-surface border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors[field] ? 'border-red-500/60' : 'border-border-accent focus:border-primary/50'
    }`

  return (
    <section id="contact" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 glow-orb opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 glow-orb opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal">
            Get In Touch
          </p>
          <h2 className="section-heading mx-auto reveal delay-100">Let's Work Together</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-3 reveal delay-100" />
          <p className="text-text-secondary mt-6 max-w-lg mx-auto reveal delay-200">
            Open to data analyst roles, freelance projects, and collaborations. Feel free to reach
            out through any channel below — I typically respond within 24 hours.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass-card rounded-xl p-5 border bg-gradient-to-br ${c.color} flex items-center gap-4 transition-all duration-300 group reveal delay-${(i + 1) * 100}`}
              aria-label={`${c.label}: ${c.value}`}
            >
              <div className={`${c.accent} shrink-0`}>
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-label font-semibold text-text-secondary uppercase tracking-wider mb-0.5">
                  {c.label}
                </p>
                <p className={`${c.accent} text-sm font-medium truncate`}>{c.value}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ml-auto shrink-0 ${c.accent} transition-transform group-hover:translate-x-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          ))}
        </div>

        {/* Inquiry form */}
        <div className="glass-card rounded-2xl border border-border-accent p-6 sm:p-8 max-w-2xl mx-auto mb-12 reveal delay-300">
          <h3 className="font-label font-bold text-text-primary text-lg mb-1">Inquiry Form</h3>
          <p className="text-text-secondary text-sm mb-6">I'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-label font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className={inputClass('name')}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-label font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-label font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-text-secondary/60 normal-case font-normal">(optional)</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="(000) 000-0000"
                className={inputClass('phone')}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-label font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role, project, or opportunity..."
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm text-center">
                Thanks! Your message has been sent — I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again, or email me directly at{' '}
                <a href="mailto:muhammad6fouad@gmail.com" className="underline">muhammad6fouad@gmail.com</a>.
              </p>
            )}
          </form>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-500">
          <button
            onClick={copyEmail}
            className="btn-outline px-6 py-3 flex items-center gap-2 text-sm"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Email
              </>
            )}
          </button>

          <a
            href="/Muhammad_Fouad_CV.pdf"
            download
            className="btn-outline px-6 py-3 flex items-center gap-2 text-sm"
            aria-label="Download Muhammad Fouad resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
