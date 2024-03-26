import { Athlete } from "src/app/main/types/Athlete";

export interface User {
    username: string,
    email: string,
    password: string,
    rePass: string
    // owner: Athlete[];
}

export interface UserForAuth {
    username: string,
    email: string
}