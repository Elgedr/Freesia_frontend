import { Component, OnInit } from '@angular/core';
import {TabService} from "../../services/tab.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {UserService} from "../../services/user.service";
import {SiteUser} from "../../models/siteUser";

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {
  currentUser: any;
  roles: string[] = [];
  isAdmin = false;
  users: SiteUser[] = [];

  constructor(public tab: TabService, private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.tab.show();
    this.currentUser = this.token.getUser();
    this.roles = this.token.getUser().roles;
    if (this.roles && this.roles.includes("ROLE_ADMIN")) this.isAdmin = true;

    this.userService.getAllUsers().subscribe((res: SiteUser[]) => {
      this.users = res;
      console.log(this.users);
    })
  }

}
