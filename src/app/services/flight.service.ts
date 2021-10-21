import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class FlightService {
  constructor(private http: HttpClient) {
  }

  public getAllFlights(): Observable<any> {
    return this.http.get("http://localhost:8081/flights");
  }
}