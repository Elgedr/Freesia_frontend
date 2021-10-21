import {Component, Input, OnInit} from '@angular/core';
import {Ship} from "../../models/ship";
import {ShipService} from "../../services/ship.service";

@Component({
  selector: 'app-shipcard',
  templateUrl: './shipcard.component.html',
  styleUrls: ['./shipcard.component.css']
})
export class ShipcardComponent implements OnInit {
  ships: Ship[]= [];
  @Input() ship!: Ship;
  images = [
    {img: "assets\\img\\ship1.jpg"},
    {img: "assets\\img\\ship2.jpg"},
    {img: "assets\\img\\ship3.jpg"},
    {img: "assets\\img\\ship4.jpg"},
    {img: "assets\\img\\ship5.jpg"},
    {img: "assets\\img\\ship6.jpg"},
    {img: "assets\\img\\ship7.jpg"},
    {img: "assets\\img\\ship8.jpg"},
    {img: "assets\\img\\ship9.jpg"}
  ]


  constructor(private  shipService: ShipService) {
  }

  ngOnInit(): void {
    this.shipService.getAllShips().subscribe((res: Ship[])=>{
      this.ships = res;
    })
  }

}
