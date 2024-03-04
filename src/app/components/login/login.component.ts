import { HttpClient,HttpHeaders , HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid4} from 'uuid';
import { HttpInterceptorService } from '../../http-interceptor.service';

import { SERVER_API_URL } from '../../app.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {

    debugger;
    console.log;
   
    this.http.post(SERVER_API_URL+'/userManagement', this.loginObj).subscribe({
  next: (res: any) => {
    console.log('Response:', res);
    if (res.response === 'true') {
      alert("Login Success!");
    } else { 
      alert("Wrong credentials please try again!"); 
    }
  },
  error: (error) => {
    console.error('An error occurred:', error);
    // Handle error appropriately (e.g., show error message to the user)
  }
});
const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('X-Custom-Header', 'custom-value');
    



  }
}

export class Login {
  UserToken: string;
  Username: string;
  Password: string;  
  RequestType:string;

  constructor() {
    this.Username = '';
    this.Password = '';   
    this.RequestType='Login';
    this.UserToken=uuid4();
  }
}
