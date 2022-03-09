import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private URL = 'https://api.chucknorris.io/jokes/'
  
  constructor(private http: HttpClient) {}

  
  getJokes(){
    return this.http.get(this.URL + 'random')
  }

  getCategories(){
    return this.http.get( this.URL + 'categories')
  }

  categoryExists(category: string){
    return this.http.get(this.URL + `random?category=${category}`)
  }
}
