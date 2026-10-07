import {
  ArrowRight,
  BookOpen,
  Check,
  Clapperboard,
  Copy,
  Flame,
  Globe,
  LifeBuoy,
  Monitor,
  Smartphone,
  Tv,
} from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { SectionLabel } from '@/components/ui/section-label';

type PlatformCategory = 'all' | 'web' | 'mobile' | 'tv' | 'desktop';

type PlatformLink = {
  label: string;
  url: string;
};

type Platform = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  category: Exclude<PlatformCategory, 'all'>;
  download: PlatformLink;
  secondary?: PlatformLink | null;
  tip?: string;
};

const SERVER_ADDRESS = 'jfapp.xyz';

const platforms: Platform[] = [
  {
    name: 'Web browser',
    description: 'Nothing to install — open the player and sign in.',
    icon: Globe,
    category: 'web',
    download: { label: 'Open web player', url: 'https://jfapp.xyz' },
    tip: 'Fastest way to start watching.',
  },
  {
    name: 'Android phone & tablet',
    description: 'Native app for phones and tablets.',
    icon: Smartphone,
    category: 'mobile',
    download: {
      label: 'Get on Google Play',
      url: 'https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin',
    },
    secondary: { label: 'Direct APK download', url: 'https://jellyfin.org/client-android' },
  },
  {
    name: 'iPhone, iPad & Apple TV',
    description: 'Swiftfin — AirPlay and offline downloads.',
    icon: Smartphone,
    category: 'mobile',
    download: {
      label: 'Get Swiftfin',
      url: 'https://apps.apple.com/us/app/swiftfin/id1604098728',
    },
    tip: 'Same app works on iPhone, iPad, and Apple TV.',
  },
  {
    name: 'Android TV',
    description: 'Wholphin — recommended for Android TV and Google TV.',
    icon: Tv,
    category: 'tv',
    download: {
      label: 'Get Wholphin on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.github.damontecres.wholphin',
    },
    secondary: {
      label: 'Official Jellyfin TV app (backup)',
      url: 'https://play.google.com/store/apps/details?id=org.jellyfin.androidtv',
    },
  },
  {
    name: 'Fire TV',
    description: 'Wholphin — recommended for Fire TV sticks, cubes, and smart TVs.',
    icon: Flame,
    category: 'tv',
    download: {
      label: 'Get Wholphin on Amazon',
      url: 'https://www.amazon.com/gp/product/B0G8RQQR9T/ref=mas_pm_wholphin',
    },
    secondary: {
      label: 'Official Jellyfin Fire TV app (backup)',
      url: 'https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725',
    },
  },
  {
    name: 'Roku',
    description: 'Roku streaming players and Roku TVs.',
    icon: Tv,
    category: 'tv',
    download: {
      label: 'Open Channel Store',
      url: 'https://channelstore.roku.com/en-ca/details/4d9e526a7d972d4decf98ea6a84000f7:c617f4902629cc0bd1e1411db1775cf3/jellyfin',
    },
  },
  {
    name: 'LG webOS',
    description: 'Built-in app for LG smart TVs.',
    icon: Tv,
    category: 'tv',
    download: {
      label: 'Open LG Content Store',
      url: 'https://us.lgappstv.com/main/tvapp/detail?appId=1030579',
    },
  },
  {
    name: 'Windows, Mac & Linux',
    description: 'Desktop player with HDR and 4K support.',
    icon: Monitor,
    category: 'desktop',
    download: { label: 'Download desktop app', url: 'https://jellyfin.org/downloads' },
    secondary: { label: 'Windows installer', url: 'https://jellyfin.org/client-windows' },
  },
];

const categories = [
  { id: 'all' as const, name: 'All', icon: Clapperboard },
  { id: 'web' as const, name: 'Browser', icon: Globe },
  { id: 'mobile' as const, name: 'Phone', icon: Smartphone },
  { id: 'tv' as const, name: 'TV', icon: Tv },
  { id: 'desktop' as const, name: 'Computer', icon: Monitor },
];

const setupSteps = [
  {
    title: 'Get the app',
    description: 'Pick your device below, or just use the browser.',
  },
  {
    title: 'Add the server',
    description: `Enter ${SERVER_ADDRESS} when the app asks for a server.`,
  },
  {
    title: 'Sign in & watch',
    description: 'Use the username and password you were given.',
  },
];

function ServerAddress() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-base-200 px-4 py-4 sm:px-5'>
      <div className='min-w-0 flex-1'>
        <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-base-muted mb-1'>Server address</p>
        <p className='font-mono-label text-lg sm:text-xl font-semibold text-[#f2eff7] tracking-tight'>
          {SERVER_ADDRESS}
        </p>
        <p className='text-[13px] text-[#9d97ad] mt-1 leading-snug'>
          Type this exactly — no https:// and no trailing slash.
        </p>
      </div>
      <button
        type='button'
        onClick={copyAddress}
        className='inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-primary/35 bg-primary/14 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/20 active:scale-[0.98]'
      >
        {copied ? <Check className='size-4' /> : <Copy className='size-4' />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <article className='flex flex-col rounded-2xl border border-white/8 bg-base-200 p-5 transition-colors hover:border-white/16'>
      <div className='flex gap-3.5 items-start mb-4'>
        <span className='flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#c7c1d6]'>
          <platform.icon className='size-5' strokeWidth={1.5} />
        </span>
        <div className='min-w-0'>
          <h3 className='font-heading font-bold text-[15.5px] text-[#f2eff7] leading-snug'>{platform.name}</h3>
          <p className='text-[13px] text-[#9d97ad] leading-snug mt-0.5'>{platform.description}</p>
          {platform.tip ? (
            <p className='text-[12px] text-[#8e889e] font-medium leading-snug mt-1.5'>{platform.tip}</p>
          ) : null}
        </div>
      </div>

      <div className='mt-auto flex flex-col gap-2'>
        <a
          href={platform.download.url}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/6 px-3.5 py-2.5 text-sm font-bold text-[#f2eff7] transition-colors hover:border-white/20 hover:bg-white/10'
        >
          {platform.download.label}
          <ArrowRight className='size-3.5 shrink-0' />
        </a>
        {platform.secondary ? (
          <a
            href={platform.secondary.url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[13px] font-semibold text-[#9d97ad] transition-colors hover:text-[#f2eff7]'
          >
            {platform.secondary.label}
            <ArrowRight className='size-3 shrink-0' />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function DownloadPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<PlatformCategory>('all');

  const visiblePlatforms =
    activeCategory === 'all' ? platforms : platforms.filter((platform) => platform.category === activeCategory);

  return (
    <>
      <section className='relative overflow-hidden pt-28 pb-10 px-6 text-center'>
        <div className='relative max-w-[760px] mx-auto flex flex-col items-center'>
          <Badge variant='tag' className='mb-6'>
            <Clapperboard className='size-3.5' />
            Jellyfin apps
          </Badge>
          <h1 className='font-heading font-extrabold text-[clamp(2.375rem,6vw,4.25rem)] leading-[1.04] tracking-tight text-[#f6f3fb] mb-5'>
            Watch on
            <br />
            your device
          </h1>
          <p className='text-base md:text-lg text-base-muted max-w-[540px] leading-relaxed mb-8'>
            Install a player, connect to <span className='font-semibold text-[#d9d3e8]'>{SERVER_ADDRESS}</span>, and
            stream everything you&apos;ve requested — phone, TV, or laptop.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <ButtonLink href='https://jfapp.xyz' target='_blank' rel='noopener noreferrer' variant='gradient' size='lg'>
              <Globe className='size-4' />
              Watch in browser
            </ButtonLink>
            <ButtonLink href='#devices' variant='ghost-glass' size='lg'>
              Choose your device
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className='px-6 pb-8'>
        <div className='max-w-[920px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5'>
            {setupSteps.map((step, index) => (
              <div
                key={step.title}
                className='flex sm:flex-col gap-3 sm:gap-0 items-start rounded-2xl border border-white/8 bg-base-200 px-4 py-4 sm:p-5'
              >
                <span className='flex size-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 font-heading font-bold text-sm text-base-muted sm:mb-3'>
                  {index + 1}
                </span>
                <div>
                  <h2 className='font-heading font-bold text-[15px] text-[#f2eff7] mb-0.5'>{step.title}</h2>
                  <p className='text-[13px] text-[#9d97ad] leading-snug'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <ServerAddress />
        </div>
      </section>

      <section id='devices' className='py-6 px-6 pb-12 scroll-mt-24'>
        <div className='max-w-[1080px] mx-auto'>
          <div className='text-center mb-7'>
            <SectionLabel className='text-base-muted'>Downloads</SectionLabel>
            <h2 className='font-heading font-extrabold text-[clamp(1.625rem,3.6vw,2.5rem)] leading-tight tracking-tight text-[#f4f1fa] mb-2'>
              Choose your device
            </h2>
            <p className='text-[15px] text-[#9d97ad] max-w-[480px] mx-auto'>
              Tap a category, download the app, then add the server address above.
            </p>
          </div>

          <div className='sticky top-[calc(var(--jfapp-nav-height)+0.5rem)] z-20 -mx-1 mb-6 px-1 py-1'>
            <div
              role='tablist'
              aria-label='Device category'
              className='flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            >
              {categories.map((category) => {
                const selected = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type='button'
                    role='tab'
                    aria-selected={selected}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[13.5px] font-semibold transition-colors ${
                      selected
                        ? 'border-white/20 bg-white/10 text-[#f2eff7]'
                        : 'border-white/10 bg-base-100/90 text-[#c7c1d6] hover:border-white/16 hover:text-white backdrop-blur-md'
                    }`}
                  >
                    <category.icon className={`size-4 ${selected ? 'text-[#c7c1d6]' : 'text-[#8e889e]'}`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5'>
            {visiblePlatforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </div>

          <p className='mt-6 text-center text-sm text-[#8e889e]'>
            After install, open the app → Add server → enter{' '}
            <span className='font-mono-label text-[#c7c1d6]'>{SERVER_ADDRESS}</span>
          </p>
        </div>
      </section>

      <section className='py-8 px-6 pb-24'>
        <div className='cta-card relative max-w-[1000px] mx-auto px-6 sm:px-8 py-12 sm:py-14 text-center overflow-hidden'>
          <h2 className='font-heading font-extrabold text-[clamp(1.625rem,4vw,2.5rem)] leading-tight tracking-tight text-[#f6f3fb] mb-3.5'>
            Stuck on setup?
          </h2>
          <p className='text-base md:text-lg text-base-muted max-w-[480px] mx-auto mb-7'>
            Step-by-step guides cover install, first sign-in, and common playback fixes for every platform.
          </p>
          <div className='flex flex-wrap justify-center gap-3.5'>
            <ButtonLink href='/docs/jellyfin/' variant='outline' size='lg'>
              <BookOpen className='size-4' />
              Jellyfin guides
            </ButtonLink>
            <ButtonLink href='/docs/jellyfin/watch-anywhere/' variant='ghost-glass' size='lg'>
              <LifeBuoy className='size-4' />
              Device help
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
