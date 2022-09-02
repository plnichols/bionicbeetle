import React, { ReactElement } from 'react';
import styles from './Heading.module.scss';

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  children: React.ReactNode;
}

const Heading = ({ h1, h2, h3, h4, h5, h6, children }: Props): ReactElement | null => {
  if (h1) {
    return <h1 className={styles.h1}>{children}</h1>;
  }

  if (h2) {
    return <h2 className={styles.h2}>{children}</h2>;
  }

  if (h3) {
    return <h3 className={styles.h3}>{children}</h3>;
  }

  if (h4) {
    return <h4 className={styles.h4}>{children}</h4>;
  }

  if (h5) {
    return <h5 className={styles.h5}>{children}</h5>;
  }

  if (h6) {
    return <h6 className={styles.h6}>{children}</h6>;
  }

  return null;
};

export default Heading;
