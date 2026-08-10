import { SafeImage } from '../components/SafeImage';
import { SafeVideo } from '../components/SafeVideo';
import { cases } from '../data/cases';

export function CasesSection() {
  return (
    <section className="section section--soft" id="resultados">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Resultados com transparência</p>
          <h2 className="section__title">
            Cases reais apresentados com <strong>responsabilidade</strong>.
          </h2>
          <p className="section__lead">
            Projetos reais precisam ser apresentados com clareza. Por isso, cada case separa o
            contexto, a atuação de Erick, os materiais autorizados e as métricas disponíveis, sem
            atribuir crescimento ou desempenho de forma enganosa.
          </p>
        </div>

        <div className="cases-list">
          {cases.map((item) => (
            <article className="case-card" key={item.slug}>
              <div className="case-card__content">
                <div>
                  <span className="case-card__label">Case autorizado</span>
                  <h3>{item.clientName}</h3>
                  <p>{item.summary}</p>
                </div>

                <div>
                  <h4>Responsabilidade de Erick</h4>
                  <ul className="case-list">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                {item.resultNote ? (
                  <div className="case-note case-note--result">
                    <strong>Resultado permitido</strong>
                    <p>{item.resultNote}</p>
                  </div>
                ) : null}

                <div className="case-note">
                  <strong>Transparência</strong>
                  <p>{item.transparencyNote}</p>
                </div>
              </div>

              <div className="case-card__media">
                {item.video ? <SafeVideo src={item.video.src} label={item.video.label} /> : null}

                <div className="metric-grid">
                  {item.metrics.map((metric) => (
                    <figure className="metric-card" key={metric.label}>
                      <figcaption>{metric.label}</figcaption>
                      <SafeImage
                        src={metric.image}
                        alt={metric.alt}
                        fallbackLabel={`Print de ${metric.label.toLowerCase()} pendente`}
                      />
                    </figure>
                  ))}
                </div>

                <div className="platforms" aria-label="Plataformas">
                  {item.platforms.map((platform) => (
                    <span key={platform}>{platform}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
