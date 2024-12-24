import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setError } from 'src/store/apiStatus/apiStatusSlice';
import { Contacts } from 'src/types/chat/contacts/Contacts';

/* 
EXAMPLE OF USE: 
     const { data } = useGet<DataType>(
        serviceFunction,
        successFunction,
        withError: true 
     ) 
*/
const useGet<T> = (
    serviceFunc: () => Promise<any>,
    successFunc?: () => void, 
    withError: boolean
) => {
    const dispatch = useDispatch();

    const { data, error } = useQuery<T>({
        queryKey: ['data'],
        queryFn: serviceFunc,
    });

    data && (successFunc ? successFunc() : console.log('Get Succeded!', data));

    error && withError && dispatch(setError('Something Went Wrong... :c'));

    return { data };
};