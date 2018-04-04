webpackJsonp([4],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmed_password: '',
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.presentLoadingCustom();
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.signup_result = resp;
            _this.loading.dismiss(function () {
                console.log('Dismissed loading');
            });
            if (_this.signup_result.status == 'success') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["b" /* MainPage */]);
            }
        }, function (err) {
            _this.loading.dismiss(function () {
                console.log('Dismissed loading');
            });
            // this.navCtrl.push(MainPage);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.presentLoadingCustom = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n          <p>Please wait ....</p>\n        </div>"
        });
        this.loading.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Joed\marketplace_ionic\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n    <img class="logo-small" src="assets/img/logo-small.png">\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doSignup()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>{{ \'First Name\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.firstname" name="firstname"></ion-input>\n\n      </ion-item>\n\n      <div  padding-top padding-left *ngIf="signup_result !== undefined && signup_result.errors !== undefined && signup_result.errors.firstname !== undefined" class="text-danger">\n\n          {{signup_result.errors?.firstname}}\n\n      </div>\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Last Name\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.lastname" name="lastname"></ion-input>\n\n      </ion-item>\n\n      <div  padding-top padding-left *ngIf="signup_result !== undefined && signup_result.errors !== undefined && signup_result.errors.lastname !== undefined" class="text-danger">\n\n          {{signup_result.errors?.lastname}}\n\n      </div>\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Email Address\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n      <div  padding-top padding-left *ngIf="signup_result !== undefined && signup_result.errors !== undefined && signup_result.errors.email !== undefined" class="text-danger">\n\n          {{signup_result.errors?.email}}\n\n      </div>\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Password\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n      <div  padding-top padding-left *ngIf="signup_result !== undefined && signup_result.errors !== undefined && signup_result.errors.password !== undefined" class="text-danger">\n\n          {{signup_result.errors?.password}}\n\n      </div>\n\n      <ion-item>\n\n        <ion-label floating>{{ \'Confirm Password\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.confirmed_password" name="confirmed_password"></ion-input>\n\n      </ion-item>\n\n      <div  padding-top padding-left *ngIf="signup_result !== undefined && signup_result.errors !== undefined && signup_result.errors.confirmed_password !== undefined" class="text-danger">\n\n          {{signup_result.errors?.confirmed_password}}\n\n      </div>\n\n      <div padding>\n\n        <button ion-button color="secondary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Joed\marketplace_ionic\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map