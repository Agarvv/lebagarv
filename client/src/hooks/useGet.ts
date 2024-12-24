import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setError } from 'src/store/apiStatus/apiStatusSlice';
import { Contacts } from 'src/types/chat/contacts/Contacts';

interface UseGetOptions<T> {
    serviceFunc: () => Promise<T>;
    successFunc?: () => void;
    withError: boolean;
}

export const useGet = <T>({ serviceFunc, successFunc, withError }: UseGetOptions<T>) => {
    const dispatch = useDispatch();

    const { data, error } = useQuery<T>({
        queryKey: ['data'],
        queryFn: serviceFunc,
    });

    if (data) {
        successFunc ? successFunc() : console.log('Get Succeeded!', data);
    }

    if (error && withError) {
        dispatch(setError('Something Went Wrong... :c'));
    }

    return { data };
};