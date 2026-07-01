import { BadgeCheck, Download, Globe, ListPlus, Monitor, Smartphone, Tv } from 'lucide-react';
import { ButtonLink } from '@site/src/components/ui/button-link';

const platforms = [
  { icon: Monitor, name: 'Desktop' },
  { icon: Smartphone, name: 'Mobile' },
  { icon: Tv, name: 'TV' },
  { icon: Globe, name: 'Web' },
];

export function JellyfinShowcase() {
  return (
    <section className='py-20 px-6'>
      <div className='max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
        <div>
          <span className='inline-block font-mono-label text-xs uppercase tracking-[0.16em] text-primary mb-4 px-3 py-1 rounded-lg bg-primary/12 border border-primary/24'>
            Media server
          </span>
          <h2 className='font-heading font-extrabold text-[clamp(1.75rem,3.6vw,2.625rem)] leading-tight tracking-tight text-[#f4f1fa] mb-5'>
            Your library,
            <br />
            always growing
          </h2>
          <p className='text-base text-base-muted leading-relaxed mb-7'>
            Request the movies and shows you want and they&apos;re added to the library automatically.
            Stream them to any device, anytime — completely free.
          </p>
          <div className='space-y-4 mb-8'>
            <div className='flex gap-3.5 items-start'>
              <span className='flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/12 text-primary'>
                <BadgeCheck className='size-4' />
              </span>
              <div>
                <div className='font-bold text-[#ede9f5] text-sm mb-0.5'>Always free</div>
                <div className='text-sm text-[#9d97ad]'>No subscriptions, no rentals — just request and watch.</div>
              </div>
            </div>
            <div className='flex gap-3.5 items-start'>
              <span className='flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/12 text-primary'>
                <ListPlus className='size-4' />
              </span>
              <div>
                <div className='font-bold text-[#ede9f5] text-sm mb-0.5'>Request anything</div>
                <div className='text-sm text-[#9d97ad]'>New titles are added automatically when you ask for them.</div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-2 mb-8'>
            {platforms.map((p) => (
              <span
                key={p.name}
                className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[9px] bg-white/3 border border-white/8 text-sm text-[#c7c1d6]'
              >
                <p.icon className='size-3.5 text-primary' />
                {p.name}
              </span>
            ))}
          </div>
          <ButtonLink
            href='https://jellyfin.org/downloads'
            variant='gradient'
            size='lg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Download className='size-4' />
            Download Jellyfin
          </ButtonLink>
        </div>
        <div className='relative'>
          <div className='relative aspect-[4/3] rounded-2xl border border-white/12 overflow-hidden shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]'>
            <img
              src={require('@site/static/img/jellyfin.png').default}
              alt='Jellyfin library'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
