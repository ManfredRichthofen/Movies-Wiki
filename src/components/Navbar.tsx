import { useState, type ReactNode } from 'react';
import { BookOpen, Clapperboard, Download, Home, Menu, Sparkles, X } from 'lucide-react';
import { ColorModeToggleButton } from '@/components/ColorModeToggleButton';
import { ButtonLink } from '@/components/ui/button-link';
import { buttonClassName } from '@/components/ui/button-variants';
import { Collapsible } from '@/components/ui/collapsible';
import { cn } from '@/components/ui/cn';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Jellyfin Apps', href: '/Downloads', icon: Clapperboard },
  { label: 'Apps', href: '/Apps', icon: Sparkles },
  { label: 'Docs', href: '/docs/', icon: BookOpen },
];

type NavbarProps = {
  /** Starlight Pagefind search, passed via Astro named slot */
  search?: ReactNode;
};

export default function Navbar({ search }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'jfapp-navbar glass-nav sticky top-0 z-50 w-full',
        menuOpen && 'jfapp-navbar--open',
      )}
    >
      <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <div className='max-w-[1240px] mx-auto px-6'>
          <div className='flex items-center justify-between h-[68px] gap-3'>
            <a href='/' className='flex items-center gap-3 group shrink-0'>
              <span className='flex size-9 items-center justify-center rounded-[11px] gradient-btn shadow-[0_6px_18px_-6px_color-mix(in_srgb,var(--theme-primary)_70%,transparent)]'>
                <Clapperboard className='size-5 text-white' />
              </span>
              <span className='font-heading text-lg font-extrabold tracking-tight text-[color:var(--theme-base-content)]'>
                jfapp
              </span>
            </a>

            <div className='hidden md:flex items-center gap-5 lg:gap-7 min-w-0 flex-1 justify-end'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='text-sm font-semibold text-[color:var(--theme-base-muted)] hover:text-[color:var(--theme-base-content)] transition-colors shrink-0'
                >
                  {link.label}
                </a>
              ))}

              {search ? <div className='jfapp-nav-search'>{search}</div> : null}

              <ColorModeToggleButton />

              <ButtonLink href='/Downloads' variant='gradient' size='sm' className='shrink-0'>
                <Download className='size-4' />
                Get the app
              </ButtonLink>
            </div>

            <div className='flex items-center gap-2 md:hidden'>
              {search ? <div className='jfapp-nav-search'>{search}</div> : null}
              <ColorModeToggleButton className='flex items-center justify-center' />
              <Collapsible.Trigger
                className={cn(buttonClassName('ghost', 'sm'), 'shrink-0')}
                aria-label='Toggle menu'
              >
                <Menu className='size-5 data-panel-open:hidden' />
                <X className='size-5 hidden data-panel-open:block' />
              </Collapsible.Trigger>
            </div>
          </div>
        </div>

        <Collapsible.Panel className='jfapp-mobile-nav-panel md:hidden border-t border-[color:var(--theme-base-300)]'>
          <div className='max-w-[1240px] mx-auto px-6 py-4'>
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
