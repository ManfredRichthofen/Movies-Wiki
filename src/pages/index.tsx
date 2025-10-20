import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Homepage from '@site/src/pages/Home/Home';
import Layout from '@theme/Layout';
import * as React from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description='Explore our comprehensive documentation and features.'>
      <Homepage />
    </Layout>
  );
}
