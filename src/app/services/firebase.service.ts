import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {

  user: any = null;

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged(() => {
      this.user = firebase.auth().currentUser;
      if (!this.user) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['profile']);
      }
    });
  }

  login(email, password) {
    return new Promise((res, rej) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.user = firebase.auth().currentUser;
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
