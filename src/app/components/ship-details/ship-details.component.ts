import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ship} from "../../models/ship";
import {ShipService} from "../../services/ship.service";
import {Flight} from "../../models/flight";
import {FlightService} from "../../services/flight.service";


@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {
  private shipId !: number;
  flights: Flight[] = [];
  ship !: Ship;
  ships: Ship[] = [];

  constructor(private route: ActivatedRoute,private  shipService: ShipService , private flightService: FlightService) {
  }

  getFightsForShip() {
    for (let i = 0; i < this.flights.length; i++) {
      if (this.flights[i].ship.id == this.shipId) {
        this.flights.push(this.flights[i])
      }

    }

  }

  getShip() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].id == this.shipId) {
        this.ship = this.ships[i]
      }

    }

  }

  ngOnInit(): void {
    this.shipService.getAllShips().subscribe((res: Ship[])=>{
      this.ships = res;
    })
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
    })
    // достала ид корабля из урл
    this.shipId = this.route.snapshot.params['id']
    this.getShip()
    this.getFightsForShip()
  }

}
