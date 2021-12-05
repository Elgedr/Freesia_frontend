import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = "Freesiaaa";

  public constructor(private titleService: Title) {
    this.titleService.setTitle("Freesia");
  }
}



