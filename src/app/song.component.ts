import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let song of songs">
          <div class="card text-left" style="margin:10px">
            <div class="card-body">
              <h4 class="card-title">{{ song.id }}</h4>
              <p class="card-text">{{ song.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter ID"
              #id
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              #name
            />
          </div>
          <button
            type="button"
            class="btn btn-danger btn-md"
            (click)="add(id, name)"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  `,
})
export class SongComponent {
  @Input() public songs: any[];
  @Output() data = new EventEmitter();

  add(id, name) {
    this.data.emit({ id: id.value, name: name.value });
  }
}
