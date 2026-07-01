import { BookOpen, Download } from 'lucide-react';
import { ButtonLink } from '@site/src/components/ui/button-link';

export function CTASection() {
  return (
    <section className='py-16 px-6 pb-24'>
      <div className='cta-card relative max-w-[1000px] mx-auto px-8 py-16 text-center overflow-hidden'>
        <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3.125rem)] leading-tight tracking-tight text-[#f6f3fb] mb-4'>
          Ready to start watching?
        </h2>
        <p className='text-lg text-base-muted max-w-[520px] mx-auto mb-8'>
          Grab the app, request what you want, and start streaming — completely free.
        </p>
        <div className='flex flex-wrap justify-center gap-3.5'>
          <ButtonLink href='/Downloads' variant='gradient' size='lg'>
            <Download className='size-4' />
            Get started
          </ButtonLink>
          <ButtonLink href='/docs' variant='ghost-glass' size='lg'>
            <BookOpen className='size-4' />
            Read the docs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
