import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public emaillogin: string;
  public passwordlogin: string;
  public role: string;

  constructor(
    private loginService: AuthService
  ) { }

  public login() {
    this.loginService.login(this.emaillogin, this.passwordlogin);
  }
  public register() {
    this.loginService.register(this.email, this.password, this.role);
  }

  ngOnInit(): void {
    this.loginService.checkLogin();
  }

}
