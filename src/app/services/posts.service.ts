import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = environment.urlposts;

  constructor(private http: HttpClient) { }

  getPosts(){

    return this.http.get(this.baseUrl);
  }

  getPost(id: number){
    return this.http.get(this.baseUrl +id);
  }



  addPost(author_id: number, post:any){
    return this.http.post(this.baseUrl, post);
  }
}
