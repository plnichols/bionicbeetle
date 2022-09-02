import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../utils/fetch';
import styles from './Services.module.scss';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

interface Service {
  icon: 'code' | 'css' | 'html' | 'javascript' | 'mobile' | 'react' | 'webpack';
  name: string;
  description: string;
}

const Services = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetchJson<Service[]>('/data/services.json')
      .then((json) => {
        setServices(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div aria-live="polite" aria-busy={loading}>
      {loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {!loading && (
        <ul className={styles.ul}>
          {services.map((service, index) => {
            return (
              <li key={index} className={styles.li}>
                <Icon type={service.icon} className={styles.icon} />
                <div className={styles.info}>
                  <div className={styles.name}>{service.name}</div>
                  <div className={styles.description}>{service.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Services;
