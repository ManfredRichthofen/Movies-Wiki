import * as React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Homepage from '@site/src/components/homepage';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="Explore our comprehensive documentation and features."
        >
            <Homepage />
        </Layout>
    );
}
