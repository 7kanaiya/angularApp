import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-laptops',
  template: `
    <button
      type="button"
      class="btn btn-primary btn-lg"
      style="margin:10px"
      (click)="laptop()"
    >
      Laptops
    </button>
  `,
})
export class LaptopsComponent {
  public laptops = [
    {
      imgurl:
        '../assets/Dell-Inspiron-3567-Netbook-Core-SDL253653061-1-435af.jpg',
      devName: 'Dell Inspiron',
      price: 42407,
    },
    {
      imgurl:
        '../assets/Apple_MacBook_Air_MJVE2HN_A_SDL619830203_1_d306c_e0ee51-ea52a.jpg',
      devName: 'Apple MacBook Air',
      price: 145000,
    },
    {
      imgurl:
        '../assets/Dell-Inspiron-Inspiron-5577-Notebook-SDL856461723-1-41cf5.jpg',
      devName: 'Dell Inspiron 5577',
      price: 69990,
    },
    {
      imgurl: '../assets/HP-15-BE002TX-Notebook-6th-SDL875097289-1-422cb.jpg',
      devName: 'HP NOTEBOOK',
      price: 47560,
    },
    {
      imgurl:
        '../assets/HP-Pavilion-15-au624tx-Notebook-SDL721504568-1-f8a6e.jpg',
      devName: 'HP Pavilion',
      price: 61000,
    },
    {
      imgurl: '../assets/1-ce3ef.jpg',
      devName: 'ACER Aspire',
      price: 34499,
    },
  ];
  @Output() data = new EventEmitter();

  laptop() {
    this.data.emit(this.laptops);
  }
}
