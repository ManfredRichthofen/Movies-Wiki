import { BookOpen, Clapperboard, Download, Home, Menu, Sparkles, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { ColorModeToggleButton } from '@/components/ColorModeToggleButton';
import { ButtonLink } from '@/components/ui/button-link';
import { buttonClassName } from '@/components/ui/button-variants';
import { cn } from '@/components/ui/cn';
import { Collapsible } from '@/components/ui/collapsible';

const navLinks = [
  { label: 'Home', href: '/', icon: Home, match: (path: string) => path === '/' },
  {
    label: 'Jellyfin',
    href: '/Downloads',
    icon: Clapperboard,
    match: (path: string) => path.startsWith('/Downloads'),
  },
  {
    label: 'Apps',
    href: '/Apps',
    icon: Sparkles,
    match: (path: string) => path.startsWith('/Apps'),
  },
  {
    label: 'Docs',
    href: '/docs/',
    icon: BookOpen,
    match: (path: string) => path.startsWith('/docs') || path.startsWith('/ko/docs'),
  },
];

type NavbarProps = {
  /** Starlight Pagefind search, passed via Astro named slot */
  search?: ReactNode;
  /** Starlight language switcher, passed via Astro named slot */
  language?: ReactNode;
  /**
   * Docs pages already have Starlight's mobile sidebar toggle.
   * Hide the site hamburger so mobile doesn't show two menu buttons.
   */
  docsMode?: boolean;
};

function usePathname() {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return pathname;
}

export default function Navbar({ search, language, docsMode = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={cn('jfapp-navbar glass-nav sticky top-0 z-50 w-full', menuOpen && 'jfapp-navbar--open')}>
      <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <div className='jfapp-navbar-inner'>
          <div className='jfapp-navbar-row'>
            <a href='/' className='jfapp-navbar-brand'>
              JFapp
            </a>

            {/* Desktop primary nav */}
            <div className='jfapp-navbar-links' role='navigation' aria-label='Primary'>
              {navLinks.map((link) => {
                const active = link.match(pathname);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn('jfapp-navbar-link', active && 'jfapp-navbar-link--active')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop utilities */}
            <div className='jfapp-navbar-actions'>
              {search ? <div className='jfapp-nav-search'>{search}</div> : null}
              {language ? <div className='jfapp-nav-language'>{language}</div> : null}
              <ColorModeToggleButton className='jfapp-nav-icon-btn' />
              <ButtonLink href='/Downloads' variant='gradient' size='sm' className='jfapp-nav-cta shrink-0'>
                <Download className='size-3.5' />
                Get app
              </ButtonLink>
            </div>

            {/* Mobile utilities — keep the bar light */}
            <div className='jfapp-navbar-mobile-actions'>
              {search ? <div className='jfapp-nav-search'>{search}</div> : null}
              {docsMode ? (
                <>
                  {language ? <div className='jfapp-nav-language'>{language}</div> : null}
                  <ColorModeToggleButton className='jfapp-nav-icon-btn' />
                </>
              ) : (
                <Collapsible.Trigger
                  className={cn(buttonClassName('ghost', 'sm'), 'jfapp-nav-icon-btn')}
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={menuOpen}
                >
                  <Menu className='size-5 data-panel-open:hidden' />
                  <X className='size-5 hidden data-panel-open:block' />
                </Collapsible.Trigger>
              )}
            </div>
          </div>
        </div>

        {!docsMode ? (
          <Collapsible.Panel className='jfapp-mobile-nav-panel md:hidden'>
            <div className='jfapp-navbar-inner jfapp-mobile-nav-body'>
              <div className='jfapp-mobile-nav-links' role='navigation' aria-label='Mobile'>
                {navLinks.map((link) => {
                  const active = link.match(pathname);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={cn('jfapp-mobile-nav-link', active && 'jfapp-mobile-nav-link--active')}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <link.icon className='size-4 shrink-0 opacity-70' aria-hidden />
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className='jfapp-mobile-nav-footer'>
                <div className='jfapp-mobile-nav-meta'>
                  {language ? <div className='jfapp-nav-language'>{language}</div> : null}
                  <ColorModeToggleButton className='jfapp-nav-icon-btn' />
                </div>
                <ButtonLink
                  href='/Downloads'
                  variant='gradient'
                  size='sm'
                  className='w-full justify-center'
                  onClick={() => setMenuOpen(false)}
                >
                  <Download className='size-3.5' />
                  Get app
                </ButtonLink>
              </div>
            </div>
          </Collapsible.Panel>
        ) : null}
      </Collapsible.Root>
    </nav>
  );
}
