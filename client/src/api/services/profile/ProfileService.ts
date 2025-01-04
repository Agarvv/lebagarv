import axiosInstance from 'src/config/axiosConfig';
import { Profile } from 'src/types/profile/Profile';

export const getUserProfile = async (userId?: any) : Promise<Profile> => {
    console.log('GETTING PROFILE', userId)
    const response = await axiosInstance.get
    (userId ? `/profile/${userId}` : '/profile', { withCredentials: true });
    return response.data;
};

export const setUserProfilePicture = async (url: string) => {
    console.log('SETTING PROFILE PIC', url)
    const response = await axiosInstance.post(
      '/profile/set-profile-picture', 
      { profilePicture: url }, 
      { withCredentials: true }
    );
    return response.data;
};

export const setUserProfileBio = async (bio: string)=> {
    console.log('SETTING PROFILE Bio', bio)
    const response = await axiosInstance.post(
      '/users/update_bio/', 
      { bio }, 
      { withCredentials: true }
    );
    return response.data;
};

export const setUserProfileBanner = async (url: string) => {
    console.log('SETTING PROFILE banner', url)
    const response = await axiosInstance.post(
      '/profile/set-banner', 
      { banner: url }, 
      { withCredentials: true }
    );
    return response.data;
};