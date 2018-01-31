import { Component, OnInit } from '@angular/core';

import { ThreadService } from '../service/thread.service';
import { Thread } from '../model/thread.model';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threadList: Thread[] = [];
  selectedThread: Thread;

  constructor(public threadService: ThreadService) { }

  ngOnInit() {
    this.threadList = this.threadService.getThreads();
    this.selectedThread = this.threadList[0];
    this.onSelectThread(this.selectedThread);
  }

  onSelectThread(thread: Thread) {
    this.selectedThread = thread;
    this.threadService.selectedThread(thread);
  }

}
