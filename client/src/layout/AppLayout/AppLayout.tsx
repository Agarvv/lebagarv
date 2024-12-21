import React from 'react';
import Header from 'src/layout/header/Header';
import ContactsAside from 'src/layout/contacts-aside/ContactsAside';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header /> 
      <div className={styles.layoutContent}>
        <div className={styles.layoutAside}>
          <ContactsAside /> 
        </div> 
        <div className={styles.layoutMain}>
          <main>{children}</main>
        </div> 
      </div>
    </div>
  );
};

export default AppLayout;