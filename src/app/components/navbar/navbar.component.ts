import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private firebase: FirebaseService, private router: Router) { }

  logout() {
    this.firebase.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}
