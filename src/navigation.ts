export type Page = 'inicio' | 'casos-de-uso' | 'como-trabalhamos'
export type Location = { page: Page; phase: string | null }

const phaseNumbers: Record<string, string> = {
  identificar: '01',
  simplificar: '02',
  automatizar: '03',
}

export function resolveLocation(hash: string): Location {
  const [path, phase] = hash.replace(/^#\/?/, '').split('/')
  if (path === 'possibilidades' || path === 'casos-de-uso') {
    return { page: 'casos-de-uso', phase: null }
  }
  if (path === 'como-trabalhamos') {
    return { page: 'como-trabalhamos', phase: phaseNumbers[phase] || null }
  }
  return { page: 'inicio', phase: null }
}
