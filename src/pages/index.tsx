import * as React from 'react';
import { Button } from 'flowbite-react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Spacer from '@site/src/components/divider';
import Youtube from '@site/src/components/youtube';

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('py-16 text-center relative overflow-hidden', 'sm:py-8')}>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
        {/* <p className="text-lg text-gray-600">{siteConfig.tagline}</p> */}
        <div className="flex items-center justify-center mt-6">
          <Button color="primary" onClick={() => {}} outline={true}>
            Documentation
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <Homepage />
      <main>
        <HomepageFeatures />
        <Spacer />
        <Youtube />
      </main>
    </Layout>
  );
}
