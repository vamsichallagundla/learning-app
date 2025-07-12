import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  fetchMoviesDataFromApi(){
    console.log("moviesList");
    // code to request from backend
  }
}
