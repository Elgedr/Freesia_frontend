import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {SHIPS} from "../../mock-elements/mock-ships";
import {Ship} from "../../models/ship";

@Component({
  selector: 'app-shipcard',
  templateUrl: './shipcard.component.html',
  styleUrls: ['./shipcard.component.css']
})
export class ShipcardComponent implements OnInit {
  ships = SHIPS;
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


  constructor() {
  }

  ngOnInit(): void {
  }

}
