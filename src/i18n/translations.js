export const translations = {
  pt: {
    nav: {
      about: 'SOBRE',
      projects: 'PROJETOS',
      contact: 'CONTATO'
    },
    hero: {
      tag: 'PORTFOLIO',
      subtitle: 'Full Stack Developer especializado em React, React Native, NestJS e Spring Boot. Transformando ideias em experiências digitais há mais de 5 anos.',
      cta: 'Ver Projetos'
    },
    about: {
      tag: 'SOBRE MIM',
      bio1: 'Profissional formado em Análise e Desenvolvimento de Sistemas, dedicado ao desenvolvimento web e mobile desde 2020. Especializado em TypeScript, React e React Native, com experiência sólida em testes unitários e end-to-end.',
      bio2: 'Experiência com arquiteturas de Micro Frontends e Micro Serviços, além de backend com NestJS e Spring Boot. Atualmente aprofundando conhecimentos em AWS, Arquitetura de Software, DDD e Event-Driven Architecture.',
      stackTitle: 'STACK',
      expTitle: 'EXPERIÊNCIA',
      experience: [
        {
          role: 'Mid Frontend Developer',
          company: 'Instituto de Pesquisas Eldorado',
          period: 'Nov 2025 - Presente',
          type: 'Remota'
        },
        {
          role: 'Mid Frontend Developer',
          company: 'Compass UOL',
          period: 'Mar 2024 - Nov 2025',
          type: 'Remota'
        },
        {
          role: 'Junior Frontend Developer',
          company: 'Compass UOL',
          period: 'Nov 2021 - Mar 2024',
          type: 'Remota'
        },
        {
          role: 'Trainee / Estagiário',
          company: 'Compass UOL',
          period: 'Set 2020 - Out 2021',
          type: 'Presencial'
        }
      ]
    },
    projects: {
      tag: 'PROJETOS RECENTES',
      title: 'PROJETOS\nPROFISSIONAIS',
      detailHighlights: 'DESTAQUES',
      items: [
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
    },
    cta: {
      tag: 'VAMOS CONVERSAR',
      heading: 'PRONTO PARA TRANSFORMAR SUA IDEIA EM REALIDADE?',
      text: 'Seja um projeto web, mobile ou uma API robusta, estou pronto para colaborar e entregar soluções de qualidade. Vamos construir algo incrível juntos.',
      button: 'Entre em Contato'
    },
    contactForm: {
      tag: 'CONTATO',
      title: 'ENVIE UMA MENSAGEM',
      subtitle: 'Preencha o formulário abaixo e entrarei em contato o mais breve possível.',
      nameLabel: 'NOME',
      namePlaceholder: 'Seu nome',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'MENSAGEM',
      messagePlaceholder: 'Descreva seu projeto ou ideia...',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      successTitle: 'Mensagem enviada!',
      successText: 'Obrigado pelo contato. Responderei o mais breve possível.',
      errorText: 'Erro ao enviar mensagem. Tente novamente.'
    },
    footer: {
      heading: 'CONTATO',
      location: 'LOCALIZAÇÃO',
      locationValue: 'Mogi Mirim, São Paulo\nBrasil',
      education: 'FORMAÇÃO',
      educationValue: 'Análise e Desenvolvimento\nde Sistemas - Fatec',
      copyright: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      about: 'ABOUT',
      projects: 'PROJECTS',
      contact: 'CONTACT'
    },
    hero: {
      tag: 'PORTFOLIO',
      subtitle: 'Full Stack Developer specialized in React, React Native, NestJS, and Spring Boot. Turning ideas into digital experiences for over 5 years.',
      cta: 'View Projects'
    },
    about: {
      tag: 'ABOUT ME',
      bio1: 'A professional with a degree in Systems Analysis and Development, dedicated to web and mobile development since 2020. Specialized in TypeScript, React, and React Native, with solid experience in unit and end-to-end testing.',
      bio2: 'Experienced with Micro Frontends and Microservices architectures, plus backend with NestJS and Spring Boot. Currently deepening knowledge in AWS, Software Architecture, DDD, and Event-Driven Architecture.',
      stackTitle: 'STACK',
      expTitle: 'EXPERIENCE',
      experience: [
        {
          role: 'Mid Frontend Developer',
          company: 'Instituto de Pesquisas Eldorado',
          period: 'Nov 2025 - Present',
          type: 'Remote'
        },
        {
          role: 'Mid Frontend Developer',
          company: 'Compass UOL',
          period: 'Mar 2024 - Nov 2025',
          type: 'Remote'
        },
        {
          role: 'Junior Frontend Developer',
          company: 'Compass UOL',
          period: 'Nov 2021 - Mar 2024',
          type: 'Remote'
        },
        {
          role: 'Trainee / Intern',
          company: 'Compass UOL',
          period: 'Sep 2020 - Oct 2021',
          type: 'On-site'
        }
      ]
    },
    projects: {
      tag: 'RECENT PROJECTS',
      title: 'PROFESSIONAL\nPROJECTS',
      detailHighlights: 'HIGHLIGHTS',
      items: [
        {
          id: 1,
          title: 'Pix Livelo',
          description: 'Mobile app for payments using Livelo points via Pix.',
          details: 'The first solution in the Brazilian loyalty segment to enable purchases using points through Pix technology. The product can be used at any commercial establishment, physical or digital, that accepts Pix. The user opens the app, selects the Pix option, scans the QR Code, and the payment is processed with automatic point conversion. Supports limits of up to R$ 1,500 per transaction and up to 5 daily transactions.',
          tech: ['React Native', 'TypeScript', 'Microservices'],
          role: 'Mobile Development',
          highlights: [
            'Pix payment integration via QR Code',
            'Real-time point to monetary value conversion',
            'Microservices-based architecture',
            'Unit testing with Jest and React Testing Library'
          ]
        },
        {
          id: 2,
          title: 'Invoice Points Accumulation',
          description: 'Mobile feature for accumulating points by scanning invoices.',
          details: 'A feature in the Livelo app that allows users to accumulate points by scanning purchase invoices from commercial partners. The system accepts NF-e, NFC-e, and SAT, processing invoice validation and crediting points according to each campaign\'s rules. Users can scan the invoice QR Code or manually enter the 44-digit access key.',
          tech: ['React Native', 'TypeScript', 'Microservices'],
          role: 'Mobile Development',
          highlights: [
            'QR Code scanning and manual access key input',
            'Validation of different invoice types (NF-e, NFC-e, SAT)',
            'Campaign system with dynamic scoring rules',
            'Integration with various commercial partners'
          ]
        },
        {
          id: 3,
          title: 'Points to Cash',
          description: 'Product that allows exchanging Livelo points for bank account deposits.',
          details: 'Livelo\'s cashback service that allows customers to convert accumulated points into money, receiving the amount directly in their bank account. Supports over 100 financial institutions, with manual or automatic recurring transfer options. Minimum redemption is 350 points, with a limit of up to 50,000 points and 8 transactions per month.',
          tech: ['React Native', 'TypeScript', 'Microservices'],
          role: 'Mobile Development',
          highlights: [
            'Integration with 100+ financial institutions',
            'Automatic recurring transfer system',
            'Real-time point to currency conversion',
            'Cashback flow with CPF and bank account validation'
          ]
        },
        {
          id: 4,
          title: 'Livelo Business',
          description: 'B2B platform for distributing Livelo points to company employees.',
          details: 'An enterprise solution that allows organizations to purchase point packages and distribute them to employees as incentives, rewards, or benefits. The company defines how many points to send, to which employees, and when. Employees can use the points to redeem products, travel, experiences, and services from the Livelo catalog.',
          tech: ['React', 'TypeScript', 'Micro Frontends'],
          role: 'Web Development',
          highlights: [
            'Management portal for company administrators',
            'Batch point distribution system to employee CPFs',
            'Usage and engagement tracking dashboard',
            'Micro Frontends architecture for scalability'
          ]
        },
        {
          id: 5,
          title: 'Business Campaign',
          description: 'Product where companies create campaigns for employees to spend points in an exclusive store.',
          details: 'A platform that allows companies to create personalized campaigns with an exclusive store for their employees. The company sets up the campaign, defines goals and objectives, and employees who achieve results receive points to spend in a dedicated store with selected products, travel, and experiences. The platform can be customized with the contracting company\'s visual identity.',
          tech: ['React', 'TypeScript', 'Micro Frontends'],
          role: 'Web Development',
          highlights: [
            'Customizable exclusive store per company',
            'Campaign system with configurable goals and objectives',
            'White-label platform with customizable visual identity',
            'Dynamic product and experience catalog'
          ]
        },
        {
          id: 6,
          title: 'Pix Livelo Backoffice',
          description: 'Administrative portal for managing Pix transactions with points.',
          details: 'Backoffice portal for the operational team to manage and monitor all Pix transactions made with Livelo points. Includes business rules management, real-time operations monitoring, reports, and customer support tools.',
          tech: ['React', 'TypeScript', 'Micro Frontends'],
          role: 'Web Development',
          highlights: [
            'Real-time transaction monitoring dashboard',
            'Business rules and operational limits management',
            'Product usage reports and metrics',
            'Support and dispute management tools'
          ]
        },
        {
          id: 7,
          title: 'Invoice Backoffice',
          description: 'Administrative portal for managing invoice point accumulation campaigns.',
          details: 'Management portal for invoice point accumulation campaigns. Allows creating and configuring campaigns, managing commercial partners, defining scoring rules, validating invoices, and tracking user engagement metrics.',
          tech: ['React', 'TypeScript', 'Micro Frontends'],
          role: 'Web Development',
          highlights: [
            'Campaign creation and management with dynamic rules',
            'Commercial partner management',
            'Invoice validation and auditing',
            'Engagement metrics and reports'
          ]
        },
        {
          id: 8,
          title: 'Aviation Startup',
          description: 'Backoffice portals for an aviation sector startup.',
          details: 'Development of backoffice portals for an aviation startup, with operations management, administrative dashboards, and tools for the air ecosystem. Current project using Micro Frontends and Microservices architecture.',
          tech: ['React', 'TypeScript', 'Micro Frontends', 'Microservices'],
          role: 'Web Development - Current',
          highlights: [
            'Administrative portals for air operations',
            'Management and monitoring dashboards',
            'Micro Frontends and Microservices architecture',
            'Development in progress'
          ]
        },
        {
          id: 9,
          title: 'iRacing Broadcast',
          description: 'Broadcast system for iRacing simulator with real-time overlays and telemetry.',
          details: 'Broadcast system developed as an international freelance project for iRacing simulator race streams. The application captures real-time telemetry data via Python, processes and displays custom overlays with race information, positions, lap times, and driver statistics. The desktop interface is built with Electron, React for the UI, and Node.js for module communication.',
          tech: ['Python', 'React', 'Electron', 'Node.js'],
          role: 'International Freelance',
          highlights: [
            'Real-time telemetry capture via Python',
            'Custom overlays for live broadcasts',
            'Desktop application with Electron and React',
            'Inter-module communication with Node.js',
            'International freelance project'
          ]
        }
      ]
    },
    cta: {
      tag: "LET'S TALK",
      heading: 'READY TO TURN YOUR IDEA INTO REALITY?',
      text: "Whether it's a web project, mobile app, or a robust API, I'm ready to collaborate and deliver quality solutions. Let's build something amazing together.",
      button: 'Get in Touch'
    },
    contactForm: {
      tag: 'CONTACT',
      title: 'SEND A MESSAGE',
      subtitle: 'Fill out the form below and I will get back to you as soon as possible.',
      nameLabel: 'NAME',
      namePlaceholder: 'Your name',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'MESSAGE',
      messagePlaceholder: 'Describe your project or idea...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successText: 'Thank you for reaching out. I will get back to you soon.',
      errorText: 'Failed to send message. Please try again.'
    },
    footer: {
      heading: 'CONTACT',
      location: 'LOCATION',
      locationValue: 'Mogi Mirim, São Paulo\nBrazil',
      education: 'EDUCATION',
      educationValue: 'Systems Analysis and\nDevelopment - Fatec',
      copyright: 'All rights reserved.'
    }
  }
}
