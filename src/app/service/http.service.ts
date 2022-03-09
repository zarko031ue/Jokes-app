import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  
  getJokes(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }

  getCategories(){
    return this.http.get('https://api.chucknorris.io/jokes/categories')
  }

  categoryExists(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category={category}')
  }
}
