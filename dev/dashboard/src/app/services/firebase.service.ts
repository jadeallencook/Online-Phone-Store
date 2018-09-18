import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {

  user: any = null;

  constructor(private router: Router) { }

  login(email, password) {
    return new Promise((res, rej) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.router.navigate(['/profile']);
        res();
      }).catch((error) => {
        rej(error.message);
      });
    })
  }

  logout() {
    return new Promise((res, rej) => {
      firebase.auth().signOut().then(() => {
        this.user = null;
        res();
      }).catch(() => {
        rej();
      });
    });
  }

  signup(email, password) {
    return new Promise((res, rej) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        res();
      }).catch((error) => {
        rej(error.message);
      });
    })
  }

}
