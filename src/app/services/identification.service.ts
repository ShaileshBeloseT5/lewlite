import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { SERVER_API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  constructor(private http: HttpClient) { }

  getSingleNIK(nik: string): Observable<HttpResponse<any>> {

   
    if (!this.checkIfFileExists('assets/responses/getSingleNIK.json')) {
      console.log('3');
      return this.http.get<HttpResponse<any>>('assets/responses/getSingleNIK.json', { observe: 'response' })
    } else {
      console.log('4');
      alert(nik);
      const req = { NIK: nik };
      return this.http.post<any>(SERVER_API_URL + '/singleNIK', req, { observe: 'response' });
    }

  }

  getStatus(serviceUrl: string): Observable<any> {

    if (!this.checkIfFileExists('assets/responses/getStatus.json')) {
      console.log('1');
      return this.http.get<HttpResponse<any>>('assets/responses/getStatus.json')
    } else {
      console.log('2');
      return this.http.get(SERVER_API_URL + '/status');
    }
  }


  checkIfFileExists(url: string): Observable<boolean> {
    console.log('Check files........');

    return this.http.head(url).pipe(
      map(() => true), // If the request succeeds, the file exists
      catchError(() => of(false)) // If the request fails, the file does not exist
    );
  }
}
