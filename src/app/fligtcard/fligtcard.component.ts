import {Component, Input} from '@angular/core';
import {FLIGHTS} from "../mock-elements/mock-flights";
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
  @Input() flight!: Flight;

  constructor() {

  }
}

