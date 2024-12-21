import { AppDispatch } from 'src/store/index';
import { useDispatch } from 'react-redux';

import { useMutation } from '@tanstack/react-query';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { setUserProfilePicture } from 'src/api/services/profile/ProfileService';

const useSetProfilePicture = () => {
  const dispatch: AppDispatch = useDispatch();  

  return useMutation({
    mutationFn: (url: string) => setUserProfilePicture(url),
    onSuccess: () => dispatch(setSuccess('Your Profile Picture Has Been Updated!')),
    onError: (error: any) => {
      console.error('failed:', error);
      dispatch(setError('Your Profile picture could not be updated...'));
    },
    onMutate: () => dispatch(setLoading())
  });
};

export default useSetProfilePicture; 