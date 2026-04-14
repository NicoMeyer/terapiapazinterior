type FooterProps = {
  statement: string;
  legal: string;
};

export function Footer({ statement, legal }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <div className="site-footer__mark">
          <img src="/logo.png" alt="Logo de Terapia Paz Interior" />
        </div>
        <p>{statement}</p>
      </div>
      <span>{legal}</span>
    </footer>
  );
}
