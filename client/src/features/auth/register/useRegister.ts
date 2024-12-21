import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { FormValues } from './types';

import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError, clearMessages } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';
import { useNavigate } from 'react-router-dom';

const registerUser = async (data: FormValues): Promise<any> => {
  const response = await axiosInstance.post('/auth/register/', data);
  return response.data;
};

export const useRegister = () => {
  const navigate = useNavigate();  
  const dispatch: AppDispatch = useDispatch(); 
  return useMutation({
    mutationFn: (data: FormValues) => registerUser(data),
    onMutate: () => {
      dispatch(setLoading()); 
    },
    onSuccess: (data: any) => {
      console.log('Welcome!:', data); // debug
      dispatch(clearMessages()) // if ok clear messages
      navigate('/login')
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error); // debug
      dispatch(setError('Something Went Wrong...'));  
    },
    onSettled: () => {
      
    }
  });
};