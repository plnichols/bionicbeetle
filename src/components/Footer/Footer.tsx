import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      &copy; {currentYear} Bionic Beetle Ltd &bull; Registered in England and Wales, no 09268216
    </div>
  );
};

export default Footer;
