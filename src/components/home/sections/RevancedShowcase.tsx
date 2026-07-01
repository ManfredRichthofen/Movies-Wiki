import { BookOpen, Check, Music, Play } from 'lucide-react';
import { ButtonLink } from '@site/src/components/ui/button-link';

const features = [
  'Block all ads',
  'Background playback',
  'SponsorBlock',
  'Picture-in-picture',
  'Custom themes',
  'Download videos',
];

export function RevancedShowcase() {
  return (
    <section className='py-20 px-6'>
      <div className='max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
        <div className='relative order-1 lg:order-none'>
          <div className='relative aspect-[4/3] rounded-2xl border border-white/12 overflow-hidden shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]'>
            <img
              src={require('@site/static/img/youtube.jpg').default}
              alt='YouTube on Android'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
        <div>
          <span className='inline-block font-mono-label text-xs uppercase tracking-[0.16em] text-accent-2 mb-4 px-3 py-1 rounded-lg bg-accent-2/12 border border-accent-2/24'>
            YouTube enhanced
          </span>
          <h2 className='font-heading font-extrabold text-[clamp(1.75rem,3.6vw,2.625rem)] leading-tight tracking-tight text-[#f4f1fa] mb-5'>
            Premium features,
            <br />
            zero price tag
          </h2>
          <p className='text-base text-base-muted leading-relaxed mb-6'>
            Ad-free YouTube and YouTube Music for Android — background play, SponsorBlock, and more.
            No ads, no subscription.
          </p>
          <div className='grid grid-cols-2 gap-2.5 mb-8'>
            {features.map((feature) => (
              <span key={feature} className='flex items-center gap-2 text-sm text-[#c7c1d6]'>
                <Check className='size-4 text-accent-2 shrink-0' />
                {feature}
              </span>
            ))}
          </div>
          <div className='flex flex-wrap gap-3'>
            <ButtonLink href='/Apps' variant='ghost-glass' size='md'>
              <Play className='size-4' />
              Get YouTube
            </ButtonLink>
            <ButtonLink href='/Apps' variant='ghost-glass' size='md'>
              <Music className='size-4' />
              Get Music
            </ButtonLink>
            <ButtonLink href='/docs/installation' variant='ghost' size='md' className='text-primary'>
              <BookOpen className='size-4' />
              Installation guide
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
