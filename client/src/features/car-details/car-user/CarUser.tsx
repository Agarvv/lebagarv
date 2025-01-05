import React from 'react';
import styles from './CarUser.module.css';
import { CarOwner } from 'src/types/cars/CarOwner'
import logo from 'src/logo.svg'

interface Props {
    user?: CarOwner
}

const CallUser: React.FC = () => {
  return (
    <div className={styles.mainProductDetails}>
      <div className={styles.carUser}>
        <div className={styles.carUserDetails}>
          <img
            src={user?.profilePicture ?? logo}
            className={styles.userImage}
          />
          <p className={styles.cudUsername}>{user?.username ?? 'Someone'}</p>
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