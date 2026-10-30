import { ArrowRight, BookOpen, CirclePlay, Clapperboard, KeyRound, Music, Puzzle } from 'lucide-react';
import type React from 'react';
import { ButtonLink } from '@/components/ui/button-link';
import { type APKReleaseInfo, MICROG_RELEASES_PAGE, POTHELPER_RELEASES_PAGE } from '@/utils/github';

type AppCard = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Direct APK download URL when available */
  url: string;
  version?: string | null;
  required?: boolean;
  optional?: boolean;
  downloadLabel: string;
};

type AppsPageProps = {
  releaseInfo: APKReleaseInfo;
};

const installSteps = [
  {
    title: 'Install the helper',
    description: 'Download MicroG first — YouTube needs it to sign in.',
  },
  {
    title: 'Install YouTube',
    description: 'Add YouTube, YouTube Music, or both.',
  },
  {
    title: 'Sign in & watch',
    description: 'Open the app, sign in with Google, and play.',
  },
];

export default function AppsPage({ releaseInfo }: AppsPageProps): React.JSX.Element {
  const apps: AppCard[] = [
    {
      name: 'MicroG',
      description: 'Helper app required to sign in. Install this first.',
      icon: Puzzle,
      url: releaseInfo.microg || MICROG_RELEASES_PAGE,
      version: releaseInfo.microgVersion,
      required: true,
      downloadLabel: 'Download helper',
    },
    {
      name: 'YouTube',
      description: 'No ads, background play, and SponsorBlock.',
      icon: CirclePlay,
      url: releaseInfo.youtube,
      version: releaseInfo.youtubeVersion,
      downloadLabel: 'Download app',
    },
    {
      name: 'YouTube Music',
      description: 'Ad-free listening with music that keeps playing.',
      icon: Music,
      url: releaseInfo.youtubeMusic,
      version: releaseInfo.youtubeMusicVersion,
      downloadLabel: 'Download app',
    },
    {
      name: 'PotHelper',
      description: 'Only if video buffers or stops around 1:00.',
      icon: KeyRound,
      url: releaseInfo.pothelper || POTHELPER_RELEASES_PAGE,
      version: releaseInfo.pothelperVersion,
      optional: true,
      downloadLabel: 'Download helper',
    },
  ];

  return (
    <>
      <section className='relative overflow-hidden pt-28 pb-10 px-6 text-center'>
        <div className='relative max-w-[760px] mx-auto flex flex-col items-center'>
          <h1 className='font-heading font-extrabold text-[clamp(2.375rem,6vw,4.25rem)] leading-[1.04] tracking-tight text-base-content mb-5'>
            Ad-free YouTube
            <br />
            for Android
          </h1>
          <p className='text-base md:text-lg text-base-muted max-w-[540px] leading-relaxed mb-8'>
            Install the helper first, then YouTube or YouTube Music. No ads, no fees — phones and tablets only.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <ButtonLink href='/docs/youtube-apps/install-on-android/' variant='gradient' size='lg'>
              <BookOpen className='size-4' />
              Installation guide
            </ButtonLink>
            <ButtonLink href='#downloads' variant='ghost-glass' size='lg'>
              Download the apps
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className='px-6 pb-8'>
        <div className='max-w-[920px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {installSteps.map((step, index) => (
              <div
                key={step.title}
                className='flex sm:flex-col gap-3 sm:gap-0 items-start rounded-2xl border border-base-content/8 bg-base-200 px-4 py-4 sm:p-5'
              >
                <span className='flex size-8 shrink-0 items-center justify-center rounded-full border border-base-content/12 bg-base-content/5 font-heading font-bold text-sm text-base-muted sm:mb-3'>
                  {index + 1}
                </span>
                <div>
                  <h2 className='font-heading font-bold text-[15px] text-base-content mb-0.5'>{step.title}</h2>
                  <p className='text-[13px] text-base-muted leading-snug'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='downloads' className='py-6 px-6 pb-12 scroll-mt-24'>
        <div className='max-w-[1080px] mx-auto'>
          <div className='text-center mb-7'>
            <h2 className='font-heading font-extrabold text-[clamp(1.625rem,3.6vw,2.5rem)] leading-tight tracking-tight text-base-content mb-2'>
              Get the apps
            </h2>
            <p className='text-[15px] text-base-muted max-w-[520px] mx-auto'>
              Android only. Start with MicroG, then install YouTube or YouTube Music.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
            {apps.map((app) => {
              const cardClass = `group relative flex gap-4 items-start p-5 rounded-2xl border bg-base-200 transition-colors ${
                app.url ? 'hover:border-base-content/16' : 'opacity-70'
              } ${app.required ? 'border-base-content/14' : 'border-base-content/8'}`;

              const content = (
                <>
                  {app.required && (
                    <span className='absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wide text-base-muted bg-base-content/8 px-2 py-0.5 rounded-md'>
                      Required first
                    </span>
                  )}
                  {app.optional && (
                    <span className='absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wide text-base-muted bg-base-content/6 px-2 py-0.5 rounded-md'>
                      Only if needed
                    </span>
                  )}
                  <span className='flex size-[46px] shrink-0 items-center justify-center rounded-xl bg-base-content/5 text-base-muted'>
                    <app.icon className='size-[22px]' />
                  </span>
                  <div className='min-w-0 pr-16'>
                    <div className='flex items-center gap-2 mb-1 flex-wrap'>
                      <h3 className='font-heading font-bold text-base text-base-content'>{app.name}</h3>
                      {app.version ? (
                        <span className='text-[10px] font-semibold uppercase tracking-wide text-base-muted bg-base-content/6 px-1.5 py-0.5 rounded'>
                          v{app.version}
                        </span>
                      ) : null}
                    </div>
                    <p className='text-[13.5px] text-base-muted leading-snug mb-2.5'>{app.description}</p>
                    <span className='inline-flex items-center gap-1.5 text-[13px] font-semibold text-base-content'>
                      {app.url ? app.downloadLabel : 'Download unavailable'}
                      {app.url ? (
                        <ArrowRight className='size-3.5 group-hover:translate-x-0.5 transition-transform' />
                      ) : null}
                    </span>
                  </div>
                </>
              );

              if (!app.url) {
                return (
                  <div key={app.name} className={cardClass}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={app.name}
                  href={app.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cardClass}
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className='mt-6 flex flex-col items-center gap-3'>
            <p className='max-w-[560px] text-center text-sm leading-relaxed text-base-muted px-4'>
              Video buffering or stopping at 1:00? See the{' '}
              <a href='/docs/youtube-apps/playback-issues' className='font-semibold text-base-content hover:underline'>
                playback troubleshooting guide
              </a>
              .
            </p>
            <p className='max-w-[560px] text-center text-xs leading-relaxed text-base-muted px-4'>
              These modified apps are not affiliated with, endorsed by, or connected to YouTube, YouTube Music, or
              Google. They are community-built modifications. Use at your own risk.
            </p>
          </div>
        </div>
      </section>

      <section className='py-8 px-6 pb-24'>
        <div className='cta-card relative max-w-[1000px] mx-auto px-6 sm:px-8 py-12 sm:py-14 text-center overflow-hidden'>
          <h2 className='font-heading font-extrabold text-[clamp(1.625rem,4vw,2.5rem)] leading-tight tracking-tight text-base-content mb-3.5'>
            Stuck on setup?
          </h2>
          <p className='text-base md:text-lg text-base-muted max-w-[480px] mx-auto mb-7'>
            The install guide walks through allowing unknown apps, MicroG, and first sign-in step by step.
          </p>
          <div className='flex flex-wrap justify-center gap-3.5'>
            <ButtonLink href='/docs/youtube-apps/install-on-android/' variant='outline' size='lg'>
              <BookOpen className='size-4' />
              Installation guide
            </ButtonLink>
            <ButtonLink href='/docs/youtube-apps/playback-issues' variant='ghost-glass' size='lg'>
              <BookOpen className='size-4' />
              Playback issues
            </ButtonLink>
            <ButtonLink href='/Downloads' variant='ghost-glass' size='lg'>
              <Clapperboard className='size-4' />
              Jellyfin apps
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
