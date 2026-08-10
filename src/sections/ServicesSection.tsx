import { pricing, services } from '../data/services';

export function ServicesSection() {
  return (
    <>
      <section className="section section--soft" id="serviços">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Serviços</p>
            <h2 className="section__title">
              Redes sociais e sites trabalhando na mesma <strong>presença digital</strong>.
            </h2>
            <p className="section__lead">
              Da publicação nas redes sociais ao lançamento do site, Erick organiza a comunicação
              da sua marca para transmitir mais profissionalismo e facilitar o contato com o cliente.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div>
                  <span className="service-card__label">Área principal</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <ul className="feature-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="service-card__note">
                  Nem todos os itens fazem parte de todos os planos. Cada proposta é montada
                  conforme volume, plataformas, frequência e necessidade do projeto.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="planos">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Planos e valores iniciais</p>
            <h2 className="section__title">
              Referências para começar uma conversa com <strong>escopo claro</strong>.
            </h2>
            <p className="section__lead">
              Os valores abaixo são iniciais e podem variar conforme volume, quantidade de
              plataformas, frequência, complexidade, deslocamento e necessidades do projeto.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((item) => (
              <article className="pricing-card" key={item.title}>
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="scope-warning">
            <h3>Não está incluído automaticamente</h3>
            <p>
              Verba de anúncios, gestão de tráfego pago, resposta de Direct, atendimento ao cliente,
              cobertura de eventos, deslocamento, gravações adicionais, alterações ilimitadas, banco
              de imagens pago, domínio e serviços não descritos na proposta.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
