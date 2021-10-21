import {Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {FlightService} from "../../services/flight.service";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  preserveWhitespaces: true
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  selecetdFlightdest: string = "";
  filteredFlightsList: Flight[] = []

  constructor(private flightService: FlightService) {

  }

  public filterFlights() {
    this.filteredFlightsList = []
    for (let flight = 0; flight < this.flights.length; flight++) {
      if (this.flights[flight].destinationPlace == this.selecetdFlightdest) {
        this.filteredFlightsList.push(this.flights[flight])
      }
    }
    // this.flightService.testRequest().subscribe((res: Flight) => {
    //   console.log(res)
    // })

  }


  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
      this.filteredFlightsList = res;
    })
    console.log(this.flights)
  }

}
