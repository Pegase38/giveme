(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["annonces-annonces-module"],{

/***/ "./src/app/annonces/annonces-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/annonces/annonces-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AnnoncesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnoncesRoutingModule", function() { return AnnoncesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_offres_offres_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/offres/offres.component */ "./src/app/annonces/containers/offres/offres.component.ts");
/* harmony import */ var _containers_add_annonce_add_annonce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/add-annonce/add-annonce.component */ "./src/app/annonces/containers/add-annonce/add-annonce.component.ts");
/* harmony import */ var _core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth/guards/is-user-signed-in-guard.guard */ "./src/app/core/auth/guards/is-user-signed-in-guard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // /annonces
    {
        path: '',
        redirectTo: 'offres',
    },
    {
        path: 'offres',
        component: _containers_offres_offres_component__WEBPACK_IMPORTED_MODULE_2__["OffresComponent"],
    },
    {
        path: 'add-annonce',
        canActivate: [_core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_4__["IsUserSignedInGuardGuard"]],
        component: _containers_add_annonce_add_annonce_component__WEBPACK_IMPORTED_MODULE_3__["AddAnnonceComponent"],
    },
];
var AnnoncesRoutingModule = /** @class */ (function () {
    function AnnoncesRoutingModule() {
    }
    AnnoncesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AnnoncesRoutingModule);
    return AnnoncesRoutingModule;
}());



/***/ }),

/***/ "./src/app/annonces/annonces.module.ts":
/*!*********************************************!*\
  !*** ./src/app/annonces/annonces.module.ts ***!
  \*********************************************/
/*! exports provided: AnnoncesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnoncesModule", function() { return AnnoncesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _annonces_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annonces-routing.module */ "./src/app/annonces/annonces-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_offres_offres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/offres/offres.component */ "./src/app/annonces/containers/offres/offres.component.ts");
/* harmony import */ var _components_offre_offre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offre/offre.component */ "./src/app/annonces/components/offre/offre.component.ts");
/* harmony import */ var _containers_add_annonce_add_annonce_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/add-annonce/add-annonce.component */ "./src/app/annonces/containers/add-annonce/add-annonce.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnnoncesModule = /** @class */ (function () {
    function AnnoncesModule() {
    }
    AnnoncesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_containers_offres_offres_component__WEBPACK_IMPORTED_MODULE_3__["OffresComponent"], _components_offre_offre_component__WEBPACK_IMPORTED_MODULE_4__["OffreComponent"], _containers_add_annonce_add_annonce_component__WEBPACK_IMPORTED_MODULE_5__["AddAnnonceComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _annonces_routing_module__WEBPACK_IMPORTED_MODULE_1__["AnnoncesRoutingModule"]],
        })
    ], AnnoncesModule);
    return AnnoncesModule;
}());



/***/ }),

/***/ "./src/app/annonces/components/offre/offre.component.html":
/*!****************************************************************!*\
  !*** ./src/app/annonces/components/offre/offre.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{ offre.title }}\n  </div>\n  <div class=\"card-img\">\n    <img\n      src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n      [alt]=\"offre.title\"\n    />\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-title\">{{ offre.category }}</div>\n    <div class=\"card-text\">\n      <p>{{ offre.city }}</p>\n      <p>{{ offre.creationDate }}</p>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button mat-button>En savoir plus</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/annonces/components/offre/offre.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/annonces/components/offre/offre.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubm9uY2VzL2NvbXBvbmVudHMvb2ZmcmUvb2ZmcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/annonces/components/offre/offre.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/annonces/components/offre/offre.component.ts ***!
  \**************************************************************/
/*! exports provided: OffreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffreComponent", function() { return OffreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_annonce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/annonce */ "./src/app/shared/models/annonce.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffreComponent = /** @class */ (function () {
    function OffreComponent() {
    }
    OffreComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_annonce__WEBPACK_IMPORTED_MODULE_1__["Annonce"])
    ], OffreComponent.prototype, "offre", void 0);
    OffreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offre',
            template: __webpack_require__(/*! ./offre.component.html */ "./src/app/annonces/components/offre/offre.component.html"),
            styles: [__webpack_require__(/*! ./offre.component.scss */ "./src/app/annonces/components/offre/offre.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OffreComponent);
    return OffreComponent;
}());



/***/ }),

/***/ "./src/app/annonces/containers/add-annonce/add-annonce.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/annonces/containers/add-annonce/add-annonce.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-annonce works!\n</p>\n"

/***/ }),

/***/ "./src/app/annonces/containers/add-annonce/add-annonce.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/annonces/containers/add-annonce/add-annonce.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubm9uY2VzL2NvbnRhaW5lcnMvYWRkLWFubm9uY2UvYWRkLWFubm9uY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/annonces/containers/add-annonce/add-annonce.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/annonces/containers/add-annonce/add-annonce.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddAnnonceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnonceComponent", function() { return AddAnnonceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddAnnonceComponent = /** @class */ (function () {
    function AddAnnonceComponent() {
    }
    AddAnnonceComponent.prototype.ngOnInit = function () {
    };
    AddAnnonceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-annonce',
            template: __webpack_require__(/*! ./add-annonce.component.html */ "./src/app/annonces/containers/add-annonce/add-annonce.component.html"),
            styles: [__webpack_require__(/*! ./add-annonce.component.scss */ "./src/app/annonces/containers/add-annonce/add-annonce.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddAnnonceComponent);
    return AddAnnonceComponent;
}());



/***/ }),

/***/ "./src/app/annonces/containers/offres/offres.component.html":
/*!******************************************************************!*\
  !*** ./src/app/annonces/containers/offres/offres.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <ng-container *ngFor=\"let offre of offres$ | async\">\n    <div class=\"clr-col-sm-12 clr-col-lg-4\">\n      <app-offre [offre]=\"offre\"></app-offre>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/annonces/containers/offres/offres.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/annonces/containers/offres/offres.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fubm9uY2VzL2NvbnRhaW5lcnMvb2ZmcmVzL29mZnJlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/annonces/containers/offres/offres.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/annonces/containers/offres/offres.component.ts ***!
  \****************************************************************/
/*! exports provided: OffresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresComponent", function() { return OffresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_annonce_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/annonce.service */ "./src/app/annonces/services/annonce.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffresComponent = /** @class */ (function () {
    function OffresComponent(annonceService) {
        this.annonceService = annonceService;
        this.offres$ = this.annonceService.getAnnonces();
    }
    OffresComponent.prototype.ngOnInit = function () { };
    OffresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offres',
            template: __webpack_require__(/*! ./offres.component.html */ "./src/app/annonces/containers/offres/offres.component.html"),
            styles: [__webpack_require__(/*! ./offres.component.scss */ "./src/app/annonces/containers/offres/offres.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_annonce_service__WEBPACK_IMPORTED_MODULE_1__["AnnonceService"]])
    ], OffresComponent);
    return OffresComponent;
}());



/***/ }),

/***/ "./src/app/annonces/services/annonce.service.ts":
/*!******************************************************!*\
  !*** ./src/app/annonces/services/annonce.service.ts ***!
  \******************************************************/
/*! exports provided: AnnonceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceService", function() { return AnnonceService; });
/* harmony import */ var src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/config/config.service */ "./src/app/core/config/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnnonceService = /** @class */ (function () {
    function AnnonceService(http, config) {
        this.http = http;
        this.config = config;
    }
    AnnonceService.prototype.getAnnonces = function () {
        return this.http.get(this.getResourceBaseUrl());
    };
    AnnonceService.prototype.add = function (annonce) {
        if (annonce) {
            return this.http.post(this.getResourceBaseUrl(), annonce);
        }
    };
    AnnonceService.prototype.edit = function (annonce) { };
    AnnonceService.prototype.getResourceBaseUrl = function () {
        return this.config.getApiBaseUrl() + "annonces";
    };
    AnnonceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]])
    ], AnnonceService);
    return AnnonceService;
}());



/***/ }),

/***/ "./src/app/shared/enum/annonce-category.enum.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/enum/annonce-category.enum.ts ***!
  \******************************************************/
/*! exports provided: AnnonceCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceCategory", function() { return AnnonceCategory; });
var AnnonceCategory;
(function (AnnonceCategory) {
    AnnonceCategory["BOOK"] = "Book";
    AnnonceCategory["OTHER"] = "Other";
})(AnnonceCategory || (AnnonceCategory = {}));


/***/ }),

/***/ "./src/app/shared/enum/annonce-state.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/enum/annonce-state.enum.ts ***!
  \***************************************************/
/*! exports provided: AnnonceState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceState", function() { return AnnonceState; });
var AnnonceState;
(function (AnnonceState) {
    AnnonceState["CANCEL"] = "Cancel";
    AnnonceState["OPEN"] = "Open";
    AnnonceState["CLOSE"] = "Close";
})(AnnonceState || (AnnonceState = {}));


/***/ }),

/***/ "./src/app/shared/enum/annonce-type.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/enum/annonce-type.enum.ts ***!
  \**************************************************/
/*! exports provided: AnnonceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceType", function() { return AnnonceType; });
var AnnonceType;
(function (AnnonceType) {
    AnnonceType[AnnonceType["OFFRE"] = 1] = "OFFRE";
    AnnonceType[AnnonceType["DEMANDE"] = 2] = "DEMANDE";
})(AnnonceType || (AnnonceType = {}));


/***/ }),

/***/ "./src/app/shared/models/annonce.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/annonce.ts ***!
  \******************************************/
/*! exports provided: Annonce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annonce", function() { return Annonce; });
/* harmony import */ var _enum_annonce_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/annonce-category.enum */ "./src/app/shared/enum/annonce-category.enum.ts");
/* harmony import */ var _enum_annonce_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/annonce-state.enum */ "./src/app/shared/enum/annonce-state.enum.ts");
/* harmony import */ var _enum_annonce_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/annonce-type.enum */ "./src/app/shared/enum/annonce-type.enum.ts");



var Annonce = /** @class */ (function () {
    function Annonce(fields) {
        this.category = _enum_annonce_category_enum__WEBPACK_IMPORTED_MODULE_0__["AnnonceCategory"].OTHER;
        this.state = _enum_annonce_state_enum__WEBPACK_IMPORTED_MODULE_1__["AnnonceState"].OPEN;
        this.type = _enum_annonce_type_enum__WEBPACK_IMPORTED_MODULE_2__["AnnonceType"].OFFRE;
        this.creationDate = new Date().toISOString();
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return Annonce;
}());



/***/ })

}]);
//# sourceMappingURL=annonces-annonces-module.js.map