import { Component, OnInit } from '@angular/core';
import { NasaService } from "../../services/nasa.service";
import { Apod } from "../../models/apod";

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent implements OnInit {
  public nasaImgObj: Apod | undefined;

  constructor(private nasaApi: NasaService) {}

  ngOnInit(): void {
    this.nasaApi.getNasaImage().subscribe((response: Apod) => {
      this.nasaImgObj = response;
    });
  }

}
