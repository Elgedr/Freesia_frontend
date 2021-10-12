import { Component, OnInit } from '@angular/core';
import {SHIPS} from "../mock-elements/mock-ships";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships = SHIPS;
  numOfShipsInRow: number = 3;
  shipRows: number[] = [];
  constructor() { }

  ngOnInit(): void {
    const numOfRows = SHIPS.length / this.numOfShipsInRow;
    for (let i = 0; i < numOfRows; i++) {
      this.shipRows.push(i);
    }
  }


}
