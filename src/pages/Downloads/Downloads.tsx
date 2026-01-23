import Layout from '@theme/Layout';
import type React from 'react';
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaBook,
  FaDesktop,
  FaDownload,
  FaGlobe,
  FaMobile,
  FaStar,
  FaTv,
  FaWindows,
} from 'react-icons/fa';
import {
  Button,
  Card,
  CTASection,
  HeroSection,
  SectionHeader,
  SPACING,
  TYPOGRAPHY,
  OPACITY,
} from '@site/src/components/design-system';

type Platform = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  category: 'desktop' | 'mobile' | 'tv' | 'web';
  featured?: boolean;
};

const platforms: Platform[] = [
  {
    name: 'Desktop',
    description: 'Full-featured desktop client. Compatable with Windows, Linux, and macOS',
    icon: FaDesktop,
    url: 'https://jellyfin.org/client-windows',
    category: 'desktop',
  },
  {
    name: 'Android',
    description: 'Mobile streaming on the go',
    icon: FaAndroid,
    url: 'https://jellyfin.org/client-android',
    category: 'mobile',
    featured: true,
  },
  {
    name: 'iOS',
    description: 'Native iPhone & iPad app',
    icon: FaApple,
    url: 'https://jellyfin.org/client-ios',
    category: 'mobile',
    featured: true,
  },
  {
    name: 'Android TV',
    description: 'Big screen experience',
    icon: FaTv,
    url: 'https://jellyfin.org/client-android-tv',
    category: 'tv',
  },
  {
    name: 'Apple TV',
    description: 'Big screen experience',
    icon: FaTv,
    url: 'https://jellyfin.org/client-android-tv',
    category: 'tv',
  },
  {
    name: 'LG webOS',
    description: 'Smart TV integration',
    icon: FaTv,
    url: 'https://jellyfin.org/client-lg',
    category: 'tv',
  },
  {
    name: 'Web Player',
    description: 'Stream from any browser',
    icon: FaGlobe,
    url: 'https://jfapp.xyz',
    category: 'web',
    featured: true,
  },
];

const categories = [
  { id: 'web', name: 'Web', icon: FaGlobe },
  { id: 'mobile', name: 'Mobile', icon: FaMobile },
  { id: 'tv', name: 'TV', icon: FaTv },
  { id: 'desktop', name: 'Desktop', icon: FaDesktop },
];

export default function DownloadPage(): React.JSX.Element {
  return (
    <Layout title='Download Jellyfin Apps' description='Download Jellyfin for your devices.'>
      <HeroSection
        title='Download Jellyfin'
        subtitle='For Any Platform'
        description='Stream your media library anywhere. Choose your platform and start enjoying your content in minutes.'
        badgeText='Available on All Your Devices'
        badgeIcon={FaDownload}
        variant='gradient'
      />

      {/* Category Pills */}
      <section className={`${SPACING.sectionLarge} bg-base-100 border-b border-base-300`}>
        <div className={SPACING.container}>
          <div className='flex flex-wrap justify-center gap-3 max-w-4xl mx-auto'>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className='flex items-center gap-2 bg-base-200 hover:bg-base-300 px-5 py-3 rounded-full transition-all hover:scale-105'
              >
                <category.icon className='w-4 h-4 text-primary' />
                <span className='text-sm font-semibold text-base-content'>{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className={`${SPACING.section} bg-base-100`}>
        <div className={SPACING.container}>
          <SectionHeader
            title='Most Popular'
            subtitle='Get started with these recommended clients'
          />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16'>
            {platforms
              .filter((p) => p.featured)
              .map((platform) => (
                <Card
                  key={platform.name}
                  variant='featured'
                  className='p-8 hover:shadow-2xl hover:-translate-y-2'
                >
                  <div className='absolute top-4 right-4'>
                    <div className='bg-primary/20 text-primary p-1.5 rounded-full'>
                      <FaStar className='w-3 h-3' />
                    </div>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                    <div className='bg-base-100 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                      <platform.icon className='w-16 h-16 text-primary' />
                    </div>
                    <h3 className={`${TYPOGRAPHY.cardTitle} mb-2 ${OPACITY.primary}`}>{platform.name}</h3>
                    <p className={OPACITY.muted + ' mb-6'}>{platform.description}</p>
                    <Button
                      variant='primary'
                      href={platform.url}
                      icon={FaArrowRight}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group'
                    >
                      Download
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Platforms by Category */}
      <section className={`${SPACING.section} bg-base-200`}>
        <div className={SPACING.container}>
          <div className='max-w-6xl mx-auto'>
            <SectionHeader
              title='All Platforms'
              subtitle='Complete list of available Jellyfin clients'
            />

            {categories.map((category) => {
              const categoryPlatforms = platforms.filter((p) => p.category === category.id);
              return (
                <div key={category.id} id={category.id} className='mb-12 scroll-mt-20'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='bg-primary/10 p-3 rounded-xl'>
                      <category.icon className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className={`${TYPOGRAPHY.sectionTitle} ${OPACITY.primary}`}>{category.name}</h3>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categoryPlatforms.map((platform) => (
                      <Card key={platform.name} className='p-6'>
                        <a
                          href={platform.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-start gap-4 group'
                        >
                          <div className='bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors'>
                            <platform.icon className='w-8 h-8 text-primary' />
                          </div>
                          <div className='flex-1'>
                            <h4 className={`text-lg font-bold mb-1 ${OPACITY.primary} group-hover:text-primary transition-colors`}>
                              {platform.name}
                            </h4>
                            <p className={`text-sm ${OPACITY.muted} mb-3`}>{platform.description}</p>
                            <div className='flex items-center gap-2 text-primary text-sm font-semibold'>
                              <span>Download</span>
                              <FaArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                            </div>
                          </div>
                        </a>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title='Need Help Getting Started?'
        description='Check out our comprehensive installation guides and documentation.'
        primaryButton={{
          text: 'Installation Guide',
          href: '/docs/installation',
          icon: FaArrowRight,
        }}
        secondaryButton={{
          text: 'View All Docs',
          href: '/docs',
          icon: FaBook,
        }}
      />
    </Layout>
  );
}
