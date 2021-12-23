import {Component, OnInit} from '@angular/core';
import {Ship} from "../../models/ship";
import {ShipService} from "../../services/ship.service";
import {TabService} from "../../services/tab.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AppComponent} from "../../app.component";

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
  isLoggedIn = false;

  constructor(private app: AppComponent, private shipService: ShipService, public tab: TabService, private tokenStorageService: TokenStorageService) {
    if (tokenStorageService.getToken() != null &&
    tokenStorageService.getToken() !== "undefined") this.isLoggedIn = app.isLoggedIn;
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
