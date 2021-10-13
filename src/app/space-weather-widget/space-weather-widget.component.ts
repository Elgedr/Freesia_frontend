import { Component, OnInit } from '@angular/core';
import { NasaService } from "../services/nasa.service";
import { Donki } from "../models/donki";

@Component({
  selector: 'app-space-weather-widget',
  templateUrl: './space-weather-widget.component.html',
  styleUrls: ['./space-weather-widget.component.css']
})
export class SpaceWeatherWidgetComponent implements OnInit {
  public nasaGeoMagnetic: Donki | any;
  public date = new Date();

  constructor(private nasaApi: NasaService) {}

  ngOnInit(): void {
    this.nasaApi.getGeomagneticStorm().subscribe((response: Donki[]) => {
      this.nasaGeoMagnetic = response[0];
    });
  }
}

