import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source🔓',
    image: 'img/duckHoldingLaptop.png',
    description: (
      <>
        MaduChat is an open source social media application based
        on Angular and Nest.js. Anyone can work on it
        to make MaduChat a better, more complex and more useful platform
      </>
    ),
  },
  {
    title: 'Hobby project⚙️🎨',
    image: 'img/duckOnlaptop.png',
    description: (
      <>
        It started as an hobby project and growed time for time. Now
        its a complex project that will include all features we
        can imagine
      </>
    ),
  },
  {
    title: 'More and more📈',
    image: 'img/moreAndMore.png',
    description: (
      <>
        Meanwhile, MaduChat is not just a single repository. After 
        a while, 2 other repositories have developed, which also related 
        to MaduChat. The documentation based on Docusaurus and the command 
        line interface written in C
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
