import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    
  crawlImg: string;
  spidermanImg: string;
  toystoryImg: string;

  movies: Movies[];
  constructor (private _moviesService: MoviesService){

  this.crawlImg = './assets/images/crawl.jpg';
  this.spidermanImg = './assets/images/spiderman.jpg';
  this.toystoryImg = './assets/images/toystory.jpg';

  }

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
