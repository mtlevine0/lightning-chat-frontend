import { Thread } from '../../model/thread.model';
import { MOCKUSER } from './user.mock';
import { MOCKMESSAGE } from './message.mock';

export var MOCKTHREAD: Thread[] = [
    new Thread(0, "MN", [MOCKMESSAGE[0],MOCKMESSAGE[1],MOCKMESSAGE[2]], [MOCKUSER[0],MOCKUSER[1]]),
    new Thread(1, "HMC", [MOCKMESSAGE[3],MOCKMESSAGE[4]], [MOCKUSER[2],MOCKUSER[0],MOCKUSER[4]]),
    new Thread(2, "DMC", [MOCKMESSAGE[5]], [MOCKUSER[5],MOCKUSER[0],MOCKUSER[4]]),
    new Thread(3, "Teleglorp", [MOCKMESSAGE[6]], [MOCKUSER[3],MOCKUSER[0],MOCKUSER[4]])
];