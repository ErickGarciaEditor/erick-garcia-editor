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
  }
];
