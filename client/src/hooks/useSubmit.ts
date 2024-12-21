// this custom hook handles all the stuff with HTTP-requests with forms.
import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';

interface Props {
  url: string; // URL for the API request
  successMessage: string; // Custom success message
  errorMessage: string; // Custom error message
}

const useSubmit = ({ url, successMessage, errorMessage }: Props) => {
  const dispatch: AppDispatch = useDispatch()

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axiosInstance.post(url, data);
      return response.data;
    },
    onMutate() {
      dispatch(setLoading());
    },
    onSuccess() {
      dispatch(setSuccess(successMessage));
    },
    onError(error: unknown) {
      const errorMsg = error instanceof Error ? error.message : errorMessage;
      dispatch(setError(errorMsg));
    },
  });
};

export default useSubmit;