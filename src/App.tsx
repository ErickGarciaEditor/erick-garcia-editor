import { SafeImage } from './components/SafeImage';
import { SafeVideo } from './components/SafeVideo';
import { QuoteForm } from './components/QuoteForm';
import { cases } from './data/cases';
import { pricing } from './data/services';
import { contact } from './data/contact';
import { siteProjects } from './data/siteProjects';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';

const services = [
  {
    title: 'Social Media',
    text: 'Organizo perfil, calendário, posts, Reels, legendas e publicações para sua marca manter presença nas redes.',
  },
  {
    title: 'Edição de vídeos',
    text: 'Transformo gravações em cortes prontos para postar, com legenda, ajuste de cor, ritmo e acabamento visual.',
  },
  {
    title: 'Sites profissionais',
    text: 'Crio landing pages e sites institucionais para apresentar seu trabalho e levar o cliente até o WhatsApp.',
  },
];

const audiences = ['Empresas', 'Profissionais', 'Criadores', 'Influenciadores', 'Negócios locais'];

function getCurrentPage() {
  const path = window.location.pathname;

  if (path === '/') return 'home';
  if (path === '/politica-de-privacidade') return 'privacy';
  if (path === '/termos-de-uso') return 'terms';
  if (path === '/404') return '404';

  return '404';
}

export default function App() {
  const currentPage = getCurrentPage();

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <TermsOfUse />;
  }

  if (currentPage === '404') {
    return <NotFound />;
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#inicio" aria-label="Erick Garcia">
            <span>Erick Garcia</span>
            <small>Social Media e Sites</small>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#projetos">Sites</a>
            <a href="#valores">Valores</a>
            <a href="#sobre">Sobre</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="header-cta" href="#orcamento">
            Pedir orçamento
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">

              <h1>Erick Garcia</h1>

              <h2>
                <span className="desktop-title">Social media, editor de vídeos e criador de sites.</span>
                <span className="mobile-title">Social media, vídeos e sites.</span>
              </h2>

              <p className="hero-text">
                Cuido das suas redes, edito seus vídeos e crio sites para você mostrar melhor o seu
                trabalho e facilitar o contato com novos clientes.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#orcamento">
                  Pedir orçamento
                </a>
                <a className="button button-secondary" href="#trabalhos">
                  Ver trabalhos
                </a>
              </div>
            </div>

            <figure className="hero-photo reveal">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/assets/images/erick-hero-480.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/assets/images/erick-hero-720.webp"
                />
                <img
                  src="/assets/images/erick-hero-960.webp"
                  alt="Erick Garcia"
                  width="960"
                  height="1200"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>
          </div>
        </section>

        <section className="audience-strip" aria-label="Para quem é">
          <div className="container audience-row">
            <span>Para quem é</span>
            <div>
              {audiences.map((audience) => (
                <strong key={audience}>{audience}</strong>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">O que eu faço</p>
              <h2>Escolha o que você precisa agora.</h2>
              <p>
                Redes sociais, vídeos e sites podem ser contratados separadamente ou combinados em
                uma proposta única.
              </p>
            </div>

            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-item" key={service.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="trabalhos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Trabalhos reais</p>
              <h2>Trabalhos reais, com participação clara.</h2>
              <p>
                Alguns projetos em que atuei com edição, publicação, captação ou organização de
                conteúdo. Cada case mostra minha parte no trabalho.
              </p>
            </div>

            <div className="case-stack">
              {cases.map((item) => (
                <article className="case-card" key={item.slug}>
                  <div className="case-content">
                    <p className="case-label">Case autorizado</p>
                    <h3>{item.clientName}</h3>
                    <p className="case-summary">{item.summary}</p>

                    <div className="case-block">
                      <h4>O que eu fiz</h4>
                      <ul>
                        {item.responsibilities.slice(0, 6).map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    {item.resultNote ? (
                      <div className="case-note case-note-highlight">
                        <strong>Resultado permitido</strong>
                        <p>{item.resultNote}</p>
                      </div>
                    ) : null}

                    <div className="case-note">
                      <strong>Observação</strong>
                      <p>{item.transparencyNote}</p>
                    </div>
                  </div>

                  <div className="case-media-panel" aria-label={`Mídias do case ${item.clientName}`}>
                    <div className="case-video-card">
                      <span>Vídeo</span>
                      {item.video ? <SafeVideo src={item.video.src} label={item.video.label} poster={item.metrics[0]?.image} /> : null}
                    </div>

                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <figure
                          className={`metric-card ${
                            metric.label.toLowerCase().includes('curtida') ? 'metric-card--wide' : ''
                          }`}
                          key={metric.label}
                        >
                          <figcaption>{metric.label}</figcaption>
                          <SafeImage
                            src={metric.image}
                            alt={metric.alt}
                            fallbackLabel={`Print de ${metric.label.toLowerCase()} pendente`}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="section" id="projetos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projetos de sites</p>
              <h2>Sites criados para apresentar melhor o trabalho do cliente.</h2>
              <p>
                Projetos com domínio próprio, visual responsivo e caminho claro para contato.
                Cada card mostra o contexto do site e o link para visitar.
              </p>
            </div>

            {siteProjects.length > 0 ? (
              <div className="site-projects-grid">
                {siteProjects.map((project) => (
                  <article className="site-project-card" key={project.client}>
                    <div className="site-project-preview">
                      <div className="desktop-preview">
                        <SafeImage
                          src={project.desktopImage}
                          alt={`Print desktop do site ${project.client}`}
                          fallbackLabel="Print desktop pendente"
                        />
                      </div>

                      <div className="mobile-preview">
                        <SafeImage
                          src={project.mobileImage}
                          alt={`Print mobile do site ${project.client}`}
                          fallbackLabel="Print mobile pendente"
                        />
                      </div>
                    </div>

                    <div className="site-project-card__top">
                      <span>{project.type}</span>
                      <h3>{project.client}</h3>
                      <p>{project.segment}</p>
                    </div>

                    <div className="site-project-card__body">
                      <div>
                        <strong>Problema</strong>
                        <p>{project.problem}</p>
                      </div>

                      <div>
                        <strong>Estratégia</strong>
                        <p>{project.strategy}</p>
                      </div>

                      <div>
                        <strong>Páginas</strong>
                        <p>{project.pages}</p>
                      </div>
                    </div>

                    <ul className="site-project-features">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      Visitar site
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-projects">
                <span>Nenhum projeto publicado ainda</span>
                <h3>Os sites autorizados entram aqui.</h3>
                <p>
                  Quando você separar os projetos reais, vamos cadastrar nome do cliente, segmento,
                  tipo de site, problema, estratégia, funcionalidades e link para visitar.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="valores">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Valores iniciais</p>
              <h2>Valores iniciais para você se orientar.</h2>
              <p>
                O valor final depende do volume de conteúdo, plataformas, gravações e complexidade
                do projeto.
              </p>
            </div>

            <div className="price-grid">
              {pricing
                .filter((item) => item.title !== 'Social Media + Site')
                .map((item) => (
                <article className="price-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <strong>{item.price}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="scope-box">
              <h3>O que não entra automaticamente</h3>
              <p>
                Anúncios pagos, gestão de tráfego, resposta de Direct, atendimento ao cliente,
                cobertura de eventos, deslocamento, gravações extras, alterações ilimitadas, banco
                de imagens pago, domínio e serviços fora da proposta.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-about" id="sobre">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Sobre</p>
              <h2>Sou Erick Garcia.</h2>
            </div>

            <div className="about-text">
              <p>
                Trabalho com social media, edição de vídeos e criação de sites. Comecei na prática,
                gravando, editando e publicando conteúdos para perfis de grande audiência.
              </p>
              <p>
                Hoje ajudo empresas, profissionais, criadores e influenciadores a melhorarem a forma
                como aparecem na internet.
              </p>
            </div>
          </div>
        </section>


        <section className="section section-dark" id="faq">
          <div className="container faq-grid">
            <div className="section-heading">
              <p className="eyebrow">Dúvidas comuns</p>
              <h2>Perguntas antes de pedir orçamento.</h2>
              <p>
                Separei as principais dúvidas para você entender melhor como funciona o trabalho
                antes de chamar no WhatsApp.
              </p>
            </div>

            <div className="faq-list">
              <details>
                <summary>Você atende clientes de outras cidades?</summary>
                <p>Sim. O atendimento pode ser remoto para clientes de todo o Brasil.</p>
              </details>

              <details>
                <summary>Como funciona o social media à distância?</summary>
                <p>
                  Você envia os materiais, informações e direcionamentos. A partir disso, eu organizo
                  planejamento, edição, publicação ou acompanhamento conforme a proposta.
                </p>
              </details>

              <details>
                <summary>O cliente precisa gravar os vídeos?</summary>
                <p>
                  Em trabalhos remotos, normalmente sim. Eu posso orientar a gravação. Quando for
                  presencial, a captação é orçada separadamente.
                </p>
              </details>

              <details>
                <summary>Você faz roteiros?</summary>
                <p>Sim, quando isso estiver dentro do plano ou da proposta combinada.</p>
              </details>

              <details>
                <summary>Você trabalha com Instagram, TikTok e YouTube?</summary>
                <p>Sim. O trabalho pode envolver uma ou mais plataformas, conforme a necessidade.</p>
              </details>

              <details>
                <summary>Existe garantia de seguidores?</summary>
                <p>
                  Não. O trabalho melhora organização, qualidade e consistência, mas não promete
                  seguidores, vendas ou viralização garantida.
                </p>
              </details>

              <details>
                <summary>Quanto custa um site?</summary>
                <p>
                  Landing pages partem de R$1.500 e sites institucionais partem de R$2.500. O valor
                  final depende do escopo.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section" id="orcamento">
          <div className="container quote-grid">
            <div className="section-heading">
              <p className="eyebrow">Orçamento</p>
              <h2>Me conte o que você precisa.</h2>
              <p>
                Preencha as informações principais para eu entender se você precisa de social media,
                edição de vídeos, site ou uma proposta combinada.
              </p>
            </div>

            <QuoteForm />
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <strong>Erick Garcia</strong>
            <span>Social Media e Sites</span>
          </div>

          <div className="footer-links">
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              {contact.instagram}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termos-de-uso">Termos de Uso</a>
            <p>Atendimento em todo o Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
