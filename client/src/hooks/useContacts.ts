import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setContacts } from 'src/store/chat/chatSlice';
import { AppDispatch } from 'src/store/index';
import { getUserContacts } from 'src/api/services/chat/ChatService';
import { setError } from 'src/store/apiStatus/apiStatusSlice';
import { Contacts } from 'src/types/chat/contacts/Contacts';

const useContacts = () => {
    const dispatch: AppDispatch = useDispatch();

    const { data, error } = useQuery<Contacts>({
        queryKey: ['contacts'],
        queryFn: getUserContacts,
    });

    if (data) {
        console.log('User contacts', data);
        dispatch(setContacts(data));
    }

    if (error) {
        console.error('Oops', error);
        dispatch(setError('Something went wrong while loading your contacts'));
    }

    return { data, error };
};

export default useContacts;
