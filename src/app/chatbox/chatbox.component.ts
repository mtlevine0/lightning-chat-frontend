import { Component, OnInit } from '@angular/core';

import { Thread } from '../model/thread.model';
import { ThreadService } from '../service/thread.service';

import { Message } from '../model/message.model';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { MOCKUSER } from '../service/mock/user.mock';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  selectedThread: Thread;
  textValue: string = "";

  constructor(public threadService: ThreadService, public userService: UserService) { }

  ngOnInit() {
    this.threadService.selectEmitter.subscribe(
      (thread: Thread) => {
        this.selectedThread = thread;
      }
    );
  }

  addMessage(message: string) {
    console.log("message: " + message);
    this.threadService.addMessage(this.selectedThread, new Message(9, message, MOCKUSER[0]));
    message = "";
  }

}
