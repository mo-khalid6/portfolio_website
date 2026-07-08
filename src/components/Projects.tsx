import { useEffect, useRef, useState } from 'react'

interface Project {
  title: string
  emoji: string
  description: string
  bullets: string[]
  tags: string[]
  accent: string
  link: string
  featured: boolean
  /** Paths under /public, e.g. '/projects/sentiment-ai/1.png'. Add real screenshots here. */
  images?: string[]
  /** Optional path under /public or external URL (e.g. YouTube embed link) */
  video?: string
}

const projects: Project[] = [
  {
    title: 'Sentiment AI — NLP Web App',
    emoji: '🧠',
    description:
      'Full-stack NLP application for real-time text sentiment analysis and summarization. Backend uses HuggingFace Transformers (cardiffnlp/twitter-roberta-base-sentiment-latest for sentiment, sshleifer/distilbart-cnn-12-6 for summarization) with SQLite/SQLAlchemy. Includes a working CI/CD pipeline via GitHub Actions.',
    bullets: [
      'Real-time sentiment classification (positive / negative / neutral) with confidence scores',
      'Automatic text summarization for long-form input using a distilled BART model',
      'FastAPI backend with SQLAlchemy + SQLite for request history and analytics',
      'React 19 + TypeScript + Tailwind frontend with a clean, responsive UI',
      'Automated testing and deployment via a GitHub Actions CI/CD pipeline',
    ],
    tags: ['FastAPI', 'React 19', 'TypeScript', 'HuggingFace', 'Python', 'SQLite', 'Tailwind CSS', 'GitHub Actions'],
    accent: 'from-cyan-500 to-blue-600',
    link: 'https://github.com/mo-khalid6/SentimentAnalysisDigi',
    featured: true,
    images: ['/projects/sentiment-ai/1.png', '/projects/sentiment-ai/2.png'],
  },
  {
    title: 'Power BI Executive Dashboard Theme',
    emoji: '📊',
    description:
      'Dark-mode, orange-accented executive theme JSON for enterprise Power BI dashboards. Designed for senior leadership reporting with high contrast, branded color tokens, and consistent typography for data storytelling.',
    bullets: [
      'Custom Power BI theme JSON with a full dark-mode color system',
      'High-contrast, accessible palette designed for boardroom/executive reporting',
      'Consistent typography scale across titles, KPI cards, and axis labels',
      'Reusable across multiple report templates for brand consistency',
    ],
    tags: ['Power BI', 'JSON', 'DAX', 'Dark Mode', 'Data Visualization'],
    accent: 'from-orange-500 to-amber-600',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/powerbi-theme/1.png'],
  },
  {
    title: 'Telecom Customer Churn Data Model',
    emoji: '📡',
    description:
      'Star schema dimensional model with fact table and 6 dimension tables for telecom churn analysis. Built with Power Query transformations and DAX measures for churn rate KPIs and customer segmentation reporting.',
    bullets: [
      'Star schema design: 1 fact table + 6 dimension tables for clean, fast queries',
      'Power Query transformations for cleaning and shaping raw telecom data',
      'DAX measures for churn rate, customer lifetime value, and segment breakdowns',
      'Built to support drill-down reporting for customer retention strategy',
    ],
    tags: ['Power BI', 'Power Query', 'DAX', 'Star Schema', 'Data Modeling'],
    accent: 'from-violet-500 to-purple-700',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/churn-model/1.png'],
  },
  {
    title: 'Interactive Sales KPI Dashboard',
    emoji: '📈',
    description:
      'HTML/Chart.js dashboard with dynamic date-range filtering for a TeleSales dataset. Features real-time KPI cards, interactive bar/line charts, responsive layout, and export capabilities for management reporting.',
    bullets: [
      'Dynamic date-range filter that recalculates every KPI and chart live',
      'Interactive bar and line charts built with Chart.js',
      'Fully responsive layout for desktop and tablet reporting',
      'Export-ready views for management presentations',
    ],
    tags: ['HTML', 'JavaScript', 'Chart.js', 'CSS', 'Data Visualization'],
    accent: 'from-emerald-500 to-teal-600',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/sales-kpi/1.png'],
  },
  {
    title: 'Sales & Product Performance Dashboard',
    emoji: '🛒',
    description:
      'Executive BI dashboard analyzing sales performance across products, stores, and regions. Tracks profit, revenue, and unit sales at a glance, with a geographic revenue map and ranked breakdowns of top products and top-performing stores.',
    bullets: [
      'KPI strip covering Profit ($1.1M), Sales ($1.8M), Units Sold (833K), Brands (111), and Products (1.6K)',
      'Choropleth map visualizing total revenue by region across North America',
      'Revenue breakdown by store type (Supermarket, Deluxe Supermarket, Gourmet Supermarket, Mid-Size Grocery, Small Grocery)',
      'Top 10 products and top 10 stores ranked by revenue for fast pattern-spotting',
      'Interactive slicers for Store Type and Country to filter the whole report live',
    ],
    tags: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization', 'Dashboard Design'],
    accent: 'from-green-600 to-emerald-700',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/sales-bi-dashboard/1.png'],
  },
  {
    title: 'Customer Behavior Intelligence Dashboard',
    emoji: '📋',
    description:
      'Fully interactive Excel dashboard analyzing customer behavior across channels, regions, and segments. Built with PivotTables, PivotCharts, and slicers so stakeholders can explore the data without touching a formula.',
    bullets: [
      'KPI cards for Total Customers, Top Product, and Completed Orders, updating live with slicer selections',
      'Channel breakdown (Online vs. In-Store) and segment distribution (New / Regular / VIP) via donut and pie charts',
      'Regional analysis of customers by city (Cairo, Alexandria, Giza, Aswan, Tanta, Mansoura)',
      'Order-trend line chart across months alongside a ranked leaderboard of top customers by completed orders',
      'Region and Segment slicers let any stakeholder filter the entire dashboard interactively',
    ],
    tags: ['Excel', 'PivotTables', 'Power Query', 'Data Visualization', 'Dashboard Design'],
    accent: 'from-blue-600 to-indigo-700',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/excel-customer-dashboard/1.png'],
  },
  {
    title: 'n8n AI Workflow Automation',
    emoji: '🤖',
    description:
      'Two production automation workflows built in n8n, combining AI agents with structured business logic: an AI-powered feedback sentiment pipeline and a multi-agent marketing content system.',
    bullets: [
      'Feedback pipeline: a form submission triggers a Google Gemini AI Agent with a structured output parser, routes the result through a conditional (If) node, then logs it to Google Sheets or sends a Gmail notification',
      'Marketing multi-agent system: independent Brand, Paid Ads, and Content agents (each backed by Google Gemini) run in parallel, merge their outputs, and feed a CMO Summary Agent for a consolidated report',
      'Custom JavaScript code node for merging and reshaping multi-agent output before summarization',
      'Demonstrates practical LLM-orchestration and workflow automation beyond traditional ETL scripting',
    ],
    tags: ['n8n', 'Google Gemini', 'AI Agents', 'Google Sheets API', 'Gmail API', 'JavaScript', 'Workflow Automation'],
    accent: 'from-rose-500 to-pink-700',
    link: 'https://github.com/mo-khalid6',
    featured: false,
    images: ['/projects/n8n-automation/1.png', '/projects/n8n-automation/2.png'],
  },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-primary/20 shadow-2xl">
        {/* Gradient top bar */}
        <div className={`h-1.5 bg-gradient-to-r ${project.accent} sticky top-0 z-10`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-background/60 text-text-secondary hover:text-text-primary hover:bg-background/90 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          {/* Title */}
          <div className="flex items-center gap-3 mb-5 pr-10">
            <span className="text-3xl" aria-hidden="true">{project.emoji}</span>
            <h3 className="font-label font-bold text-text-primary text-lg sm:text-xl">
              {project.title}
            </h3>
          </div>

          {/* Media area — video takes priority, else image gallery, else placeholder */}
          {project.video ? (
            <div className="mb-6 rounded-xl overflow-hidden border border-border-accent bg-black aspect-video">
              <iframe
                src={project.video}
                title={`${project.title} demo video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.images && project.images.length > 0 ? (
            <div className={`grid gap-3 mb-6 ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {project.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-40 sm:h-48 object-cover rounded-xl border border-border-accent bg-card-surface"
                  onError={e => {
                    // Graceful fallback if the screenshot hasn't been added yet
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="mb-6 rounded-xl border border-dashed border-border-accent bg-card-surface/50 h-40 flex items-center justify-center">
              <p className="text-text-secondary text-sm">Screenshots coming soon</p>
            </div>
          )}

          {/* Summary */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Bullet points */}
          <ul className="space-y-2.5 mb-6">
            {project.bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map(tag => (
              <span key={tag} className="skill-pill text-xs">{tag}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <button onClick={onClose} className="btn-outline px-6 py-2.5 text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 glow-orb opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-primary font-label font-semibold text-sm tracking-widest uppercase mb-3 reveal">
            Portfolio
          </p>
          <h2 className="section-heading reveal delay-100">Featured Projects</h2>
          <p className="text-text-secondary mt-6 max-w-xl reveal delay-200">
            A selection of data projects spanning NLP, business intelligence, data modeling, and interactive visualization.
            Click a project to see more details.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i) }}
              className={`glass-card rounded-xl overflow-hidden group transition-all duration-300 cursor-pointer hover:border-primary/50 reveal delay-${Math.min((i + 1) * 100, 500)} ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

              <div className={`p-6 ${project.featured ? 'md:flex md:gap-8' : ''}`}>
                {/* Icon + Title row */}
                <div className={project.featured ? 'md:flex-1' : ''}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">{project.emoji}</span>
                      <h3 className="font-label font-bold text-text-primary text-base md:text-lg">
                        {project.title}
                      </h3>
                    </div>
                    {project.featured && (
                      <span className="text-xs font-label font-semibold px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="skill-pill text-xs">{tag}</span>
                    ))}
                  </div>

                  {/* GitHub link — stop propagation so it doesn't also open the modal */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm font-label font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10 reveal delay-500">
          <a
            href="https://github.com/mo-khalid6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {activeIndex !== null && (
        <ProjectModal project={projects[activeIndex]} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
