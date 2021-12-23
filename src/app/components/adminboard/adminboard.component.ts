import { Component, OnInit } from '@angular/core';
import {TabService} from "../../services/tab.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {
  currentUser: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(public tab: TabService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.tab.show();
    this.currentUser = this.token.getUser();
    this.roles = this.token.getUser().roles;
    if (this.roles && this.roles.includes("ROLE_ADMIN")) this.isAdmin = true;
  }

}
