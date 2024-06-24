export interface createUser {
    id?: number;
    username: string;
    email: string;
    password: string;
    isArtist: string;
}

export interface UserList extends createUser {
    dateCreated: any
}