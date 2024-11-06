import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dasturlash asoslari',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dasturlash asoslarini o'rganish darslari dasturlash tillari, algoritmlar, ma'lumotlar tuzilmalari, shartli operatorlar, tsikllar va funktsiyalar kabi fundamental tushunchalarni o'z ichiga oladi.
      </>
    ),
  },
  {
    title: 'Sohangizni to`g`ri tanlang',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       To'g'ri yo'nalishni topishda yordam beraman — IT sohasida eng yaxshi yo'nalishni tanlashda yordam beradigan xizmatdir. Sizning maqsadlaringiz, eng mos va muvaffaqiyatli yo'nalishni tanlashda qo'llanma bo'laman.
      </>
    ),
  },
  {
    title: 'Loyihalar ustida ishlaysiz',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Darslar davomida loyihalar yaratishda yordam beraman — bu sizga o'rgangan bilimlaringizni amalda qo'llash uchun real loyihalar ustida ishlash imkonini yaratadi.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
