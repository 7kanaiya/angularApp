import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile',
  template: `
    <button
      type="button"
      class="btn btn-primary btn-lg"
      style="margin:10px"
      (click)="mobile()"
    >
      Mobiles
    </button>
  `,
})
export class MobileComponent {
  public mobiles = [
    {
      imgurl: '../assets/APPLE-8-MQ6K2HN-A-64GB-SDL504053530-1-07faa.jpeg',
      devName: 'Apple 8',
      price: 28600,
    },
    {
      imgurl: '../assets/Apple-iPhone-6s-32GB-Space-SDL744303941-1-35c0c.webp',
      devName: 'Apple iPhone 6s',
      price: 26399,
    },
    {
      imgurl: '../assets/Apple-iPhone-7-32GB-Black-SDL820775791-1-93e75.webp',
      devName: 'Apple iPhone 7',
      price: 40000,
    },
    {
      imgurl: '../assets/MI-A2-4GB-RAM-64GB-SDL522880167-1-dce81.jpeg',
      devName: 'MI A2',
      price: 12000,
    },
    {
      imgurl:
        '../assets/Micromax-Blue-Lagoon-N12-32GB-SDL929615552-2-a0417.webp',
      devName: 'Micromax Blue Lagoon',
      price: 14000,
    },
    {
      imgurl: '../assets/Samsung-Galaxy-J2-8GB-SDL394918103-1-9e290.webp',
      devName: 'Samsung Galaxy J2',
      price: 20000,
    },
    {
      imgurl:
        '../assets/ZIOX-Champagne-Astra-Star-8GB-SDL437236700-1-980fa.webp',
      devName: 'ZIOX Chamapgne Astra',
      price: 10000,
    },
  ];
  @Output() data = new EventEmitter();

  mobile() {
    this.data.emit(this.mobiles);
  }
}
