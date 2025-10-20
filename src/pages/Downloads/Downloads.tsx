import Layout from '@theme/Layout';
import type React from 'react';
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaDesktop,
  FaDownload,
  FaGlobe,
  FaMobile,
  FaStar,
  FaTv,
  FaWindows,
} from 'react-icons/fa';

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
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100 py-20 md:py-32'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto text-center flex flex-col items-center'>
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8'>
              <FaDownload className='w-4 h-4' />
              <span className='text-sm font-semibold'>Available on All Your Devices</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-extrabold mb-6 text-base-content'>
              Download Jellyfin
              <span className='block text-primary mt-2'>For Any Platform</span>
            </h1>
            <p className='text-xl text-base-content/80 mb-10 max-w-3xl leading-relaxed'>
              Stream your media library anywhere. Choose your platform and start enjoying your content in minutes.
            </p>
          </div>
        </div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10' />
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10' />
      </section>

      {/* Category Pills */}
      <section className='py-8 bg-base-100 border-b border-base-300'>
        <div className='container mx-auto px-4'>
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
      <section className='py-20 bg-base-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3 text-base-content'>Most Popular</h2>
            <p className='text-base-content/70'>Get started with these recommended clients</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16'>
            {platforms
              .filter((p) => p.featured)
              .map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/20'
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
                    <h3 className='text-2xl font-bold mb-2 text-base-content'>{platform.name}</h3>
                    <p className='text-base-content/70 mb-6'>{platform.description}</p>
                    <div className='flex items-center gap-2 text-primary font-semibold'>
                      <span>Download</span>
                      <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* All Platforms by Category */}
      <section className='py-20 bg-base-200'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-3 text-base-content'>All Platforms</h2>
              <p className='text-base-content/70'>Complete list of available Jellyfin clients</p>
            </div>

            {categories.map((category) => {
              const categoryPlatforms = platforms.filter((p) => p.category === category.id);
              return (
                <div key={category.id} id={category.id} className='mb-12 scroll-mt-20'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='bg-primary/10 p-3 rounded-xl'>
                      <category.icon className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='text-2xl font-bold text-base-content'>{category.name}</h3>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categoryPlatforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group bg-base-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                      >
                        <div className='flex items-start gap-4'>
                          <div className='bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors'>
                            <platform.icon className='w-8 h-8 text-primary' />
                          </div>
                          <div className='flex-1'>
                            <h4 className='text-lg font-bold mb-1 text-base-content group-hover:text-primary transition-colors'>
                              {platform.name}
                            </h4>
                            <p className='text-sm text-base-content/70 mb-3'>{platform.description}</p>
                            <div className='flex items-center gap-2 text-primary text-sm font-semibold'>
                              <span>Download</span>
                              <FaArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' />
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className='py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-base-content'>Need Help Getting Started?</h2>
            <p className='text-xl text-base-content/70 mb-10'>
              Check out our comprehensive installation guides and documentation.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a href='/docs/installation' className='btn btn-primary !text-primary-content btn-lg gap-2'>
                Installation Guide
                <FaArrowRight />
              </a>
              <a href='/docs' className='btn btn-outline btn-lg gap-2'>
                View All Docs
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
