import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>lebagarv</h1>
      </div>
      <div className={styles.hSearch}>
        <input type="text" placeholder="BMW, Audi, Porsche..." />
        <i className="fa fa-search"></i>
      </div>
      <div className={styles.hUser}>
        <div className={styles.huMessages}>
          <i className="fa fa-comment"></i>
          <span>Messages</span>
        </div>
        <div className={styles.huFavs}>
          <i className="fa fa-heart"></i>
          <span>Favorites</span>
        </div>
        <div className={styles.huCreate}>
          <i className="fa fa-plus"></i>
          <span>Create</span>
        </div>
      </div>
    </header>
  );
};

export default Header;