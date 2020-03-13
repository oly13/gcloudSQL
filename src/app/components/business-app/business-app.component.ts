import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-business-app',
  templateUrl: './business-app.component.html',
  styleUrls: ['./business-app.component.css']
})
export class BusinessAppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  public logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.checkLogin();
  }

}
