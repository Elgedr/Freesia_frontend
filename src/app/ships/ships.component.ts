import { Component, OnInit } from '@angular/core';
import {SHIPS} from "../mock-elements/mock-ships";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships = SHIPS;
  a = 0;
  images = [
    {img: "assets\\img\\ship1.jpg"},
    {img: "assets\\img\\ship2.jpg"},
    {img: "assets\\img\\ship3.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
