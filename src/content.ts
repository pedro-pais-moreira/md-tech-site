export const bookingUrl = 'https://script.google.com/macros/s/AKfycbwlkW_-y5hxdmGS1rjT48-RbJRhWu18xaJSDK_8bMCZNxj83sDdbGP79KaHDDFkhQ4/exec'

export const inspirations = [
  {
    id: 'contacto', icon: 'message',
    title: 'Atendimento e marcação',
    context: 'Facilitar o contacto com a equipa e a preparação de cada visita.',
    items: [
      { title: 'Atendimento no WhatsApp', description: 'Apoio a pedidos administrativos, marcações e contactos fora do horário.' },
      { title: 'Formulários digitais', description: 'Recolha de informação antes da consulta, para simplificar a chegada e o trabalho da receção.' },
      { title: 'Recuperação de vagas', description: 'Ligação entre horários que ficam livres e pessoas que aguardam uma consulta.' },
    ],
  },
  {
    id: 'informacao', icon: 'layers',
    title: 'Informação e documentos',
    context: 'Tornar a informação mais acessível a quem precisa dela no dia a dia.',
    items: [
      { title: 'Gestão documental', description: 'Organização de documentos que chegam por diferentes canais, com menos procura e tarefas manuais.' },
      { title: 'Preparação do dia clínico', description: 'Reunião da informação existente para apoiar a preparação das consultas pelos profissionais.' },
    ],
  },
  {
    id: 'operacao', icon: 'reconcile',
    title: 'Acompanhamento da operação',
    context: 'Dar mais visibilidade ao que falta confirmar, acompanhar ou conferir.',
    items: [
      { title: 'Validação de convenções', description: 'Apoio à consulta de acordos e condições relevantes para cada marcação.' },
      { title: 'Circuito de exames', description: 'Acompanhamento de pedidos e pendências ao longo do percurso dos exames.' },
      { title: 'Reconciliação de faturação', description: 'Conferência entre atividade realizada, faturação e pagamentos, para ajudar a identificar diferenças.' },
    ],
  },
]

export const phases = [
  {
    number: '01', title: 'Identificar', subtitle: 'Primeiro, compreender a vossa realidade.',
    description: 'Ouvimos quem faz o trabalho todos os dias. Em conjunto, percorremos os processos, as ferramentas e os pontos em que a informação se perde ou as tarefas se repetem.',
    actions: ['Conhecer os fluxos, as pessoas e os sistemas envolvidos.', 'Escolher uma oportunidade com utilidade e âmbito claros.', 'Definir o que faria a diferença e como o avaliar.'],
    outcome: 'Um problema bem definido e uma prioridade partilhada.',
  },
  {
    number: '02', title: 'Simplificar', subtitle: 'Desenhar o processo antes da tecnologia.',
    description: 'Revemos o que pode ser simplificado e onde a tecnologia ou a inteligência artificial podem ajudar. Desenhamos a solução com a equipa, tendo em conta os sistemas e os dados disponíveis.',
    actions: ['Reduzir passos desnecessários e clarificar responsabilidades.', 'Definir regras, exceções e momentos de validação humana.', 'Preparar um piloto limitado, com critérios de sucesso acordados.'],
    outcome: 'Uma proposta concreta para experimentar em pequena escala.',
  },
  {
    number: '03', title: 'Automatizar', subtitle: 'Começar pequeno. Aprender em conjunto.',
    description: 'Implementamos o piloto com acompanhamento próximo. A equipa experimenta, dá feedback e ajuda a ajustar o processo. Só propomos alargar o âmbito quando os resultados e as condições o justificam.',
    actions: ['Testar num contexto controlado e de menor risco.', 'Apoiar a equipa na utilização e acompanhar as exceções.', 'Avaliar resultados e decidir em conjunto o próximo passo.'],
    outcome: 'Uma decisão informada: ajustar, alargar ou repensar.',
  },
]
