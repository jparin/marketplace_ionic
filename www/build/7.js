webpackJsonp([7],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailPageModule", function() { return PropertyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PropertyDetailPageModule = /** @class */ (function () {
    function PropertyDetailPageModule() {
    }
    PropertyDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__property_detail__["a" /* PropertyDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__property_detail__["a" /* PropertyDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PropertyDetailPageModule);
    return PropertyDetailPageModule;
}());

//# sourceMappingURL=property-detail.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PropertyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage(navCtrl, navParams, properties) {
        this.navCtrl = navCtrl;
        this.property = navParams.get('property') || properties.defaultProperty;
    }
    PropertyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Joed\marketplace_ionic\src\pages\property-detail\property-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ property.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="property-profile" text-center #profilePic [style.background-image]="\'url(\' + property.profilePic + \')\'">\n  </div>\n\n  <div class="property-detail" padding>\n    <h2>{{property.name}}</h2>\n    <ion-grid class="property-sub-details-grid">\n      <ion-row>\n        <ion-col>\n          Price per slot(CET): <span>{{property.price_per_slot}}</span>\n        </ion-col>\n        <ion-col>\n          City: <span>{{property.city}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Available slots: <span>{{property.available_slots}}</span>\n        </ion-col>\n        <ion-col>\n          Participant: <span>{{property.participant}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p>{{property.about}}</p>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Joed\marketplace_ionic\src\pages\property-detail\property-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Properties */]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());

//# sourceMappingURL=property-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map