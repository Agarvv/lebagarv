import React, { useEffect } from 'react'
import styles from './ProfilePage.module.css'
import AppLayout from 'src/layout/AppLayout/AppLayout'
import UserProfile from 'src/features/profile/UserProfile'
import useProfile from 'src/hooks/useProfile'


const ProfilePage = () => {
    
    return(
      <>
      { /* <AppLayout> */ }
          <UserProfile/>
      { /* </AppLayout> */ }
      </>
    )
}

export default ProfilePage