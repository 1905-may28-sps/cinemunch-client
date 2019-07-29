import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {

  timeObject: ShowtimesService = new ShowtimesService();

  constructor() { }

  // getShowTimeById(showTimeId: number){
  //   this.timeObject.getShowTimeById(showTimeId).subscribe(
  //     resp => {
  //       if(resp != null){
  //         this.timeObject = resp;
  //         console.log(this.timeObject)
  //       }
  //       else{
  //         console.log('Error loading');
  //       }
  //     }
  //   );
  // }

}
