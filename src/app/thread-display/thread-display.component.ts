import { Component, OnInit } from '@angular/core';

import { Thread } from '../model/thread.model';
import { ThreadService } from '../service/thread.service';


@Component({
  selector: 'app-thread-display',
  templateUrl: './thread-display.component.html',
  styleUrls: ['./thread-display.component.css']
})
export class ThreadDisplayComponent implements OnInit {
  selectedThread: Thread;

  constructor(public threadService: ThreadService) {
    this.threadService.selectEmitter.subscribe(
      (thread: Thread) => {
        this.selectedThread = thread;
      }
    );
  }

  ngOnInit() {
  }

}
