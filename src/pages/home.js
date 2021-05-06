import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const HomeSplash = () => {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div>
          <img
            src={`${baseUrl}img/logo.png`}
            alt="Pine"
            width="100px"
            height="100px"
          />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Getting started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Small JavaScript-based task runner for node.js"
    >
      <HomeSplash />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
