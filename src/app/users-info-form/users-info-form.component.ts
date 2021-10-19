import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {USERS} from "../mock-elements/mock-users";

@Component({
  selector: 'app-users-info-form',
  templateUrl: './users-info-form.component.html',
  styleUrls: ['./users-info-form.component.css']
})
export class UsersInfoFormComponent implements OnInit {
  createdPassenger !: User;
  fname !: string;
  lname !: string;
  phoneNumber !: number;
  email !: string;
  static id: number = 0;


  constructor() {
  }

  createPassenger() {
    console.log('it does nothing', this.fname);
    console.log('it does nothing', this.lname);
    console.log('it does nothing', this.phoneNumber);
    console.log('it does nothing', this.email);
    console.log('it does nothing', UsersInfoFormComponent.id);
    this.createdPassenger = {
      pid: UsersInfoFormComponent.id,
      passenger_lastname : this.lname,
      passenger_firstname : this.fname,
      passenger_email : this.email,
      passenger_phone : this.phoneNumber,
      place_number: 0,
      ship_id : 0
    }
    USERS.push(this.createdPassenger)
    console.log('ALL CREATED USERS', USERS)


  }


  ngOnInit(): void {
  }

}
