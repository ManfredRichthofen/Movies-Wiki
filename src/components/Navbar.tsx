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
    <nav className='navbar navbar--fixed-top jfapp-navbar glass-nav'>
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
              <ColorModeToggleButton />
              <Collapsible.Trigger
                className={cn(buttonClassName('ghost', 'sm'))}
                aria-label='Toggle menu'
              >
                <Menu className='size-5 data-panel-open:hidden' />
                <X className='size-5 hidden data-panel-open:block' />
              </Collapsible.Trigger>
            </div>
          </div>

          <Collapsible.Panel className='md:hidden py-4 border-t border-white/7'>
            <div className='flex flex-col gap-1'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-3 rounded-lg px-4 py-3 text-[#c7c1d6] hover:text-white hover:bg-white/5 transition-colors'
                  onClick={() => setMenuOpen(false)}
                >
                  <link.icon className='size-5' />
                  {link.label}
                </a>
              ))}
              <div className='pt-3 mt-2 border-t border-white/7'>
                <ButtonLink
                  href='/Downloads'
                  variant='gradient'
                  size='sm'
                  className='w-full'
                  onClick={() => setMenuOpen(false)}
                >
                  <Download className='size-4' />
                  Get the app
                </ButtonLink>
              </div>
            </div>
          </Collapsible.Panel>
        </div>
      </Collapsible.Root>
    </nav>
  );
}
