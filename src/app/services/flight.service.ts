import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class FlightService {
  constructor(private http: HttpClient) {
  }

  public getAllFlights(): Observable<any> {
    console.log(this.http.get("http://3.22.249.58:8081/api/flights"));
    return this.http.get("http://3.22.249.58:8081/api/flights");
  }

  public getFlightById(id: string): Observable<any> {
    return this.http.get("http://3.22.249.58:8081/api/flights/" + id)
  }
}
