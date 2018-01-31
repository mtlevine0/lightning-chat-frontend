import { Message } from '../../model/message.model';
import { MOCKUSER } from './user.mock';

export var MOCKMESSAGE: Message[] = [
    new Message(0, "Message 0", MOCKUSER[0]),
    new Message(1, "Message 1", MOCKUSER[1]),
    new Message(2, "Message 2", MOCKUSER[0]),
    new Message(3, "Message 3", MOCKUSER[3]),
    new Message(4, "Message 4", MOCKUSER[4]),
    new Message(5, "Message 5", MOCKUSER[5]),
    new Message(6, "Message 6", MOCKUSER[6])
];
