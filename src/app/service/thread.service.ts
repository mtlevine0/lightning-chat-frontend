import { Output, EventEmitter } from '@angular/core';

import { Thread } from '../model/thread.model';
import { MOCKTHREAD } from './mock/thread.mock';

import { Message } from '../model/message.model';

export class ThreadService {
    @Output()
    public selectEmitter: EventEmitter<Thread> = new EventEmitter<Thread>();

    getThreads(): Thread[] {
        return MOCKTHREAD.slice();
    }

    addThread(thread: Thread) {
        MOCKTHREAD.push(thread);
    }

    addMessage(thread: Thread, message: Message) {
        MOCKTHREAD[thread.id].messages.push(message);
    }

    selectedThread(thread: Thread) {
        this.selectEmitter.emit(thread);
        console.log(thread);
    }

}