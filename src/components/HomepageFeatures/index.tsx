import React from 'react';

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

export default function HomepageFeatures(): JSX.Element {
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
