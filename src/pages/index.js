import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Lottie from 'lottie-react';
import animationData from '@site/static/lottie/animation.json';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>
            Aprende a usar el <span>Inspector de Elementos</span>
          </h1>
          <p>Explora, aprende y domina las herramientas de desarrollo del navegador.</p>
          <div className={styles.buttons}>
            <Link className="button button--outline button--primary" to="/docs/intro">
              Introducción
            </Link>
            <Link className="button button--primary" to="/docs/inspector/elementos">
              Empezar
            </Link>
            <Link className={styles.cta} to="/docs/herramientas-dev">
              Explorar herramientas
            </Link>
          </div>
        </div>
        <Lottie animationData={animationData} className={styles.heroImage} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Inicio" description="Bienvenido a la documentación">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
