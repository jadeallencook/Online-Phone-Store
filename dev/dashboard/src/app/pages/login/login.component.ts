import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  error:any = '';

  constructor(private router: Router, private firebase: FirebaseService) { }

  login(email, password) {
    this.firebase.login(email, password).then((msg) => {
      this.router.navigate(['/profile']);
    }).catch((msg) => {
      this.error = msg;
    })
  }

  signup(email, password) {

  }

  ngOnInit() {
  }

}