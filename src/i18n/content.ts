export type Lang = 'pt' | 'en' | 'es';

export const languages = {
  pt: {
    label: 'Português',
    short: 'PT',
    path: '/',
    htmlLang: 'pt-BR',
  },
  en: {
    label: 'English',
    short: 'EN',
    path: '/en',
    htmlLang: 'en',
  },
  es: {
    label: 'Español',
    short: 'ES',
    path: '/es',
    htmlLang: 'es',
  },
} as const;

export const content = {
  pt: {
    meta: {
      title: 'Erick Garcia | Social Media, Editor de Vídeos e Criador de Sites',
      description:
        'Social media, edição de vídeos e criação de sites para empresas, profissionais, criadores e influenciadores.',
    },

    brand: {
      name: 'Erick Garcia',
      line: 'SOCIAL MEDIA E SITES',
    },

    nav: {
      services: 'Serviços',
      work: 'Trabalhos',
      sites: 'Sites',
      pricing: 'Valores',
      about: 'Sobre',
      faq: 'FAQ',
      quote: 'Pedir orçamento',
    },

    hero: {
      title: 'Erick Garcia',
      subtitle: 'Social media, vídeos e sites.',
      text:
        'Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor o seu trabalho e facilitar o contato com novos clientes.',
      primaryCta: 'Pedir orçamento',
      secondaryCta: 'Ver trabalhos',
    },

    audience: {
      eyebrow: 'PARA QUEM É',
      items: ['Empresas', 'Profissionais', 'Criadores', 'Influenciadores', 'Negócios locais'],
    },

    services: {
      eyebrow: 'O QUE EU FAÇO',
      title: 'Escolha o que você precisa agora.',
      text:
        'Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.',
      items: [
        {
          number: '01',
          title: 'Social Media',
          text:
            'Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.',
        },
        {
          number: '02',
          title: 'Edição de vídeos',
          text:
            'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.',
        },
        {
          number: '03',
          title: 'Sites profissionais',
          text:
            'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.',
        },
      ],
    },

    work: {
      eyebrow: 'TRABALHOS REAIS',
      title: 'Trabalhos reais, com participação clara.',
      text:
        'Alguns projetos em que atuei com edição, publicação, captação ou organização de conteúdo. Cada case mostra minha parte no trabalho.',
      labels: {
        authorizedCase: 'CASE AUTORIZADO',
        whatIDid: 'O que eu fiz',
        approvedResult: 'Resultado permitido',
        note: 'Observação',
        video: 'VÍDEO',
        views: 'VISUALIZAÇÕES',
        likes: 'CURTIDAS',
        loadVideo: 'Carregar vídeo',
      },
    },

    siteProjects: {
      eyebrow: 'PROJETOS DE SITES',
      title: 'Sites criados para apresentar melhor o trabalho do cliente.',
      text:
        'Projetos com domínio próprio, visual responsivo e caminho claro para contato. Cada card mostra o contexto do site e o link para visitar.',
      labels: {
        problem: 'Problema',
        strategy: 'Estratégia',
        pages: 'Páginas',
        visit: 'Visitar site',
      },
    },

    pricing: {
      eyebrow: 'VALORES INICIAIS',
      title: 'Você sabe por onde começar antes de pedir proposta.',
      text: 'Valores iniciais para projetos no Brasil.',
      cards: [
        {
          title: 'Edição e Publicação',
          price: 'A partir de R$790 por mês',
          text:
            'Indicado para clientes que já entregam vídeo, capa, legenda e direcionamento. Pode incluir acabamento visual, ajuste de cor, música quando necessária, organização, programação e publicação.',
        },
        {
          title: 'Social Media',
          price: 'A partir de R$1.390 por mês',
          text:
            'Pode incluir diagnóstico, planejamento mensal, conteúdos, edição de Reels, posts ou carrosséis, legendas, calendário e publicação.',
        },
        {
          title: 'Social Media Completo',
          price: 'A partir de R$2.190 por mês',
          text:
            'Pode incluir planejamento estratégico, aproximadamente 12 conteúdos mensais, roteiros, Reels, posts, carrosséis, calendário, publicação e relatório.',
        },
        {
          title: 'Landing Page Profissional',
          price: 'A partir de R$1.900 por projeto',
          text:
            'Indicada para apresentar uma oferta, serviço, profissional, campanha ou negócio com foco em conversão.',
        },
        {
          title: 'Site Institucional',
          price: 'A partir de R$3.200 por projeto',
          text:
            'Indicado para empresas e profissionais que precisam apresentar serviços, diferenciais, localização, canais de contato e uma presença digital mais completa.',
        },
        {
          title: 'Captação Presencial',
          price: 'A partir de R$500 por diária curta',
          text:
            'Serviço acrescido de deslocamento quando aplicável. Indicado para gravações, fotos, bastidores, eventos curtos ou produção de conteúdo presencial.',
        },
      ],
      notIncludedTitle: 'O que não entra automaticamente',
      notIncludedText:
        'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.',
    },

    about: {
      eyebrow: 'SOBRE',
      title: 'Sou Erick Garcia.',
      paragraphs: [
        'Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.',
        'Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.',
      ],
    },

    faq: {
      eyebrow: 'DÚVIDAS COMUNS',
      title: 'Perguntas antes de pedir orçamento.',
      text:
        'Separei as principais dúvidas para você entender melhor como funciona o trabalho antes de chamar no WhatsApp.',
    },

    quote: {
      eyebrow: 'ORÇAMENTO',
      title: 'Me conte o que você precisa.',
      text:
        'Preencha as informações principais para eu entender se você precisa de social media, edição de vídeos, site ou uma proposta combinada.',
      submit: 'Enviar pelo WhatsApp',
    },

    footer: {
      location: 'Atendimento em todo o Brasil',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },
  },

  en: {
    meta: {
      title: 'Erick Garcia | Social Media, Video Editing and Websites',
      description:
        'Social media, video editing and website creation for businesses, professionals, creators and influencers.',
    },

    brand: {
      name: 'Erick Garcia',
      line: 'SOCIAL MEDIA AND WEBSITES',
    },

    nav: {
      services: 'Services',
      work: 'Work',
      sites: 'Websites',
      pricing: 'Pricing',
      about: 'About',
      faq: 'FAQ',
      quote: 'Request a quote',
    },

    hero: {
      title: 'Erick Garcia',
      subtitle: 'Social media, videos and websites.',
      text:
        'I manage your social media, edit your videos and build websites so your work looks better and new clients can contact you more easily.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View work',
    },

    audience: {
      eyebrow: 'WHO IT IS FOR',
      items: ['Businesses', 'Professionals', 'Creators', 'Influencers', 'Local businesses'],
    },

    services: {
      eyebrow: 'WHAT I DO',
      title: 'Choose what you need right now.',
      text:
        'Social media, videos and websites can be hired separately or combined into one proposal.',
      items: [
        {
          number: '01',
          title: 'Social Media',
          text:
            'I organize your profile, calendar, posts, Reels, captions and publishing so your brand stays active online.',
        },
        {
          number: '02',
          title: 'Video editing',
          text:
            'I turn recordings into ready-to-post clips, with captions, color adjustment, pacing and visual finishing.',
        },
        {
          number: '03',
          title: 'Professional websites',
          text:
            'I create landing pages and business websites to present your work and guide visitors to WhatsApp.',
        },
      ],
    },

    work: {
      eyebrow: 'REAL WORK',
      title: 'Real work, with clear responsibility.',
      text:
        'Some projects where I worked with editing, publishing, recording or content organization. Each case shows exactly what I did.',
      labels: {
        authorizedCase: 'AUTHORIZED CASE',
        whatIDid: 'What I did',
        approvedResult: 'Approved result',
        note: 'Transparency note',
        video: 'VIDEO',
        views: 'VIEWS',
        likes: 'LIKES',
        loadVideo: 'Load video',
      },
    },

    siteProjects: {
      eyebrow: 'WEBSITE PROJECTS',
      title: 'Websites created to present the client’s work better.',
      text:
        'Projects with custom domain, responsive design and a clear contact path. Each card shows the website context and the link to visit it.',
      labels: {
        problem: 'Problem',
        strategy: 'Strategy',
        pages: 'Pages',
        visit: 'Visit website',
      },
    },

    pricing: {
      eyebrow: 'STARTING PRICES',
      title: 'You know where to start before requesting a proposal.',
      text: 'Starting prices for remote international projects. Payment through Stripe.',
      cards: [
        {
          title: 'Editing and Publishing',
          price: 'From US$500 per month',
          text:
            'For clients who already provide video, cover, caption and direction. May include visual finishing, color adjustment, music when needed, organization, scheduling and publishing.',
        },
        {
          title: 'Social Media',
          price: 'From US$850 per month',
          text:
            'May include diagnosis, monthly planning, content, Reels editing, posts or carousels, captions, calendar and publishing.',
        },
        {
          title: 'Complete Social Media',
          price: 'From US$1,250 per month',
          text:
            'May include strategic planning, around 12 monthly pieces of content, scripts, Reels, posts, carousels, calendar, publishing and report.',
        },
        {
          title: 'Professional Landing Page',
          price: 'From US$1,000 per project',
          text:
            'Recommended for presenting an offer, service, professional, campaign or business with conversion in mind.',
        },
        {
          title: 'Business Website',
          price: 'From US$1,700 per project',
          text:
            'Recommended for businesses and professionals that need to present services, differences, location, contact channels and a stronger digital presence.',
        },
        {
          title: 'On-site Recording',
          price: 'Custom quote',
          text:
            'Quoted separately because location, travel, production time and logistics change from project to project.',
        },
      ],
      notIncludedTitle: 'What is not automatically included',
      notIncludedText:
        'Paid ads, traffic management, replying to DMs, customer support, event coverage, travel, extra recordings, unlimited revisions, paid stock images, domain and services outside the proposal are not automatically included.',
    },

    about: {
      eyebrow: 'ABOUT',
      title: 'I am Erick Garcia.',
      paragraphs: [
        'I work with social media, video editing and website creation. I started in practice, recording, editing and publishing content for large-audience profiles.',
        'Today I help businesses, professionals, creators and influencers improve the way they show up online.',
      ],
    },

    faq: {
      eyebrow: 'COMMON QUESTIONS',
      title: 'Questions before requesting a quote.',
      text:
        'I separated the main questions so you can understand how the work process works before contacting me on WhatsApp.',
    },

    quote: {
      eyebrow: 'QUOTE',
      title: 'Tell me what you need.',
      text:
        'Fill in the main information so I can understand whether you need social media, video editing, a website or a combined proposal.',
      submit: 'Send via WhatsApp',
    },

    footer: {
      location: 'Available worldwide',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },

  es: {
    meta: {
      title: 'Erick Garcia | Social Media, Edición de Videos y Sitios Web',
      description:
        'Social media, edición de videos y creación de sitios web para empresas, profesionales, creadores e influencers.',
    },

    brand: {
      name: 'Erick Garcia',
      line: 'SOCIAL MEDIA Y SITIOS WEB',
    },

    nav: {
      services: 'Servicios',
      work: 'Trabajos',
      sites: 'Sitios',
      pricing: 'Precios',
      about: 'Sobre mí',
      faq: 'FAQ',
      quote: 'Pedir presupuesto',
    },

    hero: {
      title: 'Erick Garcia',
      subtitle: 'Social media, videos y sitios web.',
      text:
        'Cuido tus redes, edito tus videos y creo sitios web para que tu trabajo se vea mejor y nuevos clientes puedan contactarte más fácil.',
      primaryCta: 'Pedir presupuesto',
      secondaryCta: 'Ver trabajos',
    },

    audience: {
      eyebrow: 'PARA QUIÉN ES',
      items: ['Empresas', 'Profesionales', 'Creadores', 'Influencers', 'Negocios locales'],
    },

    services: {
      eyebrow: 'LO QUE HAGO',
      title: 'Elige lo que necesitas ahora.',
      text:
        'Redes sociales, videos y sitios web pueden contratarse por separado o combinarse en una sola propuesta.',
      items: [
        {
          number: '01',
          title: 'Social Media',
          text:
            'Organizo tu perfil, calendario, posts, Reels, textos y publicaciones para que tu marca mantenga presencia en redes.',
        },
        {
          number: '02',
          title: 'Edición de videos',
          text:
            'Transformo grabaciones en cortes listos para publicar, con subtítulos, ajuste de color, ritmo y acabado visual.',
        },
        {
          number: '03',
          title: 'Sitios web profesionales',
          text:
            'Creo landing pages y sitios profesionales para presentar tu trabajo y llevar al cliente hasta WhatsApp.',
        },
      ],
    },

    work: {
      eyebrow: 'TRABAJOS REALES',
      title: 'Trabajos reales, con participación clara.',
      text:
        'Algunos proyectos donde trabajé con edición, publicación, grabación u organización de contenido. Cada caso muestra exactamente lo que hice.',
      labels: {
        authorizedCase: 'CASO AUTORIZADO',
        whatIDid: 'Lo que hice',
        approvedResult: 'Resultado permitido',
        note: 'Observación',
        video: 'VIDEO',
        views: 'VISUALIZACIONES',
        likes: 'ME GUSTA',
        loadVideo: 'Cargar video',
      },
    },

    siteProjects: {
      eyebrow: 'PROYECTOS DE SITIOS',
      title: 'Sitios creados para presentar mejor el trabajo del cliente.',
      text:
        'Proyectos con dominio propio, diseño responsivo y camino claro para contacto. Cada tarjeta muestra el contexto del sitio y el enlace para visitarlo.',
      labels: {
        problem: 'Problema',
        strategy: 'Estrategia',
        pages: 'Páginas',
        visit: 'Visitar sitio',
      },
    },

    pricing: {
      eyebrow: 'PRECIOS INICIALES',
      title: 'Sabes por dónde empezar antes de pedir una propuesta.',
      text: 'Precios iniciales para proyectos remotos internacionales. Pago por Stripe.',
      cards: [
        {
          title: 'Edición y Publicación',
          price: 'Desde €450 al mes',
          text:
            'Para clientes que ya entregan video, portada, texto y dirección. Puede incluir acabado visual, ajuste de color, música cuando sea necesario, organización, programación y publicación.',
        },
        {
          title: 'Social Media',
          price: 'Desde €750 al mes',
          text:
            'Puede incluir diagnóstico, planificación mensual, contenidos, edición de Reels, posts o carruseles, textos, calendario y publicación.',
        },
        {
          title: 'Social Media Completo',
          price: 'Desde €1.100 al mes',
          text:
            'Puede incluir planificación estratégica, cerca de 12 contenidos mensuales, guiones, Reels, posts, carruseles, calendario, publicación e informe.',
        },
        {
          title: 'Landing Page Profesional',
          price: 'Desde €900 por proyecto',
          text:
            'Indicada para presentar una oferta, servicio, profesional, campaña o negocio con foco en conversión.',
        },
        {
          title: 'Sitio Profesional',
          price: 'Desde €1.500 por proyecto',
          text:
            'Indicado para empresas y profesionales que necesitan presentar servicios, diferenciales, ubicación, canales de contacto y una presencia digital más completa.',
        },
        {
          title: 'Grabación Presencial',
          price: 'Presupuesto personalizado',
          text:
            'Se cotiza por separado porque ubicación, desplazamiento, tiempo de producción y logística cambian de un proyecto a otro.',
        },
      ],
      notIncludedTitle: 'Lo que no está incluido automáticamente',
      notIncludedText:
        'Anuncios pagados, gestión de tráfico, respuesta a mensajes, atención al cliente, cobertura de eventos, desplazamiento, grabaciones extra, cambios ilimitados, banco de imágenes pago, dominio y servicios fuera de la propuesta no están incluidos automáticamente.',
    },

    about: {
      eyebrow: 'SOBRE MÍ',
      title: 'Soy Erick Garcia.',
      paragraphs: [
        'Trabajo con social media, edición de videos y creación de sitios web. Empecé en la práctica, grabando, editando y publicando contenidos para perfiles de gran audiencia.',
        'Hoy ayudo a empresas, profesionales, creadores e influencers a mejorar la forma en que aparecen en internet.',
      ],
    },

    faq: {
      eyebrow: 'PREGUNTAS FRECUENTES',
      title: 'Preguntas antes de pedir presupuesto.',
      text:
        'Separé las principales dudas para que entiendas mejor cómo funciona el trabajo antes de llamar por WhatsApp.',
    },

    quote: {
      eyebrow: 'PRESUPUESTO',
      title: 'Cuéntame lo que necesitas.',
      text:
        'Completa la información principal para entender si necesitas social media, edición de videos, sitio web o una propuesta combinada.',
      submit: 'Enviar por WhatsApp',
    },

    footer: {
      location: 'Atención internacional',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
    },
  },
} as const;

export function getLangFromPath(pathname: string): Lang {
  const firstSegment = pathname.split('/').filter(Boolean)[0];

  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment;
  }

  return 'pt';
}
