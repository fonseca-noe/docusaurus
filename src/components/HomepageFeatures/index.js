import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🔍 ¿Qué es el inspector?',
    Svg: require('@site/static/img/card01.svg').default,
    description: (
      <>
        Es una herramienta del navegador que te permite analizar y modificar el
        código de una página web en tiempo real.
      </>
    ),
  },
  {
    title: '💡 ¿Para qué sirve?',
    Svg: require('@site/static/img/card02.svg').default,
    description: (
      <>
        Ideal para desarrolladores, permite inspeccionar elementos,
        modificar estilos, revisar errores y más.
      </>
    ),
  },
  {
    title: '🧭 ¿Cómo lo abro?',
    Svg: require('@site/static/img/card03.svg').default,
    description: (
      <>
        Haz clic derecho en una página y elige <strong>"Inspeccionar"</strong> o
        presiona <code>F12</code>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className={styles.iconWrapper}>
        <Svg className={styles.icon} role="img" />
      </div>
      <Heading as="h3" className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
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
