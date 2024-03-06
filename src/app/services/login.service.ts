import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.config';


@Injectable({
  providedIn: 'root'
})

export class LoginService { 
  
  constructor(private http: HttpClient) { }

  login(loginObj: any): Observable<any> {    
    return this.http.post(SERVER_API_URL + '/userManagement', loginObj);
  }
}
