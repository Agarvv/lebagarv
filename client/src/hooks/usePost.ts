import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading, setSuccess, setError } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';

// this can be kind of confusing, but dont worry. Its very simple and eficient.
// This hook is ussed when we want to make Post HTTP request to our server
// example: Create a new car, add to favorites, login, or even to reset our password.

// here is a example of use:
/* 
const { mutate } = usePost<DataType>({
  serviceFunc: serviceFunc,
  successFunc: successFunc,
  successMessage: "Check your email!",
  withError: false,
  withLoading: true 
})

mutate(data)
*/ 

interface UsePostOptions {
  serviceFunc: () => Promise,
  successFunc?: () => void, 
  successMessage?: string,
  withError: boolean,
  withLoading: boolean
}

// T meaning the type of the POST data.
export const usePost = <T,>(
  {
    serviceFunc,
    successFunc,
    withSuccess,
    withError,
    withLoading
  }: UsePostOptions 
) => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: (data: T) => serviceFunc(data),
    onMutate: () => {
      if(withLoading) {
        dispatch(setLoading())
      }
    },
    onError: (error: any) => {
      console.error(error);
      if (withError) dispatch(setError(error.response?.data));
    },
    onSuccess: (response: any) => {
      if(successFunc) {
        successFunc()
      } else if(successMessage) {
        dispatch(setSuccess(successMessage))
      } else {
      dispatch(setSuccess("Success."))
      }
      return response;
    },    
  });
};






/* import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading, setSuccess, setError } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';

export const usePost = <T,>(
  successMessage: string,
  withError: boolean,
  serviceFunc: (data: T) => Promise<any>,
  successFunc?: void 
) => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: (data: T) => serviceFunc(data),
    onMutate: () => {
      dispatch(setLoading());
    },
    onError: (error: any) => {
      console.error(error);
      if (withError) dispatch(setError(error.response?.data));
    },
    onSuccess: (response: any) => {
      if (successMessage) {
        dispatch(setSuccess(successMessage)); 
      } else {
        console.log('Post succeeded');
      }
      return response;
    },    
  });
}; */