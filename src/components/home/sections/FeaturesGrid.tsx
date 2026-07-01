import { Film, Play } from 'lucide-react';
import { Card } from '@site/src/components/ui/card';
import { SectionLabel } from '@site/src/components/ui/section-label';

const features = [
  {
    icon: Film,
    title: 'Unlimited movies',
    description: 'Stream thousands of films and shows with automated requests via Jellyfin.',
  },
  {
    icon: Play,
    title: 'Ad-free YouTube',
    description: 'Background play, SponsorBlock, and PiP — free Android APKs, no subscription.',
  },
];

export function FeaturesGrid() {
  return (
    <section id='apps' className='py-24 px-6 scroll-mt-20'>
      <div className='max-w-[1180px] mx-auto'>
        <div className='text-center max-w-[640px] mx-auto mb-14'>
          <SectionLabel>Everything in one place</SectionLabel>
          <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3rem)] leading-tight tracking-tight text-[#f4f1fa] mb-4'>
            One hub. Every kind of media.
          </h2>
          <p className='text-base text-base-muted'>
            Everything you want to watch, gathered in one place.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[780px] mx-auto'>
          {features.map((feature) => (
            <Card key={feature.title} className='p-8'>
              <span className='flex size-12 items-center justify-center rounded-[14px] bg-primary/14 border border-primary/26 text-primary mb-5'>
                <feature.icon className='size-6' strokeWidth={1.5} />
              </span>
              <h3 className='font-heading font-bold text-lg text-[#f2eff7] mb-2'>{feature.title}</h3>
              <p className='text-sm text-[#9d97ad] leading-relaxed'>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
