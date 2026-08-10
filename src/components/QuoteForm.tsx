import { useState } from 'react';
import { getWhatsappUrl } from '../data/contact';

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

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState('');

  function updateField(
    field: keyof FormState,
    value: string | boolean,
  ) {
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
      setError('Informe seu nome para continuar.');
      return;
    }

    if (!form.whatsapp.trim()) {
      setError('Informe seu WhatsApp para eu conseguir responder.');
      return;
    }

    if (!form.service) {
      setError('Escolha o serviço de interesse.');
      return;
    }

    if (!form.privacy) {
      setError('Confirme que você aceita a Política de Privacidade.');
      return;
    }

    const message = [
      'Olá, Erick. Quero pedir um orçamento.',
      '',
      `Nome: ${form.name}`,
      `Empresa/profissão: ${form.business || 'Não informado'}`,
      `WhatsApp: ${form.whatsapp}`,
      `Instagram: ${form.instagram || 'Não informado'}`,
      `Serviço de interesse: ${form.service}`,
      '',
      `O que preciso melhorar: ${form.message || 'Não informado'}`,
    ].join('\n');

    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="quote-form" aria-label="Formulário de orçamento">
      <div className="form-row">
        <label>
          Nome
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            autoComplete="name"
          />
        </label>

        <label>
          Empresa ou profissão
          <input
            type="text"
            name="business"
            placeholder="Ex: confeitaria, advogado, criador"
            value={form.business}
            onChange={(event) => updateField('business', event.target.value)}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          WhatsApp
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
          Instagram
          <input
            type="text"
            name="instagram"
            placeholder="@seuperfil"
            value={form.instagram}
            onChange={(event) => updateField('instagram', event.target.value)}
          />
        </label>
      </div>

      <label>
        Serviço de interesse
        <select
          name="service"
          value={form.service}
          onChange={(event) => updateField('service', event.target.value)}
        >
          <option value="" disabled>
            Escolha uma opção
          </option>
          <option>Social Media</option>
          <option>Edição de vídeos</option>
          <option>Site profissional</option>
          <option>Social media + vídeos</option>
          <option>Site + redes sociais</option>
          <option>Ainda não sei</option>
        </select>
      </label>

      <label>
        O que você precisa melhorar agora?
        <textarea
          name="message"
          rows={5}
          placeholder="Ex: preciso postar com mais frequência, editar meus vídeos, criar um site ou organizar meu perfil."
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
        <span>Li e aceito a Política de Privacidade.</span>
      </label>

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button className="button button-primary" type="button" onClick={handleSubmit}>
        Enviar pelo WhatsApp
      </button>

      <p className="form-note">
        Ao clicar, o WhatsApp abre com uma mensagem pronta. Você pode revisar antes de enviar.
      </p>
    </form>
  );
}
