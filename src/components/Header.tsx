import type { NavItem } from '../types/content';

type HeaderProps = {
  navItems: NavItem[];
  bookingUrl: string;
};

export function Header({ navItems, bookingUrl }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <div className="site-header__mark" aria-hidden="true">
          <span>TP</span>
        </div>
        <div className="site-header__brand-copy">
          <p>Terapia Paz Interior</p>
          <span>Centro terapéutico integral</span>
        </div>
      </div>

      <div className="site-header__actions">
        <nav className="site-header__nav" aria-label="Secciones principales">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--solid button--header"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
