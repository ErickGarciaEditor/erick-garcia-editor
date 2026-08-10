import { contact, getWhatsappUrl } from '../data/contact';

type LegalLang = 'pt' | 'en' | 'es';

function getLegalLang(): LegalLang {
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];

  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment;
  }

  return 'pt';
}

const termsCopy = {
  pt: {
    back: '← Voltar para o site',
    eyebrow: 'Termos de Uso',
    title: 'Condições de uso do site.',
    intro:
      'Estes Termos de Uso explicam as condições gerais para acessar o site de Erick Garcia e solicitar informações sobre serviços de social media, edição de vídeos e criação de sites.',
    sections: [
      {
        title: 'Uso do conteúdo',
        text: 'Os textos, imagens, vídeos, identidade visual e demais materiais deste site são usados para apresentação profissional de Erick Garcia. A reprodução sem autorização não é permitida.',
      },
      {
        title: 'Informações comerciais',
        text: 'Os valores apresentados são iniciais e podem mudar conforme volume, plataformas, gravações, deslocamento, quantidade de páginas, integrações e complexidade do projeto.',
      },
      {
        title: 'Orçamentos',
        text: 'O envio de formulário ou mensagem pelo WhatsApp não garante contratação automática. Cada projeto precisa de análise, alinhamento de escopo e aprovação da proposta.',
      },
      {
        title: 'Resultados',
        text: 'Nenhum serviço promete seguidores, vendas ou viralização garantida. Os resultados dependem de vários fatores, como conteúdo, público, consistência, oferta, posicionamento e contexto de cada cliente.',
      },
      {
        title: 'Links externos',
        text: 'O site pode conter links para Instagram, WhatsApp, sites de clientes ou outras plataformas. Erick Garcia não controla o funcionamento, políticas ou conteúdo de sites de terceiros.',
      },
    ],
    contactTitle: 'Contato',
    contactText: 'Para dúvidas sobre estes termos, entre em contato pelo e-mail',
    whatsapp: 'Falar pelo WhatsApp',
    home: 'Voltar para o início',
  },

  en: {
    back: '← Back to website',
    eyebrow: 'Terms of Use',
    title: 'Website terms of use.',
    intro:
      'These Terms of Use explain the general conditions for accessing Erick Garcia’s website and requesting information about social media, video editing and website creation services.',
    sections: [
      {
        title: 'Use of content',
        text: 'Texts, images, videos, visual identity and other materials on this website are used for Erick Garcia’s professional presentation. Reproduction without authorization is not allowed.',
      },
      {
        title: 'Commercial information',
        text: 'The prices shown are starting prices and may change depending on volume, platforms, recordings, travel, number of pages, integrations and project complexity.',
      },
      {
        title: 'Quotes',
        text: 'Sending a form or WhatsApp message does not guarantee automatic hiring. Each project requires analysis, scope alignment and proposal approval.',
      },
      {
        title: 'Results',
        text: 'No service promises guaranteed followers, sales or viral results. Results depend on several factors, such as content, audience, consistency, offer, positioning and each client’s context.',
      },
      {
        title: 'External links',
        text: 'The website may contain links to Instagram, WhatsApp, client websites or other platforms. Erick Garcia does not control the operation, policies or content of third-party websites.',
      },
    ],
    contactTitle: 'Contact',
    contactText: 'For questions about these terms, contact us by email',
    whatsapp: 'Contact on WhatsApp',
    home: 'Back to home',
  },

  es: {
    back: '← Volver al sitio',
    eyebrow: 'Términos de Uso',
    title: 'Condiciones de uso del sitio.',
    intro:
      'Estos Términos de Uso explican las condiciones generales para acceder al sitio de Erick Garcia y solicitar información sobre servicios de social media, edición de videos y creación de sitios web.',
    sections: [
      {
        title: 'Uso del contenido',
        text: 'Los textos, imágenes, videos, identidad visual y demás materiales de este sitio se usan para la presentación profesional de Erick Garcia. La reproducción sin autorización no está permitida.',
      },
      {
        title: 'Información comercial',
        text: 'Los valores presentados son iniciales y pueden cambiar según volumen, plataformas, grabaciones, desplazamiento, cantidad de páginas, integraciones y complejidad del proyecto.',
      },
      {
        title: 'Presupuestos',
        text: 'El envío de un formulario o mensaje por WhatsApp no garantiza contratación automática. Cada proyecto necesita análisis, alineación de alcance y aprobación de la propuesta.',
      },
      {
        title: 'Resultados',
        text: 'Ningún servicio promete seguidores, ventas o viralización garantizada. Los resultados dependen de varios factores, como contenido, público, consistencia, oferta, posicionamiento y contexto de cada cliente.',
      },
      {
        title: 'Enlaces externos',
        text: 'El sitio puede contener enlaces a Instagram, WhatsApp, sitios de clientes u otras plataformas. Erick Garcia no controla el funcionamiento, políticas o contenido de sitios de terceros.',
      },
    ],
    contactTitle: 'Contacto',
    contactText: 'Para dudas sobre estos términos, entra en contacto por email',
    whatsapp: 'Hablar por WhatsApp',
    home: 'Volver al inicio',
  },
} as const;

export function TermsOfUse() {
  const lang = getLegalLang();
  const copy = termsCopy[lang];
  const homePath = lang === 'pt' ? '/' : `/${lang}`;

  return (
    <main className="legal-page">
      <section className="container legal-content">
        <a className="legal-back" href={homePath}>
          {copy.back}
        </a>

        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>

        <p>{copy.intro}</p>

        {copy.sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}

        <h2>{copy.contactTitle}</h2>
        <p>
          {copy.contactText}{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <div className="legal-actions">
          <a className="button button-primary" href={getWhatsappUrl()} target="_blank" rel="noreferrer">
            {copy.whatsapp}
          </a>
          <a className="button button-secondary" href={homePath}>
            {copy.home}
          </a>
        </div>
      </section>
    </main>
  );
}
