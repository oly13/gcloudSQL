import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private fireStore: AngularFirestore
  ) { }

  public login(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      if (res.user) {
        this.router.navigate(['sqlapp']); 
      }
    });
  }

  public register(email: string, password: string, role: string) {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      this.fireStore.collection('users').doc(res.user.uid).set({
        role
      });
      this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    });
  }

  public checkLogin() {
    this.fireAuth.authState.subscribe(authState => {
      if (authState) {
        this.router.navigate(['sqlapp']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  public logout() {
    this.fireAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
