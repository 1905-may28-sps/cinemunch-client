import { Component, OnInit } from '@angular/core';
import {Movies} from './movies';
import { MoviesService } from './movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    
  movies: Movies[];
  constructor (private _moviesService: MoviesService){}

  ngOnInit(): void{
    this.getMovies();
  }

  //Add @ CrossOrigin("*") in MoviesController in eclipse.
  //Cross Origin enables our server to access data from Angular.
  //Stop the server and restart it.
  getMovies(): void{
    this._moviesService.getAllMovies()
        .subscribe((movieData) => {this.movies = movieData,
        console.log(movieData)
        }, (error) => {
          console.log(error);
      });
  }
}
