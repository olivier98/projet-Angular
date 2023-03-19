import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  baseUrl = environment.urlauthors;

  constructor(private htpp: HttpClient) { }

  getAuthor()
  {
    return this.htpp.get(this.baseUrl);
  }
}
