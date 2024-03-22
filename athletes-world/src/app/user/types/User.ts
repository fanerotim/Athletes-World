export interface User {
    username: string,
    email: string,
    password: string,
    rePass: string
}

export interface UserForAuth {
    username: string,
    email: string
}