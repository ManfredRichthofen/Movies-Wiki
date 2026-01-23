import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaDownload, FaBook, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Downloads', href: '/Downloads', icon: FaDownload },
    { label: 'Documentation', href: '/docs', icon: FaBook },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='sticky top-0 z-50 bg-base-100 border-b-2 border-base-300 shadow-sm'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <a href='/' className='flex items-center gap-2 group'>
            <div className='bg-primary text-primary-content p-2 rounded-lg group-hover:scale-110 transition-transform'>
              <FaHome className='w-5 h-5' />
            </div>
            <span className='text-xl font-bold text-base-content'>Movies Wiki</span>
          </a>

          {/* Desktop Navigation */}
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
            
            {/* GitHub Link */}
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-ghost btn-sm gap-2'
              aria-label='GitHub'
            >
              <FaGithub className='w-5 h-5' />
            </a>

            {/* CTA Button */}
            <a
              href='/Downloads'
              className='btn btn-primary !text-primary-content btn-sm gap-2'
            >
              <FaDownload className='w-4 h-4' />
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden btn btn-ghost btn-sm'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <FaTimes className='w-6 h-6' />
            ) : (
              <FaBars className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-base-300'>
            <div className='flex flex-col gap-2'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='flex items-center gap-3 px-4 py-3 text-base-content/80 hover:bg-base-200 hover:text-primary rounded-lg transition-all'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className='w-5 h-5' />
                  {link.label}
                </a>
              ))}
              
              <div className='flex flex-col gap-2 px-4 pt-2 mt-2 border-t border-base-300'>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-ghost btn-sm gap-2 justify-start'
                >
                  <FaGithub className='w-5 h-5' />
                  GitHub
                </a>
                <a
                  href='/Downloads'
                  className='btn btn-primary !text-primary-content btn-sm gap-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaDownload className='w-4 h-4' />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
