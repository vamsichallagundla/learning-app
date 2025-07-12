import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

// moviesService = inject(MoviesService);

constructor(private moviesService: MoviesService) {
  
}

  goToMovies(){
    console.log("moviesList");
    this.moviesService.fetchMoviesDataFromApi();
  }
}
