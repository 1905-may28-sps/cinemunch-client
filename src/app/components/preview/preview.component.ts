import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  differentRoute(){
    this.router.navigateByUrl('/welcome')
  }
  

}