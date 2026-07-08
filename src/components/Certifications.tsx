import { useEffect, useRef } from 'react'

const certs = [
  
    {
    title: "CS50's Databases with SQL",
    issuer: 'edX / Harvard University',
    year: '2024',
    icon: '🏛️',
    color: 'from-red-500/20 to-red-500/5',
    border: 'border-red-500/20',
  },
  {
    title: 'FastAPI',
    issuer: 'DataCamp',
    year: '2026',
    icon: '⚡',
    color: 'from-teal-500/20 to-teal-500/5',
    border: 'border-teal-500/20',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/d2c58dfdcb1c2e3d427f7669fa137c1642f6e543',
  },
  {
    title: 'Data Preparation in Excel',
    issuer: 'DataCamp',
    year: '2024',
    icon: '📗',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/b0e5fbf7d8442906b488e5ff6f6c6580d11669ac',
  },
  {
    title: 'Web Scraping in Python',
    issuer: 'DataCamp',
    year: '2023',
    icon: '🕷️',
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/880ed3591a2f73915224051b5e5a20c84f8da96c',
  },
  {
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    year: '2023',
    icon: '🗄️',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/c4f8b9a09315b0b670a907efcda312ed9d88c171',
  },
  {
    title: 'Database Fundamentals',
    issuer: 'MaharaTech',
    year: '2023',
    icon: '🔑',
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/20',
  },
  {
    title: 'Object-Oriented Programming in Python',
    issuer: 'DataCamp',
    year: '2023',
    icon: '🐍',
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/20',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/3b7d7d465a8e4ff415a0b49b81c4251f794ce6b2',
  },
  {
    title: 'Supervised Learning with scikit-learn',
    issuer: 'DataCamp',
    year: '2023',
    icon: '🤖',
    color: 'from-fuchsia-500/20 to-fuchsia-500/5',
    border: 'border-fuchsia-500/20',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/3b33616490d17501d4c5df484df491bd9765400a',
  },
]

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={ref} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-64 glow-orb opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal">
            Credentials
          </p>
          <h2 className="section-heading mx-auto reveal delay-100">Certifications</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-3 reveal delay-100" />
          <p className="text-text-secondary mt-6 max-w-lg mx-auto reveal delay-200">
            More than 10 professional certifications across SQL, Python, Excel, FastAPI, and data analysis from
            Harvard, DataCamp, Forage, and MaharaTech.
          </p>
        </div>

        {/* Summary card — its own centered row */}
        <div className="flex justify-center mb-8">
          <div className="glass-card rounded-xl p-6 border border-primary/30 reveal delay-200 flex flex-col justify-center items-center text-center w-full sm:w-80">
            <div className="text-4xl font-display font-bold text-primary mb-2">10</div>
            <p className="text-text-secondary text-sm font-label">Total Certifications</p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
            <p className="text-text-secondary text-xs mt-3 leading-relaxed">
              SQL · Python · Excel · Automation · Data Analysis
            </p>
          </div>
        </div>

        {/* Certs grid — 4 columns × 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => {
            const Wrapper = cert.url ? 'a' : 'div'
            return (
              <Wrapper
                key={i}
                {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`glass-card rounded-xl p-5 border ${cert.border} reveal delay-${Math.min((i + 1) * 100, 500)} group ${cert.url ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} mb-4 text-xl`}>
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="font-label font-semibold text-text-primary text-sm leading-snug mb-2 flex items-center gap-1.5">
                  {cert.title}
                  {cert.url && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-primary shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs">{cert.issuer}</p>
                  <span className="text-xs font-label font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {cert.year}
                  </span>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
