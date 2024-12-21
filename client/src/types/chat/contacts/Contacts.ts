import { Chat } from '../Chat'
import { Group } from './Group'
import { UserContact } from './UserContact'


export type Contacts = {
    chats: Chat[]
    groups: Group[]
    users: UserContact[]
}