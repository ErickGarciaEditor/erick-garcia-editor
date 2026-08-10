import { useEffect, useMemo, useState } from 'react';

type Lang = 'pt' | 'en' | 'es';

const originalText = new WeakMap<Text, string>();

const translations: Record<Exclude<Lang, 'pt'>, Record<string, string>> = {
  en: {
    'Erick Garcia': 'Erick Garcia',
    'SOCIAL MEDIA E SITES': 'SOCIAL MEDIA AND WEBSITES',

    'Social media, vídeos e sites.': 'Social media, videos and websites.',
    'Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor': 'I manage your social media, edit your videos and build websites to present',
    'o seu trabalho e facilitar o contato com novos clientes.': 'your work better and make it easier for new clients to contact you.',

    'Pedir orçamento': 'Request a quote',
    'Ver trabalhos': 'View work',
    'Serviços': 'Services',
    'Trabalhos': 'Work',
    'Valores': 'Pricing',
    'Sobre': 'About',

    'O que eu faço': 'What I do',
    'Serviços simples de entender e fáceis de contratar.': 'Services that are simple to understand and easy to hire.',
    'Você pode contratar uma área específica ou montar uma proposta combinando': 'You can hire one specific service or create a proposal combining',
    'redes sociais, vídeos e site.': 'social media, videos and a website.',

    'Social Media': 'Social Media',
    'Organizo seu perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.': 'I organize your profile, content calendar, posts, Reels, captions and publishing so your brand stays active online.',
    'Edição de vídeos': 'Video editing',
    'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.': 'I turn recordings into ready-to-post clips, with captions, color adjustment, pacing and visual finishing.',
    'Sites profissionais': 'Professional websites',
    'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.': 'I create landing pages and institutional websites to present your work and guide visitors to WhatsApp.',

    'Trabalhos reais': 'Real work',
    'Trabalhos reais, com participação clara.': 'Real work, with clear responsibility.',
    'Projetos com edição, publicação, captação ou organização de conteúdo.': 'Projects involving editing, publishing, recording or content organization.',
    'Em cada case, fica claro o que eu fiz.': 'In each case, my role is clearly explained.',

    'Case autorizado': 'Authorized case',
    'Padre Fabiano Moura': 'Father Fabiano Moura',
    'Padre Pedro Henrique': 'Father Pedro Henrique',
    'Acabamento visual e publicação multiplataforma de conteúdos religiosos para Instagram, TikTok e YouTube.': 'Visual finishing and multi-platform publishing of religious content for Instagram, TikTok and YouTube.',
    'Captação presencial, seleção de trechos, edição, legendagem, fotografia, stories e publicação diária de conteúdos religiosos.': 'On-site recording, clip selection, editing, subtitles, photography, stories and daily publishing of religious content.',
    'O que eu fiz': 'What I did',
    'Observação': 'Transparency note',
    'Resultado permitido': 'Approved result',
    'Carregar vídeo': 'Load video',
    'Visualizações': 'Views',
    'Curtidas': 'Likes',

    'Projetos de sites': 'Website projects',
    'Sites criados para apresentar melhor o trabalho do cliente.': 'Websites created to present the client’s work better.',
    'Projetos com domínio próprio, visual responsivo e caminho claro para contato.': 'Projects with custom domain, responsive design and a clear contact path.',
    'Cada card mostra o contexto do site e o link para visitar.': 'Each card shows the website context and the link to visit it.',
    'Problema': 'Problem',
    'Estratégia': 'Strategy',
    'Páginas': 'Pages',
    'Visitar site': 'Visit website',

    'Valores iniciais': 'Starting prices',
    'Você sabe por onde começar antes de pedir proposta.': 'You know where to start before requesting a proposal.',
    'Os valores mudam conforme volume de conteúdo, plataformas, gravações': 'Prices change according to content volume, platforms, recordings',
    'e complexidade do projeto.': 'and project complexity.',

    'Edição e Publicação': 'Editing and Publishing',
    'A partir de R$700 por mês': 'From US$150 per month',
    'Social Media Essencial': 'Essential Social Media',
    'A partir de R$1.200 por mês': 'From US$250 per month',
    'Social Media Completo': 'Complete Social Media',
    'A partir de R$1.800 por mês': 'From US$380 per month',
    'Landing Page Profissional': 'Professional Landing Page',
    'A partir de R$1.500 por projeto': 'From US$300 per project',
    'Site Institucional': 'Institutional Website',
    'A partir de R$2.500 por projeto': 'From US$500 per project',
    'Captação Presencial': 'On-site Recording',
    'A partir de R$400 por diária curta': 'From US$85 per short session',

    'O que não entra automaticamente': 'What is not automatically included',
    'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.': 'Paid ads, traffic management, replying to DMs, customer support, event coverage, travel, extra recordings, unlimited revisions, paid stock images, domain and services outside the proposal are not automatically included.',

    'Sobre': 'About',
    'Sou Erick Garcia.': 'I am Erick Garcia.',
    'Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.': 'I work with social media, video editing and website creation. I started in practice, recording, editing and publishing content for large-audience profiles.',
    'Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.': 'Today I help businesses, professionals, creators and influencers improve the way they show up online.',

    'Dúvidas comuns': 'Common questions',
    'Perguntas antes de pedir orçamento.': 'Questions before requesting a quote.',
    'Separei as principais dúvidas para você entender melhor como funciona': 'I separated the main questions so you can understand better how',
    'o trabalho antes de chamar no WhatsApp.': 'the work process works before contacting me on WhatsApp.',
    'Você atende clientes de outras cidades?': 'Do you work with clients from other cities?',
    'Como funciona o social media à distância?': 'How does remote social media work?',
    'O cliente precisa gravar os vídeos?': 'Does the client need to record the videos?',
    'Você faz roteiros?': 'Do you write scripts?',
    'Você trabalha com Instagram, TikTok e YouTube?': 'Do you work with Instagram, TikTok and YouTube?',
    'Existe garantia de seguidores?': 'Is there a guarantee of followers?',
    'Quanto custa um site?': 'How much does a website cost?',

    'Orçamento': 'Quote',
    'Me conte o que você precisa.': 'Tell me what you need.',
    'Preencha as informações principais para eu entender se você precisa de social media,': 'Fill in the main information so I can understand whether you need social media,',
    'edição de vídeos, site ou uma proposta combinada.': 'video editing, a website or a combined proposal.',
    'Enviar pelo WhatsApp': 'Send via WhatsApp',
    'Atendimento em todo o Brasil': 'Available worldwide',
  },

  es: {
    'Erick Garcia': 'Erick Garcia',
    'SOCIAL MEDIA E SITES': 'SOCIAL MEDIA Y SITIOS WEB',

    'Social media, vídeos e sites.': 'Social media, videos y sitios web.',
    'Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor': 'Cuido tus redes, edito tus videos y creo sitios web para presentar mejor',
    'o seu trabalho e facilitar o contato com novos clientes.': 'tu trabajo y facilitar el contacto con nuevos clientes.',

    'Pedir orçamento': 'Pedir presupuesto',
    'Ver trabalhos': 'Ver trabajos',
    'Serviços': 'Servicios',
    'Trabalhos': 'Trabajos',
    'Valores': 'Precios',
    'Sobre': 'Sobre mí',

    'O que eu faço': 'Lo que hago',
    'Serviços simples de entender e fáceis de contratar.': 'Servicios simples de entender y fáciles de contratar.',
    'Você pode contratar uma área específica ou montar uma proposta combinando': 'Puedes contratar un servicio específico o crear una propuesta combinando',
    'redes sociais, vídeos e site.': 'redes sociales, videos y sitio web.',

    'Social Media': 'Social Media',
    'Organizo seu perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.': 'Organizo tu perfil, calendario, posts, Reels, textos y publicaciones para que tu marca mantenga presencia en redes.',
    'Edição de vídeos': 'Edición de videos',
    'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.': 'Transformo grabaciones en cortes listos para publicar, con subtítulos, ajuste de color, ritmo y acabado visual.',
    'Sites profissionais': 'Sitios web profesionales',
    'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.': 'Creo landing pages y sitios institucionales para presentar tu trabajo y llevar al cliente hasta WhatsApp.',

    'Trabalhos reais': 'Trabajos reales',
    'Trabalhos reais, com participação clara.': 'Trabajos reales, con participación clara.',
    'Projetos com edição, publicação, captação ou organização de conteúdo.': 'Proyectos con edición, publicación, grabación u organización de contenido.',
    'Em cada case, fica claro o que eu fiz.': 'En cada caso, queda claro lo que hice.',

    'Case autorizado': 'Caso autorizado',
    'Padre Fabiano Moura': 'Padre Fabiano Moura',
    'Padre Pedro Henrique': 'Padre Pedro Henrique',
    'Acabamento visual e publicação multiplataforma de conteúdos religiosos para Instagram, TikTok e YouTube.': 'Acabado visual y publicación multiplataforma de contenidos religiosos para Instagram, TikTok y YouTube.',
    'Captação presencial, seleção de trechos, edição, legendagem, fotografia, stories e publicação diária de conteúdos religiosos.': 'Grabación presencial, selección de fragmentos, edición, subtítulos, fotografía, stories y publicación diaria de contenidos religiosos.',
    'O que eu fiz': 'Lo que hice',
    'Observação': 'Observación',
    'Resultado permitido': 'Resultado permitido',
    'Carregar vídeo': 'Cargar video',
    'Visualizações': 'Visualizaciones',
    'Curtidas': 'Me gusta',

    'Projetos de sites': 'Proyectos de sitios web',
    'Sites criados para apresentar melhor o trabalho do cliente.': 'Sitios creados para presentar mejor el trabajo del cliente.',
    'Projetos com domínio próprio, visual responsivo e caminho claro para contato.': 'Proyectos con dominio propio, diseño responsivo y camino claro para el contacto.',
    'Cada card mostra o contexto do site e o link para visitar.': 'Cada tarjeta muestra el contexto del sitio y el enlace para visitarlo.',
    'Problema': 'Problema',
    'Estratégia': 'Estrategia',
    'Páginas': 'Páginas',
    'Visitar site': 'Visitar sitio',

    'Valores iniciais': 'Precios iniciales',
    'Você sabe por onde começar antes de pedir proposta.': 'Sabes por dónde empezar antes de pedir una propuesta.',
    'Os valores mudam conforme volume de conteúdo, plataformas, gravações': 'Los precios cambian según el volumen de contenido, plataformas, grabaciones',
    'e complexidade do projeto.': 'y complejidad del proyecto.',

    'Edição e Publicação': 'Edición y Publicación',
    'A partir de R$700 por mês': 'Desde €140 al mes',
    'Social Media Essencial': 'Social Media Esencial',
    'A partir de R$1.200 por mês': 'Desde €230 al mes',
    'Social Media Completo': 'Social Media Completo',
    'A partir de R$1.800 por mês': 'Desde €350 al mes',
    'Landing Page Profissional': 'Landing Page Profesional',
    'A partir de R$1.500 por projeto': 'Desde €280 por proyecto',
    'Site Institucional': 'Sitio Institucional',
    'A partir de R$2.500 por projeto': 'Desde €460 por proyecto',
    'Captação Presencial': 'Grabación Presencial',
    'A partir de R$400 por diária curta': 'Desde €75 por jornada corta',

    'O que não entra automaticamente': 'Lo que no está incluido automáticamente',
    'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.': 'Anuncios pagados, gestión de tráfico, respuesta de mensajes, atención al cliente, cobertura de eventos, desplazamiento, grabaciones extra, cambios ilimitados, banco de imágenes pago, dominio y servicios fuera de la propuesta no están incluidos automáticamente.',

    'Sobre': 'Sobre mí',
    'Sou Erick Garcia.': 'Soy Erick Garcia.',
    'Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.': 'Trabajo con social media, edición de videos y creación de sitios web. Empecé en la práctica, grabando, editando y publicando contenidos para perfiles de gran audiencia.',
    'Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.': 'Hoy ayudo a empresas, profesionales, creadores e influencers a mejorar la forma en que aparecen en internet.',

    'Dúvidas comuns': 'Preguntas frecuentes',
    'Perguntas antes de pedir orçamento.': 'Preguntas antes de pedir presupuesto.',
    'Separei as principais dúvidas para você entender melhor como funciona': 'Separé las principales dudas para que entiendas mejor cómo funciona',
    'o trabalho antes de chamar no WhatsApp.': 'el trabajo antes de llamar por WhatsApp.',
    'Você atende clientes de outras cidades?': '¿Atiendes clientes de otras ciudades?',
    'Como funciona o social media à distância?': '¿Cómo funciona el social media a distancia?',
    'O cliente precisa gravar os vídeos?': '¿El cliente necesita grabar los videos?',
    'Você faz roteiros?': '¿Haces guiones?',
    'Você trabalha com Instagram, TikTok e YouTube?': '¿Trabajas con Instagram, TikTok y YouTube?',
    'Existe garantia de seguidores?': '¿Hay garantía de seguidores?',
    'Quanto custa um site?': '¿Cuánto cuesta un sitio web?',

    'Orçamento': 'Presupuesto',
    'Me conte o que você precisa.': 'Cuéntame lo que necesitas.',
    'Preencha as informações principais para eu entender se você precisa de social media,': 'Completa la información principal para entender si necesitas social media,',
    'edição de vídeos, site ou uma proposta combinada.': 'edición de videos, sitio web o una propuesta combinada.',
    'Enviar pelo WhatsApp': 'Enviar por WhatsApp',
    'Atendimento em todo o Brasil': 'Atención internacional',
  },
};

function detectLanguage(): Lang {
  const saved = localStorage.getItem('site-lang') as Lang | null;

  if (saved === 'pt' || saved === 'en' || saved === 'es') {
    return saved;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('es')) return 'es';
  if (browserLanguage.startsWith('en')) return 'en';

  return 'pt';
}

function applyTranslations(lang: Lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.body.dataset.lang = lang;

  const title =
    lang === 'en'
      ? 'Erick Garcia | Social Media, Video Editor and Website Creator'
      : lang === 'es'
        ? 'Erick Garcia | Social Media, Edición de Videos y Sitios Web'
        : 'Erick Garcia | Social Media, Editor de Vídeos e Criador de Sites';

  document.title = title;

  const description =
    lang === 'en'
      ? 'Social media, video editing and website creation for businesses, professionals, creators and influencers.'
      : lang === 'es'
        ? 'Social media, edición de videos y creación de sitios web para empresas, profesionales, creadores e influencers.'
        : 'Social media, edição de vídeos e criação de sites para empresas, profissionais, criadores e influenciadores de todo o Brasil.';

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description);

  const dictionary = lang === 'pt' ? null : translations[lang];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;

    if (!parent) continue;

    const tag = parent.tagName.toLowerCase();

    if (['script', 'style', 'textarea', 'input', 'select', 'option'].includes(tag)) {
      continue;
    }

    if (!node.textContent || !node.textContent.trim()) {
      continue;
    }

    nodes.push(node);
  }

  for (const node of nodes) {
    if (!originalText.has(node)) {
      originalText.set(node, node.textContent ?? '');
    }

    const original = originalText.get(node) ?? '';
    const trimmed = original.trim();

    if (!trimmed) continue;

    const leading = original.match(/^\s*/)?.[0] ?? '';
    const trailing = original.match(/\s*$/)?.[0] ?? '';

    if (lang === 'pt') {
      node.textContent = original;
      continue;
    }

    const translated = dictionary?.[trimmed];

    if (translated) {
      node.textContent = `${leading}${translated}${trailing}`;
    }
  }
}

export function LanguageLayer() {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    setLang(detectLanguage());
  }, []);

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    window.setTimeout(() => applyTranslations(lang), 0);
  }, [lang]);

  const label = useMemo(() => {
    if (lang === 'en') return 'English';
    if (lang === 'es') return 'Español';
    return 'Português';
  }, [lang]);

  return (
    <div className="language-switcher" aria-label={`Idioma atual: ${label}`}>
      <button type="button" onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>
        PT
      </button>
      <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
        EN
      </button>
      <button type="button" onClick={() => setLang('es')} aria-pressed={lang === 'es'}>
        ES
      </button>
    </div>
  );
}
