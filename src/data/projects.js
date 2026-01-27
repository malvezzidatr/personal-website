export const projects = [
  {
    id: 1,
    title: 'Pix Livelo',
    description: 'Aplicativo mobile para pagamento com pontos Livelo via Pix.',
    details: 'Primeira solução do segmento de fidelidade no Brasil a permitir pagamento de compras utilizando pontos através da tecnologia Pix. O produto pode ser utilizado em qualquer estabelecimento comercial, físico ou digital, que aceite Pix. O usuário acessa o app, seleciona a opção Pix, realiza a leitura do QR Code e o pagamento é processado com conversão automática de pontos. Suporta limites de até R$ 1.500 por transação e até 5 transações diárias.',
    tech: ['React Native', 'TypeScript', 'Micro Serviços'],
    role: 'Desenvolvimento Mobile',
    highlights: [
      'Integração com sistema de pagamentos Pix via QR Code',
      'Conversão em tempo real de pontos para valor monetário',
      'Arquitetura baseada em Micro Serviços',
      'Testes unitários com Jest e React Testing Library'
    ]
  },
  {
    id: 2,
    title: 'Acúmulo por Nota Fiscal',
    description: 'Funcionalidade mobile para acúmulo de pontos via escaneamento de notas fiscais.',
    details: 'Recurso no aplicativo Livelo que permite aos usuários acumular pontos digitalizando notas fiscais de compras em parceiros comerciais. O sistema aceita NF-e, NFC-e e SAT, processando a validação da nota e creditando pontos conforme regras de cada campanha. O usuário escaneia o QR Code da nota ou digita os 44 números da chave de acesso.',
    tech: ['React Native', 'TypeScript', 'Micro Serviços'],
    role: 'Desenvolvimento Mobile',
    highlights: [
      'Leitura de QR Code e input manual de chaves de acesso',
      'Validação de diferentes tipos de notas (NF-e, NFC-e, SAT)',
      'Sistema de campanhas com regras dinâmicas de pontuação',
      'Integração com parceiros comerciais diversos'
    ]
  },
  {
    id: 3,
    title: 'Pontos Viram Dinheiro',
    description: 'Produto que permite troca de pontos Livelo por depósito em conta bancária.',
    details: 'Serviço de cashback da Livelo que permite aos clientes converterem seus pontos acumulados em dinheiro, recebendo o valor diretamente na conta bancária. Suporta mais de 100 instituições financeiras, com opções de transferência manual ou automática recorrente. O mínimo para resgate é de 350 pontos, com limite de até 50.000 pontos e 8 transações por mês.',
    tech: ['React Native', 'TypeScript', 'Micro Serviços'],
    role: 'Desenvolvimento Mobile',
    highlights: [
      'Integração com mais de 100 instituições financeiras',
      'Sistema de transferência automática recorrente',
      'Conversão em tempo real de pontos para valor em reais',
      'Fluxo de cashback com validação de CPF e conta bancária'
    ]
  },
  {
    id: 4,
    title: 'Livelo Empresas',
    description: 'Plataforma B2B para distribuição de pontos Livelo para funcionários de empresas.',
    details: 'Solução empresarial que permite às organizações comprarem pacotes de pontos e distribuírem para seus colaboradores como forma de incentivo, premiação ou benefício. A empresa define quantos pontos deseja enviar, para quais funcionários e quando. Os colaboradores podem usar os pontos para resgatar produtos, viagens, experiências e serviços no catálogo Livelo.',
    tech: ['React', 'TypeScript', 'Micro Frontends'],
    role: 'Desenvolvimento Web',
    highlights: [
      'Portal de gestão para administradores de empresas',
      'Sistema de distribuição em lote de pontos para CPFs',
      'Dashboard de acompanhamento de uso e engajamento',
      'Arquitetura de Micro Frontends para escalabilidade'
    ]
  },
  {
    id: 5,
    title: 'Campanha Empresarial',
    description: 'Produto onde empresas criam campanhas para funcionários gastarem pontos em uma loja exclusiva.',
    details: 'Plataforma que permite às empresas criarem campanhas personalizadas com loja exclusiva para seus colaboradores. A empresa configura a campanha, define metas e objetivos, e os funcionários que atingem os resultados recebem pontos para gastar em uma loja dedicada com produtos, viagens e experiências selecionados. A plataforma pode ser personalizada com a identidade visual da empresa contratante.',
    tech: ['React', 'TypeScript', 'Micro Frontends'],
    role: 'Desenvolvimento Web',
    highlights: [
      'Loja exclusiva personalizável por empresa',
      'Sistema de campanhas com metas e objetivos configuráveis',
      'Plataforma white-label com identidade visual customizável',
      'Catálogo dinâmico de produtos e experiências'
    ]
  },
  {
    id: 6,
    title: 'Backoffice Pix Livelo',
    description: 'Portal administrativo para gestão das transações Pix com pontos.',
    details: 'Portal backoffice para a equipe operacional gerenciar e monitorar todas as transações de Pix realizadas com pontos Livelo. Inclui gestão de regras de negócio, acompanhamento de operações em tempo real, relatórios e ferramentas de suporte ao cliente.',
    tech: ['React', 'TypeScript', 'Micro Frontends'],
    role: 'Desenvolvimento Web',
    highlights: [
      'Dashboard de monitoramento de transações em tempo real',
      'Gestão de regras de negócio e limites operacionais',
      'Relatórios e métricas de uso do produto',
      'Ferramentas de suporte e gestão de disputas'
    ]
  },
  {
    id: 7,
    title: 'Backoffice Nota Fiscal',
    description: 'Portal administrativo para gerenciamento de campanhas de acúmulo por nota fiscal.',
    details: 'Portal de gestão para as campanhas de acúmulo de pontos por nota fiscal. Permite criar e configurar campanhas, gerenciar parceiros comerciais, definir regras de pontuação, validar notas fiscais e acompanhar métricas de engajamento dos usuários.',
    tech: ['React', 'TypeScript', 'Micro Frontends'],
    role: 'Desenvolvimento Web',
    highlights: [
      'Criação e gestão de campanhas com regras dinâmicas',
      'Gerenciamento de parceiros comerciais',
      'Validação e auditoria de notas fiscais',
      'Métricas de engajamento e relatórios'
    ]
  },
  {
    id: 8,
    title: 'Startup de Aviação',
    description: 'Portais backoffice para startup do setor de aviação.',
    details: 'Desenvolvimento de portais backoffice para uma startup do setor de aviação, com gestão de operações, dashboards administrativos e ferramentas para o ecossistema aéreo. Projeto atual utilizando arquitetura de Micro Frontends e Micro Serviços.',
    tech: ['React', 'TypeScript', 'Micro Frontends', 'Micro Serviços'],
    role: 'Desenvolvimento Web - Atual',
    highlights: [
      'Portais administrativos para operações aéreas',
      'Dashboards de gestão e monitoramento',
      'Arquitetura de Micro Frontends e Micro Serviços',
      'Desenvolvimento em andamento'
    ]
  },
  {
    id: 9,
    title: 'iRacing Broadcast',
    description: 'Sistema de broadcast para o simulador iRacing com overlays e telemetria em tempo real.',
    details: 'Sistema de broadcast desenvolvido como freelance internacional para transmissões de corridas no simulador iRacing. A aplicação captura dados de telemetria em tempo real via Python, processa e exibe overlays customizados com informações de corrida, posições, tempos de volta e estatísticas dos pilotos. A interface desktop é construída com Electron, React para a UI e Node.js para comunicação entre os módulos.',
    tech: ['Python', 'React', 'Electron', 'Node.js'],
    role: 'Freelance Internacional',
    highlights: [
      'Captura de telemetria em tempo real via Python',
      'Overlays customizados para transmissões ao vivo',
      'Aplicação desktop com Electron e React',
      'Comunicação entre módulos com Node.js',
      'Projeto freelance internacional'
    ]
  }
]
