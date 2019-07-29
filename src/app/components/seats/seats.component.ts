import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SeatsService } from 'src/app/services/seats.service';
import { Seats } from 'src/app/models/seats';
//import { ShowTime } from 'src/app/models/ShowTime';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

constructor(private seatsService : SeatsService, private router: Router) { }

showTimeId = sessionStorage.getItem("showTimeId");

seats: Seats[] = [];
seat: Seats = new Seats();

private seatConfig: any = null;
private seatmap = [];
  
  private seatChartConfig = {
    showRowsLabel : false,
    showRowWisePricing : false,
    newSeatNoForRow : false
  }
  
  private cart = {
    selectedSeats : [],
    seatstoStore : [],
    totalamount : 0,
    cartId : "",
    eventId : 0
  };
  

  // title = 'seat-chart-generator';


 

  //   ngOnInit() {
  //     this.getSeats();
  //   }
  
       
    ngOnInit(): void {
    this.getSeats();
    this.seatConfig = [
  
  
      {
        "seat_price": 18.50,
        "seat_map": [
          {
            "seat_label": this.seats,
            "layout": "gg__gg__gg"
          },
          {
            "seat_label": this.seats,
            "layout": "gg__gg__gg"
          },
          {
            "seat_label": this.seats,
            "layout": "gg__gg__gg"
          },
          {
            "seat_label": this.seats,
            "layout": "gg__gg__gg"
          }
          
        ]
      }
    ]    
  
    this.processSeatChart(this.seatConfig)
    // this.processSeatChart(this.seats);
  }

  public processSeatChart ( map_data : any[] )
  {
      if( map_data.length > 0 )
      {
        var seatNoCounter = 1;
        for (let __counter = 0; __counter < map_data.length; __counter++) {
          var row_label = "";
          var item_map = map_data[__counter].seat_map;

          //Get the label name and price
          row_label = "Row "+item_map[0].seat_label + " - ";
          if( item_map[ item_map.length - 1].seat_label != " " )
          {
            row_label += item_map[ item_map.length - 1].seatsmovie;
          }
          else
          {
            row_label += item_map[ item_map.length - 2].seatsmovie;
          }
          row_label += " : Dollars. " + map_data[__counter].seat_price;
          
          item_map.forEach(map_element => {
            var mapObj = {
              "seatRowLabel" : map_element.seatsmovie,
              "seats" : [],
              "seatPricingInformation" : row_label
            };
            row_label = "";
            var seatValArr = map_element.layout.split('');
            if( this.seatChartConfig.newSeatNoForRow )
            {
              seatNoCounter = 1; //Reset the seat label counter for new row
            }
            var totalItemCounter = 1;
            seatValArr.forEach(item => {
              var seatObj = {
                "key" : this.seats,
                // "key" : map_element.seat_label+"_"+totalItemCounter,
                "price" : map_data[__counter]["seat_price"],
                "status" : "available"
                
              };
               
              if( item != '_')
              {
                seatObj["seatLabel"] = map_element.seat_label+" "+seatNoCounter;
                if(seatNoCounter < 10)
                { seatObj["seatNo"] = ""+seatNoCounter; }
                else { seatObj["seatNo"] = ""+seatNoCounter; }
                
                seatNoCounter++;
              }
              else
              {
                seatObj["seatLabel"] = "";
              }
              totalItemCounter++;
              mapObj["seats"].push(seatObj);
            });
            console.log(" \n\n\n Seat Objects " , mapObj);
            this.seatmap.push( mapObj );

          });
        }

        
        
      }
  }

   public getSeats(){
    this.seatsService.getAllSeats().subscribe(
      seatsmovie => {
        console.log(seatsmovie);
        this.seats = seatsmovie;
        console.log(seatsmovie[0].seatId);
        console.log(this.seats);
        
      },
      error => console.log('something bad happened')
    );

    }
  
  
  
    selectSeat( seatObject : any )
  {
    console.log( "Seat to block: " , seatObject );
    console.log("Selected Seat");
    
    sessionStorage.setItem("seatNo", JSON.stringify(seatObject.seatNo));

    if(seatObject.status == "available")
    {
      seatObject.status = "booked";
      this.cart.selectedSeats.push(seatObject.seatLabel);
      this.cart.seatstoStore.push(seatObject.key);
      this.cart.totalamount += seatObject.price;
    }
    else if( seatObject.status = "booked" )
    {
      seatObject.status = "available";
      var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
      if( seatIndex > -1)
      {
        this.cart.selectedSeats.splice(seatIndex , 1);
        this.cart.seatstoStore.splice(seatIndex , 1);
        this.cart.totalamount -= seatObject.price;
        }
      }
      console.log("Total Amount: " + this.cart.totalamount);
      sessionStorage.setItem("totalamount", JSON.stringify(this.cart.totalamount));
        
  }

 blockSeats(seatsToBlock : string)
  {
    if(seatsToBlock != "")
    {
      var seatsToBlockArr = seatsToBlock.split(',');
      for (let index = 0; index < seatsToBlockArr.length; index++) {
        var seat =  seatsToBlockArr[index]+"";
        var seatSplitArr = seat.split("_");
        console.log("Split seat: " , seatSplitArr);
        for (let index2 = 0; index2 < this.seatmap.length; index2++) {
          const element = this.seatmap[index2];
          if(element.seatRowLabel == seatSplitArr[0])
          {
            var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
            if(seatObj)
            {
              console.log("\n\n\nFount Seat to block: " , seatObj);
              seatObj["status"] = "unavailable";
              this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1] = seatObj;
              console.log("\n\n\nSeat Obj" , seatObj);
              console.log(this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]);
              break;
            }
             
          }
        }
       
      }
    }
    
  }


processBooking(){
  console.log("processing Booking");
  this.router.navigateByUrl('/menu');
  console.log("Succesfully navigating to Menu")

}
}