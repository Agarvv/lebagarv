import { useQuery } from '@tanstack/react-query';
import { Profile } from 'src/types/profile/Profile';
import { getUserProfile, setUserProfilePicture, setUserProfileBio, setUserProfileBanner } from 'src/api/services/profile/ProfileService';
import { useDispatch } from 'react-redux';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';

interface Props {
    id: number
}

const useProfile = ({ id }: Props) => {
   const dispatch: AppDispatch = useDispatch();
   
   const { data, error } = useQuery<Profile>({
      queryKey: ['profile', id],
      queryFn: () => getUserProfile(id),
   });

   if (data) {
      console.log('user profile', data);
   }

   if (error) {
      dispatch(setError("Something went wrong while fetching user profile..."));
   }

  
   return { profile: data };
}

export default useProfile;