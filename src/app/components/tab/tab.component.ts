import {Component} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {TabService} from "../../services/tab.service";
import {AppComponent} from "../../app.component";


@Component({
  selector: 'tab-group-animations',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  title = "Freesia";
  username?: string;
  roles: string[] = [];
  isAdmin = false;
  isLoggedIn = false;

  public constructor(private app: AppComponent, private tokenStorageService: TokenStorageService, public tab: TabService) {
    if (tokenStorageService.getToken() &&
      tokenStorageService.getToken() != "undefined" && tokenStorageService.getUser() != {}) {
      this.isLoggedIn = true;
      this.username = tokenStorageService.getUser().username;
      this.roles = tokenStorageService.getUser().roles;
      if (this.roles && this.roles.includes("ROLE_ADMIN")) this.isAdmin = true;
      console.log("Is admin?");
      console.log(this.isAdmin);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

