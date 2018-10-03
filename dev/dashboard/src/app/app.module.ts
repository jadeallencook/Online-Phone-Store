import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RepairComponent } from './pages/repair/repair.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SellComponent } from './pages/sell/sell.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RepairComponent,
    BuyComponent,
    ProfileComponent,
    SellComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule {

  config = {
    apiKey: 'AIzaSyC2HNhYb0RQ1y0w3q6uLL_88c2MFpyJeiE',
    authDomain: 'online-phone-store.firebaseapp.com',
    databaseURL: 'https://online-phone-store.firebaseio.com',
    projectId: 'online-phone-store',
    storageBucket: '',
    messagingSenderId: '394846320003'
  }

  constructor() {
    firebase.initializeApp(this.config);
  }

}
