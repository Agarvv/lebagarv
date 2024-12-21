import React from 'react';

import type { UserContact } from "src/types/chat/UserContact";
import AsideContact from './aside-contact/AsideContact';
import SearchAsideContacts from './search-aside-contacts/SearchAsideContacts';
import AsideGroup from './aside-group/AsideGroup';
import AsideUser from './aside-user/AsideUser';
import styles from './ContactsAside.module.css';
import useContacts from 'src/hooks/useContacts';

const ContactsAside = () => {
    const { data } = useContacts();
    console.log('contacts aside', data);
    
    return (
        <aside className={styles.aside}>
            <div className={styles['aside-h']}>
                <SearchAsideContacts />
            </div>
            <div className={styles.asideContent}>
                {/* Chat Contacts */}
                {data?.chats && data.chats.length > 0 && (
                    <div className={styles['aside-chats']}>
                        <span>Your Chats</span>
                        {data.chats.map((chat) => (
                            <AsideContact key={chat.id} contact={chat} />
                        ))}
                    </div>
                )}

                {/* Group Contacts */}
                { /* {data?.groups && data.groups.length > 0 && (
                    <div className={styles['aside-chats']}>
                        <span>Groups</span>
                        {data.groups.map((group) => (
                            <AsideGroup key={group.id} />
                        ))}
                    </div>
                )} */ }

                {/* Aside Users May Like */}
                {data?.users && data.users.length > 0 && (
                    <div className={styles['aside-chats']}>
                        <span>¡Meet Them!</span>
                        {data.users.map((user) => (
                            <AsideUser key={user.id} user={user} />
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}

export default ContactsAside;
