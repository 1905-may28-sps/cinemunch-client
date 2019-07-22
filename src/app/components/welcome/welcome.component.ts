import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
alienImg: string;
cinemaImg: string;
oysterImg: string;
movieImg: string;
saladImg: string;
parkImg: string;
salmonImg: string;
  constructor() {

    this.alienImg = './assets/images/alien-movie-photo.jpg';
    this.cinemaImg = './assets/images/cinema.jpg';
    this.oysterImg = './assets/images/oysters.jpg';
    this.movieImg = './assets/images/movie-theater.png';
    this.saladImg = './assets/images/salad.jpg';
    this.parkImg = './assets/images/dark-park.jpg';
    this.salmonImg = './assets/images/salmon.jpg';
   }

  ngOnInit() {
  }

  

}
