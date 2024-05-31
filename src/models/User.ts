export interface createUser {
    email: string;
    password: string;
}

export interface UserList extends createUser {
    dateCreated: any
}