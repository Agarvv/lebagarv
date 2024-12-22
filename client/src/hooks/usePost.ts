import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError, clearMessages } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';


export function usePost<T, R>() {
  const dispatch: AppDispatch = useDispatch();

  const mutation: UseMutationResult<R, Error, T> = useMutation({
    mutationFn: async (data: T) => {
      dispatch(setLoading());
      return await service(data); 
    },
    onSuccess: (response, variables) => {
      withSuccess
        ? dispatch(setSuccess(withSuccess))
        : console.log("Operation succeeded");
    },
    onError: (error) => {
      withError
        ? dispatch(setError("Something went wrong..."))
        : console.error("Operation failed", error);
    },
  });

  return mutation; 
}