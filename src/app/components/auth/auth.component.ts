import { Component, OnInit } from '@angular/core';
import {TabService} from "../../services/tab.service";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  roles: string[] = [];
  isLoggedIn = false;
  isSuccessful = false;
  errorMessage = '';

  constructor(private app: AppComponent, public tab: TabService, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() && this.tokenStorage.getToken() !== "undefined"
      && this.tokenStorage.getUser() != {}) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.tab.hide();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
