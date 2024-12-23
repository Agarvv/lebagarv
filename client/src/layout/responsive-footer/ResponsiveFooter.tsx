import React from 'react';
import styles from './ResponsiveFooter.module.css';

const ResponsiveFooter = () => {
  return (
    <footer className={styles.responsiveFooter}>
      <div className={styles.rsfFavs}>
        <i className="fa fa-heart"></i>
        <span>Favorites</span>
      </div>
      <div className={styles.rsfCreate}>
        <i className="fa fa-plus"></i>
        <span>Create</span>
      </div>
      <div className={styles.rsfMessages}>
        <i className="fa fa-comment"></i>
        <span>Messages</span>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;