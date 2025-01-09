import React from 'react';
import styles from './ResponsiveFooter.module.css';
import { Link } from 'react-router-dom';  

const ResponsiveFooter = () => {
  return (
    <footer className={styles.responsiveFooter}>
      <div className={styles.rsfFavs}>
      <Link to="/favorites"> 
        <i className="fa fa-heart"></i>
        <span>Favorites</span>
      </Link> 
      </div>
      <div className={styles.rsfCreate}>
       <Link to="/create"> 
        <i className="fa fa-plus"></i>
        <span>Create</span>
       </Link> 
      </div>
      <div className={styles.rsfMessages}>
       <Link to="/chats">
        <i className="fa fa-comment"></i>
        <span>Messages</span>
       <Link> 
      </div>
    </footer>
  );
};

export default ResponsiveFooter;