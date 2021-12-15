import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent implements OnInit {
  title = "Freesia";
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  public constructor(private titleService: Title, private tokenStorageService: TokenStorageService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}



