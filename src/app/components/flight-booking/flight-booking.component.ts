import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Seat} from "../../models/seat";

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  flightId: any = null;
  numberOfSeats = 60;
  seats: Seat[] = []
  chosen: Seat[] = []

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
    for (let i = 1; i <= this.numberOfSeats; i++) {
      if (i === 1) {
        this.seats.push(new Seat(i, true, false));
      } else this.seats.push(new Seat(i, false, false));
    }
  }

  public addOrRemoveSeatFromCart(seat: Seat) {
    const index: number = this.chosen.indexOf(seat);
    if (index !== -1) {
      seat.reserved = false;
      this.chosen.splice(index, 1);
    } else {
      seat.reserved = true;
      this.chosen.push(seat);
    }
  }
}
