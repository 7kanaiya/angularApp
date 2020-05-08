import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productData = [
    { id: 1, name: 'Pizza', price: '400' },
    { id: 2, name: 'Burger', price: '60' },
    { id: 3, name: 'Sandwich', price: '80' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
