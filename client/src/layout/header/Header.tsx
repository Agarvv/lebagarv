import React from 'react';
import { Link } from 'react-router-dom';  
import styles from './Header.module.css';

interface Props {
  searchQuery?: string;
}

const Header: React.FC<Props> = ({ searchQuery }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>lebagarv</h1>
        </Link>  
      </div>
      <div className={styles.hSearch}>
        <input type="text" placeholder="Bemve, Udis, Mermeledes..." value={searchQuery}/>
        <i className="fa fa-search"></i>
      </div>
      <div className={styles.hUser}>
       <a href="/chats">
        <div className={styles.huMessages}>
          <i className="fa fa-comment"></i>
          <span>Messages</span>
        </div>
       </a> 
       <a href="/favorites">
        <div className={styles.huFavs}>
          <i className="fa fa-heart"></i>
          <span>Favorites</span>
        </div>
       </a>
       <a href="/create">
        <div className={styles.huCreate}>
          <i className="fa fa-plus"></i>
          <span>Create</span>
        </div>
       </a>
       <a href="/profile/s">
        <div className={styles.huProfile}>
          <i className="fa fa-user"></i>
          <span>Profile</span>
        </div>
       </a>
      </div>
    </header>
  );
};

export default Header;