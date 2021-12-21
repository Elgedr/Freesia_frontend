import {Component, OnInit} from '@angular/core';
import {Ship} from "../../models/ship";
import {ShipService} from "../../services/ship.service";
import {TabService} from "../../services/tab.service";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  preserveWhitespaces: true
})
export class ShipsComponent implements OnInit {
  ships: Ship[] = [];
  numOfShipsInRow: number = 3;
  shipRows: number[] = [];

  constructor(private shipService: ShipService, public tab: TabService) {
  }

  ngOnInit(): void {
    this.tab.show();

    this.shipService.getAllShips().subscribe((res: Ship[]) => {
      this.ships = res;
      console.log(this.ships)
      const numOfRows = this.ships.length / this.numOfShipsInRow;
      console.log(this.ships.length)
      for (let i = 0; i < numOfRows; i++) {
        this.shipRows.push(i);
      }
      console.log(res)
      console.log(this.ships)
    })

  }
}
