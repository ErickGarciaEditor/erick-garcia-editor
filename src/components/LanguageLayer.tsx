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
    'Padre Fabiano Moura': 'Padre Fabiano Moura',
    'Padre Pedro Henrique': 'Padre Pedro Henrique',
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
    'Valores iniciais para projetos no Brasil.': 'You know where to start before requesting a proposal.',
    'Os valores mudam conforme volume de conteúdo, plataformas, gravações': 'Prices change according to content volume, platforms, recordings',
    'e complexidade do projeto.': 'and project complexity.',

    'Edição e Publicação': 'Editing and Publishing',
    'A partir de R$790 por mês': 'From US$500 per month',
    'A partir de R$1.390 por mês': 'From US$850 per month',
    'Social Media Completo': 'Complete Social Media',
    'A partir de R$2.190 por mês': 'From US$1,250 per month',
    'Landing Page Profissional': 'Professional Landing Page',
    'A partir de R$1.900 por projeto': 'From US$1,000 per project',
    'Site Institucional': 'Institutional Website',
    'A partir de R$3.200 por projeto': 'From US$1,700 per project',
    'Captação Presencial': 'On-site Recording',
    'A partir de R$500 por diária curta': 'Custom quote',

    'O que não entra automaticamente': 'What is not automatically included',
    'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.': 'Paid ads, traffic management, replying to DMs, customer support, event coverage, travel, extra recordings, unlimited revisions, paid stock images, domain and services outside the proposal are not automatically included.',

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
    'Valores iniciais para projetos no Brasil.': 'Sabes por dónde empezar antes de pedir una propuesta.',
    'Os valores mudam conforme volume de conteúdo, plataformas, gravações': 'Los precios cambian según el volumen de contenido, plataformas, grabaciones',
    'e complexidade do projeto.': 'y complejidad del proyecto.',

    'Edição e Publicação': 'Edición y Publicación',
    'A partir de R$790 por mês': 'Desde €450 al mes',
    'A partir de R$1.390 por mês': 'Desde €1.100 al mes',
    'Social Media Completo': 'Social Media Completo',
    'A partir de R$2.190 por mês': 'Desde €1.100 al mes',
    'Landing Page Profissional': 'Landing Page Profesional',
    'A partir de R$1.900 por projeto': 'Desde €900 por proyecto',
    'Site Institucional': 'Sitio Institucional',
    'A partir de R$3.200 por projeto': 'Desde €1.500 por proyecto',
    'Captação Presencial': 'Grabación Presencial',
    'A partir de R$500 por diária curta': 'Presupuesto personalizado',

    'O que não entra automaticamente': 'Lo que no está incluido automáticamente',
    'Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.': 'Anuncios pagados, gestión de tráfico, respuesta de mensajes, atención al cliente, cobertura de eventos, desplazamiento, grabaciones extra, cambios ilimitados, banco de imágenes pago, dominio y servicios fuera de la propuesta no están incluidos automáticamente.',

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

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

const extraTranslations: Record<Exclude<Lang, 'pt'>, Record<string, string>> = {
  en: {
    'PARA QUEM É': 'WHO IT IS FOR',
    'LO QUE HAGO': 'WHAT I DO',
    'O QUE EU FAÇO': 'WHAT I DO',

    'Empresas': 'Businesses',
    'Profissionais': 'Professionals',
    'Criadores': 'Creators',
    'Influenciadores': 'Influencers',
    'Negócios locais': 'Local businesses',

    'Escolha o que você precisa agora.': 'Choose what you need right now.',
    'Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.': 'Social media, videos and websites can be hired separately or combined into one proposal.',

    'Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.': 'I organize your profile, calendar, posts, Reels, captions and publishing so your brand stays active online.',
    'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.': 'I turn recordings into ready-to-post clips, with captions, color adjustment, pacing and visual finishing.',
    'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.': 'I create landing pages and business websites to present your work and guide visitors to WhatsApp.',

    'Trabalhos reais, com participação clara.': 'Real work, with clear responsibility.',
    'Alguns projetos em que atuei com edição, publicação, captação ou organização de conteúdo. Cada case mostra minha parte no trabalho.': 'Some projects where I worked with editing, publishing, recording or content organization. Each case shows exactly what I did.',

    'Sites criados para apresentar melhor o trabalho do cliente.': 'Websites created to present the client’s work better.',
    'Valores iniciais para projetos no Brasil.': 'You know where to start before requesting a proposal.',
    'Perguntas antes de pedir orçamento.': 'Questions before requesting a quote.',
    'Me conte o que você precisa.': 'Tell me what you need.',

    'Recebimento dos vídeos preparados pelo cliente': 'Receiving videos prepared by the client',
    'Tratamento visual': 'Visual treatment',
    'Preparação dos arquivos': 'File preparation',
    'Ajuste básico de cor': 'Basic color adjustment',
    'Inclusão de música quando necessária': 'Music added when needed',
    'Programação': 'Scheduling',
    'Seleção dos melhores trechos': 'Selecting the best clips',
    'Criação de diversos cortes': 'Creating several short clips',
    'Edição': 'Editing',
    'Gravação presencial das pregações': 'On-site sermon recording',
    'Captação de aproximadamente 10 a 15 minutos': 'Recording approximately 10 to 15 minutes',
    'Vídeos com aproximadamente 1 minuto e 30 segundos a 1 minuto e 50 segundos': 'Videos around 1:30 to 1:50 long',

    'Durante a atuação de Erick, o perfil passou de aproximadamente 50 mil para 100 mil seguidores.': 'During Erick’s work, the profile went from approximately 50 thousand to 100 thousand followers.',
    'O crescimento posterior do perfil não deve ser apresentado como resultado da atuação de Erick.': 'The profile’s later growth should not be presented as a result of Erick’s work.',
    'Roteiros, gravação, legendagem inserida nos vídeos, capas, textos das publicações e direcionamento dos horários são fornecidos pelo cliente. A atuação de Erick concentra-se no acabamento visual e na publicação multiplataforma.': 'Scripts, recordings, captions inserted in videos, covers, post texts and posting times are provided by the client. Erick’s work focuses on visual finishing and multi-platform publishing.',

    'Edição e Publicação': 'Editing and Publishing',
    'Social Media Completo': 'Complete Social Media',
    'Landing Page Profissional': 'Professional Landing Page',
    'Site Institucional': 'Business Website',
    'Captação Presencial': 'On-site Recording',

    'A partir de R$790 por mês': 'From US$500 per month',
    'A partir de R$1.390 por mês': 'From US$850 per month',
    'A partir de R$2.190 por mês': 'From US$1,250 per month',
    'A partir de R$1.900 por projeto': 'From US$1,000 per project',
    'A partir de R$3.200 por projeto': 'From US$1,700 per project',
    'A partir de R$500 por diária curta': 'Custom quote',

    'Atendimento em todo o Brasil': 'Available worldwide',
    '@erickgarciaeditor': '@erickgarciaeditor',
    'Política de Privacidade': 'Privacy Policy',
    'Termos de Uso': 'Terms of Use'
  },

  es: {
    'PARA QUEM É': 'PARA QUIÉN ES',
    'WHAT I DO': 'LO QUE HAGO',
    'O QUE EU FAÇO': 'LO QUE HAGO',

    'Empresas': 'Empresas',
    'Profissionais': 'Profesionales',
    'Criadores': 'Creadores',
    'Influenciadores': 'Influencers',
    'Negócios locais': 'Negocios locales',

    'Escolha o que você precisa agora.': 'Elige lo que necesitas ahora.',
    'Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.': 'Redes sociales, videos y sitios web pueden contratarse por separado o combinarse en una sola propuesta.',

    'Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.': 'Organizo tu perfil, calendario, posts, Reels, textos y publicaciones para que tu marca mantenga presencia en redes.',
    'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.': 'Transformo grabaciones en cortes listos para publicar, con subtítulos, ajuste de color, ritmo y acabado visual.',
    'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.': 'Creo landing pages y sitios profesionales para presentar tu trabajo y llevar al cliente hasta WhatsApp.',

    'Trabalhos reais, com participação clara.': 'Trabajos reales, con participación clara.',
    'Alguns projetos em que atuei com edição, publicação, captação ou organização de conteúdo. Cada case mostra minha parte no trabalho.': 'Algunos proyectos donde trabajé con edición, publicación, grabación u organización de contenido. Cada caso muestra exactamente lo que hice.',

    'Sites criados para apresentar melhor o trabalho do cliente.': 'Sitios creados para presentar mejor el trabajo del cliente.',
    'Valores iniciais para projetos no Brasil.': 'Sabes por dónde empezar antes de pedir una propuesta.',
    'Perguntas antes de pedir orçamento.': 'Preguntas antes de pedir presupuesto.',
    'Me conte o que você precisa.': 'Cuéntame lo que necesitas.',

    'Recebimento dos vídeos preparados pelo cliente': 'Recepción de videos preparados por el cliente',
    'Tratamento visual': 'Tratamiento visual',
    'Preparação dos arquivos': 'Preparación de archivos',
    'Ajuste básico de cor': 'Ajuste básico de color',
    'Inclusão de música quando necessária': 'Música incluida cuando es necesario',
    'Programação': 'Programación',
    'Seleção dos melhores trechos': 'Selección de los mejores fragmentos',
    'Criação de diversos cortes': 'Creación de varios cortes',
    'Edição': 'Edición',
    'Gravação presencial das pregações': 'Grabación presencial de las predicaciones',
    'Captação de aproximadamente 10 a 15 minutos': 'Grabación de aproximadamente 10 a 15 minutos',
    'Vídeos com aproximadamente 1 minuto e 30 segundos a 1 minuto e 50 segundos': 'Videos de aproximadamente 1:30 a 1:50 minutos',

    'Durante a atuação de Erick, o perfil passou de aproximadamente 50 mil para 100 mil seguidores.': 'Durante el trabajo de Erick, el perfil pasó de aproximadamente 50 mil a 100 mil seguidores.',
    'O crescimento posterior do perfil não deve ser apresentado como resultado da atuação de Erick.': 'El crecimiento posterior del perfil no debe presentarse como resultado del trabajo de Erick.',
    'Roteiros, gravação, legendagem inserida nos vídeos, capas, textos das publicações e direcionamento dos horários são fornecidos pelo cliente. A atuação de Erick concentra-se no acabamento visual e na publicação multiplataforma.': 'Guiones, grabación, subtítulos insertados en los videos, portadas, textos de publicaciones y horarios son proporcionados por el cliente. El trabajo de Erick se concentra en el acabado visual y la publicación multiplataforma.',

    'Edição e Publicação': 'Edición y Publicación',
    'Social Media Completo': 'Social Media Completo',
    'Landing Page Profissional': 'Landing Page Profesional',
    'Site Institucional': 'Sitio Profesional',
    'Captação Presencial': 'Grabación Presencial',

    'A partir de R$790 por mês': 'Desde €450 al mes',
    'A partir de R$1.390 por mês': 'Desde €1.100 al mes',
    'A partir de R$2.190 por mês': 'Desde €1.100 al mes',
    'A partir de R$1.900 por projeto': 'Desde €900 por proyecto',
    'A partir de R$3.200 por projeto': 'Desde €1.500 por proyecto',
    'A partir de R$500 por diária curta': 'Presupuesto personalizado',

    'Atendimento em todo o Brasil': 'Atención internacional',
    '@erickgarciaeditor': '@erickgarciaeditor',
    'Política de Privacidade': 'Política de Privacidad',
    'Termos de Uso': 'Términos de Uso'
  }
};


const runtimeOverrides: Record<Lang, Record<string, string>> = {
  pt: {},

  en: {
    "SOCIAL MEDIA E SITES": "SOCIAL MEDIA AND WEBSITES",
    "Social media, editor de vídeos e criador de sites.": "Social media, video editing and websites.",
    "Social media, vídeos e sites.": "Social media, videos and websites.",
    "Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor o seu trabalho e facilitar o contato com novos clientes.": "I manage your social media, edit your videos and build websites so your work looks better and new clients can contact you more easily.",
    "Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor": "I manage your social media, edit your videos and build websites so your work looks better",
    "o seu trabalho e facilitar o contato com novos clientes.": "and new clients can contact you more easily.",

    "Pedir orçamento": "Request a quote",
    "Ver trabalhos": "View work",
    "Serviços": "Services",
    "Trabalhos": "Work",
    "Sites": "Websites",
    "Valores": "Pricing",
    "Sobre": "About",
    "FAQ": "FAQ",

    "PARA QUEM É": "WHO IT IS FOR",
    "Empresas": "Businesses",
    "Profissionais": "Professionals",
    "Criadores": "Creators",
    "Influenciadores": "Influencers",
    "Negócios locais": "Local businesses",

    "O QUE EU FAÇO": "WHAT I DO",
    "Escolha o que você precisa agora.": "Choose what you need right now.",
    "Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.": "Social media, videos and websites can be hired separately or combined into one proposal.",

    "Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.": "I organize your profile, calendar, posts, Reels, captions and publishing so your brand stays active online.",
    "Edição de vídeos": "Video editing",
    "Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.": "I turn recordings into ready-to-post clips, with captions, color adjustment, pacing and visual finishing.",
    "Sites profissionais": "Professional websites",
    "Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.": "I create landing pages and business websites to present your work and guide visitors to WhatsApp.",

    "TRABALHOS REAIS": "REAL WORK",
    "Trabalhos reais, com participação clara.": "Real work, with clear responsibility.",
    "Alguns projetos em que atuei com edição, publicação, captação ou organização de conteúdo. Cada case mostra minha parte no trabalho.": "Some projects where I worked with editing, publishing, recording or content organization. Each case shows exactly what I did.",

    "CASE AUTORIZADO": "AUTHORIZED CASE",
    "Padre Fabiano Moura": "Padre Fabiano Moura",
    "Padre Pedro Henrique": "Padre Pedro Henrique",
    "Acabamento visual e publicação multiplataforma de conteúdos religiosos para Instagram, TikTok e YouTube.": "Visual finishing and multi-platform publishing of religious content for Instagram, TikTok and YouTube.",
    "Captação presencial, seleção de trechos, edição, legendagem, fotografia, stories e publicação diária de conteúdos religiosos.": "On-site recording, clip selection, editing, subtitles, photography, stories and daily publishing of religious content.",
    "O que eu fiz": "What I did",
    "Recebimento dos vídeos preparados pelo cliente": "Receiving videos prepared by the client",
    "Tratamento visual": "Visual treatment",
    "Preparação dos arquivos": "File preparation",
    "Ajuste básico de cor": "Basic color adjustment",
    "Inclusão de música quando necessária": "Music added when needed",
    "Programação": "Scheduling",
    "Gravação presencial das pregações": "On-site sermon recording",
    "Captação de aproximadamente 10 a 15 minutos": "Recording approximately 10 to 15 minutes",
    "Seleção dos melhores trechos": "Selecting the best clips",
    "Criação de diversos cortes": "Creating several short clips",
    "Edição": "Editing",
    "Resultado permitido": "Approved result",
    "Observação": "Transparency note",
    "Durante a atuação de Erick, o perfil passou de aproximadamente 50 mil para 100 mil seguidores.": "During Erick’s work, the profile went from approximately 50 thousand to 100 thousand followers.",
    "O crescimento posterior do perfil não deve ser apresentado como resultado da atuação de Erick.": "The profile’s later growth should not be presented as a result of Erick’s work.",
    "Roteiros, gravação, legendagem inserida nos vídeos, capas, textos das publicações e direcionamento dos horários são fornecidos pelo cliente. A atuação de Erick concentra-se no acabamento visual e na publicação multiplataforma.": "Scripts, recordings, captions inserted in videos, covers, post texts and posting times are provided by the client. Erick’s work focuses on visual finishing and multi-platform publishing.",
    "VÍDEO": "VIDEO",
    "VISUALIZAÇÕES": "VIEWS",
    "CURTIDAS": "LIKES",
    "Carregar vídeo": "Load video",

    "PROJETOS DE SITES": "WEBSITE PROJECTS",
    "Sites criados para apresentar melhor o trabalho do cliente.": "Websites created to present the client’s work better.",
    "Projetos com domínio próprio, visual responsivo e caminho claro para contato.": "Projects with custom domain, responsive design and a clear contact path.",
    "Cada card mostra o contexto do site e o link para visitar.": "Each card shows the website context and the link to visit it.",
    "Problema": "Problem",
    "Estratégia": "Strategy",
    "Páginas": "Pages",
    "Visitar site": "Visit website",

    "VALORES INICIAIS": "STARTING PRICES",
    "Valores iniciais para projetos no Brasil.": "Starting prices for remote international projects. Payment through Stripe.",
    "Você sabe por onde começar antes de pedir proposta.": "Starting prices for remote international projects. Payment through Stripe.",
    "Os valores mudam conforme volume de conteúdo, plataformas, gravações e complexidade do projeto.": "Prices change according to content volume, platforms, recordings and project complexity.",
    "Os valores mudam conforme volume de conteúdo, plataformas, gravações": "Prices change according to content volume, platforms, recordings",
    "e complexidade do projeto.": "and project complexity.",

    "Edição e Publicação": "Editing and Publishing",
    "A partir de R$790 por mês": "From US$500 per month",
    "A partir de R$1.390 por mês": "From US$850 per month",
    "Social Media Completo": "Complete Social Media",
    "A partir de R$2.190 por mês": "From US$1,250 per month",
    "Landing Page Profissional": "Professional Landing Page",
    "A partir de R$1.900 por projeto": "From US$1,000 per project",
    "Site Institucional": "Business Website",
    "A partir de R$3.200 por projeto": "From US$1,700 per project",
    "Captação Presencial": "On-site Recording",
    "A partir de R$500 por diária curta": "Custom quote",

    "O que não entra automaticamente": "What is not automatically included",
    "Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.": "Paid ads, traffic management, replying to DMs, customer support, event coverage, travel, extra recordings, unlimited revisions, paid stock images, domain and services outside the proposal are not automatically included.",

    "Sou Erick Garcia.": "I am Erick Garcia.",
    "Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.": "I work with social media, video editing and website creation. I started in practice, recording, editing and publishing content for large-audience profiles.",
    "Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.": "Today I help businesses, professionals, creators and influencers improve the way they show up online.",

    "DÚVIDAS COMUNS": "COMMON QUESTIONS",
    "Perguntas antes de pedir orçamento.": "Questions before requesting a quote.",
    "Separei as principais dúvidas para você entender melhor como funciona o trabalho antes de chamar no WhatsApp.": "I separated the main questions so you can understand how the work process works before contacting me on WhatsApp.",
    "Você atende clientes de outras cidades?": "Do you work with clients from other cities?",
    "Como funciona o social media à distância?": "How does remote social media work?",
    "O cliente precisa gravar os vídeos?": "Does the client need to record the videos?",
    "Você faz roteiros?": "Do you write scripts?",
    "Você trabalha com Instagram, TikTok e YouTube?": "Do you work with Instagram, TikTok and YouTube?",
    "Existe garantia de seguidores?": "Is there a guarantee of followers?",
    "Quanto custa um site?": "How much does a website cost?",

    "ORÇAMENTO": "QUOTE",
    "Me conte o que você precisa.": "Tell me what you need.",
    "Enviar pelo WhatsApp": "Send via WhatsApp",
    "Política de Privacidade": "Privacy Policy",
    "Termos de Uso": "Terms of Use",
    "Atendimento em todo o Brasil": "Available worldwide"
  },

  es: {
    "SOCIAL MEDIA E SITES": "SOCIAL MEDIA Y SITIOS WEB",
    "Social media, editor de vídeos e criador de sites.": "Social media, edición de videos y sitios web.",
    "Social media, vídeos e sites.": "Social media, videos y sitios web.",
    "Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor o seu trabalho e facilitar o contato com novos clientes.": "Cuido tus redes, edito tus videos y creo sitios web para que tu trabajo se vea mejor y nuevos clientes puedan contactarte más fácil.",
    "Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor": "Cuido tus redes, edito tus videos y creo sitios web para que tu trabajo se vea mejor",
    "o seu trabalho e facilitar o contato com novos clientes.": "y nuevos clientes puedan contactarte más fácil.",

    "Pedir orçamento": "Pedir presupuesto",
    "Ver trabalhos": "Ver trabajos",
    "Serviços": "Servicios",
    "Trabalhos": "Trabajos",
    "Sites": "Sitios",
    "Valores": "Precios",
    "Sobre": "Sobre mí",
    "FAQ": "FAQ",

    "PARA QUEM É": "PARA QUIÉN ES",
    "Empresas": "Empresas",
    "Profissionais": "Profesionales",
    "Criadores": "Creadores",
    "Influenciadores": "Influencers",
    "Negócios locais": "Negocios locales",

    "O QUE EU FAÇO": "LO QUE HAGO",
    "Escolha o que você precisa agora.": "Elige lo que necesitas ahora.",
    "Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em uma proposta única.": "Redes sociales, videos y sitios web pueden contratarse por separado o combinarse en una sola propuesta.",

    "Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.": "Organizo tu perfil, calendario, posts, Reels, textos y publicaciones para que tu marca mantenga presencia en redes.",
    "Edição de vídeos": "Edición de videos",
    "Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.": "Transformo grabaciones en cortes listos para publicar, con subtítulos, ajuste de color, ritmo y acabado visual.",
    "Sites profissionais": "Sitios web profesionales",
    "Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.": "Creo landing pages y sitios profesionales para presentar tu trabajo y llevar al cliente hasta WhatsApp.",

    "TRABALHOS REAIS": "TRABAJOS REALES",
    "Trabalhos reais, com participação clara.": "Trabajos reales, con participación clara.",
    "Alguns projetos em que atuei com edição, publicação, captação ou organização de conteúdo. Cada case mostra minha parte no trabalho.": "Algunos proyectos donde trabajé con edición, publicación, grabación u organización de contenido. Cada caso muestra exactamente lo que hice.",

    "CASE AUTORIZADO": "CASO AUTORIZADO",
    "Padre Fabiano Moura": "Padre Fabiano Moura",
    "Padre Pedro Henrique": "Padre Pedro Henrique",
    "Acabamento visual e publicação multiplataforma de conteúdos religiosos para Instagram, TikTok e YouTube.": "Acabado visual y publicación multiplataforma de contenidos religiosos para Instagram, TikTok y YouTube.",
    "Captação presencial, seleção de trechos, edição, legendagem, fotografia, stories e publicação diária de conteúdos religiosos.": "Grabación presencial, selección de fragmentos, edición, subtítulos, fotografía, stories y publicación diaria de contenidos religiosos.",
    "O que eu fiz": "Lo que hice",
    "Recebimento dos vídeos preparados pelo cliente": "Recepción de videos preparados por el cliente",
    "Tratamento visual": "Tratamiento visual",
    "Preparação dos arquivos": "Preparación de archivos",
    "Ajuste básico de cor": "Ajuste básico de color",
    "Inclusão de música quando necessária": "Música incluida cuando es necesario",
    "Programação": "Programación",
    "Gravação presencial das pregações": "Grabación presencial de las predicaciones",
    "Captação de aproximadamente 10 a 15 minutos": "Grabación de aproximadamente 10 a 15 minutos",
    "Seleção dos melhores trechos": "Selección de los mejores fragmentos",
    "Criação de diversos cortes": "Creación de varios cortes",
    "Edição": "Edición",
    "Resultado permitido": "Resultado permitido",
    "Observação": "Observación",
    "Durante a atuação de Erick, o perfil passou de aproximadamente 50 mil para 100 mil seguidores.": "Durante el trabajo de Erick, el perfil pasó de aproximadamente 50 mil a 100 mil seguidores.",
    "O crescimento posterior do perfil não deve ser apresentado como resultado da atuação de Erick.": "El crecimiento posterior del perfil no debe presentarse como resultado del trabajo de Erick.",
    "Roteiros, gravação, legendagem inserida nos vídeos, capas, textos das publicações e direcionamento dos horários são fornecidos pelo cliente. A atuação de Erick concentra-se no acabamento visual e na publicação multiplataforma.": "Guiones, grabación, subtítulos insertados en los videos, portadas, textos de publicaciones y horarios son proporcionados por el cliente. El trabajo de Erick se concentra en el acabado visual y la publicación multiplataforma.",
    "VÍDEO": "VIDEO",
    "VISUALIZAÇÕES": "VISUALIZACIONES",
    "CURTIDAS": "ME GUSTA",
    "Carregar vídeo": "Cargar video",

    "PROJETOS DE SITES": "PROYECTOS DE SITIOS",
    "Sites criados para apresentar melhor o trabalho do cliente.": "Sitios creados para presentar mejor el trabajo del cliente.",
    "Projetos com domínio próprio, visual responsivo e caminho claro para contato.": "Proyectos con dominio propio, diseño responsivo y camino claro para contacto.",
    "Cada card mostra o contexto do site e o link para visitar.": "Cada tarjeta muestra el contexto del sitio y el enlace para visitarlo.",
    "Problema": "Problema",
    "Estratégia": "Estrategia",
    "Páginas": "Páginas",
    "Visitar site": "Visitar sitio",

    "VALORES INICIAIS": "PRECIOS INICIALES",
    "Valores iniciais para projetos no Brasil.": "Precios iniciales para proyectos remotos internacionales. Pago por Stripe.",
    "Você sabe por onde começar antes de pedir proposta.": "Precios iniciales para proyectos remotos internacionales. Pago por Stripe.",
    "Os valores mudam conforme volume de conteúdo, plataformas, gravações e complexidade do projeto.": "Los precios cambian según volumen de contenido, plataformas, grabaciones y complejidad del proyecto.",
    "Os valores mudam conforme volume de conteúdo, plataformas, gravações": "Los precios cambian según volumen de contenido, plataformas, grabaciones",
    "e complexidade do projeto.": "y complejidad del proyecto.",

    "Edição e Publicação": "Edición y Publicación",
    "A partir de R$790 por mês": "Desde €450 al mes",
    "A partir de R$1.390 por mês": "Desde €750 al mes",
    "Social Media Completo": "Social Media Completo",
    "A partir de R$2.190 por mês": "Desde €1.100 al mes",
    "Landing Page Profissional": "Landing Page Profesional",
    "A partir de R$1.900 por projeto": "Desde €900 por proyecto",
    "Site Institucional": "Sitio Profesional",
    "A partir de R$3.200 por projeto": "Desde €1.500 por proyecto",
    "Captação Presencial": "Grabación Presencial",
    "A partir de R$500 por diária curta": "Presupuesto personalizado",

    "O que não entra automaticamente": "Lo que no está incluido automáticamente",
    "Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente, cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco de imagens pago, domínio e serviços fora da proposta.": "Anuncios pagados, gestión de tráfico, respuesta a mensajes, atención al cliente, cobertura de eventos, desplazamiento, grabaciones extra, cambios ilimitados, banco de imágenes pago, dominio y servicios fuera de la propuesta no están incluidos automáticamente.",

    "Sou Erick Garcia.": "Soy Erick Garcia.",
    "Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática, gravando, editando e publicando conteúdos para perfis de grande audiência.": "Trabajo con social media, edición de videos y creación de sitios web. Empecé en la práctica, grabando, editando y publicando contenidos para perfiles de gran audiencia.",
    "Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma como aparecem na internet.": "Hoy ayudo a empresas, profesionales, creadores e influencers a mejorar la forma en que aparecen en internet.",

    "DÚVIDAS COMUNS": "PREGUNTAS FRECUENTES",
    "Perguntas antes de pedir orçamento.": "Preguntas antes de pedir presupuesto.",
    "Separei as principais dúvidas para você entender melhor como funciona o trabalho antes de chamar no WhatsApp.": "Separé las principales dudas para que entiendas mejor cómo funciona el trabajo antes de llamar por WhatsApp.",
    "Você atende clientes de outras cidades?": "¿Atiendes clientes de otras ciudades?",
    "Como funciona o social media à distância?": "¿Cómo funciona el social media a distancia?",
    "O cliente precisa gravar os vídeos?": "¿El cliente necesita grabar los videos?",
    "Você faz roteiros?": "¿Haces guiones?",
    "Você trabalha com Instagram, TikTok e YouTube?": "¿Trabajas con Instagram, TikTok y YouTube?",
    "Existe garantia de seguidores?": "¿Hay garantía de seguidores?",
    "Quanto custa um site?": "¿Cuánto cuesta un sitio web?",

    "ORÇAMENTO": "PRESUPUESTO",
    "Me conte o que você precisa.": "Cuéntame lo que necesitas.",
    "Enviar pelo WhatsApp": "Enviar por WhatsApp",
    "Política de Privacidade": "Política de Privacidad",
    "Termos de Uso": "Términos de Uso",
    "Atendimento em todo o Brasil": "Atención internacional"
  }
};

function detectLanguage(): Lang {
  const pathLang = window.location.pathname.split('/').filter(Boolean)[0];

  if (pathLang === 'en' || pathLang === 'es') {
    return pathLang;
  }

  if (pathLang === 'pt') {
    return 'pt';
  }

  const saved = localStorage.getItem('site-lang') as Lang | null;

  if (saved === 'pt' || saved === 'en' || saved === 'es') {
    return saved;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('es')) return 'es';
  if (browserLanguage.startsWith('en')) return 'en';

  return 'pt';
}

function getCanonicalUrl(lang: Lang) {
  if (lang === 'en') return 'https://erickgarciaeditor.com.br/en';
  if (lang === 'es') return 'https://erickgarciaeditor.com.br/es';
  return 'https://erickgarciaeditor.com.br/';
}

function updateMetaUrl(lang: Lang) {
  const url = getCanonicalUrl(lang);

  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);

  let alternatePt = document.querySelector('link[hreflang="pt-BR"]');
  let alternateEn = document.querySelector('link[hreflang="en"]');
  let alternateEs = document.querySelector('link[hreflang="es"]');
  let alternateDefault = document.querySelector('link[hreflang="x-default"]');

  if (!alternatePt) {
    alternatePt = document.createElement('link');
    alternatePt.setAttribute('rel', 'alternate');
    alternatePt.setAttribute('hreflang', 'pt-BR');
    document.head.appendChild(alternatePt);
  }

  if (!alternateEn) {
    alternateEn = document.createElement('link');
    alternateEn.setAttribute('rel', 'alternate');
    alternateEn.setAttribute('hreflang', 'en');
    document.head.appendChild(alternateEn);
  }

  if (!alternateEs) {
    alternateEs = document.createElement('link');
    alternateEs.setAttribute('rel', 'alternate');
    alternateEs.setAttribute('hreflang', 'es');
    document.head.appendChild(alternateEs);
  }

  if (!alternateDefault) {
    alternateDefault = document.createElement('link');
    alternateDefault.setAttribute('rel', 'alternate');
    alternateDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(alternateDefault);
  }

  alternatePt.setAttribute('href', 'https://erickgarciaeditor.com.br/');
  alternateEn.setAttribute('href', 'https://erickgarciaeditor.com.br/en');
  alternateEs.setAttribute('href', 'https://erickgarciaeditor.com.br/es');
  alternateDefault.setAttribute('href', 'https://erickgarciaeditor.com.br/');
}

function setPathForLanguage(lang: Lang) {
  const targetPath = lang === 'pt' ? '/' : `/${lang}`;
  const currentPath = window.location.pathname;

  if (currentPath !== targetPath) {
    window.history.pushState({}, '', targetPath);
  }
}

function translateAttributes(lang: Lang) {
  if (lang === 'pt') return;

  const dictionary = {
    ...(translations[lang] ?? {}),
    ...(extraTranslations[lang] ?? {}),
    ...(runtimeOverrides[lang] ?? {}),
  };

  const elements = document.querySelectorAll<HTMLElement>('input, textarea, option, select, button, a, label');

  elements.forEach((element) => {
    ['placeholder', 'value', 'aria-label', 'title'].forEach((attr) => {
      const current = element.getAttribute(attr);
      if (!current) return;

      const normalized = normalizeText(current);
      const translated = dictionary[normalized];

      if (translated) {
        element.setAttribute(attr, translated);
      }
    });
  });
}

function applyTranslations(lang: Lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.body.dataset.lang = lang;
  updateMetaUrl(lang);

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

    const normalized = normalizeText(trimmed);
    const translated =
      runtimeOverrides[lang]?.[normalized] ??
      dictionary?.[trimmed] ??
      dictionary?.[normalized] ??
      extraTranslations[lang]?.[normalized];

    if (translated) {
      node.textContent = `${leading}${translated}${trailing}`;
    }
  }

  translateAttributes(lang);
}


const lateFixPairs: Record<Lang, Array<[string, string]>> = {
  pt: [],

  en: [
    ['PARA QUEM É', 'WHO IT IS FOR'],

    ['SITE PROFISSIONAL', 'PROFESSIONAL WEBSITE'],
    ['SITE INSTITUCIONAL', 'BUSINESS WEBSITE'],
    ['Beleza e estética', 'Beauty and aesthetics'],
    ['Representações comerciais', 'Commercial representation'],

    ['O projeto precisava apresentar o trabalho de forma mais organizada e facilitar o contato pelo site.', 'The project needed to present the work in a more organized way and make website contact easier.'],
    ['O cliente precisava ter um site próprio para apresentar sua atuação e facilitar o acesso às informações principais.', 'The client needed a website to present the business and make key information easier to access.'],
    ['Foi criada uma presença online simples, direta e com domínio próprio para fortalecer a apresentação do negócio.', 'A simple and direct online presence with a custom domain was created to strengthen the business presentation.'],
    ['A estrutura foi pensada para apresentar o negócio com clareza, usando uma navegação simples e caminho direto para contato.', 'The structure was designed to present the business clearly, with simple navigation and a direct contact path.'],
    ['Site publicado com estrutura institucional', 'Website published with an institutional structure'],

    ['Domínio próprio', 'Custom domain'],
    ['Design responsivo', 'Responsive design'],
    ['Contato direto', 'Direct contact'],
    ['Apresentação do serviço', 'Service presentation'],
    ['Site institucional', 'Business website'],

    ['Valores iniciais para você se orientar.', 'Starting prices to help you plan.'],
    ['O valor final depende do volume de conteúdo, plataformas, gravações e complexidade do projeto.', 'The final price depends on content volume, platforms, recordings and project complexity.'],

    ['Indicado para clientes que já entregam vídeo, capa, legenda e direcionamento. Pode incluir acabamento visual, ajuste de cor, música quando necessária, organização, programação e publicação.', 'For clients who already provide video, cover, caption and direction. May include visual finishing, color adjustment, music when needed, organization, scheduling and publishing.'],
    ['Pode incluir diagnóstico, planejamento mensal, até 8 conteúdos, edição de Reels, posts ou carrosséis, legendas, calendário e publicação.', 'May include diagnosis, monthly planning, up to 8 pieces of content, Reels editing, posts or carousels, captions, calendar and publishing.'],
    ['Pode incluir planejamento estratégico, aproximadamente 12 conteúdos mensais, roteiros, Reels, posts, carrosséis, calendário, publicação e relatório.', 'May include strategic planning, around 12 monthly pieces of content, scripts, Reels, posts, carousels, calendar, publishing and report.'],
    ['Indicado para apresentar uma oferta, serviço, profissional, campanha ou negócio com foco em conversão.', 'Recommended for presenting an offer, service, professional, campaign or business with conversion in mind.'],
    ['Indicado para empresas e profissionais que precisam apresentar serviços, diferenciais, localização, canais de contato e uma presença digital mais completa.', 'Recommended for businesses and professionals that need to present services, differences, location, contact channels and a stronger digital presence.'],
    ['Serviço acrescido de deslocamento quando aplicável. Indicado para gravações, fotos, bastidores, eventos curtos ou produção de conteúdo presencial.', 'Quoted separately because location, travel, production time and logistics change from project to project.'],

    ['Sim. O atendimento pode ser remoto para clientes de todo o Brasil.', 'Yes. The service can be remote for clients from any location.'],
    ['Você envia os materiais, informações e direcionamentos. A partir disso, eu organizo planejamento, edição, publicação ou acompanhamento conforme a proposta.', 'You send the materials, information and direction. From there, I organize planning, editing, publishing or support according to the proposal.'],
    ['Depende do serviço. Em social media à distância, normalmente o cliente grava e envia os materiais. Em projetos presenciais, a captação pode ser combinada separadamente.', 'It depends on the service. For remote social media, the client usually records and sends the materials. For on-site projects, recording can be quoted separately.'],
    ['Posso ajudar com roteiros quando isso fizer parte da proposta. Se o cliente já tiver o direcionamento, eu sigo a estratégia enviada.', 'I can help with scripts when that is part of the proposal. If the client already has direction, I follow the strategy provided.'],
    ['Sim. O trabalho pode envolver Instagram, TikTok, YouTube e outras plataformas conforme a necessidade do projeto.', 'Yes. The work can involve Instagram, TikTok, YouTube and other platforms depending on the project needs.'],
    ['Não. Não existe garantia de seguidores, visualizações ou vendas. O trabalho melhora organização, consistência, apresentação e publicação do conteúdo.', 'No. There is no guarantee of followers, views or sales. The work improves organization, consistency, presentation and content publishing.'],
    ['Depende do tipo de site, quantidade de páginas, conteúdo, prazo e recursos necessários. Por isso os valores são iniciais.', 'It depends on the type of website, number of pages, content, deadline and required features. That is why the prices are starting prices.'],

    ['Nome', 'Name'],
    ['Seu nome', 'Your name'],
    ['Empresa ou profissão', 'Business or profession'],
    ['Ex: confeitaria, advogado, criador', 'Ex: bakery, lawyer, creator'],
    ['Serviço de interesse', 'Service of interest'],
    ['Escolha uma opção', 'Choose an option'],
    ['O que você precisa melhorar agora?', 'What do you need to improve right now?'],
    ['Ex: preciso postar com mais frequência, editar meus vídeos, criar um site ou organizar meu perfil.', 'Ex: I need to post more often, edit my videos, create a website or organize my profile.'],
    ['Li e aceito a Política de Privacidade.', 'I have read and accept the Privacy Policy.'],
    ['Ao clicar, o WhatsApp abre com uma mensagem pronta. Você pode revisar antes de enviar.', 'When you click, WhatsApp opens with a ready message. You can review it before sending.']
  ],

  es: [
    ['PARA QUEM É', 'PARA QUIÉN ES'],

    ['SITE PROFISSIONAL', 'SITIO PROFESIONAL'],
    ['SITE INSTITUCIONAL', 'SITIO INSTITUCIONAL'],
    ['Beleza e estética', 'Belleza y estética'],
    ['Representações comerciais', 'Representaciones comerciales'],

    ['O projeto precisava apresentar o trabalho de forma mais organizada e facilitar o contato pelo site.', 'El proyecto necesitaba presentar el trabajo de forma más organizada y facilitar el contacto por el sitio.'],
    ['O cliente precisava ter um site próprio para apresentar sua atuação e facilitar o acesso às informações principais.', 'El cliente necesitaba un sitio propio para presentar su actividad y facilitar el acceso a la información principal.'],
    ['Foi criada uma presença online simples, direta e com domínio próprio para fortalecer a apresentação do negócio.', 'Se creó una presencia online simple, directa y con dominio propio para fortalecer la presentación del negocio.'],
    ['A estrutura foi pensada para apresentar o negócio com clareza, usando uma navegação simples e caminho direto para contato.', 'La estructura fue pensada para presentar el negocio con claridad, usando una navegación simple y un camino directo al contacto.'],
    ['Site publicado com estrutura institucional', 'Sitio publicado con estructura institucional'],

    ['Domínio próprio', 'Dominio propio'],
    ['Design responsivo', 'Diseño responsivo'],
    ['Contato direto', 'Contacto directo'],
    ['Apresentação do serviço', 'Presentación del servicio'],
    ['Site institucional', 'Sitio institucional'],

    ['Valores iniciais para você se orientar.', 'Precios iniciales para orientarte.'],
    ['O valor final depende do volume de conteúdo, plataformas, gravações e complexidade do projeto.', 'El valor final depende del volumen de contenido, plataformas, grabaciones y complejidad del proyecto.'],

    ['Indicado para clientes que já entregam vídeo, capa, legenda e direcionamento. Pode incluir acabamento visual, ajuste de cor, música quando necessária, organização, programação e publicação.', 'Para clientes que ya entregan video, portada, texto y dirección. Puede incluir acabado visual, ajuste de color, música cuando sea necesario, organización, programación y publicación.'],
    ['Pode incluir diagnóstico, planejamento mensal, até 8 conteúdos, edição de Reels, posts ou carrosséis, legendas, calendário e publicação.', 'Puede incluir diagnóstico, planificación mensual, hasta 8 contenidos, edición de Reels, posts o carruseles, textos, calendario y publicación.'],
    ['Pode incluir planejamento estratégico, aproximadamente 12 conteúdos mensais, roteiros, Reels, posts, carrosséis, calendário, publicação e relatório.', 'Puede incluir planificación estratégica, cerca de 12 contenidos mensuales, guiones, Reels, posts, carruseles, calendario, publicación e informe.'],
    ['Indicado para apresentar uma oferta, serviço, profissional, campanha ou negócio com foco em conversão.', 'Indicado para presentar una oferta, servicio, profesional, campaña o negocio con foco en conversión.'],
    ['Indicado para empresas e profissionais que precisam apresentar serviços, diferenciais, localização, canais de contato e uma presença digital mais completa.', 'Indicado para empresas y profesionales que necesitan presentar servicios, diferenciales, ubicación, canales de contacto y una presencia digital más completa.'],
    ['Serviço acrescido de deslocamento quando aplicável. Indicado para gravações, fotos, bastidores, eventos curtos ou produção de conteúdo presencial.', 'Se cotiza por separado porque ubicación, desplazamiento, tiempo de producción y logística cambian de un proyecto a otro.'],

    ['Sim. O atendimento pode ser remoto para clientes de todo o Brasil.', 'Sí. La atención puede ser remota para clientes de cualquier ubicación.'],
    ['Você envia os materiais, informações e direcionamentos. A partir disso, eu organizo planejamento, edição, publicação ou acompanhamento conforme a proposta.', 'Envías los materiales, información y dirección. A partir de eso, organizo planificación, edición, publicación o acompañamiento según la propuesta.'],
    ['Depende do serviço. Em social media à distância, normalmente o cliente grava e envia os materiais. Em projetos presenciais, a captação pode ser combinada separadamente.', 'Depende del servicio. En social media a distancia, normalmente el cliente graba y envía los materiales. En proyectos presenciales, la grabación puede cotizarse por separado.'],
    ['Posso ajudar com roteiros quando isso fizer parte da proposta. Se o cliente já tiver o direcionamento, eu sigo a estratégia enviada.', 'Puedo ayudar con guiones cuando eso forme parte de la propuesta. Si el cliente ya tiene la dirección, sigo la estrategia enviada.'],
    ['Sim. O trabalho pode envolver Instagram, TikTok, YouTube e outras plataformas conforme a necessidade do projeto.', 'Sí. El trabajo puede incluir Instagram, TikTok, YouTube y otras plataformas según la necesidad del proyecto.'],
    ['Não. Não existe garantia de seguidores, visualizações ou vendas. O trabalho melhora organização, consistência, apresentação e publicação do conteúdo.', 'No. No existe garantía de seguidores, visualizaciones o ventas. El trabajo mejora organización, consistencia, presentación y publicación del contenido.'],
    ['Depende do tipo de site, quantidade de páginas, conteúdo, prazo e recursos necessários. Por isso os valores são iniciais.', 'Depende del tipo de sitio, cantidad de páginas, contenido, plazo y recursos necesarios. Por eso los precios son iniciales.'],

    ['Nome', 'Nombre'],
    ['Seu nome', 'Tu nombre'],
    ['Empresa ou profissão', 'Empresa o profesión'],
    ['Ex: confeitaria, advogado, criador', 'Ej: pastelería, abogado, creador'],
    ['Serviço de interesse', 'Servicio de interés'],
    ['Escolha uma opção', 'Elige una opción'],
    ['O que você precisa melhorar agora?', '¿Qué necesitas mejorar ahora?'],
    ['Ex: preciso postar com mais frequência, editar meus vídeos, criar um site ou organizar meu perfil.', 'Ej: necesito publicar con más frecuencia, editar mis videos, crear un sitio u organizar mi perfil.'],
    ['Li e aceito a Política de Privacidade.', 'Leí y acepto la Política de Privacidad.'],
    ['Ao clicar, o WhatsApp abre com uma mensagem pronta. Você pode revisar antes de enviar.', 'Al hacer clic, WhatsApp se abre con un mensaje listo. Puedes revisarlo antes de enviarlo.']
  ]
};

function applyLateFixes(lang: Lang) {
  if (lang === 'pt') return;

  const pairs = lateFixPairs[lang] ?? [];
  const map = new Map(pairs.map(([from, to]) => [normalizeText(from), to]));

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  for (const node of nodes) {
    const original = node.textContent ?? '';
    const normalized = normalizeText(original);

    const translated = map.get(normalized);

    if (translated) {
      const leading = original.match(/^\s*/)?.[0] ?? '';
      const trailing = original.match(/\s*$/)?.[0] ?? '';
      node.textContent = `${leading}${translated}${trailing}`;
    }
  }

  document.querySelectorAll<HTMLElement>('input, textarea, option, select, button, a, label').forEach((element) => {
    ['placeholder', 'value', 'aria-label', 'title'].forEach((attr) => {
      const current = element.getAttribute(attr);
      if (!current) return;

      const translated = map.get(normalizeText(current));

      if (translated) {
        element.setAttribute(attr, translated);
      }
    });
  });
}

export function LanguageLayer() {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    setLang(detectLanguage());
  }, []);

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    setPathForLanguage(lang);

    const run = () => {
      applyTranslations(lang);
      applyLateFixes(lang);
    };

    window.setTimeout(run, 0);
    window.setTimeout(run, 120);
    window.setTimeout(run, 500);

    const observer = new MutationObserver(() => {
      window.setTimeout(run, 0);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
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
