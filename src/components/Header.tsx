import { useEffect, useId, useState } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import type { NavItem } from '../types/content';

type HeaderProps = {
  navItems: NavItem[];
  bookingUrl: string;
};

export function Header({ navItems, bookingUrl }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navId = useId();
  useBodyScrollLock(isMobileMenuOpen);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 721px)');

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleViewportChange);
    window.addEventListener('keydown', handleEscape);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`site-header${isMobileMenuOpen ? ' site-header--menu-open' : ''}`}>
        <div className="site-header__brand">
          <div className="site-header__mark">
            <img
              src="/logo.png"
              alt="Logo de Terapia Paz Interior"
            />
          </div>
        </div>

        <div className="site-header__actions">
          <div className={`site-header__nav-panel${isMobileMenuOpen ? ' is-open' : ''}`} id={navId}>
            <nav className="site-header__nav" aria-label="Secciones principales">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={handleCloseMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            className="button button--solid button--header"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleCloseMenu}
          >
            Agendar
          </a>

          <button
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-controls={navId}
            aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div className="site-header__scrim" role="presentation" onClick={handleCloseMenu} />
      ) : null}
    </>
  );
}
