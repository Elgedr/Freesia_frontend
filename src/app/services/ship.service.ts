import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class ShipService {
  constructor(private http: HttpClient) {
  }

  public getAllShips(): Observable<any> {
    return this.http.get("http://localhost:8081/api/api/ships");
  }
}
