(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guards_is_user_unknown_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/guards/is-user-unknown.guard */ "./src/app/core/auth/guards/is-user-unknown.guard.ts");
/* harmony import */ var _core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/guards/is-user-signed-in-guard.guard */ "./src/app/core/auth/guards/is-user-signed-in-guard.guard.ts");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/account/containers/profile/profile.component.ts");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/account/containers/register/register.component.ts");
/* harmony import */ var _containers_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/edit-profile/edit-profile.component */ "./src/app/account/containers/edit-profile/edit-profile.component.ts");
/* harmony import */ var _containers_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/change-password/change-password.component */ "./src/app/account/containers/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
    },
    {
        path: 'register',
        canActivate: [_core_auth_guards_is_user_unknown_guard__WEBPACK_IMPORTED_MODULE_2__["IsUserUnknownGuard"]],
        component: _containers_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
    },
    {
        path: 'profile',
        canActivate: [_core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_3__["IsUserSignedInGuardGuard"]],
        component: _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
    },
    {
        path: 'edit-profile',
        canActivate: [_core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_3__["IsUserSignedInGuardGuard"]],
        component: _containers_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
    },
    {
        path: 'change-password',
        canActivate: [_core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_3__["IsUserSignedInGuardGuard"]],
        component: _containers_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
    },
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/account/containers/register/register.component.ts");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/account/containers/profile/profile.component.ts");
/* harmony import */ var _containers_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/edit-profile/edit-profile.component */ "./src/app/account/containers/edit-profile/edit-profile.component.ts");
/* harmony import */ var _containers_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/change-password/change-password.component */ "./src/app/account/containers/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _containers_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _containers_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"],
                _containers_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"],
            ],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_1__["AccountRoutingModule"]],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/containers/change-password/change-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/account/containers/change-password/change-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  change-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/account/containers/change-password/change-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/account/containers/change-password/change-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29udGFpbmVycy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/containers/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/account/containers/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
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

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/account/containers/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/account/containers/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/account/containers/edit-profile/edit-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/account/containers/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-12\"><h1>Update personnal information</h1></div>\n</div>\n<ng-container *ngIf=\"user\">\n  <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"onEditProfile()\" clrForm>\n    <input clrInput type=\"hidden\" formControlName=\"id\" name=\"id\" id=\"id\" />\n    <clr-input-container>\n      <label>Username</label>\n      <input\n        clrInput\n        type=\"text\"\n        formControlName=\"username\"\n        name=\"Username\"\n        id=\"username\"\n      />\n    </clr-input-container>\n    <clr-input-container>\n      <label>Email</label>\n      <input\n        clrInput\n        type=\"text\"\n        formControlName=\"email\"\n        name=\"Email\"\n        id=\"email\"\n      />\n    </clr-input-container>\n    <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n    <button class=\"btn\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n  </form>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/account/containers/edit-profile/edit-profile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/account/containers/edit-profile/edit-profile.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#username,\n#email {\n  width: 220px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jb250YWluZXJzL2VkaXQtcHJvZmlsZS9DOlxcZGV2XFxnaXZlbWVcXGNsaWVudC9zcmNcXGFwcFxcYWNjb3VudFxcY29udGFpbmVyc1xcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9jb250YWluZXJzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlcm5hbWUsXHJcbiNlbWFpbCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/containers/edit-profile/edit-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/account/containers/edit-profile/edit-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/account/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth/services/session.service */ "./src/app/core/auth/services/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(session, router, userService) {
        this.session = session;
        this.router = router;
        this.userService = userService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session
            .getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (user) {
            _this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.id),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email),
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.username),
            });
            _this.user = user;
        });
    };
    EditProfileComponent.prototype.onEditProfile = function () {
        var _this = this;
        this.userService.updateUser(this.editProfileForm.value).subscribe(function () {
            _this.router.navigate(['account']);
        });
    };
    EditProfileComponent.prototype.onCancel = function () {
        this.router.navigate(['account']);
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/account/containers/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/account/containers/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/account/containers/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/account/containers/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-12\"><h1>My account</h1></div>\n</div>\n<ng-container *ngIf=\"user$ | async as user\">\n  <div class=\"clr-row\">\n    <div class=\"clr-col-8\"><h3>Personal information</h3></div>\n    <div class=\"clr-col-4\">\n      <button class=\"btn btn-outline\" routerLink=\"/account/edit-profile\">\n        Edit profile\n      </button>\n    </div>\n  </div>\n  <div class=\"clr-row\">\n    <div class=\"clr-col-4\">Username:</div>\n    <div class=\"clr-col\">{{ user.username }}</div>\n  </div>\n  <div class=\"clr-row\">\n    <div class=\"clr-col-4\">Email:</div>\n    <div class=\"clr-col\">{{ user.email }}</div>\n  </div>\n\n  <div class=\"clr-row\">\n    <div class=\"clr-col-8\"><h3>Password</h3></div>\n    <div class=\"clr-col-4\">\n      <button class=\"btn btn-outline\" routerLink=\"/account/change-password\">\n        Change password\n      </button>\n    </div>\n  </div>\n  <div class=\"clr-row\">\n    <div class=\"clr-col-4\">Password:</div>\n    <div class=\"clr-col\">*********</div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/account/containers/profile/profile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/account/containers/profile/profile.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29udGFpbmVycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/containers/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/account/containers/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/services/session.service */ "./src/app/core/auth/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(session) {
        this.session = session;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user$ = this.session.getUser();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/account/containers/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/account/containers/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/account/containers/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/account/containers/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/account/containers/register/register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/account/containers/register/register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29udGFpbmVycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/containers/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/account/containers/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/account/containers/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/account/containers/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/account/services/users.service.ts":
/*!***************************************************!*\
  !*** ./src/app/account/services/users.service.ts ***!
  \***************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/config/config.service */ "./src/app/core/config/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/auth/user */ "./src/app/shared/models/auth/user.ts");
/* harmony import */ var src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/services/session.service */ "./src/app/core/auth/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = /** @class */ (function () {
    function UsersService(http, session, config) {
        this.http = http;
        this.session = session;
        this.config = config;
    }
    /**
     * Update a user and update the session
     */
    UsersService.prototype.updateUser = function (user) {
        var _this = this;
        if (user) {
            console.log(user.id);
            return this.http
                .patch(this.getResourceBaseUrl() + "/" + user.id, user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this.http.get(_this.getResourceBaseUrl() + "/me");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userResponse) { return _this.session.updateUser(new src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_4__["User"](userResponse)); }));
        }
    };
    UsersService.prototype.getResourceBaseUrl = function () {
        return this.config.getApiBaseUrl() + "users";
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map