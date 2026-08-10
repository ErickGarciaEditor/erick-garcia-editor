export type SiteProject = {
  client: string;
  segment: string;
  type: string;
  problem: string;
  strategy: string;
  pages: string;
  features: string[];
  url: string;
  desktopImage: string;
  mobileImage: string;
};

export const siteProjects: SiteProject[] = [
  {
    client: 'Pastor in Lash',
    segment: 'Beleza e estética',
    type: 'Site profissional',
    problem:
      'O projeto precisava apresentar o trabalho de forma mais organizada e facilitar o contato pelo site.',
    strategy:
      'Foi criada uma presença online simples, direta e com domínio próprio para fortalecer a apresentação do negócio.',
    pages: 'Site publicado com estrutura institucional',
    features: ['Domínio próprio', 'Design responsivo', 'Contato direto', 'Apresentação do serviço'],
    url: 'https://pastorinlash.com.br',
    desktopImage: '/assets/sites/pastor-in-lash/desktop.webp',
    mobileImage: '/assets/sites/pastor-in-lash/mobile.webp',
  },
  {
    client: 'Klayton Representações',
    segment: 'Representações comerciais',
    type: 'Site institucional',
    problem:
      'O cliente precisava ter um site próprio para apresentar sua atuação e facilitar o acesso às informações principais.',
    strategy:
      'A estrutura foi pensada para apresentar o negócio com clareza, usando uma navegação simples e caminho direto para contato.',
    pages: 'Site publicado com estrutura institucional',
    features: ['Domínio próprio', 'Design responsivo', 'Contato direto', 'Site institucional'],
    url: 'https://klaytonrepresentacoes.com.br',
    desktopImage: '/assets/sites/klayton-representacoes/desktop.webp',
    mobileImage: '/assets/sites/klayton-representacoes/mobile.webp',
  },
];
