import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: String = 'https://weirdtext-app.herokuapp.com/v1/';

  constructor(private httpClient: HttpClient) {
  }

  encodeText(text: String): Observable<any> {
    return this.httpClient.post<String>(this.apiUrl + 'encode/', {text: text})
  }

  decodeText(text: String): Observable<any> {
    return this.httpClient.post<String>(this.apiUrl + 'decode/', {text: text})
  }
}
