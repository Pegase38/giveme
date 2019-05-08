(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/auth/guards/is-user-signed-in-guard.guard.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/auth/guards/is-user-signed-in-guard.guard.ts ***!
  \*******************************************************************/
/*! exports provided: IsUserSignedInGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUserSignedInGuardGuard", function() { return IsUserSignedInGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/core/auth/services/session.service.ts");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config.service */ "./src/app/core/config/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IsUserSignedInGuardGuard = /** @class */ (function () {
    function IsUserSignedInGuardGuard(session, router, config) {
        this.session = session;
        this.router = router;
        this.config = config;
    }
    IsUserSignedInGuardGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.session.isSignedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (isSignedIn) {
            if (isSignedIn !== true) {
                _this.router.navigate(_this.config.getLoginRoute());
            }
        }));
    };
    IsUserSignedInGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], IsUserSignedInGuardGuard);
    return IsUserSignedInGuardGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map