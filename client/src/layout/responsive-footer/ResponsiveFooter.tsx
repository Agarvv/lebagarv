import React from 'react';
import styles from './ResponsiveFooter.module.css';
import { Link } from 'react-router-dom';  

const ResponsiveFooter = () => {
  return (
    <footer className={styles.responsiveFooter}>
    <a href="/favorites"> 
      <div className={styles.rsfFavs}>
        <i className="fa fa-heart"></i>
        <span>Favorites</span>
      </div>
    </a> 
    <Link to="/create"> 
      <div className={styles.rsfCreate}>
        <i className="fa fa-plus"></i>
        <span>Create</span>
      </div>
    </Link> 
    
    <a href="/chats">
      <div className={styles.rsfMessages}>
         <i className="fa fa-comment"></i>
         <span>Messages</span>
      </div>
    </a>
    
    <a href="/profile/s">
      <div className={styles.rsfProfile}>
         <i className="fa fa-user"></i>
         <span>Profile</span>
      </div>
    </a>
    </footer>
  );
};

export default ResponsiveFooter;