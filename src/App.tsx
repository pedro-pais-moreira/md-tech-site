import { useEffect, useRef } from 'react'

function App() {
  const shellRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const precisePointer = window.matchMedia('(pointer: fine)').matches

    if (!shell || reducedMotion || !precisePointer) return

    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0
    let cursorX = window.innerWidth * 0.5
    let cursorY = window.innerHeight * 0.42

    const render = () => {
      currentX += (targetX - currentX) * 0.085
      currentY += (targetY - currentY) * 0.085

      shell.style.setProperty('--cursor-x', `${cursorX.toFixed(1)}px`)
      shell.style.setProperty('--cursor-y', `${cursorY.toFixed(1)}px`)
      shell.style.setProperty('--grid-x', `${(currentX * -11).toFixed(2)}px`)
      shell.style.setProperty('--grid-y', `${(currentY * -9).toFixed(2)}px`)
      shell.style.setProperty('--ambient-one-x', `${(currentX * 17).toFixed(2)}px`)
      shell.style.setProperty('--ambient-one-y', `${(currentY * 12).toFixed(2)}px`)
      shell.style.setProperty('--ambient-two-x', `${(currentX * -11).toFixed(2)}px`)
      shell.style.setProperty('--ambient-two-y', `${(currentY * -8).toFixed(2)}px`)
      shell.style.setProperty('--outer-x', `${(currentX * 7).toFixed(2)}px`)
      shell.style.setProperty('--outer-y', `${(currentY * 5).toFixed(2)}px`)
      shell.style.setProperty('--inner-x', `${(currentX * -5).toFixed(2)}px`)
      shell.style.setProperty('--inner-y', `${(currentY * -4).toFixed(2)}px`)
      shell.style.setProperty('--core-x', `${(currentX * 3).toFixed(2)}px`)
      shell.style.setProperty('--core-y', `${(currentY * 3).toFixed(2)}px`)
      shell.style.setProperty('--card-one-x', `${(currentX * -10).toFixed(2)}px`)
      shell.style.setProperty('--card-one-y', `${(currentY * -7).toFixed(2)}px`)
      shell.style.setProperty('--card-two-x', `${(currentX * 11).toFixed(2)}px`)
      shell.style.setProperty('--card-two-y', `${(currentY * -5).toFixed(2)}px`)
      shell.style.setProperty('--card-three-x', `${(currentX * -7).toFixed(2)}px`)
      shell.style.setProperty('--card-three-y', `${(currentY * 9).toFixed(2)}px`)

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        frame = window.requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const startRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event: PointerEvent) => {
      cursorX = event.clientX
      cursorY = event.clientY
      targetX = (event.clientX / window.innerWidth - 0.5) * 2
      targetY = (event.clientY / window.innerHeight - 0.5) * 2
      startRender()
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
      startRender()
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main className="site-shell" ref={shellRef}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <div className="brand" aria-label="MD Tech">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="brand-name">MD Tech</span>
        </div>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Transformação, processo a processo
            <span aria-hidden="true" />
          </p>
          <h1 id="hero-title">
            Processos mais simples.
            <span>Saúde mais eficiente.</span>
          </h1>

          <div className="process-graphic" aria-label="Identificar, simplificar e automatizar">
            <span className="process-ring process-ring-outer" aria-hidden="true"><i /></span>
            <span className="process-ring process-ring-inner" aria-hidden="true"><i /></span>
            <span className="process-core" aria-hidden="true"><i /><i /><i /></span>
            <span className="process-card process-card-one"><small>01</small><strong>Identificar</strong></span>
            <span className="process-card process-card-two"><small>02</small><strong>Simplificar</strong></span>
            <span className="process-card process-card-three"><small>03</small><strong>Automatizar</strong></span>
          </div>

        </div>

        <div className="status-pill" aria-label="Em desenvolvimento">
          <span aria-hidden="true" />
          Em desenvolvimento
        </div>
      </section>
    </main>
  )
}

export default App
