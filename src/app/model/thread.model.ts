import { User } from './user.model';
import { Message } from './message.model';

export class Thread {
    constructor(
        public id: number,
        public name: string,
        public messages: Message[],
        public members: User[]
    ) { }
}