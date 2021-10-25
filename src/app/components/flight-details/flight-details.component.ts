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

  constructor(private route: ActivatedRoute, private shipService: ShipService, private flightService: FlightService) {
  }


  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
    this.flightService.getFlightById(this.flightId).subscribe((res) => {
      this.particularFlight = res;
    })
  }

}
