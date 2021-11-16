import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class TestService {
  constructor(private http: HttpClient) {
  }

  public testRequest(): Observable<any> {
    return this.http.get("http://localhost:8081/api/api/freesia");
  }
}
