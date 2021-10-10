import {Component, OnInit} from '@angular/core';
import {FLIGHTS} from "../mock-elements/mock-flights";
import {Flight} from "../flight";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  preserveWhitespaces: true
})
export class FlightsComponent implements OnInit {
  flights = FLIGHTS;
  selecetdFlightdest: string = "";
  filteredFlightsList: Flight[] = FLIGHTS


  public filterFlights() {
    this.filteredFlightsList = []
    for (let flight = 0; flight < this.flights.length; flight++) {
      if (this.flights[flight].destination_place == this.selecetdFlightdest) {
        this.filteredFlightsList.push(this.flights[flight])
      }
    }
    return this.filteredFlightsList
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
