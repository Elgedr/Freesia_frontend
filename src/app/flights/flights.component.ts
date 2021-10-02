import { Component, OnInit } from '@angular/core';
import {FLIGHTS} from "../mock-flights";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  preserveWhitespaces: true
})
export class FlightsComponent implements OnInit {
  flights = FLIGHTS;

  constructor() { }

  ngOnInit(): void {
  }

}
