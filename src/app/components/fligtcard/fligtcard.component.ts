import {Component, Input} from '@angular/core';
import {Flight} from "../../models/flight";
import {FlightService} from "../../services/flight.service";

/**
 * @title Card with sub-title
 */
@Component({
  selector: 'fligtcard-component',
  templateUrl: 'fligtcard.component.html',
  styleUrls: ['fligtcard.component.css']
})
export class FligtcardComponent {
  flights: Flight[] = [];
  @Input() flight!: Flight;
  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void{
    this.flightService.getAllFlights().subscribe((res: Flight[])=>{
      this.flights = res;
      console.log(this.flights)
    })
  }

}

