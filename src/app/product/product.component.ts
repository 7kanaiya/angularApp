import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public linkId;
  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data) => {
      let id = data['id'];
      this.linkId = id;
    });
  }
  Back() {
    this.router.navigateByUrl('/products');
  }
}
