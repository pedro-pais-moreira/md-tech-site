import { useEffect, useRef, useState } from 'react'
import { bookingUrl, inspirations, phases } from './content'
import { resolveLocation } from './navigation'

function Arrow({ external = false }: { external?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={external ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} /></svg>
}

function Icon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    document: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Zm0 0v5h5M8 12h8M8 16h5',
    message: 'M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6 3V6a2 2 0 0 1 2-2ZM7 9h10M7 13h7',
    layers: 'm12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5',
    form: 'M8 4H5v17h14V4h-3M8 2h8v5H8V2ZM8 12h8M8 16h5',
    check: 'M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6',
    route: 'M5 5h10a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h10M16 18l3 3-3 3M5 2v6',
    calendar: 'M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2ZM7 2v6M17 2v6M3 10h18M7 14h3M14 14h3',
    reconcile: 'M4 5h11M11 2l4 3-4 3M20 19H9m4-3-4 3 4 3M4 11h7M4 15h3M17 9h3M14 13h6',
  }
  return <svg viewBox="0 0 24 26" width="24" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind] || paths.document} /></svg>
}

function BookingLink({ compact = false }: { compact?: boolean }) {
  return <a className={compact ? 'nav-booking' : 'button-primary'} href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar uma conversa — abre numa nova aba">{compact ? 'Vamos conversar' : 'Agendar uma conversa'}<Arrow external /></a>
}

function ProcessGraphic() {
  return <nav className="process-graphic" aria-label="Conhecer como trabalhamos">
    <span className="process-ring process-ring-outer" aria-hidden="true"><i /></span>
    <span className="process-ring process-ring-inner" aria-hidden="true"><i /></span>
    <span className="process-core" aria-hidden="true"><i /><i /><i /></span>
    <a href="#/como-trabalhamos/identificar" className="process-card process-card-one"><small>01</small><strong>Identificar</strong><Arrow /></a>
    <a href="#/como-trabalhamos/simplificar" className="process-card process-card-two"><small>02</small><strong>Simplificar</strong><Arrow /></a>
    <a href="#/como-trabalhamos/automatizar" className="process-card process-card-three"><small>03</small><strong>Automatizar</strong><Arrow /></a>
  </nav>
}

function Conversation({ title = 'Qual é o processo que gostariam de simplificar?' }: { title?: string }) {
  return <section className="conversation" aria-label="Conversar com a Valentis">
    <div><p className="section-label">O próximo passo começa com uma conversa</p><h2>{title}</h2><p>30 minutos para conhecer a vossa realidade e explorar possibilidades.</p></div>
    <BookingLink />
  </section>
}

function Home() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span />Transformação, processo a processo<span /></p>
      <h1 id="hero-title">Processos mais simples.<span>Saúde mais eficiente.</span></h1>
    </div>
    <ProcessGraphic />
    <div className="hero-cta"><div className="hero-actions"><BookingLink /><a className="button-secondary" href="#/casos-de-uso">Explorar casos de uso<Arrow /></a></div>
      <p className="hero-caption">Uma conversa de 30 minutos. Um primeiro passo em conjunto.</p></div>
  </section>
}

function CasesPage() {
  return <div className="content-page inspiration-page use-cases-page">
    <div className="page-heading inspiration-heading"><p className="section-label">Casos de uso</p><h1>Menos trabalho repetitivo.<br /><span>Mais tempo para a sua equipa.</span></h1><p>Do primeiro contacto à organização interna, a tecnologia pode simplificar muitas tarefas na saúde. Estes casos de uso são pontos de partida para descobrir onde pode fazer a diferença na vossa realidade.</p></div>
    <p className="cases-intro-label">Alguns exemplos do que podemos fazer</p>
    <div className="inspiration-stories">{inspirations.map(item => <section className="inspiration-story" key={item.id} aria-labelledby={`idea-${item.id}`}>
      <div className="case-area-heading"><div className="inspiration-prompt"><span className="inspiration-icon"><Icon kind={item.icon} /></span><h2 id={`idea-${item.id}`}>{item.title}</h2></div><p>{item.context}</p></div>
      <div className="case-area-items">{item.items.map(useCase => <article key={useCase.title}><h3>{useCase.title}</h3><p>{useCase.description}</p></article>)}</div>
    </section>)}</div>
    <section className="open-possibilities"><span className="open-mark" aria-hidden="true" /><div><h2>O vosso desafio pode ser outro.</h2><p>O melhor ponto de partida é aquilo que ocupa a vossa equipa. Queremos ouvir os processos, as dificuldades e as ideias que ainda não encontraram espaço para avançar.</p></div></section>
    <Conversation />
  </div>
}

function MethodPage() {
  return <div className="content-page method-page">
    <div className="page-heading"><p className="section-label">Como trabalhamos</p><h1>A tecnologia é uma parte.<br /><span>A vossa equipa é o ponto de partida.</span></h1><p>Cada organização tem a sua realidade. Trabalhamos lado a lado para encontrar um primeiro passo útil, experimentar e evoluir com critério.</p></div>
    <div className="phase-list">{phases.map(phase => <section className="phase" key={phase.number} aria-labelledby={`phase-${phase.number}`}><div className="phase-marker"><span>{phase.number}</span><h2 id={`phase-${phase.number}`}>{phase.title}</h2></div><div className="phase-copy"><h3>{phase.subtitle}</h3><p>{phase.description}</p><ul>{phase.actions.map(action => <li key={action}>{action}</li>)}</ul><div className="phase-outcome"><span>O que fica desta fase</span><p>{phase.outcome}</p></div></div></section>)}</div>
    <section className="principles" aria-label="Princípios de trabalho"><div><span>Em conjunto</span><h3>Quem conhece o processo participa na solução.</h3><p>Envolvemos as pessoas que o utilizam e ajustamos a proposta ao seu feedback.</p></div><div><span>Com critério</span><h3>Um piloto antes de um compromisso maior.</h3><p>Âmbito limitado, menor risco e resultados avaliados antes de avançar.</p></div><div><span>Com controlo</span><h3>As decisões importantes continuam com a equipa.</h3><p>Definimos acessos, tratamento de dados e validações humanas desde o início.</p></div></section>
    <Conversation title="Comecemos pelo que vos ocupa mais tempo." />
  </div>
}

function App() {
  const shellRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const hasNavigated = useRef(false)
  const [{ page, phase }, setLocation] = useState(() => resolveLocation(window.location.hash))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => {
      hasNavigated.current = true
      setLocation(resolveLocation(window.location.hash))
      setMenuOpen(false)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.title = page === 'inicio' ? 'Valentis — Tecnologia para a saúde' : `${page === 'casos-de-uso' ? 'Casos de uso' : 'Como trabalhamos'} — Valentis`
    if (!hasNavigated.current && !phase) return
    let cancelled = false
    const positionPage = () => {
      if (cancelled) return
      const target = phase ? document.getElementById(`phase-${phase}`)?.closest<HTMLElement>('.phase') : null
      if (target) {
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
        target.scrollIntoView({ block: 'start', behavior: 'instant' })
      } else {
        mainRef.current?.focus({ preventScroll: true })
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    const frame = window.requestAnimationFrame(positionPage)
    // A direct link may open before webfonts load and change section heights.
    document.fonts.ready.then(positionPage)
    return () => { cancelled = true; window.cancelAnimationFrame(frame) }
  }, [page, phase])

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
    <div className="site-shell" ref={shellRef}>
      <a className="skip-link" href="#conteudo" onClick={event => { event.preventDefault(); mainRef.current?.focus(); mainRef.current?.scrollIntoView() }}>Saltar para o conteúdo</a>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#/" aria-label="Valentis — início" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">Valentis</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Fechar' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus() } }}>
          <a href="#/casos-de-uso" aria-current={page === 'casos-de-uso' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Casos de uso</a>
          <a href="#/como-trabalhamos" aria-current={page === 'como-trabalhamos' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Como trabalhamos</a>
          <BookingLink compact />
        </nav>
      </header>
      <main id="conteudo" tabIndex={-1} ref={mainRef} key={page} className="page-content">
        {page === 'inicio' ? <Home /> : page === 'casos-de-uso' ? <CasesPage /> : <MethodPage />}
      </main>
      {page !== 'inicio' && <footer className="site-footer"><a className="brand" href="#/">Valentis</a><span>Processo a processo. Em conjunto.</span><a href="#/casos-de-uso">Explorar casos de uso<Arrow /></a></footer>}
    </div>
  )
}

export default App
