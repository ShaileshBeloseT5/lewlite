import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid4} from 'uuid';
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
    this.http.post('http://172.17.2.113:8081/LEWServiceV2/api/userManagement', this.loginObj).subscribe((res: any) => {
      if (res.Response == 'true') {
        alert("Login Success!");
      }
      else { alert(res.Response); }
    })

  }
}

export class Login {
  UserToken: string;
  Username: string;
  Password: string;
  ErrorMessage: string;
  RequestType:string;

  constructor() {
    this.Username = '';
    this.Password = '';
    this.ErrorMessage = '';
    this.RequestType='Login';
    this.UserToken=uuid4();
  }
}
