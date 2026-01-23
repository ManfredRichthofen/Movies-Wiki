import type React from 'react';
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaBook,
  FaDesktop,
  FaDownload,
  FaFilm,
  FaGamepad,
  FaMobile,
  FaMusic,
  FaPlay,
  FaRobot,
  FaServer,
  FaStar,
  FaTv,
} from 'react-icons/fa';
import {
  Button,
  Card,
  CTASection,
  FeatureGrid,
  HeroSection,
  SectionHeader,
  SPACING,
  TYPOGRAPHY,
  OPACITY,
} from '@site/src/components/design-system';

// Jellyfin Showcase
function JellyfinShowcase() {
  const platforms = [
    { icon: FaDesktop, name: 'Desktop' },
    { icon: FaMobile, name: 'Mobile' },
    { icon: FaTv, name: 'TV' },
    { icon: FaAndroid, name: 'Android' },
    { icon: FaApple, name: 'iOS' },
  ];

  return (
    <section id='apps' className={`${SPACING.section} bg-base-200`}>
      <div className={SPACING.container}>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <SectionHeader
                badge='MEDIA SERVER'
                title='Your Personal Netflix Alternative'
                centered={false}
              />
              <p className={`${TYPOGRAPHY.description} ${OPACITY.secondary} mb-8`}>
                Jellyfin gives you complete control over your media. Stream movies, TV shows, music, and more to any
                device—no subscription required.
              </p>
              <div className='space-y-4 mb-8'>
                <div className='flex items-start gap-3'>
                  <div className='bg-primary/10 p-2 rounded-lg mt-1'>
                    <FaStar className='w-4 h-4 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base-content mb-1'>100% Free & Open Source</h4>
                    <p className={OPACITY.muted + ' text-sm'}>No hidden fees, no subscriptions, forever free</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-primary/10 p-2 rounded-lg mt-1'>
                    <FaServer className='w-4 h-4 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base-content mb-1'>Self-Hosted Control</h4>
                    <p className={OPACITY.muted + ' text-sm'}>Your data stays yours, complete privacy</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap gap-3 mb-8'>
                {platforms.map((platform) => (
                  <div key={platform.name} className='flex items-center gap-2 bg-base-100 px-4 py-2 rounded-lg'>
                    <platform.icon className='w-4 h-4 text-primary' />
                    <span className='text-sm text-base-content'>{platform.name}</span>
                  </div>
                ))}
              </div>
              <Button
                variant='primary'
                size='lg'
                href='https://jellyfin.org/downloads'
                icon={FaDownload}
                target='_blank'
                rel='noopener noreferrer'
              >
                Download Jellyfin
              </Button>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl' />
                <img
                  src={require('@site/static/img/jellyfin.png').default}
                  alt='Jellyfin interface'
                  className='relative rounded-2xl shadow-2xl w-full'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ReVanced Showcase
function RevancedShowcase() {
  const features = [
    'Block all ads',
    'Background playback',
    'SponsorBlock integration',
    'Picture-in-picture',
    'Custom themes',
    'Download videos',
  ];

  return (
    <section className={`${SPACING.section} bg-base-100`}>
      <div className={SPACING.container}>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-error/20 to-primary/20 rounded-3xl blur-2xl' />
                <img
                  src={require('@site/static/img/youtube.jpg').default}
                  alt='ReVanced interface'
                  className='relative rounded-2xl shadow-2xl w-full'
                  loading='lazy'
                />
              </div>
            </div>
            <div>
              <SectionHeader
                badge='YOUTUBE ENHANCED'
                title='YouTube Premium Without the Price Tag'
                centered={false}
              />
              <p className={`${TYPOGRAPHY.description} ${OPACITY.secondary} mb-8`}>
                ReVanced brings all premium features to YouTube and YouTube Music—completely free. No ads, no
                interruptions, just pure content.
              </p>
              <div className='grid grid-cols-2 gap-3 mb-8'>
                {features.map((feature) => (
                  <div key={feature} className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-error rounded-full' />
                    <span className={OPACITY.secondary + ' text-sm'}>{feature}</span>
                  </div>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row gap-3'>
                <Button
                  variant='error'
                  size='lg'
                  href='https://revanced.app/download'
                  icon={FaPlay}
                  className='flex-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get YouTube
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  href='https://revanced.app/download'
                  icon={FaMusic}
                  className='flex-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get Music
                </Button>
              </div>
              <Button
                variant='ghost'
                size='sm'
                href='/docs/installation'
                icon={FaBook}
                className='mt-4'
              >
                Installation Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function Home(): React.JSX.Element {
  return (
    <>
      <HeroSection
        title='Stream, Play, and Enjoy'
        subtitle='Without Limits'
        description='Access unlimited movies, ad-free YouTube, game servers, and powerful AI tools—all in one place.'
        badgeText='Your Complete Entertainment Solution'
        primaryButton={{
          text: 'Get Started',
          href: '#apps',
          icon: FaArrowRight,
        }}
        secondaryButton={{
          text: 'Learn More',
          href: '#features',
          icon: FaBook,
        }}
        variant='gradient'
      />
      <FeatureGrid
        title='Everything You Need'
        subtitle='A complete entertainment ecosystem at your fingertips'
        features={[
          {
            icon: FaFilm,
            title: 'Unlimited Movies',
            description: 'Stream thousands of movies with automated requests',
            color: 'text-primary',
          },
          {
            icon: FaPlay,
            title: 'Ad-Free YouTube',
            description: 'Watch YouTube without ads or interruptions',
            color: 'text-error',
          },
          {
            icon: FaGamepad,
            title: 'Game Servers',
            description: 'Host and manage your own game servers easily',
            color: 'text-secondary',
          },
          {
            icon: FaRobot,
            title: 'AI Tools',
            description: 'Powerful Discord bots for automation',
            color: 'text-accent',
          },
        ]}
      />
      <JellyfinShowcase />
      <RevancedShowcase />
      <CTASection
        title='Ready to Get Started?'
        description='Join thousands of users enjoying unlimited entertainment without restrictions.'
        primaryButton={{
          text: 'Download Now',
          href: '#apps',
          icon: FaDownload,
        }}
        secondaryButton={{
          text: 'View Documentation',
          href: '/docs',
          icon: FaBook,
        }}
      />
    </>
  );
}
