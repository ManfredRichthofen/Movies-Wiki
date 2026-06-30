import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaDownload, FaBook, FaGithub } from 'react-icons/fa';
import { ButtonLink } from '@site/src/components/ui/button-link';
import { buttonClassName } from '@site/src/components/ui/button-variants';
import { Collapsible } from '@site/src/components/ui/collapsible';
import { cn } from '@site/src/components/ui/cn';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Downloads', href: '/Downloads', icon: FaDownload },
    { label: 'Documentation', href: '/docs', icon: FaBook },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-base-100 border-b-2 border-base-300 shadow-sm'>
      <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <a href='/' className='flex items-center gap-2 group'>
              <div className='bg-primary text-primary-content p-2 rounded-lg group-hover:scale-110 transition-transform'>
                <FaHome className='w-5 h-5' />
              </div>
              <span className='text-xl font-bold text-base-content'>Movies Wiki</span>
            </a>

            <div className='hidden md:flex items-center gap-6'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-2 text-base-content/80 hover:text-primary font-medium transition-colors'
                >
                  <link.icon className='w-4 h-4' />
                  {link.label}
                </a>
              ))}

              <ButtonLink
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                variant='ghost'
                size='sm'
                aria-label='GitHub'
              >
                <FaGithub className='w-5 h-5' />
              </ButtonLink>

              <ButtonLink href='/Downloads' variant='primary' size='sm'>
                <FaDownload className='w-4 h-4' />
                Get Started
              </ButtonLink>
            </div>

            <Collapsible.Trigger
              className={cn(buttonClassName('ghost', 'sm'), 'md:hidden')}
              aria-label='Toggle menu'
            >
              <FaBars className='w-6 h-6 data-panel-open:hidden' />
              <FaTimes className='w-6 h-6 hidden data-panel-open:block' />
            </Collapsible.Trigger>
          </div>

          <Collapsible.Panel className='md:hidden py-4 border-t border-base-300'>
            <div className='flex flex-col gap-2'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-3 px-4 py-3 text-base-content/80 hover:bg-base-200 hover:text-primary rounded-lg transition-all'
                  onClick={() => setMenuOpen(false)}
                >
                  <link.icon className='w-5 h-5' />
                  {link.label}
                </a>
              ))}

              <div className='flex flex-col gap-2 px-4 pt-2 mt-2 border-t border-base-300'>
                <ButtonLink
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='ghost'
                  size='sm'
                  className='justify-start'
                >
                  <FaGithub className='w-5 h-5' />
                  GitHub
                </ButtonLink>
                <ButtonLink
                  href='/Downloads'
                  variant='primary'
                  size='sm'
                  onClick={() => setMenuOpen(false)}
                >
                  <FaDownload className='w-4 h-4' />
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </Collapsible.Panel>
        </div>
      </Collapsible.Root>
    </nav>
  );
}
