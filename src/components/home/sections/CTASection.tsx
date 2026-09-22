import { LifeBuoy, Play } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button-link';

export function CTASection() {
  return (
    <section className='py-16 px-6 pb-24'>
      <div className='cta-card relative max-w-[1000px] mx-auto px-8 py-16 text-center overflow-hidden'>
        <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3.125rem)] leading-tight tracking-tight text-[#f6f3fb] mb-4'>
          Stuck on anything?
        </h2>
        <p className='text-lg text-base-muted max-w-[520px] mx-auto mb-8'>
          Try the browser player first — if that works, the app just needs reinstalling. Otherwise message whoever
          invited you.
        </p>
        <div className='flex flex-wrap justify-center gap-3.5'>
          <ButtonLink href='https://jfapp.xyz' target='_blank' rel='noopener noreferrer' variant='gradient' size='lg'>
            <Play className='size-4' />
            Open the player
          </ButtonLink>
          <ButtonLink href='/docs' variant='ghost-glass' size='lg'>
            <LifeBuoy className='size-4' />
            Read the guides
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
