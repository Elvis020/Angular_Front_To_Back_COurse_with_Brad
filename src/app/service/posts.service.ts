import { Post } from './../posts/post';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'appllication/json',})
};

@Injectable({
  providedIn: 'root'
})


export class PostsService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  savePost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/ ${id}`;
    return this.http.get<Post>(url);

  }

}
