import { Component } from '@angular/core';
@Component({
  selector: 'app-search',
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="{{ placeholder }}"
            [(ngModel)]="searchAlbum"
          />
          {{ searchAlbum }}
        </div>
      </div>
    </div>
    <app-albums [data]="searchAlbum"></app-albums>
  `,
})
export class SearchComponent {
  public placeholder: string = 'Search here';
  public searchAlbum: string;
}
