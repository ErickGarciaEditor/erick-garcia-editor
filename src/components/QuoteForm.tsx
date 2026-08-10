import { useState } from 'react';
import { getWhatsappUrl } from '../data/contact';

type Lang = 'pt' | 'en' | 'es';

type FormState = {
  name: string;
  business: string;
  whatsapp: string;
  instagram: string;
  service: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  name: '',
  business: '',
  whatsapp: '',
  instagram: '',
  service: '',
  message: '',
  privacy: false,
};

function getFormLang(): Lang {
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];

  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment;
  }

  return 'pt';
}

const formCopy = {
  pt: {
    ariaLabel: 'Formulário de orçamento',
    errors: {
      name: 'Informe seu nome para continuar.',
      whatsapp: 'Informe seu WhatsApp para eu conseguir responder.',
      service: 'Escolha o serviço de interesse.',
      privacy: 'Confirme que você aceita a Política de Privacidade.',
    },
    fields: {
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      business: 'Empresa ou profissão',
      businessPlaceholder: 'Ex: confeitaria, advogado, criador',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      instagramPlaceholder: '@seuperfil',
      service: 'Serviço de interesse',
      servicePlaceholder: 'Escolha uma opção',
      message: 'O que você precisa melhorar agora?',
      messagePlaceholder:
        'Ex: preciso postar com mais frequência, editar meus vídeos, criar um site ou organizar meu perfil.',
      privacy: 'Li e aceito a Política de Privacidade.',
      submit: 'Enviar pelo WhatsApp',
      note: 'Ao clicar, o WhatsApp abre com uma mensagem pronta. Você pode revisar antes de enviar.',
    },
    options: [
      'Social Media',
      'Edição de vídeos',
      'Site profissional',
      'Social media + vídeos',
      'Site + redes sociais',
      'Ainda não sei',
    ],
    whatsappMessage: {
      intro: 'Olá, Erick. Quero pedir um orçamento.',
      name: 'Nome',
      business: 'Empresa/profissão',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      service: 'Serviço de interesse',
      message: 'O que preciso melhorar',
      empty: 'Não informado',
    },
  },

  en: {
    ariaLabel: 'Quote form',
    errors: {
      name: 'Enter your name to continue.',
      whatsapp: 'Enter your WhatsApp so I can reply.',
      service: 'Choose the service you are interested in.',
      privacy: 'Confirm that you accept the Privacy Policy.',
    },
    fields: {
      name: 'Name',
      namePlaceholder: 'Your name',
      business: 'Business or profession',
      businessPlaceholder: 'Ex: bakery, lawyer, creator',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      instagramPlaceholder: '@yourprofile',
      service: 'Service of interest',
      servicePlaceholder: 'Choose an option',
      message: 'What do you need to improve right now?',
      messagePlaceholder:
        'Ex: I need to post more often, edit my videos, create a website or organize my profile.',
      privacy: 'I have read and accept the Privacy Policy.',
      submit: 'Send via WhatsApp',
      note: 'When you click, WhatsApp opens with a ready message. You can review it before sending.',
    },
    options: [
      'Social Media',
      'Video editing',
      'Professional website',
      'Social media + videos',
      'Website + social media',
      'I am not sure yet',
    ],
    whatsappMessage: {
      intro: 'Hello, Erick. I want to request a quote.',
      name: 'Name',
      business: 'Business/profession',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      service: 'Service of interest',
      message: 'What I need to improve',
      empty: 'Not informed',
    },
  },

  es: {
    ariaLabel: 'Formulario de presupuesto',
    errors: {
      name: 'Ingresa tu nombre para continuar.',
      whatsapp: 'Ingresa tu WhatsApp para que pueda responderte.',
      service: 'Elige el servicio de interés.',
      privacy: 'Confirma que aceptas la Política de Privacidad.',
    },
    fields: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      business: 'Empresa o profesión',
      businessPlaceholder: 'Ej: pastelería, abogado, creador',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      instagramPlaceholder: '@tuperfil',
      service: 'Servicio de interés',
      servicePlaceholder: 'Elige una opción',
      message: '¿Qué necesitas mejorar ahora?',
      messagePlaceholder:
        'Ej: necesito publicar con más frecuencia, editar mis videos, crear un sitio u organizar mi perfil.',
      privacy: 'Leí y acepto la Política de Privacidad.',
      submit: 'Enviar por WhatsApp',
      note: 'Al hacer clic, WhatsApp se abre con un mensaje listo. Puedes revisarlo antes de enviarlo.',
    },
    options: [
      'Social Media',
      'Edición de videos',
      'Sitio profesional',
      'Social media + videos',
      'Sitio + redes sociales',
      'Todavía no lo sé',
    ],
    whatsappMessage: {
      intro: 'Hola, Erick. Quiero pedir un presupuesto.',
      name: 'Nombre',
      business: 'Empresa/profesión',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      service: 'Servicio de interés',
      message: 'Lo que necesito mejorar',
      empty: 'No informado',
    },
  },
} as const;

export function QuoteForm() {
  const lang = getFormLang();
  const copy = formCopy[lang];

  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState('');

  function updateField(field: keyof FormState, value: string | boolean) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError('');
    }
  }

  function handleSubmit() {
    if (!form.name.trim()) {
      setError(copy.errors.name);
      return;
    }

    if (!form.whatsapp.trim()) {
      setError(copy.errors.whatsapp);
      return;
    }

    if (!form.service) {
      setError(copy.errors.service);
      return;
    }

    if (!form.privacy) {
      setError(copy.errors.privacy);
      return;
    }

    const labels = copy.whatsappMessage;

    const message = [
      labels.intro,
      '',
      `${labels.name}: ${form.name}`,
      `${labels.business}: ${form.business || labels.empty}`,
      `${labels.whatsapp}: ${form.whatsapp}`,
      `${labels.instagram}: ${form.instagram || labels.empty}`,
      `${labels.service}: ${form.service}`,
      '',
      `${labels.message}: ${form.message || labels.empty}`,
    ].join('\n');

    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="quote-form" aria-label={copy.ariaLabel}>
      <div className="form-row">
        <label>
          {copy.fields.name}
          <input
            type="text"
            name="name"
            placeholder={copy.fields.namePlaceholder}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            autoComplete="name"
          />
        </label>

        <label>
          {copy.fields.business}
          <input
            type="text"
            name="business"
            placeholder={copy.fields.businessPlaceholder}
            value={form.business}
            onChange={(event) => updateField('business', event.target.value)}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          {copy.fields.whatsapp}
          <input
            type="tel"
            name="whatsapp"
            placeholder="(00) 00000-0000"
            value={form.whatsapp}
            onChange={(event) => updateField('whatsapp', event.target.value)}
            autoComplete="tel"
          />
        </label>

        <label>
          {copy.fields.instagram}
          <input
            type="text"
            name="instagram"
            placeholder={copy.fields.instagramPlaceholder}
            value={form.instagram}
            onChange={(event) => updateField('instagram', event.target.value)}
          />
        </label>
      </div>

      <label>
        {copy.fields.service}
        <select
          name="service"
          value={form.service}
          onChange={(event) => updateField('service', event.target.value)}
        >
          <option value="" disabled>
            {copy.fields.servicePlaceholder}
          </option>
          {copy.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        {copy.fields.message}
        <textarea
          name="message"
          rows={5}
          placeholder={copy.fields.messagePlaceholder}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
        />
      </label>

      <label className="checkbox-label">
        <input
          type="checkbox"
          name="privacy"
          checked={form.privacy}
          onChange={(event) => updateField('privacy', event.target.checked)}
        />
        <span>{copy.fields.privacy}</span>
      </label>

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button className="button button-primary" type="button" onClick={handleSubmit}>
        {copy.fields.submit}
      </button>

      <p className="form-note">{copy.fields.note}</p>
    </form>
  );
}
