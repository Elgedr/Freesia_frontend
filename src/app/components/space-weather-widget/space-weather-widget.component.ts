import { Component, OnInit } from '@angular/core';
import { NasaService } from "../../services/nasa.service";
import { Donki } from "../../models/donki";

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
    console.log("Before calling getGeoStorm");
    console.log(this.nasaGeoMagnetic);
    this.nasaApi.getGeomagneticStorm().subscribe((response: Donki[]) => {
      console.log("Response:");
      console.log(response);
      this.nasaGeoMagnetic = response[response.length - 1];
      console.log("After calling getGeoStorm");
      console.log(this.nasaGeoMagnetic);
    });
  }
}

