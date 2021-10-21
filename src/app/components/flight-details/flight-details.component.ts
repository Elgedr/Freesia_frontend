import {Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {ActivatedRoute} from '@angular/router';
import {FLIGHTS} from "../../mock-elements/mock-flights";
import {Ship} from "../../models/ship";
import {ShipService} from "../../services/ship.service";
import {FlightService} from "../../services/flight.service";


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  private flightId: any = null;
  particularFlight !: Flight;
  flightsShip !: Ship;
  ships: Ship[] = [];
  flights: Flight[] = [];

  constructor(private route: ActivatedRoute, private  shipService: ShipService, private flightService: FlightService) {
  }

  findFlightById() {
    this.particularFlight = this.flights.filter(f => f.id == this.flightId)[0];
    // for (let flight = 0; flight < FLIGHTS.length; flight++) {
    //   if (FLIGHTS[flight].id == this.flightId) {
    //     this.particularFlight = FLIGHTS[flight]
    //     break;
    //   }
    // }
  }

  findShip() {
    this.flightsShip = this.ships.filter(s => s.id == this.particularFlight.shipId)[0];
    // for (let ship = 0; ship < SHIPS.length; ship++) {
    //   if (SHIPS[ship].id == this.particularFlight.ship_id) {
    //     this.flightsShip = SHIPS[ship];
    //     break;
    //   }
    // }

  }


  ngOnInit(): void {
    this.shipService.getAllShips().subscribe((res: Ship[])=>{
      this.ships = res;
    })
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
    })
    this.flightId = this.route.snapshot.params['id'];
    this.findFlightById()
    this.findShip()
  }

}
