import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { List } from './list';
import { userComponent } from './user.component';
import { GenderComponent } from './gender.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SongListComponent } from './songlist.component';
import { SongComponent } from './song.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    userComponent,
    GenderComponent,
    ParentComponent,
    ChildComponent,
    SongListComponent,
    SongComponent,
  ],
  imports: [BrowserModule],
  providers: [List],
  bootstrap: [AppComponent],
})
export class AppModule {}
