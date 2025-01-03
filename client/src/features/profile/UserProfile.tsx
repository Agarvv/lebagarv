import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import logo from 'src/logo.svg';
import { useParams } from 'react-router-dom';
import { usePost } from 'src/hooks/usePost';

import ProfileBanner from './profile-banner/ProfileBanner';
import ProfilePicture from './profile-picture/ProfilePicture';
import ProfileUsername from './profile-username/ProfileUsername';
import ProfileBio from './profile-bio/ProfileBio';
import { getUserProfile } from 'src/api/services/profile/ProfileService';
import type { Profile } from 'src/types/profile/Profile';

const UserProfile = () => {
    const [isSelf, setIsSelf] = useState(false);
    const { id } = useParams(); // user id can be a user id or "SELF" meaning the user is viewing their own profile

    useEffect(() => {
        setIsSelf(id === 's');
    }, [id]);

    // Use the correct function for fetching the profile
    const fetchProfile = async () => {
        if (isSelf) {
            console.log('fetching self profile');
            return await getUserProfile();
        } else {
            console.log('fetching other profile');
            return await getUserProfile(Number(id));
        }
    };

    const { data: profile, error } = usePost<Profile>("", true, fetchProfile);

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
                  <ProfileBio isSelf={isSelf} valueToDisplay={profile?.bio}/> 
                    <div className={styles['ud-status']}>
                        <p>Online</p>
                    </div>
                </div>

                <div className={styles['user-actions']}>
                    <div className={styles['us-chat']}>
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className={styles['us-videocall']}>
                        <i className="fa fa-video-camera"></i>
                    </div>
                    <div className={styles['us-call']}>
                        <i className="fa fa-phone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;