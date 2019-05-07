(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./annonces/annonces.module": [
		"./src/app/annonces/annonces.module.ts",
		"annonces-annonces-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth/guards/is-user-signed-in-guard.guard */ "./src/app/core/auth/guards/is-user-signed-in-guard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'annonces',
        canActivate: [_core_auth_guards_is_user_signed_in_guard_guard__WEBPACK_IMPORTED_MODULE_2__["IsUserSignedInGuardGuard"]],
        loadChildren: './annonces/annonces.module#AnnoncesModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-interface></app-user-interface>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'giveme';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-interface/user-interface.module */ "./src/app/user-interface/user-interface.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/auth/interceptors/auth.interceptor */ "./src/app/core/auth/interceptors/auth.interceptor.ts");
/* harmony import */ var _core_logger_interceptors_logger_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/logger/interceptors/logger.interceptor */ "./src/app/core/logger/interceptors/logger.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_7__["UserInterfaceModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/app/' },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_logger_interceptors_logger_interceptor__WEBPACK_IMPORTED_MODULE_10__["LoggerInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

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



/***/ }),

/***/ "./src/app/core/auth/guards/is-user-unknown.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/auth/guards/is-user-unknown.guard.ts ***!
  \***********************************************************/
/*! exports provided: IsUserUnknownGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUserUnknownGuard", function() { return IsUserUnknownGuard; });
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





var IsUserUnknownGuard = /** @class */ (function () {
    function IsUserUnknownGuard(session, router, config) {
        this.session = session;
        this.router = router;
        this.config = config;
    }
    IsUserUnknownGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.session.isSignedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (isSignedIn) {
            if (isSignedIn !== false) {
                _this.router.navigate(_this.config.getPostLoginDefaultRoute());
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isSignedIn) { return !isSignedIn; }));
    };
    IsUserUnknownGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], IsUserUnknownGuard);
    return IsUserUnknownGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/interceptors/auth.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/auth/interceptors/auth.interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/auth/services/auth.service.ts");
/* harmony import */ var _logger_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger/services/logger.service */ "./src/app/core/logger/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth, logger) {
        this.auth = auth;
        this.logger = logger;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.auth.getAuthorizationToken();
        this.logger.info('authToken:' + authToken);
        var authReq = req.clone({
            headers: req.headers.set('Authorization', authToken),
        });
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _logger_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/auth/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/core/auth/services/session.service.ts");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config.service */ "./src/app/core/config/config.service.ts");
/* harmony import */ var src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/auth/session-state */ "./src/app/shared/models/auth/session-state.ts");
/* harmony import */ var src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/auth/user */ "./src/app/shared/models/auth/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, session, config) {
        var _this = this;
        this.http = http;
        this.session = session;
        this.config = config;
        this.tokenKey = 'Bearer';
        this.session.getToken().subscribe(function (token) {
            _this.authorizationToken = token;
        });
    }
    AuthService.prototype.signIn = function (credential) {
        var _this = this;
        return this.http
            .post(this.getResourceBaseUrl() + "/login", credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (authResponse) {
            return _this.session.updateState(new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_5__["SessionState"]({
                token: authResponse.token,
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (authResponse) {
            return _this.http.get(_this.getResourceBaseUrl() + "/me").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userResponse) {
                return _this.session.updateState(new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_5__["SessionState"]({
                    token: authResponse.token,
                    user: new src_app_shared_models_auth_user__WEBPACK_IMPORTED_MODULE_6__["User"](userResponse),
                }));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return undefined; }));
    };
    /*signOut() {
      this.session.state$
        .pipe(
          first(),
          map(state => state.tokenId),
          switchMap(tokenId =>
            this.http.delete(
              `${this.getResourceBaseUrl()}/${encodeURIComponent(tokenId)}`
            )
          ),
          finalize(() => this.session.updateState(new SessionState()))
        )
        .subscribe();
    }*/
    AuthService.prototype.getAuthorizationToken = function () {
        return this.tokenKey + " " + encodeURIComponent(this.authorizationToken);
    };
    AuthService.prototype.getResourceBaseUrl = function () {
        return this.config.getApiBaseUrl() + "users";
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/services/session.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/auth/services/session.service.ts ***!
  \*******************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/auth/session-state */ "./src/app/shared/models/auth/session-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Gère la session dans le local storage.
 * Propose un API pour modifier la session et récupérer les informations de sessions.
 */
var SessionService = /** @class */ (function () {
    function SessionService() {
        var _this = this;
        this.localStorageKey = 'sessionState';
        this.sessionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._initializeState();
        window.addEventListener('storage', function (event) {
            /* Not concerned here. */
            if (event.key !== _this.localStorageKey) {
                return;
            }
            _this._initializeState();
        });
    }
    Object.defineProperty(SessionService.prototype, "state$", {
        get: function () {
            return this.sessionState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state !== null; }));
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.getToken = function () {
        return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.token; }));
    };
    SessionService.prototype.getUser = function () {
        return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.user; }));
    };
    SessionService.prototype.isSignedIn = function () {
        return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.isSignedIn(); }));
    };
    SessionService.prototype.onSignin = function () {
        return this._onIsSignedInChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state.isSignedIn(); }));
    };
    SessionService.prototype.onSignout = function () {
        return this._onIsSignedInChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return !state.isSignedIn(); }));
    };
    SessionService.prototype.markTokenExpired = function () {
        this.updateState(new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_3__["SessionState"]());
    };
    SessionService.prototype.updateState = function (stateData) {
        var state = Object.assign(new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_3__["SessionState"](), this.sessionState$.getValue(), stateData);
        this.sessionState$.next(state);
        this._saveState(state);
    };
    SessionService.prototype._initializeState = function () {
        this.sessionState$.next(this._loadState() || new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_3__["SessionState"]());
    };
    SessionService.prototype._saveState = function (state) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(state));
    };
    SessionService.prototype._loadState = function () {
        var stateString = localStorage.getItem(this.localStorageKey);
        if (stateString == null) {
            return null;
        }
        return new src_app_shared_models_auth_session_state__WEBPACK_IMPORTED_MODULE_3__["SessionState"](JSON.parse(stateString));
    };
    SessionService.prototype._onIsSignedInChange = function () {
        return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (previous, next) { return previous.isSignedIn() === next.isSignedIn(); }), 
        /* Skip the current behaviour subject value and wait for a change. */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1));
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/core/config/config.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/config/config.service.ts ***!
  \***********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.API_PROTOCOL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiProtocol;
        this.API_HOST = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiHost;
        this.API_PORT = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiPort;
        this.API_BASE_PATH = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBasePath;
    }
    ConfigService.prototype.getApiBaseUrl = function () {
        return this.API_PROTOCOL + "://" + this.API_HOST + ":" + this.API_PORT + "/" + this.API_BASE_PATH;
    };
    ConfigService.prototype.getLoginRoute = function () {
        return ['login'];
    };
    ConfigService.prototype.getPostLoginDefaultRoute = function () {
        return ['annonces'];
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/core/logger/interceptors/logger.interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/logger/interceptors/logger.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: LoggerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerInterceptor", function() { return LoggerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/logger/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggerInterceptor = /** @class */ (function () {
    function LoggerInterceptor(logger) {
        this.logger = logger;
    }
    LoggerInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var started = Date.now();
        var ok;
        // extend server response observable with logging
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        // Succeeds when there is a response; ignore other events
        function (event) { return (ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] ? 'succeeded' : ''); }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) { return (ok = 'failed'); }), 
        // Log when response observable either completes or errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\" " + ok + " in " + elapsed + " ms.";
            _this.logger.info(msg);
        }));
    };
    LoggerInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
    ], LoggerInterceptor);
    return LoggerInterceptor;
}());



/***/ }),

/***/ "./src/app/core/logger/services/logger.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/logger/services/logger.service.ts ***!
  \********************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service de log.
 * En production, on fera également un call à l'api de log.
 * En dev, on fera seulement un log dans console.log.
 * TODO : ajouter un mecanisme de log serveur pour la production
 */
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * Log une information : message. En production, appelle un service de loggin
     *
     * @param message le message à logger
     */
    LoggerService.prototype.info = function (message) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(this.formatMessage(message));
        }
    };
    /**
     * Log un message d'erreur : message. En production, appelle un service de loggin
     *
     * @param message le message à logger
     */
    LoggerService.prototype.error = function (message) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.error(this.formatMessage(message));
        }
    };
    /**
     * Ajoute la date au message
     *
     * @param message le message à formater
     */
    LoggerService.prototype.formatMessage = function (message) {
        return new Date() + ' : ' + message;
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/login/containers/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/login/containers/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n  <input formControlName=\"email\" placeholder=\"Email\" type=\"text\" />\n  <input formControlName=\"password\" placeholder=\"Password\" type=\"password\" />\n  <button>LOG IN</button>\n</form>\n"

/***/ }),

/***/ "./src/app/login/containers/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/login/containers/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NvbnRhaW5lcnMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/login/containers/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/login/containers/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/logger/services/logger.service */ "./src/app/core/logger/services/logger.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/services/auth.service */ "./src/app/core/auth/services/auth.service.ts");
/* harmony import */ var src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/config/config.service */ "./src/app/core/config/config.service.ts");
/* harmony import */ var src_app_shared_models_auth_credential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/auth/credential */ "./src/app/shared/models/auth/credential.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, config, logger) {
        this.auth = auth;
        this.router = router;
        this.config = config;
        this.logger = logger;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.auth
            .signIn(new src_app_shared_models_auth_credential__WEBPACK_IMPORTED_MODULE_7__["Credential"](this.loginForm.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
            .subscribe(function () {
            _this.logger.info('Login sucess!');
            _this.router.navigate(_this.config.getPostLoginDefaultRoute());
        }, function (err) {
            /*this.messageService.add({ severity: 'error', summary: 'Login error' }*/
            return _this.logger.error(err);
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/containers/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/containers/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_0__["LoggerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/login/containers/login/login.component.ts");
/* harmony import */ var _core_auth_guards_is_user_unknown_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/guards/is-user-unknown.guard */ "./src/app/core/auth/guards/is-user-unknown.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        canActivate: [_core_auth_guards_is_user_unknown_guard__WEBPACK_IMPORTED_MODULE_3__["IsUserUnknownGuard"]],
        component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/login/containers/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_0__["LoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/models/auth/credential.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/auth/credential.ts ***!
  \**************************************************/
/*! exports provided: Credential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return Credential; });
var Credential = /** @class */ (function () {
    function Credential(fields) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return Credential;
}());



/***/ }),

/***/ "./src/app/shared/models/auth/session-state.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/auth/session-state.ts ***!
  \*****************************************************/
/*! exports provided: SessionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return SessionState; });
var SessionState = /** @class */ (function () {
    function SessionState(args) {
        if (args === void 0) { args = {}; }
        this.token = args.token;
        this.user = args.user;
    }
    SessionState.prototype.isSignedIn = function () {
        return this.token != null;
    };
    return SessionState;
}());



/***/ }),

/***/ "./src/app/shared/models/auth/user.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/auth/user.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(args) {
        if (args === void 0) { args = {}; }
        this.id = args.id;
        this.name = args.name;
        this.email = args.email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user-interface/components/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-interface/components/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-interface/components/footer/footer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/user-interface/components/footer/footer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interface/components/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-interface/components/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/user-interface/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/user-interface/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/user-interface/components/header/header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-interface/components/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button (click)=\"toggle()\"><mat-icon>menu</mat-icon></button>\n  <h1>{{title}}</h1>\n  <!--\n    <span class=\"example-spacer\"></span>\n    <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button>\n  -->\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/user-interface/components/header/header.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/user-interface/components/header/header.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interface/components/header/header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-interface/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'GiveMe';
        this.close = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggle = function () {
        this.close = !this.close;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/user-interface/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/user-interface/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user-interface/components/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-interface/components/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item routerLink=\".\" routerLinkActive=\"router-link-active\">Déposer une annonce</a>\n  <a mat-list-item [routerLink]=\"['/annonces', 'offres']\" routerLinkActive=\"router-link-active\">Offres</a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/user-interface/components/nav/nav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user-interface/components/nav/nav.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvY29tcG9uZW50cy9uYXYvQzpcXGRldlxcZ2l2ZW1lXFxjbGllbnQvc3JjXFxhcHBcXHVzZXItaW50ZXJmYWNlXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-interface/components/nav/nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-interface/components/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/user-interface/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/user-interface/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/user-interface/containers/user-interface/user-interface.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/user-interface/containers/user-interface/user-interface.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header><app-header #head></app-header></header>\n\n<main [ngClass]=\"{ 'close-aside': head.close }\">\n  <mat-sidenav-container\n    class=\"sidenav-container\"\n    (backdropClick)=\"head.toggle()\"\n  >\n    <mat-sidenav\n      [opened]=\"!head.close\"\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      [fixedInViewport]=\"mobileQuery.matches\"\n      fixedTopGap=\"56\"\n      ><aside>\n        <div class=\"scroller\"><app-nav></app-nav></div>\n      </aside>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div class=\"page\">\n        <div class=\"contents\"><router-outlet></router-outlet></div>\n\n        <footer><app-footer></app-footer></footer>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</main>\n"

/***/ }),

/***/ "./src/app/user-interface/containers/user-interface/user-interface.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/user-interface/containers/user-interface/user-interface.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  background: #f2f2f2;\n  min-height: calc(100vh - 65px); }\n\naside {\n  background: #e6e5e5;\n  width: 250px;\n  min-height: 100vh;\n  position: fixed;\n  z-index: 1000; }\n\naside .scroller {\n    overflow-y: auto;\n    max-height: 100vh;\n    padding-bottom: 65px; }\n\n.close-aside aside {\n  width: 0;\n  overflow: hidden; }\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.page {\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 65px); }\n\n.contents {\n  flex-grow: 1; }\n\nfooter {\n  background: #ffffff; }\n\n@media (min-width: 769px) {\n  .contents, footer {\n    margin-left: 250px; }\n  .close-aside .contents,\n  .close-aside footer {\n    margin-left: 0; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvY29udGFpbmVycy91c2VyLWludGVyZmFjZS9DOlxcZGV2XFxnaXZlbWVcXGNsaWVudC9zcmNcXGFwcFxcdXNlci1pbnRlcmZhY2VcXGNvbnRhaW5lcnNcXHVzZXItaW50ZXJmYWNlXFx1c2VyLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvY29udGFpbmVycy91c2VyLWludGVyZmFjZS9DOlxcZGV2XFxnaXZlbWVcXGNsaWVudC9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci1pbnRlcmZhY2UvY29udGFpbmVycy91c2VyLWludGVyZmFjZS91c2VyLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQ3FCK0I7RURwQi9CLDhCQ21Ca0MsRUFBQTs7QURoQnBDO0VBQ0UsbUJDcUJtQztFRHBCbkMsWUNrQm1CO0VEakJuQixpQkNrQndCO0VEakJ4QixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUxmO0lBT0ksZ0JBQWdCO0lBQ2hCLGlCQ2lCdUI7SURoQnZCLG9CQ0NnQixFQUFBOztBREdwQjtFQUNFLFFBQVE7RUFDUixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRTswRkVOd0Y7RUZReEYsT0FBTyxFQUFBOztBQUdUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkNYa0MsRUFBQTs7QURjcEM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkNwQ21CLEVBQUE7O0FEdUNyQjtFQUNFO0lBQ0Usa0JDcEJpQixFQUFBO0VEdUJuQjs7SUFFRSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJmYWNlL2NvbnRhaW5lcnMvdXNlci1pbnRlcmZhY2UvdXNlci1pbnRlcmZhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy92YXJpYWJsZXNcIjtcclxuXHJcbi8vLyBEZXNjcmlwdGlvbiBkZXNpZ24gb2YgdXNlciBpbnRlcmZhY2VcclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZDogJG1haW4tYmc7XHJcbiAgbWluLWhlaWdodDogJG1haW4tbWluLWhlaWdodDtcclxufVxyXG5cclxuYXNpZGUge1xyXG4gIGJhY2tncm91bmQ6ICRzaWRlbmF2LWJnO1xyXG4gIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICBtaW4taGVpZ2h0OiAkc2lkZW5hdi1taW4taGVpZ2h0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIC5zY3JvbGxlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogJHNjcm9sbGVyLW1heC1oZWlnaHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHNjcm9sbGVyLXBkYjtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZS1hc2lkZSBhc2lkZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6ICRtYWluLW1pbi1oZWlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50cyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICRmb290ZXItYmc7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbWQtYnJlYWtwb2ludCkge1xyXG4gIC5jb250ZW50cywgZm9vdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkc2lkZW5hdi13aWR0aDtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1hc2lkZSAuY29udGVudHMsXHJcbiAgLmNsb3NlLWFzaWRlIGZvb3RlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIGJyZWFrcG9pbnRzXHJcbiRzbS1icmVha3BvaW50OiA1NzZweDtcclxuJG1kLWJyZWFrcG9pbnQ6IDc2OXB4O1xyXG4kbGctYnJlYWtwb2ludDogOTkycHg7XHJcbiR4bC1icmVha3BvaW50OiAxMjAwcHg7XHJcblxyXG4vLyBjb2xvcnNcclxuJGxpZ2h0LWNvbG9yOiAjZmZmZmZmO1xyXG4kZGFyay1jb2xvcjogIzEzMTMxMztcclxuJHBhbGV0dGUtY29sb3Itb25lOiAjMDBhMWU1O1xyXG4kcGFsZXR0ZS1jb2xvci10d286ICNlMjQ0NWM7XHJcbiRwYWxldHRlLWNvbG9yLXRocmVlOiAjZmRhYjNkO1xyXG4kcGFsZXR0ZS1jb2xvci1mb3VyOiAjMDBjODc1O1xyXG5cclxuLy8gZ3V0dGVyc1xyXG4kZ3V0dGVyOiAxNXB4O1xyXG5cclxuLy8gaGVhZGVyXHJcbiRoZWFkZXItaGVpZ2h0OiA2NXB4O1xyXG4kaGVhZGVyLWJnOiAkbGlnaHQtY29sb3I7XHJcbiRoZWFkZXItcGFkZGluZzogMCAkZ3V0dGVyO1xyXG5cclxuLy8gbWFpblxyXG4kbWFpbi1wZHQ6IDY1cHg7XHJcbiRtYWluLW1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuJG1haW4tYmc6IGRhcmtlbigkbGlnaHQtY29sb3IsIDUpO1xyXG5cclxuLy8gc2lkZW5hdlxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LW1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4kc2lkZW5hdi1iZzogZGFya2VuKCRsaWdodC1jb2xvciwgMTApO1xyXG5cclxuLy8gc2Nyb2xsZXJcclxuJHNjcm9sbGVyLW1heC1oZWlnaHQ6IDEwMHZoO1xyXG4kc2Nyb2xsZXItcGRiOiAkaGVhZGVyLWhlaWdodDtcclxuXHJcbi8vIGZvb3RlclxyXG4kZm9vdGVyLWJnOiAkbGlnaHQtY29sb3I7XHJcbiIsIm1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7IH1cblxuYXNpZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xuICB3aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7IH1cbiAgYXNpZGUgLnNjcm9sbGVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiA2NXB4OyB9XG5cbi5jbG9zZS1hc2lkZSBhc2lkZSB7XG4gIHdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxOyB9XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpOyB9XG5cbi5jb250ZW50cyB7XG4gIGZsZXgtZ3JvdzogMTsgfVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAuY29udGVudHMsIGZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4OyB9XG4gIC5jbG9zZS1hc2lkZSAuY29udGVudHMsXG4gIC5jbG9zZS1hc2lkZSBmb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-interface/containers/user-interface/user-interface.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user-interface/containers/user-interface/user-interface.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceComponent", function() { return UserInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInterfaceComponent = /** @class */ (function () {
    function UserInterfaceComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    UserInterfaceComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    UserInterfaceComponent.prototype.ngOnInit = function () {
    };
    UserInterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-interface',
            template: __webpack_require__(/*! ./user-interface.component.html */ "./src/app/user-interface/containers/user-interface/user-interface.component.html"),
            styles: [__webpack_require__(/*! ./user-interface.component.scss */ "./src/app/user-interface/containers/user-interface/user-interface.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
    ], UserInterfaceComponent);
    return UserInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/user-interface/user-interface.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-interface/user-interface.module.ts ***!
  \*********************************************************/
/*! exports provided: UserInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceModule", function() { return UserInterfaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/user-interface/user-interface.component */ "./src/app/user-interface/containers/user-interface/user-interface.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/user-interface/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/user-interface/components/footer/footer.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/user-interface/components/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserInterfaceModule = /** @class */ (function () {
    function UserInterfaceModule() {
    }
    UserInterfaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_containers_user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_2__["UserInterfaceComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            exports: [_containers_user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_2__["UserInterfaceComponent"]]
        })
    ], UserInterfaceModule);
    return UserInterfaceModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiProtocol: 'http',
    apiHost: 'localhost',
    apiPort: '3000',
    apiBasePath: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\giveme\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map