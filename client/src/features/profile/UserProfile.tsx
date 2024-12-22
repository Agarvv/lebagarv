import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import logo from 'src/logo.svg';
import Profile from 'src/features/profile/UserProfile';
import { useParams } from 'react-router-dom';
import useProfile from 'src/hooks/useProfile';

import ProfileBanner from './profile-banner/ProfileBanner'
import ProfilePicture from './profile-picture/ProfilePicture'
import ProfileUsername from './profile-username/ProfileUsername'
import ProfileBio from './profile-bio/ProfileBio'


const UserProfile = () => {
    // is self user boolean 
    const [isSelf, setIsSelf] = useState(false)
    
    const { id } = useParams();
    const { profile } = useProfile({ id: Number(id) });
    
    // setIsSelf(id == localStorage.getItem('userId') ? true : false)

     

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