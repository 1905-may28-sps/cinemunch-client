import { Component, OnInit, Inject } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieAndTimeslotService } from 'src/app/services/movie-and-timeslot.service';
import { movieAndTimeslot } from 'src/app/models/movieAndTimeslot';
import { Router } from '@angular/router';
import { showtimes } from 'src/app/models/showtimes';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    
  crawlImg: string;
  spidermanImg: string;
  toystoryImg: string;
  timeslot: movieAndTimeslot = new movieAndTimeslot();

  movies: Movies[];

  selectedMovieName="Movie Name for Selected Movie";
  selectedMoviePrice="Ticket Price to See Selected Movie";
  selectedMovieDate="Date and Time of Selected Movie Showing";

  constructor (private _moviesService: MoviesService, private _timeslotService: MovieAndTimeslotService, private router: Router){

  this.crawlImg = './assets/images/crawl.jpg';
  this.spidermanImg = './assets/images/spiderman1.jpg';
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

  getShowtimes(id: number){
    this._timeslotService.getShowTimeByMovie(id).subscribe(
      data => {console.log(data);
      this.timeslot = data;
      console.log(data);
    
    }
    );
  }
  selectedTimeslot(timeslot : showtimes){
    
    console.log("Selected Timeslot : "+ timeslot.showTimeId);
    sessionStorage.setItem("showTimeId", String(timeslot.showTimeId));
    sessionStorage.setItem("movie id", String(timeslot.movie.movieid));
    sessionStorage.setItem("movieName", String(timeslot.movie.movieName));
    sessionStorage.setItem("ticketPrice", String(timeslot.movie.ticketPrice));
    sessionStorage.setItem("showDate", String(timeslot.showDate));
    this.router.navigateByUrl('/seats');
  }

}

 
