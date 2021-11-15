import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class ShipService {
  constructor(private http: HttpClient) {
  }

  public getAllShips(): Observable<any> {
    return this.http.get("http://3.22.249.58:8081/api/ships");
  }
}
