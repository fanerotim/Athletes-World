import { User } from "src/app/user/types/User";

export interface Athlete {
    _id: string;
    name: string,
    age: string,
    country: string,
    achievements: string,
    records: string,
    imgUrl: string,
    owner: User;
}