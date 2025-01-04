import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import logo from 'src/logo.svg';
import { useParams } from 'react-router-dom';
import { useGet } from 'src/hooks/useGet';
import ProfileBanner from './profile-banner/ProfileBanner';
import ProfilePicture from './profile-picture/ProfilePicture';
import ProfileUsername from './profile-username/ProfileUsername';
import { getUserProfile } from 'src/api/services/profile/ProfileService';
import type { Profile } from 'src/types/profile/Profile';
import Cars from 'src/layout/cars/Cars';

const UserProfile = () => {
    const [isSelf, setIsSelf] = useState(false);
    const { id } = useParams(); // user id can be a user id or "SELF" meaning the user is viewing their own profile

    useEffect(() => {
        setIsSelf(id == 's');
        console.log('isSelf data', isSelf)
    }, [id]);

    // Use the correct function for fetching the profile
    const fetchProfile = async () => {
        if (isSelf) {
            console.log('fetching self profile');
            return await getUserProfile('s');
        } else {
            console.log('fetching other profile');
            return await getUserProfile(Number(id));
        }
    };

    const { data: profile } = useGet<Profile>({ serviceFunc: fetchProfile, withError: true});

    return (
        <div className={styles.user}>
            <div className={styles['user-banner']}>
                <ProfileBanner isSelf={isSelf} valueToDisplay={profile?.banner}/> 
                <div className={styles['user-img']}>
                    <ProfilePicture isSelf={isSelf} valueToDisplay={profile?.profilePicture}/>
                </div>
            </div>

            <div className={styles['user-details']}>
                <div className={styles['user-data']}>
                  <ProfileUsername isSelf={isSelf} valueToDisplay={profile?.username} />  
                </div>
            </div>

            <Cars cars={profile?.cars}/>
        </div>
    );
};

export default UserProfile;