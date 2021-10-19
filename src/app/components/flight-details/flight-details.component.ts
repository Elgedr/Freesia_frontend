import {Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {ActivatedRoute} from '@angular/router';
import {FLIGHTS} from "../../mock-elements/mock-flights";
import {SHIPS} from "../../mock-elements/mock-ships";
import {Ship} from "../../models/ship";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  private flightId: any = null;
  particularFlight !: Flight;
  flightsShip !: Ship;

  constructor(private route: ActivatedRoute) {
  }

  findFlightById() {
    this.particularFlight = FLIGHTS.filter(f => f.id == this.flightId)[0];
    // for (let flight = 0; flight < FLIGHTS.length; flight++) {
    //   if (FLIGHTS[flight].id == this.flightId) {
    //     this.particularFlight = FLIGHTS[flight]
    //     break;
    //   }
    // }
  }

  findShip() {
    this.flightsShip = SHIPS.filter(s => s.id == this.particularFlight.shipId)[0];
    // for (let ship = 0; ship < SHIPS.length; ship++) {
    //   if (SHIPS[ship].id == this.particularFlight.ship_id) {
    //     this.flightsShip = SHIPS[ship];
    //     break;
    //   }
    // }

  }


  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
    this.findFlightById()
    this.findShip()
  }

}
