import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  flightId: any = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
  }

}
