import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid4 } from 'uuid';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginObj: Login;
  constructor(private loginService: LoginService, private router: Router) {
    this.loginObj = new Login();
  }  

  onLogin(): void {
    debugger;    
     this.loginService.login(this.loginObj).subscribe({
      next: (res: any) => {
        console.log('Response:', res);
        if (res.response === 'true') {
        
          localStorage.setItem('userName', res.UserDetailsList[0].Username);
          this.router.navigateByUrl('/dashboard');

        } else {
          
        }
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
        // Handle error appropriately (e.g., show error message to the user)
      }
    }); 
  }
}

export class Login {
  UserToken: string;
  Username: string;
  Password: string;
  RequestType: string;

  constructor() {
    this.Username = '';
    this.Password = '';
    this.RequestType = 'Login';
    this.UserToken = uuid4();
  }
}
