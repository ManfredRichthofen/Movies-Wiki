import React from 'react';
import { FaGithub, FaDiscord, FaBook, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Home', href: '/' },
      { label: 'Downloads', href: '/Downloads' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Installation Guide', href: '/docs/installation' },
    ],
    services: [
      { label: 'Jellyfin', href: 'https://jellyfin.org' },
      { label: 'ReVanced', href: 'https://revanced.app' },
      { label: 'Game Servers', href: '/docs/game-servers' },
      { label: 'AI Tools', href: '/docs/ai-tools' },
    ],
    community: [
      { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
      { label: 'Discord', href: '#', icon: FaDiscord },
      { label: 'Documentation', href: '/docs', icon: FaBook },
    ],
  };

  return (
    <footer className='bg-base-200 border-t-2 border-base-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <h3 className='text-2xl font-bold text-primary mb-4'>Movies Wiki</h3>
            <p className='text-base-content/70 mb-4'>
              Your complete entertainment solution. Stream unlimited movies, enjoy ad-free YouTube, and access powerful tools.
            </p>
            <div className='flex gap-3'>
              {footerLinks.community.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-base-300 hover:bg-primary hover:text-primary-content p-3 rounded-lg transition-all'
                  aria-label={link.label}
                >
                  {link.icon && <link.icon className='w-5 h-5' />}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className='text-lg font-bold text-base-content mb-4'>Product</h4>
            <ul className='space-y-2'>
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-base-content/70 hover:text-primary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className='text-lg font-bold text-base-content mb-4'>Services</h4>
            <ul className='space-y-2'>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='text-base-content/70 hover:text-primary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className='text-lg font-bold text-base-content mb-4'>Stay Updated</h4>
            <p className='text-base-content/70 mb-4 text-sm'>
              Get the latest updates on new features and services.
            </p>
            <a
              href='/docs'
              className='btn btn-primary !text-primary-content btn-sm gap-2'
            >
              <FaBook className='w-4 h-4' />
              Read Docs
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-base-300'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-base-content/70 text-sm text-center md:text-left'>
              © {currentYear} Movies Wiki. All rights reserved.
            </p>
            <p className='text-base-content/70 text-sm flex items-center gap-2'>
              Made with <FaHeart className='text-error w-4 h-4' /> for entertainment enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
