import {Component} from '@angular/core';
import {FLIGHTS} from "../mock-elements/mock-flights";

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
}

