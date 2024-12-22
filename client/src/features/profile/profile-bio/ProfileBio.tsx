import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBio.module.css';
import useSetBio from 'src/hooks/useSetBio'


const ProfileBio: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
  const { mutate } = useSetBio() 
  
  const handleBioChange = async () => {
      // some kind of basic modal
    const bio = prompt('Enter your new bio');
    if (bio !== null) { 
       mutate(bio)
      window.location.reload()
    } else {
        alert('Please Provide a BIO.')
    }
  };

  return (
    <>
      <div onClick={handleBioChange} className={styles['ud-bio']}>
       <p>{valueToDisplay ? valueToDisplay : 'BIO not provided'}</p>
      </div>
    </>
  );
};

export default ProfileBio;