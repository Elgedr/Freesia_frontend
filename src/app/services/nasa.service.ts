import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { Apod } from "../models/apod";
import { Donki } from "../models/donki";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  private apiKey = environment.NASA_KEY;

  constructor(private http: HttpClient) {}

  public getNasaImage(): Observable<Apod> {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    this.apiKey = environment.NASA_KEY;
    const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${this.apiKey}&hd=true`;
    return this.http.get<Apod>(apodUrl).pipe(
      take(1),
      catchError((err: any) => {
        return throwError("Problem fetching apod from NASA API, error: ", err);
      })
    );
  }

  public getGeomagneticStorm(): Observable<Donki[]> {
    this.apiKey = environment.NASA_KEY;
    const year = new Date().getFullYear() - 1;
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const gstUrl = `https://api.nasa.gov/DONKI/GST?startDate=${year}-${month}-${day}&api_key=${this.apiKey}`;
    return this.http.get<Donki[]>(gstUrl).pipe(
      take(1),
      catchError((err: any) => {
        return throwError("Problem fetching Donki from NASA API, error: ", err);
      })
    );
  }
}
