import { Component, OnInit } from '@angular/core';

import { Thread } from '../model/thread.model';
import { ThreadService } from '../service/thread.service';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-thread-display',
  templateUrl: './thread-display.component.html',
  styleUrls: ['./thread-display.component.css']
})
export class ThreadDisplayComponent implements OnInit {
  selectedThread: Thread;
  user: User;

  constructor(public threadService: ThreadService, public userService: UserService) {
    this.threadService.selectEmitter.subscribe(
      (thread: Thread) => {
        this.selectedThread = thread;
      }
    );
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }

}
