import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FLIGHTS} from "../../mock-elements/mock-flights";
import {Flight} from "../../models/flight";
import {Ship} from "../../models/ship";
import {SHIPS} from "../../mock-elements/mock-ships";

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {
  private shipId !: number;
  flights: Flight[] = []
  ship !: Ship

  constructor(private route: ActivatedRoute) {
  }

  getFightsForShip() {
    for (let i = 0; i < FLIGHTS.length; i++) {
      if (FLIGHTS[i].shipId == this.shipId) {
        this.flights.push(FLIGHTS[i])
      }

    }

  }

  getShip() {
    for (let i = 0; i < SHIPS.length; i++) {
      if (SHIPS[i].id == this.shipId){
        this.ship = SHIPS[i]
      }

    }

  }

  ngOnInit(): void {
    // достала ид корабля из урл
    this.shipId = this.route.snapshot.params['id']
    this.getShip()
    this.getFightsForShip()
  }

}
