import React, { ReactElement } from 'react';
import styles from './Button.module.scss';

interface Props {
  href?: string;
  anchor?: boolean;
  children: React.ReactNode;
}

const Button = ({ anchor, children, ...rest }: Props): ReactElement => {
  if (anchor) {
    return (
      <a className={styles.button} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
