import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = "Freesia";

  public constructor(private titleService: Title) {
    this.titleService.setTitle("Freesia");
  }
}



