import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = environment.urlposts;

  constructor(private http: HttpClient) { }
}
