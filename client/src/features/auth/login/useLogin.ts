import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig';
import { FormValues } from './types';
import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError, clearMessages } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';
import { useNavigate  } from 'react-router-dom';

const loginUser = async (data: FormValues): Promise<any> => {
  const response = await axiosInstance.post('/auth/login/', data, {
      withCredentials: true 
  });
  return response.data;
};

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch(); 
  return useMutation({
    mutationFn: (data: FormValues) => loginUser(data),
    onMutate: () => {
        dispatch(setLoading()); 
    }, 
    onSuccess: (data: any) => {
      dispatch(clearMessages())
      console.log('Welcome back!:', data); // debug
      // user id will be used if the user enters on his profile page, 
      // if the user page id is equal to out user id, then we will allow the user to make the http request to the server 
      // to change his data.
      // dont worry, even if user changes his user id from the local storage,
      // the server takes only the user id from the jwt.
      localStorage.setItem('userId', data.user_id)
      navigate('/')
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error); // debug
      dispatch(setError('Something went wrong...'))
    },
    onSettled: () => {
   
    }
  });
};
