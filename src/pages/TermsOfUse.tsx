import { contact, getWhatsappUrl } from '../data/contact';

export function TermsOfUse() {
  return (
    <main className="legal-page">
      <section className="container legal-content">
        <a className="legal-back" href="/">
          ← Voltar para o site
        </a>

        <p className="eyebrow">Termos de Uso</p>
        <h1>Condições de uso do site.</h1>

        <p>
          Estes Termos de Uso explicam as condições gerais para acessar o site de Erick Garcia e
          solicitar informações sobre serviços de social media, edição de vídeos e criação de sites.
        </p>

        <h2>Uso do conteúdo</h2>
        <p>
          Os textos, imagens, vídeos, identidade visual e demais materiais deste site são usados para
          apresentação profissional de Erick Garcia. A reprodução sem autorização não é permitida.
        </p>

        <h2>Informações comerciais</h2>
        <p>
          Os valores apresentados são iniciais e podem mudar conforme volume, plataformas, gravações,
          deslocamento, quantidade de páginas, integrações e complexidade do projeto.
        </p>

        <h2>Orçamentos</h2>
        <p>
          O envio de formulário ou mensagem pelo WhatsApp não garante contratação automática. Cada
          projeto precisa de análise, alinhamento de escopo e aprovação da proposta.
        </p>

        <h2>Resultados</h2>
        <p>
          Nenhum serviço promete seguidores, vendas ou viralização garantida. Os resultados dependem
          de vários fatores, como conteúdo, público, consistência, oferta, posicionamento e contexto
          de cada cliente.
        </p>

        <h2>Links externos</h2>
        <p>
          O site pode conter links para Instagram, WhatsApp, sites de clientes ou outras plataformas.
          Erick Garcia não controla o funcionamento, políticas ou conteúdo de sites de terceiros.
        </p>

        <h2>Contato</h2>
        <p>
          Para dúvidas sobre estes termos, entre em contato pelo e-mail{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <div className="legal-actions">
          <a className="button button-primary" href={getWhatsappUrl()} target="_blank" rel="noreferrer">
            Falar pelo WhatsApp
          </a>
          <a className="button button-secondary" href="/">
            Voltar para o início
          </a>
        </div>
      </section>
    </main>
  );
}
