import { contact, getWhatsappUrl } from '../data/contact';

type LegalLang = 'pt' | 'en' | 'es';

function getLegalLang(): LegalLang {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');

  if (queryLang === 'en' || queryLang === 'es') {
    return queryLang;
  }

  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];

  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment;
  }

  return 'pt';
}

const privacyCopy = {
  pt: {
    back: '← Voltar para o site',
    eyebrow: 'Política de Privacidade',
    title: 'Como seus dados são usados neste site.',
    intro:
      'Esta Política de Privacidade explica como Erick Garcia trata as informações enviadas por visitantes interessados em orçamento, contato profissional ou contratação de serviços.',
    sections: [
      {
        title: 'Dados que podem ser coletados',
        text: 'O site pode coletar dados informados voluntariamente no formulário, como nome, empresa ou profissão, WhatsApp, Instagram, serviço de interesse e mensagem.',
      },
      {
        title: 'Finalidade do uso',
        text: 'As informações são usadas para entender a solicitação, responder ao contato e preparar uma orientação ou proposta comercial.',
      },
      {
        title: 'Envio pelo WhatsApp',
        text: 'Quando você usa o formulário, o site abre o WhatsApp com uma mensagem pronta. A mensagem só é enviada se você confirmar o envio no próprio WhatsApp.',
      },
      {
        title: 'Compartilhamento',
        text: 'Os dados não são vendidos. Informações podem ser compartilhadas apenas quando necessário para responder ao pedido, cumprir obrigação legal ou usar ferramentas essenciais ao contato.',
      },
      {
        title: 'Armazenamento',
        text: 'Nesta versão do site, o formulário não salva dados em banco próprio. O contato acontece por WhatsApp ou e-mail, conforme a ação escolhida pelo visitante.',
      },
      {
        title: 'Seus direitos',
        text: 'Você pode solicitar acesso, correção ou exclusão das informações enviadas, quando aplicável, entrando em contato pelos canais abaixo.',
      },
    ],
    contactTitle: 'Contato',
    whatsapp: 'Falar pelo WhatsApp',
    home: 'Voltar para o início',
  },

  en: {
    back: '← Back to website',
    eyebrow: 'Privacy Policy',
    title: 'How your data is used on this website.',
    intro:
      'This Privacy Policy explains how Erick Garcia handles information sent by visitors interested in quotes, professional contact or service hiring.',
    sections: [
      {
        title: 'Data that may be collected',
        text: 'The website may collect information voluntarily provided through the form, such as name, business or profession, WhatsApp, Instagram, service of interest and message.',
      },
      {
        title: 'Purpose of use',
        text: 'The information is used to understand the request, reply to the contact and prepare guidance or a commercial proposal.',
      },
      {
        title: 'WhatsApp submission',
        text: 'When you use the form, the website opens WhatsApp with a ready message. The message is only sent if you confirm it inside WhatsApp.',
      },
      {
        title: 'Sharing',
        text: 'Data is not sold. Information may only be shared when necessary to answer the request, comply with a legal obligation or use essential contact tools.',
      },
      {
        title: 'Storage',
        text: 'In this version of the website, the form does not save data in a private database. Contact happens through WhatsApp or email, depending on the visitor’s chosen action.',
      },
      {
        title: 'Your rights',
        text: 'You may request access, correction or deletion of the information sent, when applicable, by contacting the channels below.',
      },
    ],
    contactTitle: 'Contact',
    whatsapp: 'Contact on WhatsApp',
    home: 'Back to home',
  },

  es: {
    back: '← Volver al sitio',
    eyebrow: 'Política de Privacidad',
    title: 'Cómo se usan tus datos en este sitio.',
    intro:
      'Esta Política de Privacidad explica cómo Erick Garcia trata la información enviada por visitantes interesados en presupuesto, contacto profesional o contratación de servicios.',
    sections: [
      {
        title: 'Datos que pueden recopilarse',
        text: 'El sitio puede recopilar datos informados voluntariamente en el formulario, como nombre, empresa o profesión, WhatsApp, Instagram, servicio de interés y mensaje.',
      },
      {
        title: 'Finalidad del uso',
        text: 'La información se usa para entender la solicitud, responder el contacto y preparar una orientación o propuesta comercial.',
      },
      {
        title: 'Envío por WhatsApp',
        text: 'Cuando usas el formulario, el sitio abre WhatsApp con un mensaje listo. El mensaje solo se envía si confirmas el envío dentro de WhatsApp.',
      },
      {
        title: 'Compartir información',
        text: 'Los datos no se venden. La información puede compartirse solo cuando sea necesario para responder la solicitud, cumplir una obligación legal o usar herramientas esenciales de contacto.',
      },
      {
        title: 'Almacenamiento',
        text: 'En esta versión del sitio, el formulario no guarda datos en una base propia. El contacto ocurre por WhatsApp o email, según la acción elegida por el visitante.',
      },
      {
        title: 'Tus derechos',
        text: 'Puedes solicitar acceso, corrección o eliminación de la información enviada, cuando corresponda, entrando en contacto por los canales abajo.',
      },
    ],
    contactTitle: 'Contacto',
    whatsapp: 'Hablar por WhatsApp',
    home: 'Volver al inicio',
  },
} as const;

export function PrivacyPolicy() {
  const lang = getLegalLang();
  const copy = privacyCopy[lang];
  const homePath = lang === 'pt' ? '/' : `/?lang=${lang}`;

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
          E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <br />
          Instagram:{' '}
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            {contact.instagram}
          </a>
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
