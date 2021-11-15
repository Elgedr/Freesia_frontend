import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class TestService {
  constructor(private http: HttpClient) {
  }

  public testRequest(): Observable<any> {
    return this.http.get("http://3.22.249.58:8081/api/freesia");
  }
}
