import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.config';


@Injectable({
  providedIn: 'root'
})

export class LoginService { 
  
  constructor(private http: HttpClient) { }

  login(loginObj: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Custom-Header', 'custom-value');

    return this.http.post(SERVER_API_URL + '/userManagement', loginObj,{headers});
  }
}
