import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    description:
      "Pine is easy to use and learn. With a few built-in functions you don't need to learn that much before using Pine. You can start right away.",
  },
  {
    title: 'Use existing npm packages',
    description:
      'Instead of having a lot of built-in functions or plugins you can just use an existing npm package to write your task.',
  },
  {
    title: 'Lightweight',
    description:
      'Pine is a lightweight task runner that just works and can be used with TypeScript and other JavaScript-transpilers.',
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
