import { Component, OnInit } from '@angular/core';
import {TabService} from "../../services/tab.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tab: TabService) {
  }

  ngOnInit(): void {
    this.tab.show();
  }

}
