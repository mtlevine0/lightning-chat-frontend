import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

import { ThreadService } from './service/thread.service';
import { ThreadDisplayComponent } from './thread-display/thread-display.component';
import { ChatboxComponent } from './chatbox/chatbox.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    ThreadDisplayComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
