import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading, setSuccess, setError } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';

/* example of use 
const { mutate } = usePost<FormValue>(data, successMessage, true, serviceFunc) 
mutate()
*/
export const usePost = <T,>(
  successMessage: string,
  withError: boolean,
  serviceFunc: (data: T) => Promise<any>
) => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: (data: T) => serviceFunc(data),
    onMutate: () => {
      dispatch(setLoading());
    },
    onError: (error: Error) => {
      console.error(error);
      if (withError) dispatch(setError('Something went wrong...'));
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
};