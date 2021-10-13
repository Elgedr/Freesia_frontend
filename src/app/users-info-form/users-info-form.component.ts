import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-info-form',
  templateUrl: './users-info-form.component.html',
  styleUrls: ['./users-info-form.component.css']
})
export class UsersInfoFormComponent implements OnInit {
  titleMessage = 'Please choose a username.';

  constructor() {
  }

  changeTitle(message: string) {
    this.titleMessage = message;
  }

  ngOnInit(): void {
  }

}
