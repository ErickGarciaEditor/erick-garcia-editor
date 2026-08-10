import { contact, getWhatsappUrl } from '../data/contact';

export function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="container legal-content">
        <a className="legal-back" href="/">
          ← Voltar para o site
        </a>

        <p className="eyebrow">Política de Privacidade</p>
        <h1>Como seus dados são usados neste site.</h1>

        <p>
          Esta Política de Privacidade explica como Erick Garcia trata as informações enviadas por
          visitantes interessados em orçamento, contato profissional ou contratação de serviços.
        </p>

        <h2>Dados que podem ser coletados</h2>
        <p>
          O site pode coletar dados informados voluntariamente no formulário, como nome, empresa ou
          profissão, WhatsApp, Instagram, serviço de interesse e mensagem.
        </p>

        <h2>Finalidade do uso</h2>
        <p>
          As informações são usadas para entender a solicitação, responder ao contato e preparar uma
          orientação ou proposta comercial.
        </p>

        <h2>Envio pelo WhatsApp</h2>
        <p>
          Quando você usa o formulário, o site abre o WhatsApp com uma mensagem pronta. A mensagem
          só é enviada se você confirmar o envio no próprio WhatsApp.
        </p>

        <h2>Compartilhamento</h2>
        <p>
          Os dados não são vendidos. Informações podem ser compartilhadas apenas quando necessário
          para responder ao pedido, cumprir obrigação legal ou usar ferramentas essenciais ao contato.
        </p>

        <h2>Armazenamento</h2>
        <p>
          Nesta versão do site, o formulário não salva dados em banco próprio. O contato acontece por
          WhatsApp ou e-mail, conforme a ação escolhida pelo visitante.
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão das informações enviadas, quando aplicável,
          entrando em contato pelos canais abaixo.
        </p>

        <h2>Contato</h2>
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
