import { ArrowRight, CirclePlay, Clapperboard, ListPlus, Play } from 'lucide-react';
import { SectionLabel } from '@/components/ui/section-label';

const actions = [
  {
    title: 'Watch something',
    description: 'Open the player in your browser and press play. Nothing to install.',
    cta: 'Open the player',
    icon: Play,
    href: 'https://jfapp.xyz',
    external: true,
    featured: true,
    tag: 'Start here',
  },
  {
    title: 'Ask for a movie',
    description:
      "Can't find something? Search for it, tap request, and it lands in the library — usually the same day.",
    cta: 'Make a request',
    icon: ListPlus,
    href: 'https://requests.jfapp.xyz/',
    external: true,
    featured: false,
  },
  {
    title: 'Jellyfin',
    description: 'Install the player on your phone, TV, or desktop and stream everything you have requested.',
    cta: 'Get Jellyfin apps',
    icon: Clapperboard,
    href: '/Downloads',
    external: false,
    featured: false,
  },
  {
    title: 'YouTube apps',
    description: 'A YouTube and YouTube Music app for Android with no ads and music that keeps playing in your pocket.',
    cta: 'Get the apps',
    icon: CirclePlay,
    href: '/Apps',
    external: false,
    featured: false,
  },
];

export function ActionGrid() {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-[1080px] mx-auto'>
        <div className='text-center max-w-[620px] mx-auto mb-14'>
          <SectionLabel className='text-base-muted'>Where to start</SectionLabel>
          <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3rem)] leading-tight tracking-tight text-[#f4f1fa] mb-4'>
            What do you want to do?
          </h2>
          <p className='text-base text-base-muted'>Four things live here. Pick one.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {actions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className={`group flex flex-col p-7 rounded-2xl border transition-colors ${
                action.featured
                  ? 'bg-base-200 border-white/16 hover:border-white/24'
                  : 'bg-base-200 border-white/8 hover:border-white/16'
              }`}
            >
              <span className='flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7c1d6] mb-5'>
                <action.icon className='size-6' strokeWidth={1.5} />
              </span>
              {action.tag && (
                <span className='inline-flex self-start px-2.5 py-1 rounded-md bg-white/8 text-[#c7c1d6] text-[10.5px] font-bold uppercase tracking-[0.08em] mb-3'>
                  {action.tag}
                </span>
              )}
              <h3 className='font-heading font-bold text-xl text-[#e6e2f0] mb-2'>{action.title}</h3>
              <p className='text-sm leading-relaxed text-[#9b96a9] mb-5 flex-1'>{action.description}</p>
              <span className='inline-flex items-center gap-1.5 text-sm font-bold text-[#f2eff7]'>
                {action.cta}
                <ArrowRight className='size-3.5 group-hover:translate-x-0.5 transition-transform' />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
