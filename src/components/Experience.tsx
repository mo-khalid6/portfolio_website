import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Anti-Piracy & Data Specialist',
    company: 'Cyber Theft Watch',
    period: 'Mar 2024 – Present',
    type: 'Remote · Part-Time',
    badge: 'Current',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    bullets: [
      'Implemented Python web scraping automation to gather, verify, and process pirate data — saving 70%+ of manual work',
      'Collected and analyzed 100,000+ piracy-related URLs/links supporting content protection initiatives',
      'Monitored and investigated pirated content across 10–20 platforms, improving detection coverage',
      'Directed and coordinated a small remote team, assigning tasks and reviewing results',
    ],
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Selenium', 'Data Analysis'],
  },
  {
    role: 'Data Specialist',
    company: 'Welz for Import & Export',
    period: 'Apr 2019 – Sep 2024',
    type: 'Suez, Egypt · Full-Time',
    badge: '5.5 yrs',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    bullets: [
      'Maintained high-volume business data across multiple systems at 100% accuracy throughout tenure',
      'Streamlined data entry workflows, improving team efficiency and reducing processing time',
      'Conducted regular data quality audits, eliminating duplicate, incomplete, and inaccurate records',
      'Compiled and interpreted operational data trends to support management decisions',
    ],
    tags: ['SQL', 'Excel', 'Data Quality', 'ETL', 'Reporting'],
  },
  {
    role: 'Data Entry Operator',
    company: 'Rania Abu Bakr Pharmacies',
    period: 'Nov 2019 – Oct 2020',
    type: 'Cairo, Egypt · Full-Time',
    badge: '1 yr',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    bullets: [
      'Entered and updated drug receipts, client records, and inventory data at 100% accuracy during COVID-19',
      'Performed daily data quality checks to ensure compliant, reliable pharmacy data',
      'Analyzed pharmaceutical data trends to support operational decisions during pandemic response',
    ],
    tags: ['Data Entry', 'Inventory', 'Data Quality', 'Excel', 'Compliance'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 w-80 h-80 glow-orb opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal">
            Work History
          </p>
          <h2 className="section-heading reveal delay-100">Work Experience</h2>
          <p className="text-text-secondary mt-6 max-w-xl reveal delay-200">
            5+ years of progressive experience across data-intensive roles in multiple industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item reveal delay-${(i + 1) * 100}`}
            >
              <div
                className="glass-card rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === i}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpanded(expanded === i ? null : i)}
              >
                {/* Card header */}
                <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-label font-bold text-text-primary text-base">{exp.role}</h3>
                      <span className={`text-xs font-label font-semibold px-2 py-0.5 rounded-full border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    <p className="text-text-secondary text-xs mt-1">{exp.period} · {exp.type}</p>
                  </div>

                  {/* Tech tags (always visible) */}
                  <div className="flex flex-wrap gap-1.5 sm:max-w-xs">
                    {exp.tags.map(tag => (
                      <span key={tag} className="skill-pill text-xs">{tag}</span>
                    ))}
                  </div>

                  {/* Expand arrow */}
                  <div className={`text-text-secondary transition-transform duration-300 ml-2 ${expanded === i ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expandable bullets */}
                <div className={`overflow-hidden transition-all duration-400 ${expanded === i ? 'max-h-80' : 'max-h-0'}`}>
                  <div className="px-5 md:px-6 pb-5 border-t border-white/5 pt-4">
                    <ul className="space-y-2.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
