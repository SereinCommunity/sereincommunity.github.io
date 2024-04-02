import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function ({ link, className, children, title, description }) {
  return (
    <Link
      className={clsx('card', 'padding--md', styles.cardContainer, className)}
      to={link}
    >
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDescription}>{description}</div>
      {children}
    </Link>
  );
}
