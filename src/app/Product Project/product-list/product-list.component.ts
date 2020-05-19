import { Component, OnInit, Input } from '@angular/core';
import { PostServices } from '../../services/post.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products;
  @Input() public value;
  constructor(private PostServices: PostServices) {}

  ngOnInit(): void {
    this.PostServices.fetchProduct().subscribe((data) => {
      this.products = data;
    });
  }
}
