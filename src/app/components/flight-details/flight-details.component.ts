import {Component, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {ActivatedRoute} from '@angular/router';
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
  ships: Ship[] = [];
  flights: Flight[] = [];

  constructor(private route: ActivatedRoute, private shipService: ShipService, private flightService: FlightService) {
  }

  findFlightById(flightsList: Flight[]) {
    this.particularFlight = flightsList.filter(f => f.id == this.flightId)[0];
    // for (let flight = 0; flight < FLIGHTS.length; flight++) {
    //   if (FLIGHTS[flight].id == this.flightId) {
    //     this.particularFlight = FLIGHTS[flight]
    //     break;
    //   }
    // }
    console.log(this.particularFlight)
  }


  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
    this.flightService.getAllFlights().subscribe((res: Flight[]) => {
      this.flights = res;
      this.findFlightById(res)
    })
  }

}
