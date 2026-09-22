import { ArrowRight, CirclePlay, ListPlus, Play } from 'lucide-react';
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
    accent: 'primary' as const,
  },
  {
    title: 'Ask for a movie',
    description:
      "Can't find something? Search for it, tap request, and it lands in the library — usually the same day.",
    cta: 'Make a request',
    icon: ListPlus,
    href: 'https://requests.jfapp.xyz/',
    external: true,
    accent: 'primary' as const,
  },
  {
    title: 'YouTube without ads',
    description:
      'A YouTube and YouTube Music app for Android with no ads and music that keeps playing in your pocket.',
    cta: 'Get the apps',
    icon: CirclePlay,
    href: '/Apps',
    external: false,
    accent: 'accent2' as const,
  },
];

export function ActionGrid() {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-[1080px] mx-auto'>
        <div className='text-center max-w-[620px] mx-auto mb-14'>
          <SectionLabel>Where to start</SectionLabel>
          <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3rem)] leading-tight tracking-tight text-[#f4f1fa] mb-4'>
            What do you want to do?
          </h2>
          <p className='text-base text-base-muted'>Three things live here. Pick one.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {actions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className={`group flex flex-col p-7 rounded-[20px] border transition-all hover:-translate-y-1 ${
                action.featured
                  ? 'bg-gradient-to-b from-primary/12 to-base-200 border-primary/28 hover:border-primary/50'
                  : 'surface-card'
              }`}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-[14px] border mb-5 ${
                  action.accent === 'primary'
                    ? 'bg-primary/14 border-primary/24 text-primary'
                    : 'bg-accent-2/12 border-accent-2/22 text-accent-2'
                }`}
              >
                <action.icon className='size-6' strokeWidth={1.5} />
              </span>
              {action.tag && (
                <span className='inline-flex self-start px-2.5 py-1 rounded-md bg-primary/14 text-primary text-[10.5px] font-bold uppercase tracking-[0.08em] mb-3'>
                  {action.tag}
                </span>
              )}
              <h3 className='font-heading font-bold text-xl text-[#e6e2f0] mb-2'>{action.title}</h3>
              <p className='text-sm leading-relaxed text-[#9b96a9] mb-5 flex-1'>{action.description}</p>
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${
                  action.accent === 'primary' ? 'text-primary' : 'text-accent-2'
                }`}
              >
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
