export function NotFound() {
  return (
    <main className="legal-page">
      <section className="container legal-content">
        <p className="eyebrow">Página não encontrada</p>
        <h1>Esse endereço não existe.</h1>
        <p>
          O link pode estar incorreto ou a página pode ter sido movida. Volte para o início para
          continuar navegando.
        </p>

        <div className="legal-actions">
          <a className="button button-primary" href="/">
            Voltar para o início
          </a>
        </div>
      </section>
    </main>
  );
}
