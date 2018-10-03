import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'loading...';
  authenticated: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((route: any) => {
      this.title = (route.url) ? route.url.replace('/', '') : 'loading...';
      this.authenticated = (this.title.indexOf('login') !== -1) ? true : false;
    });
  }
}
