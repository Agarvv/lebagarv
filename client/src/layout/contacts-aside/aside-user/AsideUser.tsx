import React from 'react';
import sharedContactStyles from '../aside-contact/AsideContact.module.css';
import logo from 'src/logo.svg';
import useNewChat from 'src/hooks/useNewChat';
import { UserContact } from 'src/types/chat/contacts/UserContact'

interface Props {
    user: UserContact
}

const AsideUser: React.FC<Props> = ({ user }) => {

    const { mutate } = useNewChat({ userId: user?.id });

    const handleCreateChat = () => {
        mutate({ userId: user?.id }); 
    };

    return (
        <div onClick={handleCreateChat} className={`${sharedContactStyles.user} ${sharedContactStyles['aside-chat']}`}>
            <div className={sharedContactStyles['ac-user']}>
                <img src={logo} alt="ñ" />
                <div className={sharedContactStyles['ac-content']}>
                    <h4>Elver Galarga</h4>
                    <p>{ user?.username }</p>  
                </div>
            </div>
        </div>
    );
};

export default AsideUser;