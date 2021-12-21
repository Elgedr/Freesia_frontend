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

  public constructor(private tokenStorageService: TokenStorageService, public tab: TabService) {
    console.log("Is tab visible?");
    console.log(tab.visible);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

