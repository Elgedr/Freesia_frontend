import {Component} from '@angular/core';
import {FLIGHTS} from "../mock-elements/mock-flights";
import {FlightsComponent} from "../flights/flights.component";
import {Flight} from "../flight";

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'fligtcard-component',
  templateUrl: 'fligtcard.component.html',
  styleUrls: ['fligtcard.component.css']
})
export class FligtcardComponent {
  flights = FLIGHTS;
  filteredF : Flight[] = [];

  constructor(private flightComponent: FlightsComponent) {
    this.filteredF = this.flightComponent.filteredFlightsList

  }
}

