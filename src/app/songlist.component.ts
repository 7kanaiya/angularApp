import { Component } from '@angular/core';

@Component({
  selector: 'app-songs',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <app-song [songs]="songs" (data)="addSong($event)"></app-song>
        </div>
      </div>
    </div>
  `,
})
export class SongListComponent {
  public songs = [
    {
      id: 1,
      name: 'Bad Guy',
    },
    {
      id: 2,
      name: 'Old Town',
    },
    {
      id: 3,
      name: 'Senorita',
    },
    {
      id: 4,
      name: "I Don't Care",
    },
  ];
  addSong(data) {
    this.songs.push(data);
  }
}
