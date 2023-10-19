import * as React from "react";
import Button from "@mui/joy/Button";
import "@fontsource/inter";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Spacer from "@site/src/components/divider";
import Youtube from "@site/src/components/youtube";
import styles from "./index.module.css";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Button color="primary" onClick={function () {}} variant="outlined">
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
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Homepage />
      <main>
        <HomepageFeatures />
        <Spacer />
        <Youtube />
      </main>
    </Layout>
  );
}
