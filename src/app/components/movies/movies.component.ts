import { Component, OnInit, Inject } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieAndTimeslotService } from 'src/app/services/movie-and-timeslot.service';
import { movieAndTimeslot } from 'src/app/models/movieAndTimeslot';
import { Router } from '@angular/router';
import { showtimes } from 'src/app/models/showtimes';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
//import { ShowTime } from 'src/app/models/ShowTime';

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
      this.timeslot = data;}
    )
  }
  selectedTimeslot(timeslot : showtimes){
    
    console.log("Selected Timeslot : "+timeslot.showTimeId);
    sessionStorage.setItem("showTimeId", JSON.stringify(timeslot.showTimeId));
     this.router.navigateByUrl('/seats');
  }



}

 
