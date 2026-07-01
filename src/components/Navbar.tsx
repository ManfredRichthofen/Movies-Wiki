import { useState } from 'react';
import { BookOpen, Clapperboard, Download, Home, Menu, Sparkles, X } from 'lucide-react';
import { ColorModeToggleButton } from '@site/src/components/ColorModeToggleButton';
import { ButtonLink } from '@site/src/components/ui/button-link';
import { buttonClassName } from '@site/src/components/ui/button-variants';
import { Collapsible } from '@site/src/components/ui/collapsible';
import { cn } from '@site/src/components/ui/cn';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Jellyfin', href: '/Downloads', icon: Clapperboard },
  { label: 'Apps', href: '/Apps', icon: Sparkles },
  { label: 'Docs', href: '/docs', icon: BookOpen },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'navbar navbar--fixed-top jfapp-navbar glass-nav',
        menuOpen && 'jfapp-navbar--open',
      )}
    >
      <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <div className='max-w-[1240px] mx-auto px-6'>
          <div className='flex items-center justify-between h-[68px]'>
            <a href='/' className='flex items-center gap-3 group'>
              <span className='flex size-9 items-center justify-center rounded-[11px] gradient-btn shadow-[0_6px_18px_-6px_color-mix(in_srgb,var(--theme-primary)_70%,transparent)]'>
                <Clapperboard className='size-5 text-white' />
              </span>
              <span className='font-heading text-lg font-extrabold tracking-tight text-[#f2eff7]'>jfapp</span>
            </a>

            <div className='hidden md:flex items-center gap-7'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='text-sm font-semibold text-[#c7c1d6] hover:text-white transition-colors'
                >
                  {link.label}
                </a>
              ))}

              <ColorModeToggleButton />

              <ButtonLink href='/Downloads' variant='gradient' size='sm'>
                <Download className='size-4' />
                Get the app
              </ButtonLink>
            </div>

            <div className='flex items-center gap-2 md:hidden'>
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

        <Collapsible.Panel className='jfapp-mobile-nav-panel md:hidden border-t border-white/10'>
          <div className='max-w-[1240px] mx-auto px-6 py-4'>
            <div className='flex flex-col gap-1'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-semibold text-[#c7c1d6] hover:text-white hover:bg-white/6 transition-colors'
                  onClick={() => setMenuOpen(false)}
                >
                  <link.icon className='size-5 shrink-0 text-primary' />
                  {link.label}
                </a>
              ))}
              <div className='pt-3 mt-2 border-t border-white/10'>
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
