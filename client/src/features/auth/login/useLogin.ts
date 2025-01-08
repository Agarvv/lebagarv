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
      console.log('Welcome back!:', data);
      
      // i need this for frontend stuff.
      localStorage.setItem('userId', data.id)
     // navigate('/')
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error); // debug
      dispatch(setError('Something went wrong...'))
    },
    onSettled: () => {
   
    }
  });
};
