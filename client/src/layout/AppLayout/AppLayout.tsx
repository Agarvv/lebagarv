import React from 'react';
import Header from 'src/layout/header/Header';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode,
  footer: boolean 
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, footer }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header /> 
         <main>{children}</main>
      
    </div>
  );
};

export default AppLayout;