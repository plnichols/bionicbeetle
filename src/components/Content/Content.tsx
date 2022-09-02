import React from 'react';
import styles from './Content.module.scss';

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
