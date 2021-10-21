import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Seat} from "../../models/seat";
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight";

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  thisFlight !: Flight;
  flights: Flight[] = [];
  flightId: any = null;
  numberOfSeats = 60;
  seats: Seat[] = []
  chosen: Seat[] = []
  isBeingReserved: boolean = false;

  constructor(private route: ActivatedRoute, private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['id'];
    this.flightService.getAllFlights().subscribe((res: Flight[]) => {
      this.flights = res;
      this.findFlightById(res);
      this.numberOfSeats = this.thisFlight.ship.numOfPlaces;
      for (let i = 1; i <= this.numberOfSeats; i++) {
        if (i === 1) {
          this.seats.push(new Seat(i, true, false));
        } else this.seats.push(new Seat(i, false, false));
      }
    })
  }

  private findFlightById(flightsList: Flight[]) {
    this.thisFlight = flightsList.filter(f => f.id == this.flightId)[0];
  }

  public addOrRemoveSeatFromCart(seat: Seat) {
    const index: number = this.chosen.indexOf(seat);
    if (index !== -1) {
      seat.reserved = false;
      this.isBeingReserved = false;
      this.chosen.splice(index, 1);
    } else {
      seat.reserved = true;
      this.isBeingReserved = true;
      this.chosen.push(seat);
    }
  }
}
