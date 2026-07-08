import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: '🗄️', label: 'SQL & Databases',       desc: 'Intermediate-Advanced SQL, MS SQL Server, database design' },
    { icon: '📊', label: 'Business Intelligence',  desc: 'Power BI dashboards with DAX, Power Query, executive reporting' },
    { icon: '🐍', label: 'Python & Automation',    desc: 'Pandas, NumPy, web scraping (BS4/Selenium), workflow automation' },
    { icon: '🔬', label: 'Data Quality & ETL',     desc: 'Cleaning, validation, deduplication, 100% accuracy track record' },
  ]

  return (
    <section id="about" ref={ref} className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 glow-orb opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Heading + Summary */}
          <div>
            <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal-left">
              About Me
            </p>
            <h2 className="section-heading reveal-left delay-100">
              Turning Data Into<br />Strategic Decisions
            </h2>
            <p className="text-text-secondary leading-relaxed mt-6 mb-6 reveal-left delay-200">
              Results-driven Data Analyst with 5+ years of progressive experience in data operations,
              analysis, and management across import/export, pharmacy, and digital media industries.
              Proficient in SQL, Python, Excel, and data preprocessing with a track record of
              delivering accurate, high-quality data products under tight deadlines.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8 reveal-left delay-300">
              Skilled in automating workflows, building reliable databases, and translating data
              trends into actionable business insights. Currently expanding into advanced SQL,
              machine learning, and statistical analysis.
            </p>

            {/* Languages */}
            <div className="reveal-left delay-400">
              <p className="text-sm font-label font-semibold text-text-secondary uppercase tracking-wider mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'Arabic',  level: 'Native' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Italian', level: 'Basic' },
                  { lang: 'Deutsch', level: 'Basic' },
                ].map(({ lang, level }) => (
                  <span key={lang} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card-surface border border-border-accent text-sm font-label text-text-primary">
                    <span className="text-primary font-semibold">{lang}</span>
                    <span className="text-text-secondary text-xs">· {level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Education badge */}
            <div className="mt-8 glass-card rounded-xl p-5 reveal-left delay-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <p className="font-label font-semibold text-text-primary">
                    B.Sc. Management Information Systems
                  </p>
                  <p className="text-text-secondary text-sm mt-0.5">Suez Institute for MIS · May 2024</p>
                  <p className="text-primary text-sm font-semibold mt-1">GPA 3.4 / 4.0 · Graduation Project: Excellent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-6 transition-all duration-300 reveal delay-${(i + 1) * 100}`}
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-label font-semibold text-text-primary mb-1.5">{h.label}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
