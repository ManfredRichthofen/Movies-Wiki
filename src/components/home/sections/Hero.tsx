import { Check, Compass, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { GradientText } from '@/components/ui/gradient-text';

const trustItems = ['Always free', 'No ads, ever', 'Phone, TV, laptop'];

export function Hero() {
  return (
    <section className='relative overflow-hidden pt-28 pb-24 px-6 hero-glow grid-bg'>
      <div className='relative max-w-[920px] mx-auto text-center flex flex-col items-center'>
        <Badge dot className='mb-8'>
          Private movie night, for people I know
        </Badge>
        <h1 className='font-heading font-extrabold text-[clamp(2.625rem,7vw,5.375rem)] leading-[1.02] tracking-tight text-[#f6f3fb] mb-6'>
          Everything you want to watch,
          <br />
          <GradientText>in one place.</GradientText>
        </h1>
        <p className='text-lg md:text-xl text-base-muted max-w-[640px] leading-relaxed mb-10'>
          Movies, shows, and ad-free YouTube. Ask for anything that isn&apos;t there yet and it shows up. No ads, no
          fees, nothing to pay for.
        </p>
        <div className='flex flex-wrap justify-center gap-3.5'>
          <ButtonLink href='https://jfapp.xyz' target='_blank' rel='noopener noreferrer' variant='gradient' size='lg'>
            <Play className='size-4' />
            Watch now
          </ButtonLink>
          <ButtonLink href='#steps' variant='ghost-glass' size='lg'>
            <Compass className='size-4' />
            First time here?
          </ButtonLink>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-9 text-[#7d7890] text-sm font-semibold'>
          {trustItems.map((item) => (
            <span key={item} className='inline-flex items-center gap-1.5'>
              <Check className='size-3.5 text-primary' />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='relative max-w-[1000px] mx-auto mt-16'>
        <div className='relative rounded-2xl border border-white/12 bg-[#100c18] overflow-hidden shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]'>
          <div className='flex items-center gap-2 px-4 py-3 border-b border-white/7 bg-white/2'>
            <span className='size-2.5 rounded-full bg-[#3a3346]' />
            <span className='size-2.5 rounded-full bg-[#3a3346]' />
            <span className='size-2.5 rounded-full bg-[#3a3346]' />
            <span className='ml-3 font-mono-label text-xs text-[#6f6982]'>jfapp.xyz</span>
          </div>
          <div className='aspect-video'>
            <img
              src='/img/jellyfin.png'
              alt='Jellyfin dashboard'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
