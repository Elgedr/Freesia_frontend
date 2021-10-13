import {Component, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-users-info-form',
  templateUrl: './users-info-form.component.html',
  styleUrls: ['./users-info-form.component.css']
})
export class UsersInfoFormComponent implements OnInit {
  createdPassenger !: User;
  id = 0;
  fname !: string;
  lname !: string;
  phoneNumber !: number;
  email !: string;


  constructor() {
  }

  createPassenger() {
    console.log('it does nothing', this.fname);
    console.log('it does nothing', this.lname);
    console.log('it does nothing', this.phoneNumber);
    console.log('it does nothing', this.email);
    // this.createPassenger =  new User (this.id, this.lname, this.fname, this.email, this.phoneNumber)


  }


  ngOnInit(): void {
  }

}
