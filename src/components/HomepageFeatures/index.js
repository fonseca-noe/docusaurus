import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🔍 ¿Qué es el inspector?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Es una herramienta del navegador que te permite analizar y modificar el
        código de una página web en tiempo real.
      </>
    ),
  },
  {
    title: '💡 ¿Para qué sirve?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ideal para desarrolladores, permite inspeccionar elementos,
        modificar estilos, revisar errores y más.
      </>
    ),
  },
  {
    title: '🧭 ¿Cómo lo abro?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
