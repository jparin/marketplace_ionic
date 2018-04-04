webpackJsonp([14],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacePageModule", function() { return MarketplacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marketplace__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MarketplacePageModule = /** @class */ (function () {
    function MarketplacePageModule() {
    }
    MarketplacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__marketplace__["a" /* MarketplacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__marketplace__["a" /* MarketplacePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], MarketplacePageModule);
    return MarketplacePageModule;
}());

//# sourceMappingURL=marketplace.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplacePage; });
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
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketplacePage = /** @class */ (function () {
    function MarketplacePage(navCtrl, properties, modalCtrl) {
        this.navCtrl = navCtrl;
        this.properties = properties;
        this.modalCtrl = modalCtrl;
        this.currentProperties = this.properties.query();
    }
    MarketplacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketplacePage');
    };
    MarketplacePage.prototype.addProperty = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('PropertyCreatePage');
        addModal.onDidDismiss(function (property) {
            if (property) {
                _this.properties.add(property);
            }
        });
        addModal.present();
    };
    /**
     * Delete an property from the list of properties.
     */
    MarketplacePage.prototype.deleteProperty = function (property) {
        this.properties.delete(property);
    };
    /**
     * Navigate to the detail page for this property.
     */
    MarketplacePage.prototype.openProperty = function (property) {
        this.navCtrl.push('PropertyDetailPage', {
            property: property
        });
    };
    MarketplacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketplace',template:/*ion-inline-start:"C:\Users\Joed\marketplace_ionic\src\pages\marketplace\marketplace.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let property of currentProperties">\n      <button ion-item (click)="openProperty(property)">\n        <ion-avatar property-start>\n          <img [src]="property.profilePic" />\n        </ion-avatar>\n        <h2>{{property.name}}</h2>\n        <p>{{property.about}}</p>\n        <ion-note property-end *ngIf="property.note">{{property.note}}</ion-note>\n        <ion-grid class="property-sub-details-grid">\n          <ion-row>\n            <ion-col>\n              Price per slot(CET): <span>{{property.price_per_slot}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              City: <span>{{property.city}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Available slots: <span>{{property.available_slots}}</span>\n            </ion-col>\n            <ion-col>\n              Participant: <span>{{property.participant}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(property)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Joed\marketplace_ionic\src\pages\marketplace\marketplace.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Properties */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MarketplacePage);
    return MarketplacePage;
}());

//# sourceMappingURL=marketplace.js.map

/***/ })

});
//# sourceMappingURL=14.js.map