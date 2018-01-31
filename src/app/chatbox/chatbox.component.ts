import { Component, OnInit } from '@angular/core';

import { Thread } from '../model/thread.model';
import { ThreadService } from '../service/thread.service';

import { Message } from '../model/message.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  selectedThread: Thread;

  constructor(public threadService: ThreadService) { }

  ngOnInit() {
    this.threadService.selectEmitter.subscribe(
      (thread: Thread) => {
        this.selectedThread = thread;
      }
    );
  }

  addMessage(message: string) {
    this.threadService.addMessage(this.selectedThread, new Message(9, message, null));
    console.log(message);
  }

}
