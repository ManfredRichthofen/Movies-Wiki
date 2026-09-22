import { Bell, Gift, ListPlus, Search } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button-link';

const points = [
  {
    icon: Search,
    title: 'Search anything',
    description: 'New releases, old favourites, whole series.',
  },
  {
    icon: Bell,
    title: "Know when it's ready",
    description: "Requests show their status, so you're never guessing.",
  },
  {
    icon: Gift,
    title: 'Never costs anything',
    description: 'No rentals, no subscription, no limits on requests.',
  },
];

export function RequestShowcase() {
  return (
    <section className='py-20 px-6'>
      <div className='max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
        <div>
          <span className='inline-block font-mono-label text-xs uppercase tracking-[0.16em] text-primary mb-4 px-3 py-1 rounded-lg bg-primary/12 border border-primary/24'>
            Requests
          </span>
          <h2 className='font-heading font-extrabold text-[clamp(1.75rem,3.6vw,2.625rem)] leading-tight tracking-tight text-[#f4f1fa] mb-5'>
            If it isn&apos;t there,
            <br />
            just ask for it.
          </h2>
          <p className='text-base text-base-muted leading-relaxed mb-7'>
            Search for the movie or show, hit request, and it gets added for everyone. You&apos;ll see
            it in the library without lifting another finger.
          </p>
          <div className='space-y-4 mb-8'>
            {points.map((point) => (
              <div key={point.title} className='flex gap-3.5 items-start'>
                <span className='flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/12 text-primary'>
                  <point.icon className='size-4' />
                </span>
                <div>
                  <div className='font-bold text-[#ede9f5] text-sm mb-0.5'>{point.title}</div>
                  <div className='text-sm text-[#9d97ad]'>{point.description}</div>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink
            href='https://requests.jfapp.xyz/'
            variant='gradient'
            size='lg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ListPlus className='size-4' />
            Request a movie
          </ButtonLink>
        </div>
        <div className='relative aspect-[4/3] rounded-2xl border border-white/12 overflow-hidden flex items-center justify-center bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_10px)] bg-base-200'>
          <span className='font-mono-label text-xs uppercase tracking-[0.08em] text-[#726d84]'>
            Screenshot — request screen
          </span>
        </div>
      </div>
    </section>
  );
}
