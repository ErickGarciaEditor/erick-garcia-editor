import { SafeImage } from './components/SafeImage';
import { SafeVideo } from './components/SafeVideo';
import { LanguageLayer } from './components/LanguageLayer';
import { QuoteForm } from './components/QuoteForm';
import { cases } from './data/cases';
import { contact } from './data/contact';
import { siteProjects } from './data/siteProjects';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';

const topContentByLang = {
  pt: {
    brandLine: 'Social Media e Sites',
    navLabel: 'Navegação principal',
    nav: {
      services: 'Serviços',
      work: 'Trabalhos',
      projects: 'Sites',
      pricing: 'Valores',
      about: 'Sobre',
      faq: 'FAQ',
    },
    quote: 'Pedir orçamento',
    hero: {
      desktopTitle: 'Social media, editor de vídeos e criador de sites.',
      mobileTitle: 'Social media, vídeos e sites.',
      text: 'Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor o seu trabalho e facilitar o contato com novos clientes.',
      secondaryCta: 'Ver trabalhos',
    },
    audience: {
      label: 'Para quem é',
      items: ['Empresas', 'Profissionais', 'Criadores', 'Influenciadores', 'Negócios locais'],
    },
    services: {
      eyebrow: 'O que eu faço',
      title: 'Escolha o que você precisa agora.',
      text: 'Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.',
      items: [
        {
          title: 'Social Media',
          text: 'Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.',
        },
        {
          title: 'Edição de vídeos',
          text: 'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.',
        },
        {
          title: 'Sites profissionais',
          text: 'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.',
        },
      ],
    },
  },

  en: {
    brandLine: 'Social Media and Websites',
    navLabel: 'Main navigation',
    nav: {
      services: 'Services',
      work: 'Work',
      projects: 'Websites',
      pricing: 'Pricing',
      about: 'About',
      faq: 'FAQ',
    },
    quote: 'Request a quote',
    hero: {
      desktopTitle: 'Social media, video editing and websites.',
      mobileTitle: 'Social media, videos and websites.',
      text: 'I manage your social media, edit your videos and build websites so your work looks better and new clients can contact you more easily.',
      secondaryCta: 'View work',
    },
    audience: {
      label: 'Who it is for',
      items: ['Businesses', 'Professionals', 'Creators', 'Influencers', 'Local businesses'],
    },
    services: {
      eyebrow: 'What I do',
      title: 'Choose what you need right now.',
      text: 'Social media, videos and websites can be hired separately or combined into one proposal.',
      items: [
        {
          title: 'Social Media',
          text: 'I organize your profile, calendar, posts, Reels, captions and publishing so your brand stays active online.',
        },
        {
          title: 'Video editing',
          text: 'I turn recordings into ready-to-post clips, with captions, color adjustment, pacing and visual finishing.',
        },
        {
          title: 'Professional websites',
          text: 'I create landing pages and business websites to present your work and guide visitors to WhatsApp.',
        },
      ],
    },
  },

  es: {
    brandLine: 'Social Media y Sitios Web',
    navLabel: 'Navegación principal',
    nav: {
      services: 'Servicios',
      work: 'Trabajos',
      projects: 'Sitios',
      pricing: 'Precios',
      about: 'Sobre mí',
      faq: 'FAQ',
    },
    quote: 'Pedir presupuesto',
    hero: {
      desktopTitle: 'Social media, edición de videos y sitios web.',
      mobileTitle: 'Social media, videos y sitios web.',
      text: 'Cuido tus redes, edito tus videos y creo sitios web para que tu trabajo se vea mejor y nuevos clientes puedan contactarte más fácil.',
      secondaryCta: 'Ver trabajos',
    },
    audience: {
      label: 'Para quién es',
      items: ['Empresas', 'Profesionales', 'Creadores', 'Influencers', 'Negocios locales'],
    },
    services: {
      eyebrow: 'Lo que hago',
      title: 'Elige lo que necesitas ahora.',
      text: 'Redes sociales, videos y sitios web pueden contratarse por separado o combinarse en una sola propuesta.',
      items: [
        {
          title: 'Social Media',
          text: 'Organizo tu perfil, calendario, posts, Reels, textos y publicaciones para que tu marca mantenga presencia en redes.',
        },
        {
          title: 'Edición de videos',
          text: 'Transformo grabaciones en cortes listos para publicar, con subtítulos, ajuste de color, ritmo y acabado visual.',
        },
        {
          title: 'Sitios profesionales',
          text: 'Creo landing pages y sitios profesionales para presentar tu trabajo y llevar al cliente hasta WhatsApp.',
        },
      ],
    },
  },
} as const;

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/' || path === '/pt' || path === '/en' || path === '/es') return 'home';
  if (path === '/politica-de-privacidade') return 'privacy';
  if (path === '/termos-de-uso') return 'terms';
  if (path === '/404') return '404';

  return '404';
}

type AppLang = 'pt' | 'en' | 'es';

function getAppLang(): AppLang {
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];

  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment;
  }

  return 'pt';
}

const faqByLang = {
  pt: {
    eyebrow: 'Dúvidas comuns',
    title: 'Perguntas antes de pedir orçamento.',
    text: 'Separei as principais dúvidas para você entender melhor como funciona o trabalho antes de chamar no WhatsApp.',
    items: [
      {
        question: 'Você atende clientes de outras cidades?',
        answer: 'Sim. O atendimento pode ser remoto para clientes de todo o Brasil.',
      },
      {
        question: 'Como funciona o social media à distância?',
        answer: 'Você envia os materiais, informações e direcionamentos. A partir disso, eu organizo planejamento, edição, publicação ou acompanhamento conforme a proposta.',
      },
      {
        question: 'O cliente precisa gravar os vídeos?',
        answer: 'Em trabalhos remotos, normalmente sim. Eu posso orientar a gravação. Quando for presencial, a captação é orçada separadamente.',
      },
      {
        question: 'Você faz roteiros?',
        answer: 'Sim, quando isso estiver dentro do plano ou da proposta combinada.',
      },
      {
        question: 'Você trabalha com Instagram, TikTok e YouTube?',
        answer: 'Sim. O trabalho pode envolver uma ou mais plataformas, conforme a necessidade.',
      },
      {
        question: 'Existe garantia de seguidores?',
        answer: 'Não. O trabalho melhora organização, qualidade e consistência, mas não promete seguidores, vendas ou viralização garantida.',
      },
      {
        question: 'Quanto custa um site?',
        answer: 'Landing pages partem de R$1.900 e sites institucionais partem de R$3.200. O valor final depende do escopo.',
      },
    ],
  },

  en: {
    eyebrow: 'Common questions',
    title: 'Questions before requesting a quote.',
    text: 'I separated the main questions so you can understand how the work process works before contacting me on WhatsApp.',
    items: [
      {
        question: 'Do you work with clients from other cities?',
        answer: 'Yes. The service can be remote for clients from any location.',
      },
      {
        question: 'How does remote social media work?',
        answer: 'You send the materials, information and direction. From there, I organize planning, editing, publishing or support according to the proposal.',
      },
      {
        question: 'Does the client need to record the videos?',
        answer: 'For remote projects, usually yes. I can guide the recording process. For on-site work, recording is quoted separately.',
      },
      {
        question: 'Do you write scripts?',
        answer: 'Yes, when scripts are included in the plan or combined proposal.',
      },
      {
        question: 'Do you work with Instagram, TikTok and YouTube?',
        answer: 'Yes. The work can involve one or more platforms depending on the project needs.',
      },
      {
        question: 'Is there a guarantee of followers?',
        answer: 'No. The work improves organization, quality and consistency, but does not promise guaranteed followers, sales or viral results.',
      },
      {
        question: 'How much does a website cost?',
        answer: 'Landing pages start at US$1,000 and business websites start at US$1,700. The final price depends on the scope.',
      },
    ],
  },

  es: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Preguntas antes de pedir presupuesto.',
    text: 'Separé las principales dudas para que entiendas mejor cómo funciona el trabajo antes de llamar por WhatsApp.',
    items: [
      {
        question: '¿Atiendes clientes de otras ciudades?',
        answer: 'Sí. La atención puede ser remota para clientes de cualquier ubicación.',
      },
      {
        question: '¿Cómo funciona el social media a distancia?',
        answer: 'Envías los materiales, información y dirección. A partir de eso, organizo planificación, edición, publicación o acompañamiento según la propuesta.',
      },
      {
        question: '¿El cliente necesita grabar los videos?',
        answer: 'En proyectos remotos, normalmente sí. Puedo orientar la grabación. Para trabajos presenciales, la grabación se cotiza por separado.',
      },
      {
        question: '¿Haces guiones?',
        answer: 'Sí, cuando los guiones estén incluidos en el plan o en la propuesta combinada.',
      },
      {
        question: '¿Trabajas con Instagram, TikTok y YouTube?',
        answer: 'Sí. El trabajo puede incluir una o más plataformas según la necesidad del proyecto.',
      },
      {
        question: '¿Hay garantía de seguidores?',
        answer: 'No. El trabajo mejora organización, calidad y consistencia, pero no promete seguidores, ventas o viralización garantizada.',
      },
      {
        question: '¿Cuánto cuesta un sitio web?',
        answer: 'Las landing pages empiezan desde €900 y los sitios profesionales desde €1.500. El valor final depende del alcance.',
      },
    ],
  },
} as const;


const siteProjectsByLang = {
  pt: {
    eyebrow: 'Projetos de sites',
    title: 'Sites criados para apresentar melhor o trabalho do cliente.',
    text: 'Projetos com domínio próprio, visual responsivo e caminho claro para contato. Cada card mostra o contexto do site e o link para visitar.',
    labels: {
      problem: 'Problema',
      strategy: 'Estratégia',
      pages: 'Páginas',
      visit: 'Visitar site',
      empty: 'Nenhum projeto publicado ainda',
      emptyTitle: 'Os sites autorizados entram aqui.',
      emptyText: 'Quando você separar os projetos reais, vamos cadastrar nome do cliente, segmento, tipo de site, problema, estratégia, funcionalidades e link para visitar.',
      desktopFallback: 'Print desktop pendente',
      mobileFallback: 'Print mobile pendente',
    },
    projects: [
      {
        segment: 'Beleza e estética',
        type: 'Site profissional',
        problem: 'O projeto precisava apresentar o trabalho de forma mais organizada e facilitar o contato pelo site.',
        strategy: 'Foi criada uma presença online simples, direta e com domínio próprio para fortalecer a apresentação do negócio.',
        pages: 'Site publicado com estrutura institucional',
        features: ['Domínio próprio', 'Design responsivo', 'Contato direto', 'Apresentação do serviço'],
      },
      {
        segment: 'Representações comerciais',
        type: 'Site institucional',
        problem: 'O cliente precisava ter um site próprio para apresentar sua atuação e facilitar o acesso às informações principais.',
        strategy: 'A estrutura foi pensada para apresentar o negócio com clareza, usando uma navegação simples e caminho direto para contato.',
        pages: 'Site publicado com estrutura institucional',
        features: ['Domínio próprio', 'Design responsivo', 'Contato direto', 'Site institucional'],
      },
    ],
  },

  en: {
    eyebrow: 'Website projects',
    title: 'Websites created to present the client’s work better.',
    text: 'Projects with custom domain, responsive design and a clear contact path. Each card shows the website context and the link to visit it.',
    labels: {
      problem: 'Problem',
      strategy: 'Strategy',
      pages: 'Pages',
      visit: 'Visit website',
      empty: 'No published project yet',
      emptyTitle: 'Authorized websites will appear here.',
      emptyText: 'When you separate the real projects, we will add the client name, segment, website type, problem, strategy, features and visit link.',
      desktopFallback: 'Desktop screenshot pending',
      mobileFallback: 'Mobile screenshot pending',
    },
    projects: [
      {
        segment: 'Beauty and aesthetics',
        type: 'Professional website',
        problem: 'The project needed to present the work in a more organized way and make website contact easier.',
        strategy: 'A simple and direct online presence with a custom domain was created to strengthen the business presentation.',
        pages: 'Website published with an institutional structure',
        features: ['Custom domain', 'Responsive design', 'Direct contact', 'Service presentation'],
      },
      {
        segment: 'Commercial representation',
        type: 'Business website',
        problem: 'The client needed a website to present the business and make key information easier to access.',
        strategy: 'The structure was designed to present the business clearly, with simple navigation and a direct contact path.',
        pages: 'Website published with an institutional structure',
        features: ['Custom domain', 'Responsive design', 'Direct contact', 'Business website'],
      },
    ],
  },

  es: {
    eyebrow: 'Proyectos de sitios',
    title: 'Sitios creados para presentar mejor el trabajo del cliente.',
    text: 'Proyectos con dominio propio, diseño responsivo y camino claro para contacto. Cada tarjeta muestra el contexto del sitio y el enlace para visitarlo.',
    labels: {
      problem: 'Problema',
      strategy: 'Estrategia',
      pages: 'Páginas',
      visit: 'Visitar sitio',
      empty: 'Ningún proyecto publicado todavía',
      emptyTitle: 'Los sitios autorizados aparecerán aquí.',
      emptyText: 'Cuando separes los proyectos reales, vamos a registrar nombre del cliente, segmento, tipo de sitio, problema, estrategia, funcionalidades y enlace para visitar.',
      desktopFallback: 'Captura desktop pendiente',
      mobileFallback: 'Captura mobile pendiente',
    },
    projects: [
      {
        segment: 'Belleza y estética',
        type: 'Sitio profesional',
        problem: 'El proyecto necesitaba presentar el trabajo de forma más organizada y facilitar el contacto por el sitio.',
        strategy: 'Se creó una presencia online simple, directa y con dominio propio para fortalecer la presentación del negocio.',
        pages: 'Sitio publicado con estructura institucional',
        features: ['Dominio propio', 'Diseño responsivo', 'Contacto directo', 'Presentación del servicio'],
      },
      {
        segment: 'Representaciones comerciales',
        type: 'Sitio institucional',
        problem: 'El cliente necesitaba un sitio propio para presentar su actividad y facilitar el acceso a la información principal.',
        strategy: 'La estructura fue pensada para presentar el negocio con claridad, usando una navegación simple y un camino directo al contacto.',
        pages: 'Sitio publicado con estructura institucional',
        features: ['Dominio propio', 'Diseño responsivo', 'Contacto directo', 'Sitio institucional'],
      },
    ],
  },
} as const;


const pricingByLang = {
  pt: {
    eyebrow: 'Valores iniciais',
    title: 'Valores iniciais para você se orientar.',
    text: 'O valor final depende do volume de conteúdo, plataformas, gravações e complexidade do projeto.',
    cards: [
      {
        title: 'Edição e Publicação',
        price: 'A partir de R$790 por mês',
        description:
          'Indicado para clientes que já entregam vídeo, capa, legenda e direcionamento. Pode incluir acabamento visual, ajuste de cor, música quando necessária, organização, programação e publicação.',
      },
      {
        title: 'Social Media',
        price: 'A partir de R$1.390 por mês',
        description:
          'Pode incluir diagnóstico, planejamento mensal, até 8 conteúdos, edição de Reels, posts ou carrosséis, legendas, calendário e publicação.',
      },
      {
        title: 'Social Media Completo',
        price: 'A partir de R$2.190 por mês',
        description:
          'Pode incluir planejamento estratégico, aproximadamente 12 conteúdos mensais, roteiros, Reels, posts, carrosséis, calendário, publicação e relatório.',
      },
      {
        title: 'Landing Page Profissional',
        price: 'A partir de R$1.900 por projeto',
        description:
          'Indicada para apresentar uma oferta, serviço, profissional, campanha ou negócio com foco em conversão.',
      },
      {
        title: 'Site Institucional',
        price: 'A partir de R$3.200 por projeto',
        description:
          'Indicado para empresas e profissionais que precisam apresentar serviços, diferenciais, localização, canais de contato e uma presença digital mais completa.',
      },
      {
        title: 'Captação Presencial',
        price: 'A partir de R$500 por diária curta',
        description:
          'Serviço acrescido de deslocamento quando aplicável. Indicado para gravações, fotos, bastidores, eventos curtos ou produção de conteúdo presencial.',
      },
    ],
    notIncludedTitle: 'O que não entra automaticamente',
    notIncludedText:
      'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.',
  },

  en: {
    eyebrow: 'Starting prices',
    title: 'Starting prices for remote international projects.',
    text: 'The final price depends on content volume, platforms, recordings and project complexity. Payment through Stripe.',
    cards: [
      {
        title: 'Editing and Publishing',
        price: 'From US$500 per month',
        description:
          'For clients who already provide video, cover, caption and direction. May include visual finishing, color adjustment, music when needed, organization, scheduling and publishing.',
      },
      {
        title: 'Social Media',
        price: 'From US$850 per month',
        description:
          'May include diagnosis, monthly planning, up to 8 pieces of content, Reels editing, posts or carousels, captions, calendar and publishing.',
      },
      {
        title: 'Complete Social Media',
        price: 'From US$1,250 per month',
        description:
          'May include strategic planning, around 12 monthly pieces of content, scripts, Reels, posts, carousels, calendar, publishing and report.',
      },
      {
        title: 'Professional Landing Page',
        price: 'From US$1,000 per project',
        description:
          'Recommended for presenting an offer, service, professional, campaign or business with conversion in mind.',
      },
      {
        title: 'Business Website',
        price: 'From US$1,700 per project',
        description:
          'Recommended for businesses and professionals that need to present services, differences, location, contact channels and a stronger digital presence.',
      },
      {
        title: 'On-site Recording',
        price: 'Custom quote',
        description:
          'Quoted separately because location, travel, production time and logistics change from project to project.',
      },
    ],
    notIncludedTitle: 'What is not automatically included',
    notIncludedText:
      'Paid ads, traffic management, replying to DMs, customer support, event coverage, travel, extra recordings, unlimited revisions, paid stock images, domain and services outside the proposal are not automatically included.',
  },

  es: {
    eyebrow: 'Precios iniciales',
    title: 'Precios iniciales para proyectos remotos internacionales.',
    text: 'El valor final depende del volumen de contenido, plataformas, grabaciones y complejidad del proyecto. Pago por Stripe.',
    cards: [
      {
        title: 'Edición y Publicación',
        price: 'Desde €450 al mes',
        description:
          'Para clientes que ya entregan video, portada, texto y dirección. Puede incluir acabado visual, ajuste de color, música cuando sea necesario, organización, programación y publicación.',
      },
      {
        title: 'Social Media',
        price: 'Desde €750 al mes',
        description:
          'Puede incluir diagnóstico, planificación mensual, hasta 8 contenidos, edición de Reels, posts o carruseles, textos, calendario y publicación.',
      },
      {
        title: 'Social Media Completo',
        price: 'Desde €1.100 al mes',
        description:
          'Puede incluir planificación estratégica, cerca de 12 contenidos mensuales, guiones, Reels, posts, carruseles, calendario, publicación e informe.',
      },
      {
        title: 'Landing Page Profesional',
        price: 'Desde €900 por proyecto',
        description:
          'Indicada para presentar una oferta, servicio, profesional, campaña o negocio con foco en conversión.',
      },
      {
        title: 'Sitio Profesional',
        price: 'Desde €1.500 por proyecto',
        description:
          'Indicado para empresas y profesionales que necesitan presentar servicios, diferenciales, ubicación, canales de contacto y una presencia digital más completa.',
      },
      {
        title: 'Grabación Presencial',
        price: 'Presupuesto personalizado',
        description:
          'Se cotiza por separado porque ubicación, desplazamiento, tiempo de producción y logística cambian de un proyecto a otro.',
      },
    ],
    notIncludedTitle: 'Lo que no está incluido automáticamente',
    notIncludedText:
      'Anuncios pagados, gestión de tráfico, respuesta a mensajes, atención al cliente, cobertura de eventos, desplazamiento, grabaciones extra, cambios ilimitados, banco de imágenes pago, dominio y servicios fuera de la propuesta no están incluidos automáticamente.',
  },
} as const;


const aboutByLang = {
  pt: {
    eyebrow: 'Sobre',
    title: 'Sou Erick Garcia.',
    paragraphs: [
      'Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.',
      'Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.',
    ],
  },

  en: {
    eyebrow: 'About',
    title: 'I am Erick Garcia.',
    paragraphs: [
      'I work with social media, video editing and website creation. I started in practice, recording, editing and publishing content for large-audience profiles.',
      'Today I help businesses, professionals, creators and influencers improve the way they show up online.',
    ],
  },

  es: {
    eyebrow: 'Sobre mí',
    title: 'Soy Erick Garcia.',
    paragraphs: [
      'Trabajo con social media, edición de videos y creación de sitios web. Empecé en la práctica, grabando, editando y publicando contenidos para perfiles de gran audiencia.',
      'Hoy ayudo a empresas, profesionales, creadores e influencers a mejorar la forma en que aparecen en internet.',
    ],
  },
} as const;

export default function App() {
  const currentPage = getCurrentPage();
  const lang = getAppLang();
  const faq = faqByLang[lang];
  const siteProjectsCopy = siteProjectsByLang[lang];
  const activePricing = pricingByLang[lang];
  const about = aboutByLang[lang];
  const topContent = topContentByLang[lang];

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <TermsOfUse />;
  }

  if (currentPage === '404') {
    return <NotFound />;
  }

  return (
    <div className="site-shell">
      <LanguageLayer />
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#inicio" aria-label="Erick Garcia">
            <span>Erick Garcia</span>
            <small>{topContent.brandLine}</small>
          </a>

          <nav className="main-nav" aria-label={topContent.navLabel}>
            <a href="#servicos">{topContent.nav.services}</a>
            <a href="#trabalhos">{topContent.nav.work}</a>
            <a href="#projetos">{topContent.nav.projects}</a>
            <a href="#valores">{topContent.nav.pricing}</a>
            <a href="#sobre">{topContent.nav.about}</a>
            <a href="#faq">{topContent.nav.faq}</a>
          </nav>

          <a className="header-cta" href="#orcamento">
            {topContent.quote}
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">

              <h1>Erick Garcia</h1>

              <h2>
                <span className="desktop-title">{topContent.hero.desktopTitle}</span>
                <span className="mobile-title">{topContent.hero.mobileTitle}</span>
              </h2>

              <p className="hero-text">{topContent.hero.text}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#orcamento">
                  {topContent.quote}
                </a>
                <a className="button button-secondary" href="#trabalhos">
                  {topContent.hero.secondaryCta}
                </a>
              </div>
            </div>

            <figure className="hero-photo reveal">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/assets/images/erick-hero-480.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/assets/images/erick-hero-720.webp"
                />
                <img
                  src="/assets/images/erick-hero-960.webp"
                  alt="Erick Garcia"
                  width="960"
                  height="1200"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>
          </div>
        </section>

        <section className="audience-strip" aria-label={topContent.audience.label}>
          <div className="container audience-row">
            <span>{topContent.audience.label}</span>
            <div>
              {topContent.audience.items.map((audience) => (
                <strong key={audience}>{audience}</strong>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{topContent.services.eyebrow}</p>
              <h2>{topContent.services.title}</h2>
              <p>{topContent.services.text}</p>
            </div>

            <div className="service-list">
              {topContent.services.items.map((service, index) => (
                <article className="service-item" key={service.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="trabalhos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Trabalhos reais</p>
              <h2>Trabalhos reais, com participação clara.</h2>
              <p>
                Alguns projetos em que atuei com edição, publicação, captação ou organização de
                conteúdo. Cada case mostra minha parte no trabalho.
              </p>
            </div>

            <div className="case-stack">
              {cases.map((item) => (
                <article className="case-card" key={item.slug}>
                  <div className="case-content">
                    <p className="case-label">Case autorizado</p>
                    <h3>{item.clientName}</h3>
                    <p className="case-summary">{item.summary}</p>

                    <div className="case-block">
                      <h4>O que eu fiz</h4>
                      <ul>
                        {item.responsibilities.slice(0, 6).map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    {item.resultNote ? (
                      <div className="case-note case-note-highlight">
                        <strong>Resultado permitido</strong>
                        <p>{item.resultNote}</p>
                      </div>
                    ) : null}

                    <div className="case-note">
                      <strong>Observação</strong>
                      <p>{item.transparencyNote}</p>
                    </div>
                  </div>

                  <div className="case-media-panel" aria-label={`Mídias do case ${item.clientName}`}>
                    <div className="case-video-card">
                      <span>Vídeo</span>
                      {item.video ? <SafeVideo src={item.video.src} label={item.video.label} poster={item.metrics[0]?.image} /> : null}
                    </div>

                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <figure
                          className={`metric-card ${
                            metric.label.toLowerCase().includes('curtida') ? 'metric-card--wide' : ''
                          }`}
                          key={metric.label}
                        >
                          <figcaption>{metric.label}</figcaption>
                          <SafeImage
                            src={metric.image}
                            alt={metric.alt}
                            fallbackLabel={`Print de ${metric.label.toLowerCase()} pendente`}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section" id="projetos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{siteProjectsCopy.eyebrow}</p>
              <h2>{siteProjectsCopy.title}</h2>
              <p>{siteProjectsCopy.text}</p>
            </div>

            {siteProjects.length > 0 ? (
              <div className="site-projects-grid">
                {siteProjects.map((project, projectIndex) => {
                  const projectCopy = siteProjectsCopy.projects[projectIndex];

                  return (
                    <article className="site-project-card" key={project.client}>
                      <div className="site-project-preview">
                        <div className="desktop-preview">
                          <SafeImage
                            src={project.desktopImage}
                            alt={`Print desktop do site ${project.client}`}
                            fallbackLabel={siteProjectsCopy.labels.desktopFallback}
                          />
                        </div>

                        <div className="mobile-preview">
                          <SafeImage
                            src={project.mobileImage}
                            alt={`Print mobile do site ${project.client}`}
                            fallbackLabel={siteProjectsCopy.labels.mobileFallback}
                          />
                        </div>
                      </div>

                      <div className="site-project-card__top">
                        <span>{projectCopy?.type ?? project.type}</span>
                        <h3>{project.client}</h3>
                        <p>{projectCopy?.segment ?? project.segment}</p>
                      </div>

                      <div className="site-project-card__body">
                        <div>
                          <strong>{siteProjectsCopy.labels.problem}</strong>
                          <p>{projectCopy?.problem ?? project.problem}</p>
                        </div>

                        <div>
                          <strong>{siteProjectsCopy.labels.strategy}</strong>
                          <p>{projectCopy?.strategy ?? project.strategy}</p>
                        </div>

                        <div>
                          <strong>{siteProjectsCopy.labels.pages}</strong>
                          <p>{projectCopy?.pages ?? project.pages}</p>
                        </div>
                      </div>

                      <ul className="site-project-features">
                        {(projectCopy?.features ?? project.features).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                        {siteProjectsCopy.labels.visit}
                      </a>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="empty-projects">
                <span>{siteProjectsCopy.labels.empty}</span>
                <h3>{siteProjectsCopy.labels.emptyTitle}</h3>
                <p>{siteProjectsCopy.labels.emptyText}</p>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="valores">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{activePricing.eyebrow}</p>
              <h2>{activePricing.title}</h2>
              <p>{activePricing.text}</p>
            </div>

            <div className="price-grid">
              {activePricing.cards.map((item) => (
                <article className="price-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <strong>{item.price}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="scope-box">
              <h3>{activePricing.notIncludedTitle}</h3>
              <p>{activePricing.notIncludedText}</p>
            </div>
          </div>
        </section>

        <section className="section section-about" id="sobre">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2>{about.title}</h2>
            </div>

            <div className="about-text">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>


        <section className="section section-dark" id="faq">
          <div className="container faq-grid">
            <div className="section-heading">
              <p className="eyebrow">{faq.eyebrow}</p>
              <h2>{faq.title}</h2>
              <p>{faq.text}</p>
            </div>

            <div className="faq-list">
              {faq.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="orcamento">
          <div className="container quote-grid">
            <div className="section-heading">
              <p className="eyebrow">Orçamento</p>
              <h2>Me conte o que você precisa.</h2>
              <p>
                Preencha as informações principais para eu entender se você precisa de social media,
                edição de vídeos, site ou uma proposta combinada.
              </p>
            </div>

            <QuoteForm />
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <strong>Erick Garcia</strong>
            <span>Social Media e Sites</span>
          </div>

          <div className="footer-links">
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              {contact.instagram}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termos-de-uso">Termos de Uso</a>
            <p>Atendimento em todo o Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
