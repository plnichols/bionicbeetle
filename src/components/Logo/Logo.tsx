import React, { ReactElement } from 'react';
import styles from './Logo.module.scss';
import Icon from '../../components/Icon/Icon';

const Logo = (): ReactElement => {
  return (
    <div className={styles.logo}>
      <Icon type="bionicbeetle" />
    </div>
  );
};

export default Logo;
