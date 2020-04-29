import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  template: `
    <button
      type="button"
      class="btn btn-primary btn-lg"
      style="margin:10px"
      (click)="kitchen()"
    >
      Kitchen
    </button>
  `,
})
export class KitchenComponent {
  public kitchens = [
    {
      imgurl: '../assets/1721498-3616f.jpg',
      productName: 'Bajaj GX3',
      price: 3135,
    },
    {
      imgurl: '../assets/Bajaj-FX-11-Food-Processor-1721454-1-61069.jpg',
      productName: 'Bajaj FX 11',
      price: 5698,
    },
    {
      imgurl: '../assets/Digital-TDS-Meter-for-Water-SDL875364625-1-35680.jpg',
      productName: 'Digital TDS',
      price: 209,
    },
    {
      imgurl:
        '../assets/Kingstar-electric-coconut-scraper-Chopper-SDL443202288-1-af922.jpeg',
      productName: 'Kingstar Electric',
      price: 2058,
    },
    {
      imgurl:
        '../assets/Prestige-Ace-food-processor-01-SDL649988567-1-19b49.jpg',
      productName: 'Prestige Ace',
      price: 6988,
    },
    {
      imgurl: '../assets/Prestige-NA-18-Ltr-Gravity-SDL678101845-1-38c9f.jpg',
      productName: 'Prestige NA',
      price: 2500,
    },
  ];
  @Output() data = new EventEmitter();
  kitchen() {
    this.data.emit(this.kitchens);
  }
}
