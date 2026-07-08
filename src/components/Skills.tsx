import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Data Analysis & Query',
    icon: '📈',
    color: 'from-cyan-500/20 to-cyan-500/5',
    skills: ['SQL (Intermediate-Advanced)', 'Python (Pandas, Matplotlib, NumPy)', 'Excel (Advanced)', 'DAX', 'Statistical Analysis'],
  },
  {
    title: 'Data Preprocessing & ETL',
    icon: '🔄',
    color: 'from-purple-500/20 to-purple-500/5',
    skills: ['Data Cleaning', 'Data Quality Control', 'Data Validation', 'Deduplication', 'Power Query'],
  },
  {
    title: 'Automation & Scripting',
    icon: '⚙️',
    color: 'from-emerald-500/20 to-emerald-500/5',
    skills: ['Python Scripting', 'Web Scraping (BeautifulSoup, Scrapy, Selenium)', 'Workflow Automation', 'N8N'],
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    color: 'from-blue-500/20 to-blue-500/5',
    skills: ['Database Design', 'MS SQL Server', 'Data Entry Systems', 'Database Fundamentals'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-amber-500/20 to-amber-500/5',
    skills: ['Power BI', 'MS Office 365', 'Jupyter Notebook', 'Git & GitHub', 'Google Sheets'],
  },
  {
    title: 'Machine Learning (Foundational)',
    icon: '🤖',
    color: 'from-rose-500/20 to-rose-500/5',
    skills: ['Scikit-learn', 'Keras', 'OpenCV', 'HuggingFace Transformers'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 glow-orb opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal">
            Technical Skills
          </p>
          <h2 className="section-heading mx-auto reveal delay-100">
            Tools & Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-3 reveal delay-100" />
          <p className="text-text-secondary mt-6 max-w-xl mx-auto reveal delay-200">
            A curated stack built through 5+ years of hands-on data work across diverse industries.
          </p>
        </div>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`glass-card rounded-xl p-6 reveal delay-${Math.min((catIdx + 1) * 100, 500)}`}
            >
              {/* Category header */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-br ${cat.color} px-3 py-1.5 rounded-lg mb-4`}>
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <h3 className="font-label font-semibold text-text-primary text-sm">{cat.title}</h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-pill text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
