import * as React from 'react';
import { Button } from 'flowbite-react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Youtube from '@site/src/components/youtube';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Watch Movies',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Quick access to an almost unlimited number of movies, including an automated request system.</>,
  },
  {
    title: 'Host Game Servers',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Simple server panel for hosting game servers.</>,
  },
  {
    title: 'Discord Bots',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Bots to make managing Discord easier.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="flex justify-center">
        <Svg className="h-32 w-32" role="img" />
      </div>
      <div className="text-center px-6">
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header
            className={clsx(
                'py-16 text-center relative overflow-hidden bg-white dark:bg-gray-900 sm:py-8'
            )}
            aria-label="Homepage Header"
        >
            <div className="container mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
                    {siteConfig.title}
                </h1>
                <div className="flex items-center justify-center mt-6">
                    <Button
                        color="primary"
                        outline
                        gradientMonochrome="info"
                        onClick={() => window.location.href = '/docs'}
                        aria-label="Go to Documentation"
                    >
                        Documentation
                    </Button>
                </div>
            </div>
        </header>
    );
}

function HomepageFeatures() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="Explore our comprehensive documentation and features."
        >
            <HomepageHeader />
            <main className="bg-white dark:bg-gray-900">
                <HomepageFeatures />
                <Youtube />
            </main>
        </Layout>
    );
}
