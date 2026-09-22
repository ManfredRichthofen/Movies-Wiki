import { BookOpen, Clapperboard, Download, Home, Menu, Sparkles, X } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { ColorModeToggleButton } from '@/components/ColorModeToggleButton';
import { ButtonLink } from '@/components/ui/button-link';
import { buttonClassName } from '@/components/ui/button-variants';
import { cn } from '@/components/ui/cn';
import { Collapsible } from '@/components/ui/collapsible';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Jellyfin Apps', href: '/Downloads', icon: Clapperboard },
  { label: 'Apps', href: '/Apps', icon: Sparkles },
  { label: 'Docs', href: '/docs/', icon: BookOpen },
];

type NavbarProps = {
  /** Starlight Pagefind search, passed via Astro named slot */
  search?: ReactNode;
  /** Starlight language switcher, passed via Astro named slot */
  language?: ReactNode;
};

export default function Navbar({ search, language }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={cn('jfapp-navbar glass-nav sticky top-0 z-50 w-full', menuOpen && 'jfapp-navbar--open')}>
      <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <div className='jfapp-navbar-inner'>
          <div className='jfapp-navbar-row'>
            <a href='/' className='jfapp-navbar-brand'>
              JFapp
            </a>

            <div className='hidden md:flex items-center gap-6 lg:gap-8 min-w-0 flex-1 justify-end'>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className='jfapp-navbar-link'>
                  {link.label}
                </a>
              ))}

              {search ? <div className='jfapp-nav-search'>{search}</div> : null}

              {language ? <div className='jfapp-nav-language'>{language}</div> : null}

              <ColorModeToggleButton />

              <ButtonLink href='/Downloads' variant='gradient' size='sm' className='shrink-0'>
                <Download className='size-4' />
                Get the app
              </ButtonLink>
            </div>

            <div className='flex items-center gap-2 md:hidden'>
              {search ? <div className='jfapp-nav-search'>{search}</div> : null}
              {language ? <div className='jfapp-nav-language'>{language}</div> : null}
              <ColorModeToggleButton className='flex items-center justify-center' />
              <Collapsible.Trigger className={cn(buttonClassName('ghost', 'sm'), 'shrink-0')} aria-label='Toggle menu'>
                <Menu className='size-5 data-panel-open:hidden' />
                <X className='size-5 hidden data-panel-open:block' />
              </Collapsible.Trigger>
            </div>
          </div>
        </div>

        <Collapsible.Panel className='jfapp-mobile-nav-panel md:hidden border-t border-[color:var(--theme-base-300)]'>
          <div className='jfapp-navbar-inner py-4'>
            <div className='flex flex-col gap-1'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-semibold text-[color:var(--theme-base-muted)] hover:text-[color:var(--theme-base-content)] hover:bg-[color:var(--theme-base-300)] transition-colors'
                  onClick={() => setMenuOpen(false)}
                >
                  <link.icon className='size-5 shrink-0 text-[color:var(--theme-primary)]' />
                  {link.label}
                </a>
              ))}
              <div className='pt-3 mt-2 border-t border-[color:var(--theme-base-300)]'>
                <ButtonLink
                  href='/Downloads'
                  variant='gradient'
                  size='sm'
                  className='w-full justify-center'
                  onClick={() => setMenuOpen(false)}
                >
                  <Download className='size-4' />
                  Get the app
                </ButtonLink>
              </div>
            </div>
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </nav>
  );
}
