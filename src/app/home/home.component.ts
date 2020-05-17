import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';
import { PostServices } from '../services/post.services';
import { Iposts } from '../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts: Iposts;
  public loader: boolean = true;
  constructor(private postServices: PostServices) {}

  ngOnInit(): void {
    let search = document.getElementById('search');
    let observable = fromEvent(search, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text) => text.length >= 4),
      debounceTime(2000)
    );

    observable.subscribe((data) => {
      console.log(data);
    });

    this.postServices.fetchUserPost().subscribe((data) => {
      setTimeout(() => {
        this.loader = false;
        this.posts = data;
      }, 2000);

      // console.log(data);
    });
  }
}
