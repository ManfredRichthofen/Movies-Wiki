import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Homepage from '@site/src/pages/Home/Home';
import Layout from '@theme/Layout';
import * as React from 'react';
import Footer from '@site/src/components/Footer';
import Navbar from '@site/src/components/Navbar';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}
