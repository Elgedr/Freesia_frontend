import {Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {FlightService} from "../../services/flight.service";
import {TabService} from "../../services/tab.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AppComponent} from "../../app.component";

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
  isLoggedIn = false;

  constructor(private app: AppComponent, private flightService: FlightService, public tab: TabService, private tokenStorageService: TokenStorageService) {
    if (tokenStorageService.getToken() && tokenStorageService.getToken() !== "undefined") this.isLoggedIn = true;
  }

  public filterFlights() {
    this.filteredFlightsList = []
    for (let flight = 0; flight < this.flights.length; flight++) {
      if (this.flights[flight].destinationPlace == this.selecetdFlightdest) {
        this.filteredFlightsList.push(this.flights[flight])
      }
    }

  }


  ngOnInit(): void {
    this.tab.show();
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
      this.filteredFlightsList = res;
    })
    console.log(this.flights)
  }

}
