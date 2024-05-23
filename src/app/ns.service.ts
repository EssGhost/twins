import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor(private http : HttpClient) { }

  pokeApi(){
  return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }

  movieApi(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=7f136312717cbe55eedd3faafe392b27');
  }
}
