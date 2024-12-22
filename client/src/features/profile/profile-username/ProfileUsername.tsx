import React, { useState } from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileUsername.module.css';

const ProfileUsername: React.FC<isSelfProps> = ({ valueToDisplay }) => {

  return (
    <>
      <div className={styles['ud-username']}>
       <p>{ valueToDisplay }</p>
      </div>
    </>
  );
};

export default ProfileUsername;