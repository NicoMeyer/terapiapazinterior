type FooterProps = {
  statement: string;
  legal: string;
};

export function Footer({ statement, legal }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>{statement}</p>
      <span>{legal}</span>
    </footer>
  );
}
