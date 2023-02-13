export interface UserConversationSession {
    id:             string;
    user1_id:       string;
    user2_id:       string;
    usersASusersU1: UsersASusersU;
    usersASusersU2: UsersASusersU;
}

export interface UsersASusersU {
    name: string;
}
