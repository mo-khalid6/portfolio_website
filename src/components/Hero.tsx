import { useEffect, useRef } from 'react'

const stats = [
  { value: '5+',    label: 'Years Experience' },
  { value: '100%',  label: 'Data Accuracy' },
  { value: '100K+', label: 'Records Processed' },
  { value: '8',     label: 'Certifications' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* ── WebGL orb shader (from Stitch generated design) ─────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null
    if (!gl) return

    const syncSize = () => {
      const w = canvas.clientWidth  || 800
      const h = canvas.clientHeight || 800
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w
        canvas.height = h
      }
    }
    const ro = new ResizeObserver(syncSize)
    ro.observe(canvas)
    syncSize()

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }`

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      void main() {
        vec2 uv = v_texCoord;
        vec2 orbPos = vec2(0.8, 0.75);
        orbPos.x += sin(u_time * 0.4) * 0.06;
        orbPos.y += cos(u_time * 0.35) * 0.06;
        float dist = distance(uv, orbPos);
        // Cyan core (#00D4FF)
        vec3 cyanColor   = vec3(0.0, 0.831, 1.0);
        // Purple ring (#7C3AED)
        vec3 purpleColor = vec3(0.486, 0.227, 0.929);
        float coreStr    = smoothstep(0.38, 0.0, dist);
        float ringStr    = smoothstep(0.55, 0.25, dist) * (1.0 - coreStr);
        vec3 bgColor     = vec3(0.039, 0.059, 0.118);
        vec3 blended     = mix(cyanColor, purpleColor, ringStr * 0.6);
        vec3 finalColor  = mix(bgColor, blended, (coreStr + ringStr) * 0.45);
        gl_FragColor     = vec4(finalColor, 1.0);
      }`

    const mkShader = (type: number, src: string) => {
      const s = (gl as WebGLRenderingContext).createShader(type)!
      ;(gl as WebGLRenderingContext).shaderSource(s, src)
      ;(gl as WebGLRenderingContext).compileShader(s)
      return s
    }
    const prog = (gl as WebGLRenderingContext).createProgram()!
    ;(gl as WebGLRenderingContext).attachShader(prog, mkShader((gl as WebGLRenderingContext).VERTEX_SHADER, vs))
    ;(gl as WebGLRenderingContext).attachShader(prog, mkShader((gl as WebGLRenderingContext).FRAGMENT_SHADER, fs))
    ;(gl as WebGLRenderingContext).linkProgram(prog)
    ;(gl as WebGLRenderingContext).useProgram(prog)

    const buf = (gl as WebGLRenderingContext).createBuffer()
    ;(gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, buf)
    ;(gl as WebGLRenderingContext).bufferData((gl as WebGLRenderingContext).ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), (gl as WebGLRenderingContext).STATIC_DRAW)

    const pos = (gl as WebGLRenderingContext).getAttribLocation(prog, 'a_position')
    ;(gl as WebGLRenderingContext).enableVertexAttribArray(pos)
    ;(gl as WebGLRenderingContext).vertexAttribPointer(pos, 2, (gl as WebGLRenderingContext).FLOAT, false, 0, 0)

    const uTime = (gl as WebGLRenderingContext).getUniformLocation(prog, 'u_time')
    const uRes  = (gl as WebGLRenderingContext).getUniformLocation(prog, 'u_resolution')

    let rafId: number
    const render = (t: number) => {
      syncSize()
      ;(gl as WebGLRenderingContext).viewport(0, 0, canvas.width, canvas.height)
      if (uTime) (gl as WebGLRenderingContext).uniform1f(uTime, t * 0.001)
      if (uRes)  (gl as WebGLRenderingContext).uniform2f(uRes, canvas.width, canvas.height)
      ;(gl as WebGLRenderingContext).drawArrays((gl as WebGLRenderingContext).TRIANGLE_STRIP, 0, 4)
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)
    return () => { cancelAnimationFrame(rafId); ro.disconnect() }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-background"
    >
      {/* WebGL animated orb (top-right) */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none z-0 opacity-70">
        <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      </div>

      {/* Grid dot overlay */}
      <div className="absolute inset-0 z-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl flex flex-col items-start">

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 reveal">
            <span aria-hidden="true">📍</span>
            <span className="text-sm font-label font-medium text-primary tracking-wide">Cairo, Egypt</span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-text-primary mb-4 reveal delay-100">
            Hi, I'm{' '}
            <span className="gradient-text">Muhammad Fouad</span>
          </h1>

          {/* Sub-headline */}
          <h2 className="font-display font-semibold text-xl md:text-2xl text-primary mb-6 flex flex-wrap items-center gap-3 reveal delay-200">
            Data Analyst
            <span className="text-secondary opacity-60 hidden sm:inline">|</span>
            <span className="text-lg md:text-xl text-text-secondary font-medium">SQL · Power BI · Python</span>
          </h2>

          {/* Summary */}
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-body reveal delay-300">
            Results-driven Data Analyst with 5+ years transforming complex datasets into actionable
            business intelligence. Specialized in building interactive dashboards, optimizing SQL
            queries, and uncovering data trends across import/export, pharmacy, and digital media
            industries.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 reveal delay-400">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary px-8 py-3.5 text-base flex items-center justify-center gap-2 group"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline px-8 py-3.5 text-base flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>

          {/* KPI Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full reveal delay-500">
            {stats.map((s, i) => (
              <div key={i} className="stat-box">
                <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-text-secondary font-label uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-xs text-text-secondary font-label tracking-widest uppercase">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
