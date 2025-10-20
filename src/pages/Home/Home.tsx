import React from 'react';
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

// Hero Section
function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100 py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto text-center flex flex-col items-center'>
          <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8'>
            <FaStar className='w-4 h-4' />
            <span className='text-sm font-semibold'>Your Complete Entertainment Solution</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-6 text-base-content'>
            Stream, Play, and Enjoy
            <span className='block text-primary mt-2'>Without Limits</span>
          </h1>
          <p className='text-xl text-base-content/80 mb-10 max-w-3xl leading-relaxed'>
            Access unlimited movies, ad-free YouTube, game servers, and powerful AI tools—all in one place.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#apps' className='btn btn-primary !text-primary-content btn-lg gap-2 shadow-lg'>
              Get Started
              <FaArrowRight />
            </a>
            <a href='#features' className='btn btn-ghost btn-lg gap-2'>
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10' />
    </section>
  );
}

// Features Grid
function FeaturesGrid() {
  const features = [
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
  ];

  return (
    <section id='features' className='py-20 bg-base-100'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 flex flex-col items-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-base-content'>Everything You Need</h2>
          <p className='text-lg text-base-content/70 max-w-2xl'>
            A complete entertainment ecosystem at your fingertips
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='group relative bg-base-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className='w-12 h-12' />
              </div>
              <h3 className='text-xl font-bold mb-2 text-base-content'>{feature.title}</h3>
              <p className='text-base-content/70'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id='apps' className='py-20 bg-base-200'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <div className='inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4'>
                MEDIA SERVER
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 text-base-content'>
                Your Personal
                <span className='block text-primary'>Netflix Alternative</span>
              </h2>
              <p className='text-lg text-base-content/80 mb-8'>
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
                    <p className='text-base-content/70 text-sm'>No hidden fees, no subscriptions, forever free</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-primary/10 p-2 rounded-lg mt-1'>
                    <FaServer className='w-4 h-4 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-base-content mb-1'>Self-Hosted Control</h4>
                    <p className='text-base-content/70 text-sm'>Your data stays yours, complete privacy</p>
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
              <a
                href='https://jellyfin.org/downloads'
                className='btn btn-primary !text-primary-content btn-lg gap-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDownload />
                Download Jellyfin
              </a>
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
    <section className='py-20 bg-base-100'>
      <div className='container mx-auto px-4'>
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
              <div className='inline-block bg-error/10 text-error px-3 py-1 rounded-full text-sm font-semibold mb-4'>
                YOUTUBE ENHANCED
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 text-base-content'>
                YouTube Premium
                <span className='block text-error'>Without the Price Tag</span>
              </h2>
              <p className='text-lg text-base-content/80 mb-8'>
                ReVanced brings all premium features to YouTube and YouTube Music—completely free. No ads, no
                interruptions, just pure content.
              </p>
              <div className='grid grid-cols-2 gap-3 mb-8'>
                {features.map((feature) => (
                  <div key={feature} className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-error rounded-full' />
                    <span className='text-base-content/80 text-sm'>{feature}</span>
                  </div>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row gap-3'>
                <a
                  href='https://revanced.app/download'
                  className='btn btn-error !text-error-content btn-lg gap-2 flex-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaPlay />
                  Get YouTube
                </a>
                <a
                  href='https://revanced.app/download'
                  className='btn btn-outline btn-lg gap-2 flex-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaMusic />
                  Get Music
                </a>
              </div>
              <a href='/docs/installation' className='btn btn-ghost btn-sm gap-2 mt-4'>
                <FaBook />
                Installation Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className='py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center flex flex-col items-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-base-content'>Ready to Get Started?</h2>
          <p className='text-xl text-base-content/70 mb-10'>
            Join thousands of users enjoying unlimited entertainment without restrictions.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#apps' className='btn btn-primary !text-primary-content btn-lg gap-2'>
              Download Now
              <FaDownload />
            </a>
            <a href='/docs' className='btn btn-outline btn-lg gap-2'>
              View Documentation
              <FaBook />
            </a>
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
      <Hero />
      <FeaturesGrid />
      <JellyfinShowcase />
      <RevancedShowcase />
      <CTASection />
    </>
  );
}
