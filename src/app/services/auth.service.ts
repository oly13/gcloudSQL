import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: FirebaseAuth,
    private router: Router
  ) { }

  public login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(res => {
      if (res.user) {
        this.router.navigate(['sqlapp']); 
      }
    });
  }
}
