import { User } from './user.model';

export class Message {
    constructor(
        public id: number,
        public message: string,
        public user: User
    ) { }
}