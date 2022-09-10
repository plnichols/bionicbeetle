import React, { ReactElement } from 'react';
import styles from './Loader.module.scss';

const Loader = (): ReactElement => {
  return <div className={styles.loader} aria-label="loader"></div>;
};

export default Loader;
