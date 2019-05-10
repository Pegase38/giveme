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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-12\"><h1>Change password</h1></div>\r\n</div>\r\n<ng-container *ngIf=\"user\">\r\n  <form\r\n    [formGroup]=\"changePasswordForm\"\r\n    (ngSubmit)=\"onChangePassword()\"\r\n    clrForm\r\n  >\r\n    <input clrInput type=\"hidden\" formControlName=\"id\" name=\"id\" id=\"id\" />\r\n    <clr-password-container>\r\n      <label>New password</label>\r\n      <input\r\n        clrPassword\r\n        type=\"text\"\r\n        formControlName=\"newPassword\"\r\n        name=\"newPassword\"\r\n        id=\"newPassword\"\r\n      />\r\n      <clr-control-error>\r\n        <div *clrIfError=\"'required'\">\r\n          Password is required.\r\n        </div>\r\n        <div *clrIfError=\"'minlength'\">\r\n          Password must be at least 8 characters long.\r\n        </div></clr-control-error\r\n      >\r\n    </clr-password-container>\r\n    <clr-password-container>\r\n      <label>Confirm password</label>\r\n      <input\r\n        clrPassword\r\n        type=\"text\"\r\n        formControlName=\"confirmedPassword\"\r\n        name=\"confirmedPassword\"\r\n        id=\"confirmedPassword\"\r\n      />\r\n      <clr-control-error>\r\n        <div *clrIfError=\"'required'\">\r\n          Confirmed password is required.\r\n        </div>\r\n        <div *clrIfError=\"'match'\">\r\n          Passwords must match.\r\n        </div></clr-control-error\r\n      >\r\n    </clr-password-container>\r\n    <button\r\n      class=\"btn btn-primary\"\r\n      type=\"submit\"\r\n      [disabled]=\"changePasswordForm.invalid\"\r\n    >\r\n      Save changes\r\n    </button>\r\n    <button class=\"btn\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/account/services/users.service.ts");
/* harmony import */ var _core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/auth/services/session.service */ "./src/app/core/auth/services/session.service.ts");
/* harmony import */ var src_app_shared_validators_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/validators/match.validator */ "./src/app/shared/validators/match.validator.ts");
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
    function ChangePasswordComponent(fb, session, router, userService) {
        this.fb = fb;
        this.session = session;
        this.router = router;
        this.userService = userService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session
            .getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (user) {
            _this.changePasswordForm = _this.fb.group({
                id: user.id,
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmedPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }, {
                validator: Object(src_app_shared_validators_match_validator__WEBPACK_IMPORTED_MODULE_7__["MatchValidator"])('newPassword', 'confirmedPassword'),
            });
            _this.user = user;
        });
    };
    ChangePasswordComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.userService
            .updateUserPassword(this.changePasswordForm.value)
            .subscribe(function () {
            _this.router.navigate(['account']);
        });
    };
    ChangePasswordComponent.prototype.onCancel = function () {
        this.router.navigate(['account']);
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/account/containers/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/account/containers/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-12\"><h1>Update personnal information</h1></div>\r\n</div>\r\n<ng-container *ngIf=\"user\">\r\n  <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"onEditProfile()\" clrForm>\r\n    <input clrInput type=\"hidden\" formControlName=\"id\" name=\"id\" id=\"id\" />\r\n    <clr-input-container>\r\n      <label>Username</label>\r\n      <input\r\n        clrInput\r\n        type=\"text\"\r\n        formControlName=\"username\"\r\n        name=\"Username\"\r\n        id=\"username\"\r\n      />\r\n      <clr-control-error>\r\n        <div *clrIfError=\"'required'\">\r\n          Username is required.\r\n        </div></clr-control-error\r\n      >\r\n    </clr-input-container>\r\n    <clr-input-container>\r\n      <label>Email</label>\r\n      <input\r\n        clrInput\r\n        type=\"text\"\r\n        formControlName=\"email\"\r\n        name=\"Email\"\r\n        id=\"email\"\r\n      />\r\n      <clr-control-error>\r\n        <div *clrIfError=\"'required'\">\r\n          Email is required.\r\n        </div>\r\n        <div *clrIfError=\"'email'\">\r\n          Incorrect Email.\r\n        </div></clr-control-error\r\n      >\r\n    </clr-input-container>\r\n    <button\r\n      class=\"btn btn-primary\"\r\n      type=\"submit\"\r\n      [disabled]=\"editProfileForm.invalid\"\r\n    >\r\n      Save changes\r\n    </button>\r\n    <button class=\"btn\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/account/containers/edit-profile/edit-profile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/account/containers/edit-profile/edit-profile.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#username,\n#email {\n  width: 220px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jb250YWluZXJzL2VkaXQtcHJvZmlsZS9EOlxcRGV2ZWxvcHBlbWVudFxcZ2l2ZW1lXFxjbGllbnQvc3JjXFxhcHBcXGFjY291bnRcXGNvbnRhaW5lcnNcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29udGFpbmVycy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXJuYW1lLFxyXG4jZW1haWwge1xyXG4gIHdpZHRoOiAyMjBweDtcclxufVxyXG4iXX0= */"

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
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                ]),
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            });
            _this.user = user;
        });
    };
    EditProfileComponent.prototype.onEditProfile = function () {
        var _this = this;
        if (this.editProfileForm.valid) {
            this.userService.updateUser(this.editProfileForm.value).subscribe(function () {
                _this.router.navigate(['account']);
            });
        }
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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-12\"><h1>My account</h1></div>\r\n</div>\r\n<ng-container *ngIf=\"user$ | async as user\">\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-8\"><h3>Personal information</h3></div>\r\n    <div class=\"clr-col-4\">\r\n      <button class=\"btn btn-outline\" routerLink=\"/account/edit-profile\">\r\n        Edit profile\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-4\">Username:</div>\r\n    <div class=\"clr-col\">{{ user.username }}</div>\r\n  </div>\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-4\">Email:</div>\r\n    <div class=\"clr-col\">{{ user.email }}</div>\r\n  </div>\r\n\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-8\"><h3>Password</h3></div>\r\n    <div class=\"clr-col-4\">\r\n      <button class=\"btn btn-outline\" routerLink=\"/account/change-password\">\r\n        Change password\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clr-row\">\r\n    <div class=\"clr-col-4\">Password:</div>\r\n    <div class=\"clr-col\">*********</div>\r\n  </div>\r\n</ng-container>\r\n"

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

module.exports = "<div class=\"clr-row\">\r\n  <div class=\"clr-col-12\"><h1>Create an account</h1></div>\r\n</div>\r\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\" clrForm>\r\n  <clr-input-container>\r\n    <label>Username</label>\r\n    <input\r\n      clrInput\r\n      type=\"text\"\r\n      formControlName=\"username\"\r\n      name=\"Username\"\r\n      id=\"username\"\r\n    />\r\n    <clr-control-error>\r\n      <div *clrIfError=\"'required'\">\r\n        Username is required.\r\n      </div></clr-control-error\r\n    >\r\n  </clr-input-container>\r\n  <clr-input-container>\r\n    <label>Email</label>\r\n    <input\r\n      clrInput\r\n      type=\"text\"\r\n      formControlName=\"email\"\r\n      name=\"Email\"\r\n      id=\"email\"\r\n    />\r\n    <clr-control-error>\r\n      <div *clrIfError=\"'required'\">\r\n        Email is required.\r\n      </div>\r\n      <div *clrIfError=\"'email'\">\r\n        Incorrect Email.\r\n      </div></clr-control-error\r\n    >\r\n  </clr-input-container>\r\n  <clr-password-container>\r\n    <label>Password</label>\r\n    <input\r\n      clrPassword\r\n      type=\"text\"\r\n      formControlName=\"password\"\r\n      name=\"password\"\r\n      id=\"password\"\r\n    />\r\n    <clr-control-error>\r\n      <div *clrIfError=\"'required'\">\r\n        Password is required.\r\n      </div>\r\n      <div *clrIfError=\"'minlength'\">\r\n        Password must be at least 8 characters long.\r\n      </div></clr-control-error\r\n    >\r\n  </clr-password-container>\r\n  <clr-password-container>\r\n    <label>Confirm password</label>\r\n    <input\r\n      clrPassword\r\n      type=\"text\"\r\n      formControlName=\"confirmedPassword\"\r\n      name=\"confirmedPassword\"\r\n      id=\"confirmedPassword\"\r\n    />\r\n    <clr-control-error>\r\n      <div *clrIfError=\"'required'\">\r\n        Confirmed password is required.\r\n      </div>\r\n      <div *clrIfError=\"'match'\">\r\n        Passwords must match.\r\n      </div></clr-control-error\r\n    >\r\n  </clr-password-container>\r\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signupForm.invalid\">\r\n    Create account\r\n  </button>\r\n</form>\r\n<div>\r\n  Have an account? <a routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a>\r\n</div>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/account/services/users.service.ts");
/* harmony import */ var src_app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/logger/services/logger.service */ "./src/app/core/logger/services/logger.service.ts");
/* harmony import */ var src_app_shared_validators_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/validators/match.validator */ "./src/app/shared/validators/match.validator.ts");
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
    function RegisterComponent(fb, userService, logger) {
        this.fb = fb;
        this.userService = userService;
        this.logger = logger;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegisterComponent.prototype.onSignup = function () {
        var _this = this;
        if (this.signupForm.valid) {
            this.userService
                .register(this.signupForm.value)
                .subscribe(function () { }, function (err) { return _this.logger.error(JSON.stringify(err)); });
        }
    };
    // TOOD : verify unicity for email/username & matched passwords
    RegisterComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmedPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        }, {
            validator: Object(src_app_shared_validators_match_validator__WEBPACK_IMPORTED_MODULE_4__["MatchValidator"])('password', 'confirmedPassword'),
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/account/containers/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/account/containers/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/auth/services/auth.service */ "./src/app/core/auth/services/auth.service.ts");
/* harmony import */ var src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/config/config.service */ "./src/app/core/config/config.service.ts");
/* harmony import */ var src_app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/logger/services/logger.service */ "./src/app/core/logger/services/logger.service.ts");
/* harmony import */ var src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auth/services/session.service */ "./src/app/core/auth/services/session.service.ts");
/* harmony import */ var src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/auth/user */ "./src/app/shared/models/auth/user.ts");
/* harmony import */ var src_app_shared_models_auth_credential__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/auth/credential */ "./src/app/shared/models/auth/credential.ts");
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
    function UsersService(http, session, auth, config, logger, router) {
        this.http = http;
        this.session = session;
        this.auth = auth;
        this.config = config;
        this.logger = logger;
        this.router = router;
    }
    /**
     * Update a user and update the session
     */
    UsersService.prototype.updateUser = function (user) {
        var _this = this;
        if (user) {
            return this.http
                .patch(this.getResourceBaseUrl() + "/" + user.id, user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this.http.get(_this.getResourceBaseUrl() + "/me");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userResponse) { return _this.session.updateUser(new src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_8__["User"](userResponse)); }));
        }
    };
    /**
     * Récupère les informations courantes de l'utilisateur
     * puis patch le password.
     * @param info les informations de modification de password (id:userid)
     */
    UsersService.prototype.updateUserPassword = function (info) {
        var _this = this;
        if (info.newPassword !== info.confirmedPassword) {
            throw new Error('Passwords missmatched');
        }
        return this.http.get(this.getResourceBaseUrl() + "/me").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            var newUser = new src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_8__["User"](user);
            newUser.password = info.newPassword;
            return newUser;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return _this.http.patch(_this.getResourceBaseUrl() + "/" + user.id, user);
        }));
    };
    /**
     * créer l'utilisateur puis s'authentifie.
     * L'utilisateur est ensuite redirigé sur la page post login.
     */
    UsersService.prototype.register = function (user) {
        var _this = this;
        if (user.password !== user.confirmedPassword) {
            throw new Error('Passwords missmatched');
        }
        delete user.confirmedPassword;
        return this.http.post(this.getResourceBaseUrl(), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.auth.signIn(new src_app_shared_models_auth_credential__WEBPACK_IMPORTED_MODULE_9__["Credential"]({ email: user.email, password: user.password }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.logger.info('Register and login success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.router.navigate(_this.config.getPostLoginDefaultRoute()); }));
    };
    UsersService.prototype.getResourceBaseUrl = function () {
        return this.config.getApiBaseUrl() + "users";
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            src_app_core_auth_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            src_app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/validators/match.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/validators/match.validator.ts ***!
  \******************************************************/
/*! exports provided: MatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchValidator", function() { return MatchValidator; });
function MatchValidator(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.match) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ match: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map