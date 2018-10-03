webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"wrapper animated slideInDown\">\n  <app-header *ngIf=\"router.url.indexOf('login') === -1\" [title]=\"title\"></app-header>\n  <div class=\"{{ ((!authenticated) ? 'main' : null) }}\">\n    <div class=\"{{ ((!authenticated) ? 'section' : null) }}\">\n      <div class=\"container tim-container\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'loading...';
        this.authenticated = false;
        router.events.subscribe(function (route) {
            _this.title = (route.url) ? route.url.replace('/', '') : 'loading...';
            _this.authenticated = (_this.title.indexOf('login') !== -1) ? true : false;
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_repair_repair_component__ = __webpack_require__("./src/app/pages/repair/repair.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buy_buy_component__ = __webpack_require__("./src/app/pages/buy/buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__ = __webpack_require__("./src/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sell_sell_component__ = __webpack_require__("./src/app/pages/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'repair', component: __WEBPACK_IMPORTED_MODULE_9__pages_repair_repair_component__["a" /* RepairComponent */] },
    { path: 'buy', component: __WEBPACK_IMPORTED_MODULE_10__pages_buy_buy_component__["a" /* BuyComponent */] },
    { path: 'sell', component: __WEBPACK_IMPORTED_MODULE_12__pages_sell_sell_component__["a" /* SellComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
        this.config = {
            apiKey: 'AIzaSyC2HNhYb0RQ1y0w3q6uLL_88c2MFpyJeiE',
            authDomain: 'online-phone-store.firebaseapp.com',
            databaseURL: 'https://online-phone-store.firebaseio.com',
            projectId: 'online-phone-store',
            storageBucket: '',
            messagingSenderId: '394846320003'
        };
        __WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](this.config);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_repair_repair_component__["a" /* RepairComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buy_buy_component__["a" /* BuyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sell_sell_component__["a" /* SellComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-demo section-dark\">\n  <div class=\"container\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a href=\"http://phonedaddies.com/\" target=\"_blank\">\n            <b>Phone Daddies</b> Presents\n          </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <b>Online Phone Store</b>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright pull-right\">\n      Copyright © 2018 | Developed by \n      <a href=\"http://onflo.io/\" target=\"_blank\">Onflo</a> \n      | UI by \n      <a href=\"http://www.creative-tim.com/\" target=\"_blank\">Creative Tim</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-header demo-header-image\">\n  <div class=\"motto\">\n    <h1 class=\"title-uppercase animated fadeIn\">{{ title }}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnChange = function () {
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n}\n\nul.navbar-right li {\n    float: right;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation-demo\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/login\">Online Phone Store</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"navigation-example-2\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"this.firebase.user\">\n        <li>\n          <a routerLink=\"/profile\" class=\"btn\">Profile</a>\n        </li>\n        <li>\n          <a routerLink=\"/buy\" class=\"btn\">Buy</a>\n        </li>\n        <li>\n          <a routerLink=\"/sell\" class=\"btn\">Sell</a>\n        </li>\n        <li>\n          <a routerLink=\"/repair\" class=\"btn\">Repair</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"this.firebase.user\">\n          <a (click)=\"logout()\">\n            <i class=\"fa fa-lock\"></i>\n            &nbsp;&nbsp;Logout\n          </a>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(firebase, router) {
        this.firebase = firebase;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.firebase.logout().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/buy/buy.component.css":
/***/ (function(module, exports) {

module.exports = "div > input {\n    margin-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/pages/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n  <h4>Stats (30 Days)</h4>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-1\">Total</th>\n          <th scope=\"col\" class=\"col-sm-3\">Top Location</th>\n          <th scope=\"col\" class=\"col-sm-3\">Top Make</th>\n          <th scope=\"col\" class=\"col-sm-2\">Expense</th>\n          <th scope=\"col\" class=\"col-sm-3\">Top Make</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">5</th>\n          <td>Hale</td>\n          <td>iPhone</td>\n          <td>$500</td>\n          <td>iPhone</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <h4>Inqueries</h4>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-1\">Date</th>\n          <th scope=\"col\" class=\"col-sm-3\">Name</th>\n          <th scope=\"col\" class=\"col-sm-3\">Device</th>\n          <th scope=\"col\" class=\"col-sm-2\">Quote</th>\n          <th scope=\"col\" class=\"col-sm-3\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">11/3/18</th>\n          <td>Mark</td>\n          <td>iPhone 6s</td>\n          <td>$100</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Accept</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/6/18</th>\n          <td>Jane</td>\n          <td>Samsung Galaxy S5</td>\n          <td>$75</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Accept</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/11/18</th>\n          <td>Tod</td>\n          <td>iPhone X</td>\n          <td>$250</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Accept</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <h4>Prices</h4>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <select class=\"form-control\" id=\"sel1\">\n        <option selected disabled>Make</option>\n        <option value=\"iphone\">iPhone</option>\n        <option value=\"samsung\">Samsung</option>\n        <option value=\"google\">Google</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <select class=\"form-control\" id=\"sel1\">\n        <option selected disabled>Model</option>\n        <option value=\"x\">X</option>\n        <option value=\"8s\">8s</option>\n        <option value=\"8s+\">8s Plus</option>\n        <option value=\"8\">8</option>\n        <option value=\"7s+\">7s Plus</option>\n        <option value=\"7s\">7s</option>\n        <option value=\"7\">7</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"Quote\">\n  </div>\n  <div class=\"col-sm-2\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"Broken\">\n  </div>\n  <div class=\"col-sm-2\">\n    <button class=\"btn btn-primary btn-fill\">Save</button>\n  </div>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-1\">Set</th>\n          <th scope=\"col\" class=\"col-sm-3\">Make</th>\n          <th scope=\"col\" class=\"col-sm-3\">Used</th>\n          <th scope=\"col\" class=\"col-sm-2\">Broken</th>\n          <th scope=\"col\" class=\"col-sm-3\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">11/1/18</th>\n          <td>iPhone X</td>\n          <td>$250</td>\n          <td>$150</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Update</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/1/18</th>\n          <td>iPhone 8</td>\n          <td>$200</td>\n          <td>$125</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Update</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/1/18</th>\n          <td>iPhone 7s</td>\n          <td>$150</td>\n          <td>$75</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Update</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyComponent = /** @class */ (function () {
    function BuyComponent() {
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buy',
            template: __webpack_require__("./src/app/pages/buy/buy.component.html"),
            styles: [__webpack_require__("./src/app/pages/buy/buy.component.css")],
            host: {
                class: 'animated slideInDown'
            }
        }),
        __metadata("design:paramtypes", [])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "div#login-form {\n    background-color: #FEFCF5;\n    text-align: center;\n    padding-bottom: 45px;\n}\n\ndiv#login-form input {\n    margin: 0px auto 15px auto;\n    width: 75%;\n    max-width: 350px;\n}\n\ndiv#login-form span.error {\n    color: #FF0000;\n    margin-top: 25px;\n}\n\ndiv#login-form span {\n    display: block;\n    width: 75%;\n    margin: 0px auto;\n}\n\ndiv#login-form span.copyright {\n    margin-top: 25px;\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6 animated slideInDown\" id=\"login-form\">\n      <h2>Login</h2>\n      <input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"form-control\">\n      <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" class=\"form-control\">\n      <button href=\"#fakelink\" class=\"btn btn-fill btn-primary\" (click)=\"signup(email, password)\">Signup</button>\n      <button href=\"#fakelink\" class=\"btn btn-fill btn-default\" (click)=\"login(email, password)\">Login</button>\n      <span class=\"error\" *ngIf=\"error.length > 0\">{{ error }}</span>\n      <span class=\"copyright\">Developed by <b>Onflo</b></span>\n      <span><b>Online Phone Store</b> Copyright 2018</span>\n    </div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, firebase) {
        this.router = router;
        this.firebase = firebase;
        this.email = '';
        this.password = '';
        this.error = '';
        if (this.firebase.user) {
            this.router.navigate(['profile']);
        }
    }
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.firebase.login(email, password).then(function (msg) {
            _this.router.navigate(['/profile']);
        }).catch(function (msg) {
            _this.error = msg;
        });
    };
    LoginComponent.prototype.signup = function (email, password) {
        var _this = this;
        this.firebase.signup(email, password).then(function () {
            _this.login(email, password);
        }).catch(function (msg) {
            _this.error = msg;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "div.row > div > p {\n    font-weight: bold;\n    font-size: 0.75em;\n    margin: 15px 0px 5px 0px;\n}\n\ndiv.row > div > button {\n    margin-top: 25px;\n}"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n  <h4>Business Information</h4>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <p>Name</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John's Phone Store\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Phone</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"(555) 555-5555\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Email</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"hello@johnsphones.com\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Facebook</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"https://www.facebook.com/johnsphones\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Instagram</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"https://www.instagram.com/johnsphones\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Website</p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"https://www.johnsphones.com\">\n    </div>\n    <div class=\"col-sm-12\">\n      <button href=\"#fakelink\" class=\"btn btn-fill\" (click)=\"save()\">Save Changes</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.save = function () {
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/repair/repair.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/repair/repair.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade in\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the\n            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n            ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\n            paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful\n            Pointing has no control about the blind texts it is an almost unorthographic life One day however a small\n            line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. </p>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-simple\" data-dismiss=\"modal\">Never mind</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-simple\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n\n<div class=\"tim-title\">\n  <h4>Stats (30 Days)</h4>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-2\">Repairs</th>\n          <th scope=\"col\" class=\"col-sm-2\">Requests</th>\n          <th scope=\"col\" class=\"col-sm-2\">Revenue</th>\n          <th scope=\"col\" class=\"col-sm-3\">Top Location</th>\n          <th scope=\"col\" class=\"col-sm-3\">Top Make</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>5</td>\n          <td>$450</td>\n          <td>Tawas</td>\n          <td>iPhone</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <h4>Requests</h4>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-1\">Date</th>\n          <th scope=\"col\" class=\"col-sm-1\">Name</th>\n          <th scope=\"col\" class=\"col-sm-2\">Location</th>\n          <th scope=\"col\" class=\"col-sm-3\">Device</th>\n          <th scope=\"col\" class=\"col-sm-2\">Paid</th>\n          <th scope=\"col\" class=\"col-sm-3\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">11/6/18</th>\n          <td>Jade</td>\n          <td>Bay City</td>\n          <td>iPhone X</td>\n          <td>$350</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Details</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/7/18</th>\n          <td>Nate</td>\n          <td>Tawas</td>\n          <td>Samsung Galaxy S5</td>\n          <td>$0</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\">Details</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <h4>Repairs (30 Days)</h4>\n  <div class=\"col-sm-12\">\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"col-sm-1\">Date</th>\n          <th scope=\"col\" class=\"col-sm-1\">Name</th>\n          <th scope=\"col\" class=\"col-sm-2\">Location</th>\n          <th scope=\"col\" class=\"col-sm-3\">Device</th>\n          <th scope=\"col\" class=\"col-sm-2\">Paid</th>\n          <th scope=\"col\" class=\"col-sm-3\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">11/6/18</th>\n          <td>Dan</td>\n          <td>Tawas</td>\n          <td>iPhone 8s</td>\n          <td>$350</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\" data-toggle=\"modal\" data-target=\"#myModal\">Details</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">11/7/18</th>\n          <td>Emily</td>\n          <td>Bay City</td>\n          <td>iPhone 5c</td>\n          <td>$100</td>\n          <td>\n            <button class=\"btn btn-xs btn-fill btn-success\" data-toggle=\"modal\" data-target=\"#myModal\">Details</button>\n            <button class=\"btn btn-xs btn-fill btn-danger\">Remove</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/repair/repair.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepairComponent = /** @class */ (function () {
    function RepairComponent() {
    }
    RepairComponent.prototype.ngOnInit = function () {
    };
    RepairComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-repair',
            template: __webpack_require__("./src/app/pages/repair/repair.component.html"),
            styles: [__webpack_require__("./src/app/pages/repair/repair.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RepairComponent);
    return RepairComponent;
}());



/***/ }),

/***/ "./src/app/pages/sell/sell.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h4 class=\"animated flipInX\">Coming Soon...</h4>\n    <div class=\"col-sm-12\"></div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/pages/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellComponent = /** @class */ (function () {
    function SellComponent() {
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sell',
            template: __webpack_require__("./src/app/pages/sell/sell.component.html"),
            styles: [__webpack_require__("./src/app/pages/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(router) {
        var _this = this;
        this.router = router;
        this.user = null;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function () {
            _this.user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
            if (!_this.user) {
                _this.router.navigate(['login']);
            }
            else {
                _this.router.navigate(['profile']);
            }
        });
    }
    FirebaseService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (res, rej) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                _this.user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
                res();
            }).catch(function (error) {
                rej(error.message);
            });
        });
    };
    FirebaseService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut().then(function () {
                _this.user = null;
                res();
            }).catch(function () {
                rej();
            });
        });
    };
    FirebaseService.prototype.signup = function (email, password) {
        return new Promise(function (res, rej) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                res();
            }).catch(function (error) {
                rej(error.message);
            });
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map