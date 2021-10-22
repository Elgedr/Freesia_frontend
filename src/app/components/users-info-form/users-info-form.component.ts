import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Seat} from "../../models/seat";

import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-users-info-form',
  templateUrl: './users-info-form.component.html',
  styleUrls: ['./users-info-form.component.css']
})
export class UsersInfoFormComponent implements OnInit {
  createdPassenger !: User;
  state$: Observable<object> | undefined;
  stateArray: { 0?: Seat; navigationId?: number; } = {};
  seat !: Seat;
  id = 0;
  fname !: string;
  lname !: string;
  phoneNumber !: number;
  email !: string;


  constructor(private route: ActivatedRoute) {
  }

  createPassenger() {
    console.log('it does nothing', this.fname);
    console.log('it does nothing', this.lname);
    console.log('it does nothing', this.phoneNumber);
    console.log('it does nothing', this.email);
  }


  ngOnInit(): void {
    this.state$ = this.route.paramMap
      .pipe(map(() => window.history.state));
    this.state$.subscribe(seats => this.stateArray = seats);
    if (this.stateArray["0"]) this.seat = this.stateArray["0"];
    console.log(this.seat);
  }
}
