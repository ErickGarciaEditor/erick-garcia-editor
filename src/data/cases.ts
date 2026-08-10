import type { PortfolioCase } from '../types/site';

export const cases: PortfolioCase[] = [
  {
    slug: 'padre-fabiano',
    clientName: 'Padre Fabiano Moura',
    summary:
      'Acabamento visual e publicação multiplataforma de conteúdos religiosos para Instagram, TikTok e YouTube.',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    responsibilities: [
      'Recebimento dos vídeos preparados pelo cliente',
      'Ajuste básico de cor',
      'Tratamento visual',
      'Inclusão de música quando necessária',
      'Preparação dos arquivos',
      'Programação',
      'Publicação no Instagram',
      'Publicação no TikTok',
      'Publicação no YouTube',
      'Manutenção da consistência da distribuição',
    ],
    transparencyNote:
      'Roteiros, gravação, legendagem inserida nos vídeos, capas, textos das publicações e direcionamento dos horários são fornecidos pelo cliente. A atuação de Erick concentra-se no acabamento visual e na publicação multiplataforma.',
    video: {
      id: 'padre-fabiano-video-01',
      type: 'video',
      label: 'Vídeo autorizado do case Padre Fabiano Moura',
      src: '/assets/cases/padre-fabiano/padre-fabiano-video-01.mp4',
    },
    metrics: [
      {
        label: 'Visualizações',
        image: '/assets/cases/padre-fabiano/padre-fabiano-video-01-views.webp',
        alt: 'Print de visualizações do conteúdo do Padre Fabiano Moura',
      },
      {
        label: 'Curtidas',
        image: '/assets/cases/padre-fabiano/padre-fabiano-video-01-curtidas.webp',
        alt: 'Print de curtidas do conteúdo do Padre Fabiano Moura',
      },
    ],
  },
  {
    slug: 'padre-pedro',
    clientName: 'Padre Pedro Henrique',
    summary:
      'Captação presencial, seleção de trechos, edição, legendagem, fotografia, stories e publicação diária de conteúdos religiosos.',
    platforms: ['Instagram'],
    responsibilities: [
      'Gravação presencial das pregações',
      'Captação de aproximadamente 10 a 15 minutos',
      'Seleção dos melhores trechos',
      'Criação de diversos cortes',
      'Vídeos com aproximadamente 1 minuto e 30 segundos a 1 minuto e 50 segundos',
      'Edição',
      'Legendagem',
      'Definição e manutenção do padrão visual',
      'Publicação de três cortes por dia',
      'Publicação nos períodos da manhã, tarde e noite',
      'Criação e publicação de posts',
      'Fotografias durante as celebrações',
      'Cobertura das missas nos stories',
      'Divulgação dos horários e locais das celebrações',
    ],
    resultNote:
      'Durante a atuação de Erick, o perfil passou de aproximadamente 50 mil para 100 mil seguidores.',
    transparencyNote:
      'O crescimento posterior do perfil não deve ser apresentado como resultado da atuação de Erick.',
    video: {
      id: 'padre-pedro-video-01',
      type: 'video',
      label: 'Vídeo autorizado do case Padre Pedro Henrique',
      src: '/assets/cases/padre-pedro/padre-pedro-video-01.mp4',
    },
    metrics: [
      {
        label: 'Visualizações',
        image: '/assets/cases/padre-pedro/padre-pedro-video-01-views.webp',
        alt: 'Print de visualizações do conteúdo do Padre Pedro Henrique',
      },
      {
        label: 'Curtidas',
        image: '/assets/cases/padre-pedro/padre-pedro-video-01-curtidas.webp',
        alt: 'Print de curtidas do conteúdo do Padre Pedro Henrique',
      },
    ],
  },
];
