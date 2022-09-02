import React, { ReactElement } from 'react';
import styles from './Content.module.scss';

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props): ReactElement => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
