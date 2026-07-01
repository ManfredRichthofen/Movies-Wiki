import type React from 'react';
import {
  ArrowRight,
  BookOpen,
  CirclePlay,
  Clapperboard,
  Music,
  Puzzle,
  Smartphone,
} from 'lucide-react';
import SiteLayout from '@site/src/components/SiteLayout';
import { Badge } from '@site/src/components/ui/badge';
import { ButtonLink } from '@site/src/components/ui/button-link';
import { GradientText } from '@site/src/components/ui/gradient-text';
import { SectionLabel } from '@site/src/components/ui/section-label';
import {
  MICROG_RELEASES_PAGE,
  MORPHE_RELEASES_PAGE,
  useLatestAPKReleaseInfo,
} from '@site/src/utils/github';

type AppCard = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  version?: string | null;
  required?: boolean;
};

export default function AppsPage(): React.JSX.Element {
  const releaseInfo = useLatestAPKReleaseInfo();

  const apps: AppCard[] = [
    {
      name: 'YouTube',
      description: 'No ads, background play, SponsorBlock.',
      icon: CirclePlay,
      url: releaseInfo.youtube || MORPHE_RELEASES_PAGE,
      version: releaseInfo.youtubeVersion,
    },
    {
      name: 'YouTube Music',
      description: 'Ad-free listening with background audio.',
      icon: Music,
      url: releaseInfo.youtubeMusic || MORPHE_RELEASES_PAGE,
      version: releaseInfo.youtubeMusicVersion,
    },
    {
      name: 'MicroG',
      description: 'Companion app required to sign in.',
      icon: Puzzle,
      url: releaseInfo.microg || MICROG_RELEASES_PAGE,
      version: releaseInfo.microgVersion,
      required: true,
    },
  ];

  return (
    <SiteLayout>
      <section className='relative overflow-hidden pt-28 pb-12 px-6 text-center hero-glow grid-bg'>
        <div className='relative max-w-[760px] mx-auto flex flex-col items-center'>
          <Badge className='mb-6'>
            <Smartphone className='size-3.5' />
            Android apps · no ads
          </Badge>
          <h1 className='font-heading font-extrabold text-[clamp(2.375rem,6vw,4.5rem)] leading-[1.04] tracking-tight text-[#f6f3fb] mb-5'>
            Android apps without
            <br />
            <GradientText>the ads</GradientText>
          </h1>
          <p className='text-base md:text-lg text-base-muted max-w-[560px] leading-relaxed'>
            Patched YouTube and YouTube Music APKs for Android phones and tablets — premium features,
            no ads, no fees. Sideload the latest builds below.
          </p>
        </div>
      </section>

      <section className='py-6 px-6'>
        <div className='max-w-[1080px] mx-auto'>
          <div className='text-center mb-9'>
            <SectionLabel>Available now</SectionLabel>
            <h2 className='font-heading font-extrabold text-[clamp(1.625rem,3.6vw,2.5rem)] leading-tight tracking-tight text-[#f4f1fa] mb-2.5'>
              Get the Android apps
            </h2>
            <p className='text-[15px] text-[#9d97ad] max-w-[520px] mx-auto'>
              APK downloads for Android only. Install MicroG first — the YouTube apps need it to sign in.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`group relative flex gap-4 items-start p-5 rounded-2xl border bg-base-200 hover:border-primary/40 hover:-translate-y-0.5 transition-all ${
                  app.required ? 'border-primary/28' : 'border-white/8'
                }`}
              >
                {app.required && (
                  <span className='absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wide text-primary bg-primary/16 px-2 py-0.5 rounded-md'>
                    Required
                  </span>
                )}
                <span className='flex size-[46px] shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary'>
                  <app.icon className='size-[22px]' />
                </span>
                <div className='min-w-0'>
                  <div className='flex items-center gap-2 mb-1 flex-wrap'>
                    <h4 className='font-heading font-bold text-base text-[#f2eff7]'>{app.name}</h4>
                    <span className='text-[10px] font-semibold uppercase tracking-wide text-[#8e889e] bg-white/5 px-1.5 py-0.5 rounded'>
                      Android
                    </span>
                    {releaseInfo.loading ? (
                      <span
                        className='text-[10px] font-semibold uppercase tracking-wide text-[#8e889e] bg-white/5 px-1.5 py-0.5 rounded animate-pulse'
                        aria-hidden
                      >
                        ···
                      </span>
                    ) : app.version ? (
                      <span className='text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary/12 px-1.5 py-0.5 rounded'>
                        v{app.version}
                      </span>
                    ) : null}
                  </div>
                  <p className='text-[13.5px] text-[#9d97ad] leading-snug mb-2.5'>{app.description}</p>
                  <span className='inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary'>
                    Download Android APK
                    <ArrowRight className='size-3.5 group-hover:translate-x-0.5 transition-transform' />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className='mt-4 flex flex-col items-center gap-4'>
            <div className='flex w-full max-w-[560px] items-center justify-center gap-2.5 py-6 rounded-2xl border border-dashed border-white/14 bg-white/1.5 text-[#8e889e] text-sm font-medium text-center px-4'>
              <Smartphone className='size-4 shrink-0 text-primary' />
              <span>More Android apps coming soon</span>
            </div>
            <p className='max-w-[560px] text-center text-xs leading-relaxed text-[#8e889e] px-4'>
              These modified apps are not affiliated with, endorsed by, or connected to YouTube,
              YouTube Music, or Google. They are community-built modifications. Use at your own risk.
            </p>
          </div>
        </div>
      </section>

      <section className='py-10 px-6 pb-24'>
        <div className='cta-card relative max-w-[1000px] mx-auto px-8 py-14 text-center overflow-hidden'>
          <h2 className='font-heading font-extrabold text-[clamp(1.625rem,4vw,2.625rem)] leading-tight tracking-tight text-[#f6f3fb] mb-3.5'>
            Trouble installing?
          </h2>
          <p className='text-base md:text-lg text-base-muted max-w-[480px] mx-auto mb-7'>
            Our Android installation guide covers MicroG, sideloading, and first sign-in step by step.
          </p>
          <div className='flex flex-wrap justify-center gap-3.5'>
            <ButtonLink href='/docs/installation' variant='gradient' size='lg'>
              <BookOpen className='size-4' />
              Installation guide
            </ButtonLink>
            <ButtonLink href='/Downloads' variant='ghost-glass' size='lg'>
              <Clapperboard className='size-4' />
              Jellyfin apps
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
