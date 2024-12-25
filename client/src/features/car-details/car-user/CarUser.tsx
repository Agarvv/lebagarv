import React from 'react';
import styles from './CallUser.module.css';

import logo from 'src/logo.svg'

const CallUser: React.FC = () => {
  return (
    <div className={styles.mainProductDetails}>
      <div className={styles.carUser}>
        <div className={styles.carUserDetails}>
          <img
            src={logo}
            className={styles.userImage}
          />
          <p className={styles.cudUsername}>Sidney Prescott</p>
        </div>
      </div>
      <div className={styles.pCar}>
        <div className={styles.pCarButtons}>
          <div className={styles.pChat}>
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUser;