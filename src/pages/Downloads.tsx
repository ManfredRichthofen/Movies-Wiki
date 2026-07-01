import type React from 'react';

import {

  ArrowRight,

  BookOpen,

  Clapperboard,

  Globe,

  LifeBuoy,

  Monitor,

  Smartphone,

  Star,

  Tv,

} from 'lucide-react';

import SiteLayout from '@site/src/components/SiteLayout';

import { Badge } from '@site/src/components/ui/badge';

import { ButtonLink } from '@site/src/components/ui/button-link';

import { GradientText } from '@site/src/components/ui/gradient-text';

import { SectionLabel } from '@site/src/components/ui/section-label';

import { cn } from '@site/src/components/ui/cn';



type PlatformCategory = 'desktop' | 'mobile' | 'tv' | 'web';



type PlatformLink = {

  label: string;

  url: string;

};



type Platform = {

  name: string;

  description: string;

  shortDescription?: string;

  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;

  categories: PlatformCategory[];

  featured?: boolean;

  links: {

    recommended: PlatformLink;

    alt?: PlatformLink;

  };

};



const platforms: Platform[] = [

  {

    name: 'Web player',

    description: 'Stream straight from your browser — nothing to install.',

    shortDescription: 'Stream from any browser.',

    icon: Globe,

    categories: ['web'],

    featured: true,

    links: {

      recommended: { label: 'Main player', url: 'https://jfapp.xyz' },

      alt: { label: 'Beta player', url: 'https://beta.jfapp.xyz' },

    },

  },

  {

    name: 'Android',

    description: 'The native app for phones and tablets, on the go.',

    shortDescription: 'Phones and tablets.',

    icon: Smartphone,

    categories: ['mobile'],

    featured: true,

    links: {

      recommended: {

        label: 'Google Play',

        url: 'https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin',

      },

      alt: { label: 'Direct download', url: 'https://jellyfin.org/client-android' },

    },

  },

  {

    name: 'iPhone, iPad & Apple TV',

    description: 'Native iOS app with AirPlay and offline support.',

    shortDescription: 'Swiftfin for Apple devices.',

    icon: Smartphone,

    categories: ['mobile', 'tv'],

    featured: true,

    links: {

      recommended: {

        label: 'Swiftfin (App Store)',

        url: 'https://apps.apple.com/us/app/swiftfin/id1604098728',

      },

      alt: { label: 'Web player', url: 'https://jfapp.xyz' },

    },

  },

  {

    name: 'Android TV',

    description: 'Big-screen experience for Android TV and Google TV.',

    shortDescription: 'Android TV & Google TV.',

    icon: Tv,

    categories: ['tv'],

    links: {

      recommended: {

        label: 'Google Play',

        url: 'https://play.google.com/store/apps/details?id=org.jellyfin.androidtv',

      },

      alt: {

        label: 'Amazon Fire TV',

        url: 'https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725',

      },

    },

  },

  {

    name: 'Roku',

    description: 'Watch on Roku streaming players and TVs.',

    icon: Tv,

    categories: ['tv'],

    links: {

      recommended: {

        label: 'Roku Channel Store',

        url: 'https://channelstore.roku.com/en-ca/details/4d9e526a7d972d4decf98ea6a84000f7:c617f4902629cc0bd1e1411db1775cf3/jellyfin',

      },

    },

  },

  {

    name: 'LG webOS',

    description: 'Smart TV integration for LG TVs.',

    icon: Tv,

    categories: ['tv'],

    links: {

      recommended: {

        label: 'LG Content Store',

        url: 'https://us.lgappstv.com/main/tvapp/detail?appId=1030579',

      },

    },

  },

  {

    name: 'Desktop app',

    description: 'Windows, Linux & macOS with HDR and 4K support.',

    icon: Monitor,

    categories: ['desktop'],

    links: {

      recommended: { label: 'Jellyfin downloads', url: 'https://jellyfin.org/downloads' },

      alt: { label: 'Windows client', url: 'https://jellyfin.org/client-windows' },

    },

  },

];



const categories = [

  { id: 'web' as const, name: 'Web', icon: Globe },

  { id: 'mobile' as const, name: 'Mobile', icon: Smartphone },

  { id: 'tv' as const, name: 'TV', icon: Tv },

  { id: 'desktop' as const, name: 'Desktop', icon: Monitor },

];



function PlatformLinks({

  links,

  layout,

}: {

  links: Platform['links'];

  layout: 'featured' | 'row';

}) {

  const isFeatured = layout === 'featured';



  return (

    <div

      className={cn(

        'flex w-full gap-2',

        isFeatured ? 'flex-col sm:flex-row sm:justify-center' : 'flex-col',

      )}

    >

      <a

        href={links.recommended.url}

        target='_blank'

        rel='noopener noreferrer'

        className={cn(

          'inline-flex items-center justify-center gap-2 font-bold text-primary transition-colors',

          isFeatured

            ? 'rounded-xl border border-primary/35 bg-primary/12 px-4 py-2.5 text-sm hover:border-primary hover:bg-primary/18'

            : 'rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs hover:border-primary/50 hover:bg-primary/14',

        )}

      >

        <span className='text-[10px] font-bold uppercase tracking-wide text-primary/80'>Recommended</span>

        <span className='text-[#f2eff7]'>{links.recommended.label}</span>

        <ArrowRight className={cn('shrink-0', isFeatured ? 'size-4' : 'size-3')} />

      </a>

      {links.alt && (

        <a

          href={links.alt.url}

          target='_blank'

          rel='noopener noreferrer'

          className={cn(

            'inline-flex items-center justify-center gap-2 font-semibold text-[#c7c1d6] transition-colors hover:text-white',

            isFeatured

              ? 'rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm hover:border-white/20 hover:bg-white/6'

              : 'rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-xs hover:border-white/14 hover:bg-white/5',

          )}

        >

          <span className='text-[10px] font-bold uppercase tracking-wide text-[#8e889e]'>Alt</span>

          <span>{links.alt.label}</span>

          <ArrowRight className={cn('shrink-0', isFeatured ? 'size-4' : 'size-3')} />

        </a>

      )}

    </div>

  );

}



function FeaturedCard({ platform }: { platform: Platform }) {

  return (

    <div className='group relative flex flex-col items-center text-center p-9 rounded-[20px] border border-primary/30 surface-card hover:border-primary'>

      <span className='absolute top-3.5 right-3.5 flex size-[26px] items-center justify-center rounded-full bg-primary/20 text-primary'>

        <Star className='size-3.5' />

      </span>

      <span className='flex size-[82px] items-center justify-center rounded-[22px] bg-primary/12 border border-primary/24 text-primary mb-5'>

        <platform.icon className='size-9' strokeWidth={1.5} />

      </span>

      <h3 className='font-heading font-bold text-[21px] text-[#f2eff7] mb-1.5'>{platform.name}</h3>

      <p className='text-sm text-[#9d97ad] leading-relaxed mb-5'>{platform.description}</p>

      <PlatformLinks links={platform.links} layout='featured' />

    </div>

  );

}



function PlatformRow({ platform }: { platform: Platform }) {

  return (

    <div className='group flex flex-col gap-3.5 p-5 rounded-[15px] border border-white/8 bg-base-200 hover:border-primary/40 hover:-translate-y-0.5 transition-all'>

      <div className='flex gap-3.5 items-start'>

        <span className='flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary'>

          <platform.icon className='size-5' strokeWidth={1.5} />

        </span>

        <div className='min-w-0'>

          <h4 className='font-heading font-bold text-[15.5px] text-[#f2eff7] mb-0.5'>{platform.name}</h4>

          <p className='text-[13px] text-[#9d97ad] leading-snug'>

            {platform.shortDescription ?? platform.description}

          </p>

        </div>

      </div>

      <PlatformLinks links={platform.links} layout='row' />

    </div>

  );

}



function platformInCategory(platform: Platform, categoryId: PlatformCategory) {

  return platform.categories.includes(categoryId);

}



export default function DownloadPage(): React.JSX.Element {

  return (

    <SiteLayout>

      <section className='relative overflow-hidden pt-28 pb-12 px-6 text-center hero-glow grid-bg'>

        <div className='relative max-w-[760px] mx-auto flex flex-col items-center'>

          <Badge className='mb-6'>

            <Clapperboard className='size-3.5' />

            Jellyfin · streaming

          </Badge>

          <h1 className='font-heading font-extrabold text-[clamp(2.375rem,6vw,4.5rem)] leading-[1.04] tracking-tight text-[#f6f3fb] mb-5'>

            Watch on

            <br />

            <GradientText>every device</GradientText>

          </h1>

          <p className='text-base md:text-lg text-base-muted max-w-[560px] leading-relaxed mb-7'>

            Get the jfapp player for your platform, sign in, and stream everything you&apos;ve requested.

            Free on every device.

          </p>

          <div className='flex flex-wrap justify-center gap-2.5'>

            {categories.map((category) => (

              <a

                key={category.id}

                href={`#dl-${category.id}`}

                className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/10 text-[13.5px] font-semibold text-[#c7c1d6] hover:text-white transition-colors'

              >

                <category.icon className='size-4 text-primary' />

                {category.name}

              </a>

            ))}

          </div>

        </div>

      </section>



      <section className='py-10 px-6'>

        <div className='max-w-[1080px] mx-auto'>

          <div className='text-center mb-10'>

            <SectionLabel>Most popular</SectionLabel>

            <h2 className='font-heading font-extrabold text-[clamp(1.625rem,3.6vw,2.5rem)] leading-tight tracking-tight text-[#f4f1fa]'>

              Start here

            </h2>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            {platforms

              .filter((p) => p.featured)

              .map((platform) => (

                <FeaturedCard key={platform.name} platform={platform} />

              ))}

          </div>

        </div>

      </section>



      <section className='py-5 px-6 pb-10'>

        <div className='max-w-[1080px] mx-auto'>

          <div className='text-center mb-11'>

            <SectionLabel>Every client</SectionLabel>

            <h2 className='font-heading font-extrabold text-[clamp(1.625rem,3.6vw,2.5rem)] leading-tight tracking-tight text-[#f4f1fa]'>

              All platforms

            </h2>

          </div>



          {categories.map((category) => {

            const categoryPlatforms = platforms.filter((p) => platformInCategory(p, category.id));

            return (

              <div key={category.id} id={`dl-${category.id}`} className='mb-10 scroll-mt-24'>

                <div className='flex items-center gap-2.5 mb-4'>

                  <span className='flex size-[38px] items-center justify-center rounded-[11px] bg-primary/12 text-primary'>

                    <category.icon className='size-5' />

                  </span>

                  <h3 className='font-heading font-bold text-xl text-[#f2eff7]'>{category.name}</h3>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5'>

                  {categoryPlatforms.map((platform) => (

                    <PlatformRow key={platform.name} platform={platform} />

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </section>



      <section className='py-10 px-6 pb-24'>

        <div className='cta-card relative max-w-[1000px] mx-auto px-8 py-14 text-center overflow-hidden'>

          <h2 className='font-heading font-extrabold text-[clamp(1.625rem,4vw,2.625rem)] leading-tight tracking-tight text-[#f6f3fb] mb-3.5'>

            Need a hand setting up?

          </h2>

          <p className='text-base md:text-lg text-base-muted max-w-[480px] mx-auto mb-7'>

            Our guides walk you through install and first sign-in for every platform.

          </p>

          <div className='flex flex-wrap justify-center gap-3.5'>

            <ButtonLink href='/docs/installation' variant='gradient' size='lg'>

              <BookOpen className='size-4' />

              Installation guide

            </ButtonLink>

            <ButtonLink href='/docs' variant='ghost-glass' size='lg'>

              <LifeBuoy className='size-4' />

              View all docs

            </ButtonLink>

          </div>

        </div>

      </section>

    </SiteLayout>

  );

}


