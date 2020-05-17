import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iposts } from '../models/posts';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostServices {
  private POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  fetchUserPost(): Observable<Iposts> {
    return this.http.get<Iposts>(this.POSTS_ENDPOINT);
  }
}
