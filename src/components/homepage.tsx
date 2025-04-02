import * as React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FaFilm, FaServer, FaRobot } from 'react-icons/fa';
import Youtube from '@site/src/components/youtube';

type FeatureItem = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Watch Movies',
    icon: FaFilm,
    description: <>Quick access to an almost unlimited number of movies, including an automated request system.</>,
    color: 'text-blue-500',
  },
  {
    title: 'Host Game Servers',
    icon: FaServer,
    description: <>Simple server panel for hosting game servers.</>,
    color: 'text-purple-500',
  },
  {
    title: 'Discord Bots',
    icon: FaRobot,
    description: <>Bots to make managing Discord easier.</>,
    color: 'text-green-500',
  },
];

function Feature({ title, icon: Icon, description, color }: FeatureItem) {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all border border-base-300 hover:border-primary/20">
      <div className="card-body items-center text-center">
        <div className="flex justify-center">
          <Icon className={`h-16 w-16 ${color} mb-4`} />
        </div>
        <h3 className="card-title text-2xl font-bold text-base-content">{title}</h3>
        <p className="text-base-content/80">{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="hero min-h-[80vh] bg-base-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
            <div className="hero-content text-center w-full max-w-4xl mx-auto relative">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-7xl font-bold text-base-content mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-focus">
                        {siteConfig.title}
                    </h1>
                    <p className="text-xl text-base-content/80 mb-8 max-w-2xl">
                        {siteConfig.tagline}
                    </p>
                    <div className="flex gap-4">
                        <button 
                            className="btn btn-primary btn-lg"
                            onClick={() => window.location.href = '/docs/jellyfin'}
                            aria-label="Go to Documentation"
                        >
                            Start Streaming
                        </button>
                        <button 
                            className="btn btn-outline btn-lg"
                            onClick={() => window.location.href = '/downloads'}
                            aria-label="Go to Downloads"
                        >
                            Download Apps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomepageFeatures() {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">Features</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Everything you need to stream, host, and manage your digital content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Homepage(): JSX.Element {
    return (
        <>
            <HomepageHeader />
            <main className="bg-base-100">
                <HomepageFeatures />
                <Youtube />
            </main>
        </>
    );
} 