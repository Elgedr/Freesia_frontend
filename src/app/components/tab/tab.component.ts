import {Component} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {TabService} from "../../services/tab.service";


@Component({
  selector: 'tab-group-animations',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  title = "Freesia";
  isLoggedIn = false;
  username?: string;
  roles: string[] = [];
  isAdmin = false;

  public constructor(private tokenStorageService: TokenStorageService, public tab: TabService) {
    if (tokenStorageService.getUser() != {}) {
      this.isLoggedIn = true;
      this.username = tokenStorageService.getUser().username;
      this.roles = tokenStorageService.getUser().roles;
      if (this.roles && this.roles.includes("ROLE_ADMIN")) this.isAdmin = true;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

