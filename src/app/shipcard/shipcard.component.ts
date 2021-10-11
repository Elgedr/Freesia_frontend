import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../flight";
import {SHIPS} from "../mock-elements/mock-ships";
import {Ship} from "../ship";

@Component({
  selector: 'app-shipcard',
  templateUrl: './shipcard.component.html',
  styleUrls: ['./shipcard.component.css']
})
export class ShipcardComponent implements OnInit {
  ships = SHIPS;
  @Input() ship!: Ship;



  constructor() {
  }

  ngOnInit(): void {
  }

}
