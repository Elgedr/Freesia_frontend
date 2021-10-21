import {Component, OnInit} from '@angular/core';
import {FLIGHTS} from "../../mock-elements/mock-flights";
import {Flight} from "../../models/flight";
import {TestService} from "../../services/test.service";
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
  filteredFlightsList: Flight[] = FLIGHTS

  constructor(private flightService: FlightService) {

  }

  public filterFlights() {
    // this.filteredFlightsList = []
    // for (let flight = 0; flight < this.flights.length; flight++) {
    //   if (this.flights[flight].destination_place == this.selecetdFlightdest) {
    //     this.filteredFlightsList.push(this.flights[flight])
    //   }
    // }
    // this.flightService.testRequest().subscribe((res: Flight) => {
    //   console.log(res)
    // })

  }


  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
    })
  }

}
