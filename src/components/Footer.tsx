import { BookOpen, Heart, MessageCircle } from 'lucide-react';
import { ButtonLink } from '@site/src/components/ui/button-link';
import { Separator } from '@site/src/components/ui/separator';

const footerLinks = {
  product: [
    { label: 'Home', href: '/' },
    { label: 'Jellyfin', href: '/Downloads' },
    { label: 'Request movies', href: 'https://requests.jfapp.xyz/' },
    { label: 'Apps', href: '/Apps' },
    { label: 'Documentation', href: '/docs' },
  ],
  services: [
    { label: 'Jellyfin', href: 'https://jellyfin.org' },
    { label: 'Install guide', href: '/docs/installation' },
    { label: 'Apps', href: '/Apps' },
  ],
  community: [
    { label: 'Discord', href: '#', icon: MessageCircle },
    { label: 'Documentation', href: '/docs', icon: BookOpen },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-base-100 border-t border-white/7'>
      <div className='max-w-[1240px] mx-auto px-6 py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
          <div>
            <h3 className='font-heading text-lg font-bold text-[#f2eff7] mb-3'>jfapp</h3>
            <p className='text-sm text-base-muted leading-relaxed mb-5'>
              Free media, on request. Stream movies, ad-free YouTube, and more — no subscriptions.
            </p>
            <div className='flex gap-2'>
              {footerLinks.community.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className='flex size-10 items-center justify-center rounded-lg border border-white/8 text-[#8e889e] hover:text-primary hover:border-primary/30 transition-colors'
                  aria-label={link.label}
                >
                  <link.icon className='size-4' />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-sm font-bold text-[#ede9f5] mb-4'>Product</h4>
            <ul className='space-y-2.5'>
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='text-sm text-[#8e889e] hover:text-primary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-bold text-[#ede9f5] mb-4'>Services</h4>
            <ul className='space-y-2.5'>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='text-sm text-[#8e889e] hover:text-primary transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-bold text-[#ede9f5] mb-4'>Stay updated</h4>
            <p className='text-sm text-base-muted mb-4 leading-relaxed'>
              Get the latest on new apps and features.
            </p>
            <ButtonLink href='/docs' variant='gradient' size='sm'>
              <BookOpen className='size-4' />
              Read docs
            </ButtonLink>
          </div>
        </div>

        <Separator className='bg-white/7 mb-6' />

        <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
          <p className='text-sm text-[#6f6982]'>
            © {currentYear} jfapp.xyz — free streaming for the community.
          </p>
          <p className='text-sm text-[#6f6982] flex items-center gap-1.5'>
            Made with <Heart className='size-3.5 text-primary fill-primary' /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
