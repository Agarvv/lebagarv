import React from 'react';
import styles from './CarUser.module.css';
import { CarOwner } from 'src/types/cars/CarOwner'
import logo from 'src/logo.svg'

import CarUserChatButton  from './car-user-chat-button/CarUserChatButton'

interface Props {
    user?: CarOwner
    carId?: number 
}

const CarUser: React.FC<Props> = ({ user, carId }: Props) => {
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
          <CarUserChatButton 
            userId={user?.id}
            carId={carId ?? 0}
          /> 
        </div>
      </div>
    </div>
  );
};

export default CarUser;