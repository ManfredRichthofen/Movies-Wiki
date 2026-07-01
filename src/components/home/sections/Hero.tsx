import { ArrowRight, BookOpen, Globe, Monitor, Smartphone, Tv } from 'lucide-react';
import { Badge } from '@site/src/components/ui/badge';
import { ButtonLink } from '@site/src/components/ui/button-link';
import { GradientText } from '@site/src/components/ui/gradient-text';

export function Hero() {
  return (
    <section className='relative overflow-hidden pt-28 pb-24 px-6 hero-glow grid-bg'>
      <div className='relative max-w-[920px] mx-auto text-center flex flex-col items-center'>
        <Badge dot className='mb-8'>
          Free media, on request
        </Badge>
        <h1 className='font-heading font-extrabold text-[clamp(2.625rem,7vw,5.375rem)] leading-[1.02] tracking-tight text-[#f6f3fb] mb-6'>
          Request anything,
          <br />
          <GradientText>watch it free.</GradientText>
        </h1>
        <p className='text-lg md:text-xl text-base-muted max-w-[640px] leading-relaxed mb-10'>
          Tell jfapp what you want to watch and it lands in your library — movies, shows, and ad-free
          YouTube. No ads, no fees, no catch.
        </p>
        <div className='flex flex-wrap justify-center gap-3.5'>
          <ButtonLink href='/Downloads' variant='gradient' size='lg'>
            Start watching
            <ArrowRight className='size-4' />
          </ButtonLink>
          <ButtonLink href='/docs' variant='ghost-glass' size='lg'>
            <BookOpen className='size-4' />
            Read the docs
          </ButtonLink>
        </div>
        <div className='flex items-center gap-3.5 mt-9 text-[#6f6982] text-sm font-medium'>
          <span>Runs everywhere</span>
          <span className='flex gap-3 text-[#8e889e]'>
            <Monitor className='size-4' />
            <Smartphone className='size-4' />
            <Tv className='size-4' />
            <Globe className='size-4' />
          </span>
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
              src={require('@site/static/img/jellyfin.png').default}
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
