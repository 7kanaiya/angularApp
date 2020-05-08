import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostServices {
  private POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  fetchUserPost() {
    return this.http.get(this.POSTS_ENDPOINT);
  }
}
