import React, { ReactElement } from 'react';
import styles from './Divider.module.scss';

interface Props {
  top?: number;
  bottom?: number;
}

interface StylesObj {
  marginTop?: string;
  marginBottom?: string;
}

const Divider = ({ top = 80, bottom = 80 }: Props): ReactElement => {
  const stylesObj: StylesObj = {
    ...(top && { marginTop: top + 'px' }),
    ...(bottom && { marginBottom: bottom + 'px' }),
  };

  return <div className={styles.divider} style={stylesObj} />;
};

export default Divider;
