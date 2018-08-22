(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <ng4-loading-spinner> </ng4-loading-spinner>\n  <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'Blog-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _components_activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/activate-account/activate-account.component */ "./src/app/components/activate-account/activate-account.component.ts");
/* harmony import */ var _components_mess_book_mess_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mess-book/mess-book.component */ "./src/app/components/mess-book/mess-book.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_mess_down_admin_mess_down_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin-mess-down/admin-mess-down.component */ "./src/app/components/admin-mess-down/admin-mess-down.component.ts");
/* harmony import */ var _components_admin_mess_down_users_admin_mess_down_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin-mess-down-users/admin-mess-down-users.component */ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _components_admin_mess_up_admin_mess_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin-mess-up/admin-mess-up.component */ "./src/app/components/admin-mess-up/admin-mess-up.component.ts");
/* harmony import */ var _components_admin_mess_up_users_admin_mess_up_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin-mess-up-users/admin-mess-up-users.component */ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.ts");
/* harmony import */ var _components_god_god_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/god/god.component */ "./src/app/components/god/god.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'adminLogin', component: _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_19__["AdminLoginComponent"] },
    { path: 'activateUser', component: _components_activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_15__["ActivateAccountComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'bookCoupon', component: _components_mess_book_mess_book_component__WEBPACK_IMPORTED_MODULE_16__["MessBookComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'adminMess1', component: _components_admin_mess_down_admin_mess_down_component__WEBPACK_IMPORTED_MODULE_20__["AdminMessDownComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'adminMess1Users', component: _components_admin_mess_down_users_admin_mess_down_users_component__WEBPACK_IMPORTED_MODULE_21__["AdminMessDownUsersComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'adminMess2', component: _components_admin_mess_up_admin_mess_up_component__WEBPACK_IMPORTED_MODULE_23__["AdminMessUpComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'adminMess2Users', component: _components_admin_mess_up_users_admin_mess_up_users_component__WEBPACK_IMPORTED_MODULE_24__["AdminMessUpUsersComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'god', component: _components_god_god_component__WEBPACK_IMPORTED_MODULE_25__["GodComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"],
                _components_activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_15__["ActivateAccountComponent"],
                _components_mess_book_mess_book_component__WEBPACK_IMPORTED_MODULE_16__["MessBookComponent"],
                _components_mess_book_mess_book_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"],
                _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_19__["AdminLoginComponent"],
                _components_admin_mess_down_admin_mess_down_component__WEBPACK_IMPORTED_MODULE_20__["AdminMessDownComponent"],
                _components_admin_mess_down_users_admin_mess_down_users_component__WEBPACK_IMPORTED_MODULE_21__["AdminMessDownUsersComponent"],
                _components_admin_mess_up_admin_mess_up_component__WEBPACK_IMPORTED_MODULE_23__["AdminMessUpComponent"],
                _components_admin_mess_up_users_admin_mess_up_users_component__WEBPACK_IMPORTED_MODULE_24__["AdminMessUpUsersComponent"],
                _components_god_god_component__WEBPACK_IMPORTED_MODULE_25__["GodComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__["FlashMessagesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_components_mess_book_mess_book_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/activate-account/activate-account.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/activate-account/activate-account.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activate-account/activate-account.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/activate-account/activate-account.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activate-account/activate-account.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/activate-account/activate-account.component.ts ***!
  \***************************************************************************/
/*! exports provided: ActivateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAccountComponent", function() { return ActivateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivateAccountComponent = /** @class */ (function () {
    function ActivateAccountComponent(router, route, flashMessage, http, authService, spinnerService) {
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.http = http;
        this.authService = authService;
        this.spinnerService = spinnerService;
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.authService.activateUser(this.route.snapshot.queryParams).subscribe(function (data) {
                _this.spinnerService.show();
                if (data.data.success === false) {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                    _this.spinnerService.hide();
                    _this.router.navigate(['/activateUser']);
                }
                else if (data.data.success === true) {
                    _this.spinnerService.hide();
                    _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ActivateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-account',
            template: __webpack_require__(/*! ./activate-account.component.html */ "./src/app/components/activate-account/activate-account.component.html"),
            styles: [__webpack_require__(/*! ./activate-account.component.css */ "./src/app/components/activate-account/activate-account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCard{\n  background-color: #2c2c2c;\n  color: #F1F8FE;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #868e96e3;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron loginCard\">\n  <h1 class=\"hovere\">Login</h1>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label>Your Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" required autofocus placeholder=\"Enter your Email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter your password\" required>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Login\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (this.router.url === '/login') {
                this.router.navigate(['/adminMess1']);
            }
        }
    };
    AdminLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var admin = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.data.success === false) {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/adminLogin']);
            }
            else if (data.data.success === true) {
                _this.spinnerService.hide();
                _this.authService.storeUserData(data.data.token, data.data.user);
                _this.flashMessage.show('Successfully logged in ', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin-mess-down-users/admin-mess-down-users.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.test {\n  left: auto !important;\n  position: absolute !important;\n  width: 100% !important;\n  margin-top: -30px;\n  font-weight: bold;\n}\n\n.test2 {\n  position: relative !important;\n  top: 100px !important;\n  width: 100%;\n}\n\ntable{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin-mess-down-users/admin-mess-down-users.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Mess1 Booked coupons (Ground Floor)\n      </mat-panel-title>\n      <mat-panel-description>\n        Press this to toggle\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <div *ngIf=\"messDown\">\n    <button mat-flat-button color=\"warn\" (click)=\"print()\">Print Coupons</button>\n    <br><br>\n    <div id=\"print-section\">\n    <!-- Ground Floor Mess -->\n\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <span *ngFor=\"let val of messDown\">\n            <div id=\"yes\">\n            <table class=\"table\" style=\"color:black\">\n                <thead class=\"table\">\n                    <h5>{{val.collegeId}}</h5>\n                    <h5>{{val.name}}</h5>\n                    <tr class=\"test\">\n                        <td>Day</td>\n                        <td>BreakFast</td>\n                        <td>Lunch</td>\n                        <td>Dinner</td>\n                    </tr>\n                </thead>\n                <tbody class=\"table test2\">\n                    <div *ngFor=\"let result of val.couponDownMess\">\n                      <tr *ngFor=\"let final of result.messdown\">\n                        <td>{{final.day}}</td>\n                        <td>{{final.breakfast}}</td>\n                        <td>{{final.lunch}}</td>\n                        <td>{{final.dinner}}</td>\n                      </tr>\n                    </div>\n                    <h5> Total:- {{val.cost}}</h5>\n                </tbody>\n            </table><br>\n            </div>\n          </span>\n        </div>\n      </div>\n\n    </div>\n    </div>\n    <!-- if no coupon-->\n    <div *ngIf=\"message\">\n      <p style=\"color:white\">{{message}}</p>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin-mess-down-users/admin-mess-down-users.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminMessDownUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessDownUsersComponent", function() { return AdminMessDownUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMessDownUsersComponent = /** @class */ (function () {
    function AdminMessDownUsersComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
        this.i = 0;
    }
    AdminMessDownUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Info = this.authService.loadUserInfo();
        if (Info.userType !== "admin") {
            this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else if (Info.messType !== "mess1") {
            this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/adminMess2Users']);
        }
        else {
            this.authService.getUsersMessDown().subscribe(function (data) {
                if (data.data.success) {
                    _this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner'];
                    _this.messDown = data.data.users;
                    _this.costDown = _this.messDown.map(function (t) { return t.couponDownMess.map(function (val) { return val.messdown.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0); }); });
                    _this.days = _this.messDown.map(function (t) { return t.couponDownMess.map(function (val) { return val.messdown; }); });
                    _this.costDown.forEach(function (val, index) {
                        for (_this.i; _this.i <= index; _this.i++) {
                            _this.messDown[index].cost = val[0];
                            _this.messDown[index].index = index + 1;
                        }
                    });
                    console.log(_this.messDown);
                }
                else {
                    _this.message = data.message;
                }
            });
        }
    };
    AdminMessDownUsersComponent.prototype.print = function () {
        var divToPrint = document.getElementById('print-section');
        var htmlToPrint = '' +
            '<style type="text/css">' +
            'table , table td, table thead{' +
            'border:1px solid #000;' +
            'padding:0.5em;' +
            'width: 50%;' +
            '}' +
            '#yes{' +
            'border:1px solid #000;' +
            'width: 50%;' +
            'padding:10px;' +
            'display:inline-block;' +
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        var newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    };
    AdminMessDownUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mess-down-users',
            template: __webpack_require__(/*! ./admin-mess-down-users.component.html */ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-mess-down-users.component.css */ "./src/app/components/admin-mess-down-users/admin-mess-down-users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], AdminMessDownUsersComponent);
    return AdminMessDownUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-mess-down/admin-mess-down.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-mess-down/admin-mess-down.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  width: 100%;\n  color: black;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-mess-down/admin-mess-down.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-mess-down/admin-mess-down.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Mess1 (Ground Floor)\n      </mat-panel-title>\n      <mat-panel-description>\n        Press this to toggle\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <div *ngIf=\"messDown\">\n    <button mat-flat-button color=\"warn\" (click)=\"print()\">Print Coupon</button>\n    <div id=\"print-section\">\n    <!-- Ground Floor Mess -->\n\n    <div class=\"jumbotron\">\n      <h2 style=\"color:black;text-align:center;\">Mess 1(Ground Floor)</h2>\n      <table mat-table [dataSource]=\"messDown\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> Sr No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.index}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> CollegeId </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.collegeId}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"gender\">\n          <th mat-header-cell *matHeaderCellDef> Gender </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.gender}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <th mat-header-cell *matHeaderCellDef> Amount </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cost}} Rs </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"signature\">\n          <th mat-header-cell *matHeaderCellDef> Signature </th>\n          <td mat-cell *matCellDef=\"let element\">  </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n    </div>\n    </div>\n    </div>\n    <!-- if no coupon-->\n    <div *ngIf=\"message\">\n      <p style=\"color:white\">{{message}}</p>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/admin-mess-down/admin-mess-down.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-mess-down/admin-mess-down.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminMessDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessDownComponent", function() { return AdminMessDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMessDownComponent = /** @class */ (function () {
    function AdminMessDownComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
        this.i = 0;
    }
    AdminMessDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Info = this.authService.loadUserInfo();
        if (Info.userType !== "admin") {
            this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else if (Info.messType !== "mess1") {
            this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/adminMess2']);
        }
        else {
            this.authService.getUsersMessDown().subscribe(function (data) {
                if (data.data.success) {
                    _this.displayedColumns = ['index', 'id', 'name', 'gender', 'cost', 'signature'];
                    _this.messDown = data.data.users;
                    _this.costDown = _this.messDown.map(function (t) { return t.couponDownMess.map(function (val) { return val.messdown.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0); }); });
                    _this.costDown.forEach(function (val, index) {
                        for (_this.i; _this.i <= index; _this.i++) {
                            _this.messDown[index].cost = val[0];
                            _this.messDown[index].index = index + 1;
                        }
                    });
                }
                else {
                    _this.message = data.message;
                }
            });
        }
    };
    AdminMessDownComponent.prototype.print = function () {
        var divToPrint = document.getElementById('print-section');
        var htmlToPrint = '' +
            '<style type="text/css">' +
            'table , table td {' +
            'border:1px solid #000;' +
            'padding:0.5em;' +
            'width: 900px;' +
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        var newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    };
    AdminMessDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mess-down',
            template: __webpack_require__(/*! ./admin-mess-down.component.html */ "./src/app/components/admin-mess-down/admin-mess-down.component.html"),
            styles: [__webpack_require__(/*! ./admin-mess-down.component.css */ "./src/app/components/admin-mess-down/admin-mess-down.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], AdminMessDownComponent);
    return AdminMessDownComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-mess-up-users/admin-mess-up-users.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.test {\n  left: auto !important;\n  position: absolute !important;\n  width: 100% !important;\n  margin-top: -30px;\n  font-weight: bold;\n}\n\n.test2 {\n  position: relative !important;\n  top: 100px !important;\n  width: 100%;\n}\n\ntable{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-mess-up-users/admin-mess-up-users.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Mess2 Booked coupons (1st Floor)\n      </mat-panel-title>\n      <mat-panel-description>\n        Press this to toggle\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <div *ngIf=\"messUp\">\n    <button mat-flat-button color=\"warn\" (click)=\"print()\">Print Coupons</button>\n    <br><br>\n    <div id=\"print-section\">\n    <!-- Ground Floor Mess -->\n\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <span *ngFor=\"let val of messUp\">\n            <div id=\"yes\">\n            <table class=\"table\" style=\"color:black\">\n                <thead class=\"table\">\n                    <h5>{{val.collegeId}}</h5>\n                    <h5>{{val.name}}</h5>\n                    <tr class=\"test\">\n                        <td>Day</td>\n                        <td>BreakFast</td>\n                        <td>Lunch</td>\n                        <td>Dinner</td>\n                    </tr>\n                </thead>\n                <tbody class=\"table test2\">\n                    <div *ngFor=\"let result of val.couponUpMess\">\n                      <tr *ngFor=\"let final of result.messup\">\n                        <td>{{final.day}}</td>\n                        <td>{{final.breakfast}}</td>\n                        <td>{{final.lunch}}</td>\n                        <td>{{final.dinner}}</td>\n                      </tr>\n                    </div>\n                    <h5> Total:- {{val.cost}}</h5>\n                </tbody>\n            </table><br>\n            </div>\n          </span>\n        </div>\n      </div>\n\n    </div>\n    </div>\n    <!-- if no coupon-->\n    <div *ngIf=\"message\">\n      <p style=\"color:white\">{{message}}</p>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-mess-up-users/admin-mess-up-users.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminMessUpUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessUpUsersComponent", function() { return AdminMessUpUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMessUpUsersComponent = /** @class */ (function () {
    function AdminMessUpUsersComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
        this.i = 0;
    }
    AdminMessUpUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Info = this.authService.loadUserInfo();
        if (Info.userType !== "admin") {
            this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else if (Info.messType !== "mess2") {
            this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/adminMess1Users']);
        }
        else {
            this.authService.getUsersmessUp().subscribe(function (data) {
                if (data.data.success) {
                    _this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner'];
                    _this.messUp = data.data.users;
                    _this.costUp = _this.messUp.map(function (t) { return t.couponUpMess.map(function (val) { return val.messup.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0); }); });
                    _this.days = _this.messUp.map(function (t) { return t.couponUpMess.map(function (val) { return val.messup; }); });
                    _this.costUp.forEach(function (val, index) {
                        for (_this.i; _this.i <= index; _this.i++) {
                            _this.messUp[index].cost = val[0];
                            _this.messUp[index].index = index + 1;
                        }
                    });
                }
                else {
                    _this.message = data.message;
                }
            });
        }
    };
    AdminMessUpUsersComponent.prototype.print = function () {
        var divToPrint = document.getElementById('print-section');
        var htmlToPrint = '' +
            '<style type="text/css">' +
            'table , table td, table thead{' +
            'border:1px solid #000;' +
            'padding:0.5em;' +
            'width: 50%;' +
            '}' +
            '#yes{' +
            'border:1px solid #000;' +
            'width: 50%;' +
            'padding:10px;' +
            'display:inline-block;' +
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        var newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    };
    AdminMessUpUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mess-up-users',
            template: __webpack_require__(/*! ./admin-mess-up-users.component.html */ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-mess-up-users.component.css */ "./src/app/components/admin-mess-up-users/admin-mess-up-users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], AdminMessUpUsersComponent);
    return AdminMessUpUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-mess-up/admin-mess-up.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin-mess-up/admin-mess-up.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  width: 100%;\n  color: black;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-mess-up/admin-mess-up.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-mess-up/admin-mess-up.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Mess2 (1st Floor)\n      </mat-panel-title>\n      <mat-panel-description>\n        Press this to toggle\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <div *ngIf=\"messUp\">\n    <button mat-flat-button color=\"warn\" (click)=\"print()\">Print Coupon</button>\n    <div id=\"print-section\">\n    <!-- 1st Floor Mess -->\n\n    <div class=\"jumbotron\">\n      <h2 style=\"color:black;text-align:center;\">Mess 2(1st Floor)</h2>\n      <table mat-table [dataSource]=\"messUp\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> Sr No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.index}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> CollegeId </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.collegeId}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"gender\">\n          <th mat-header-cell *matHeaderCellDef> Gender </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.gender}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cost\">\n          <th mat-header-cell *matHeaderCellDef> Amount </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cost}} Rs </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"signature\">\n          <th mat-header-cell *matHeaderCellDef> Signature </th>\n          <td mat-cell *matCellDef=\"let element\">  </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n    </div>\n    </div>\n    </div>\n    <!-- if no coupon-->\n    <div *ngIf=\"message\">\n      <p style=\"color:white\">{{message}}</p>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/admin-mess-up/admin-mess-up.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-mess-up/admin-mess-up.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminMessUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessUpComponent", function() { return AdminMessUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminMessUpComponent = /** @class */ (function () {
    function AdminMessUpComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
        this.i = 0;
    }
    AdminMessUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Info = this.authService.loadUserInfo();
        if (Info.userType !== "admin") {
            this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else if (Info.messType !== "mess2") {
            this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/adminMess1']);
        }
        else {
            this.authService.getUsersmessUp().subscribe(function (data) {
                if (data.data.success) {
                    _this.displayedColumns = ['index', 'id', 'name', 'gender', 'cost', 'signature'];
                    _this.messUp = data.data.users;
                    _this.costUp = _this.messUp.map(function (t) { return t.couponUpMess.map(function (val) { return val.messup.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0); }); });
                    _this.costUp.forEach(function (val, index) {
                        for (_this.i; _this.i <= index; _this.i++) {
                            _this.messUp[index].cost = val[0];
                            _this.messUp[index].index = index + 1;
                        }
                    });
                }
                else {
                    _this.message = data.message;
                }
            });
        }
    };
    AdminMessUpComponent.prototype.print = function () {
        var divToPrint = document.getElementById('print-section');
        var htmlToPrint = '' +
            '<style type="text/css">' +
            'table , table td {' +
            'border:1px solid #000;' +
            'padding:0.5em;' +
            'width: 900px;' +
            '}' +
            '</style>';
        htmlToPrint += divToPrint.outerHTML;
        var newWin = window.open("");
        newWin.document.write(htmlToPrint);
        newWin.print();
        newWin.close();
    };
    AdminMessUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mess-up',
            template: __webpack_require__(/*! ./admin-mess-up.component.html */ "./src/app/components/admin-mess-up/admin-mess-up.component.html"),
            styles: [__webpack_require__(/*! ./admin-mess-up.component.css */ "./src/app/components/admin-mess-up/admin-mess-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], AdminMessUpComponent);
    return AdminMessUpComponent;
}());



/***/ }),

/***/ "./src/app/components/god/god.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/god/god.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/god/god.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/god/god.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"jumbotron\">\n      <button mat-raised-button color=\"warn\" (click)=\"deleteDatabase()\"> Delete Database </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/god/god.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/god/god.component.ts ***!
  \*************************************************/
/*! exports provided: GodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodComponent", function() { return GodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GodComponent = /** @class */ (function () {
    function GodComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    GodComponent.prototype.ngOnInit = function () {
        var Info = this.authService.loadUserInfo();
        if (Info.userType !== "admin") {
            this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else if (Info.messType !== "god") {
            this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['/god']);
        }
    };
    GodComponent.prototype.deleteDatabase = function () {
        var _this = this;
        var Info = localStorage.getItem('token-id');
        this.authService.god(Info).subscribe(function (data) {
            console.log(data);
            if (data.data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.spinnerService.hide();
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
            }
        });
    };
    GodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-god',
            template: __webpack_require__(/*! ./god.component.html */ "./src/app/components/god/god.component.html"),
            styles: [__webpack_require__(/*! ./god.component.css */ "./src/app/components/god/god.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], GodComponent);
    return GodComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCard{\n  background-color: #2c2c2c;\n  color: #F1F8FE;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #868e96e3;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron loginCard\">\n  <h1 class=\"hovere\">Login</h1>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label>College Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" required autofocus placeholder=\"Enter your college Email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter your password\" required>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Login\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
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
    function LoginComponent(authService, flashMessage, router, spinnerService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.spinnerService = spinnerService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (this.router.url === '/login') {
                this.router.navigate(['/']);
            }
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.data.success === false) {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else if (data.data.success === true) {
                _this.spinnerService.hide();
                _this.authService.storeUserData(data.data.token, data.data.user);
                _this.flashMessage.show('Successfully logged in ', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mess-book/dialog-component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/mess-book/dialog-component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/components/mess-book/dialog-component.html":
/*!************************************************************!*\
  !*** ./src/app/components/mess-book/dialog-component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"color:white;text-align: center;\">Confirm your coupon\n</h2>\n<p style=\"color:white;\">Mess 1(ground Floor)</p>\n<mat-dialog-content class=\"mat-typography\">\n  <table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <ng-container matColumnDef=\"day\">\n      <th mat-header-cell *matHeaderCellDef> Day </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.day}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"breakfast\">\n      <th mat-header-cell *matHeaderCellDef> BreakFast </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.breakfast}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"lunch\">\n      <th mat-header-cell *matHeaderCellDef> Lunch </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.lunch}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"dinner\">\n      <th mat-header-cell *matHeaderCellDef> Dinner </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dinner}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.cost}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCostMess1()}} </td>\n  </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  </table>\n\n  <!-- Mess 2 -->\n\n  <br><br>\n  <p style=\"color:white;\">Mess 2(1st Floor)</p>\n  <table mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <ng-container matColumnDef=\"day\">\n      <th mat-header-cell *matHeaderCellDef> Day </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.day}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"breakfast\">\n      <th mat-header-cell *matHeaderCellDef> BreakFast </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.breakfast}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"lunch\">\n      <th mat-header-cell *matHeaderCellDef> Lunch </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.lunch}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"dinner\">\n      <th mat-header-cell *matHeaderCellDef> Dinner </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dinner}} </td>\n      <td mat-footer-cell *matFooterCellDef>  </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.cost}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCostMess2()}} </td>\n  </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  </table>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Confirm</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/components/mess-book/mess-book.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/mess-book/mess-book.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: #343a40 !important;\n}\n\n.example-panel-red {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/mess-book/mess-book.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/mess-book/mess-book.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\">\n\n      <form (submit)=\"bookCoupon()\" id=\"vegNon\">\n        <mat-accordion class=\"example-headers-align\">\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Mess1 (Ground Floor)\n              </mat-panel-title>\n              <mat-panel-description>\n                Press this to toggle\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <!-- Ground Floor Mess -->\n            <div class=\"jumbotron\">\n              <!-- Monday -->\n              <h4 style=\"color:white;\">Monday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                    <mat-radio-group [(ngModel)]=\"monBrVegNon\" name = \"monBrVegNon\"  form=\"monBrVegNon\">\n                      <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                      <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"monLunVegNon\" [(ngModel)]=\"monLunVegNon\" form=\"monLunVegNon\" >\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"monDinvegNon\" [(ngModel)]=\"monDinvegNon\" form=\"monDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Tuesday -->\n              <h4 style=\"color:white;\">Tuesday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"tuesBrVegNon\" [(ngModel)]=\"tuesBrVegNon\" form=\"tuesBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"tuesLunVegNon\" [(ngModel)]=\"tuesLunVegNon\" form=\"tuesLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"tuesDinvegNon\" [(ngModel)]=\"tuesDinvegNon\" form=\"tuesDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Wednesday -->\n              <h4 style=\"color:white;\">Wednesday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"wedBrVegNon\" [(ngModel)]=\"wedBrVegNon\" form=\"wedBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"wedLunVegNon\" [(ngModel)]=\"wedLunVegNon\" form=\"wedLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"wedDinvegNon\" [(ngModel)]=\"wedDinvegNon\" form=\"wedDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Thursday -->\n              <h4 style=\"color:white;\">Thursday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"thuBrVegNon\" [(ngModel)]=\"thuBrVegNon\" form=\"thuBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"thuLunVegNon\" [(ngModel)]=\"thuLunVegNon\" form=\"thuLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"thuDinvegNon\" [(ngModel)]=\"thuDinvegNon\" form=\"thuDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Friday -->\n              <h4 style=\"color:white;\">Friday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"friBrVegNon\" [(ngModel)]=\"friBrVegNon\" form=\"friBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"friLunVegNon\" [(ngModel)]=\"friLunVegNon\" form=\"friLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"friDinvegNon\" [(ngModel)]=\"friDinvegNon\" form=\"friDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Saturday -->\n              <h4 style=\"color:white;\">Saturday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"satBrVegNon\" [(ngModel)]=\"satBrVegNon\" form=\"satBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"satLunVegNon\" [(ngModel)]=\"satLunVegNon\" form=\"satLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"satDinvegNon\" [(ngModel)]=\"satDinvegNon\" form=\"satDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Sunday -->\n              <h4 style=\"color:white;\">Sunday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"sunBrVegNon\" [(ngModel)]=\"sunBrVegNon\" form=\"sunBrVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"sunLunVegNon\" [(ngModel)]=\"sunLunVegNon\" form=\"sunLunVegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name = \"sunDinvegNon\" [(ngModel)]=\"sunDinvegNon\" form=\"sunDinvegNon\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n            </div>\n          </mat-expansion-panel>\n\n          <br><br>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                               (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Mess 2 (First floor)\n              </mat-panel-title>\n              <mat-panel-description>\n                Press this to toggle\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <!-- 1st Floor Mess -->\n            <div class=\"jumbotron\">\n              <!-- Monday -->\n              <h4 style=\"color:white;\">Monday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                    <mat-radio-group [(ngModel)]=\"monBrVegNon1\" name = \"monBrVegNon1\"  form=\"monBrVegNon1\">\n                      <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                      <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"monLunVegNon1\" [(ngModel)]=\"monLunVegNon1\" form=\"monLunVegNon1\" >\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"monDinvegNon1\" [(ngModel)]=\"monDinvegNon1\" form=\"monDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Tuesday -->\n              <h4 style=\"color:white;\">Tuesday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"tuesBrVegNon1\" [(ngModel)]=\"tuesBrVegNon1\" form=\"tuesBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"tuesLunVegNon1\" [(ngModel)]=\"tuesLunVegNon1\" form=\"tuesLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"tuesDinvegNon1\" [(ngModel)]=\"tuesDinvegNon1\" form=\"tuesDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Wednesday -->\n              <h4 style=\"color:white;\">Wednesday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"wedBrVegNon1\" [(ngModel)]=\"wedBrVegNon1\" form=\"wedBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"wedLunVegNon1\" [(ngModel)]=\"wedLunVegNon1\" form=\"wedLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"wedDinvegNon1\" [(ngModel)]=\"wedDinvegNon1\" form=\"wedDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Thursday -->\n              <h4 style=\"color:white;\">Thursday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"thuBrVegNon1\" [(ngModel)]=\"thuBrVegNon1\" form=\"thuBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"thuLunVegNon1\" [(ngModel)]=\"thuLunVegNon1\" form=\"thuLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"thuDinvegNon1\" [(ngModel)]=\"thuDinvegNon1\" form=\"thuDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Friday -->\n              <h4 style=\"color:white;\">Friday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"friBrVegNon1\" [(ngModel)]=\"friBrVegNon1\" form=\"friBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"friLunVegNon1\" [(ngModel)]=\"friLunVegNon1\" form=\"friLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"friDinvegNon1\" [(ngModel)]=\"friDinvegNon1\" form=\"friDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Saturday -->\n              <h4 style=\"color:white;\">Saturday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"satBrVegNon1\" [(ngModel)]=\"satBrVegNon1\" form=\"satBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"satLunVegNon1\" [(ngModel)]=\"satLunVegNon1\" form=\"satLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name=\"satDinvegNon1\" [(ngModel)]=\"satDinvegNon1\" form=\"satDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n              <!-- Sunday -->\n              <h4 style=\"color:white;\">Sunday</h4>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>BreakFast</p>\n                  <mat-radio-group name = \"sunBrVegNon1\" [(ngModel)]=\"sunBrVegNon1\" form=\"sunBrVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Lunch</p>\n                  <mat-radio-group name = \"sunLunVegNon1\" [(ngModel)]=\"sunLunVegNon1\" form=\"sunLunVegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                  <p>Dinner</p>\n                  <mat-radio-group name = \"sunDinvegNon1\" [(ngModel)]=\"sunDinvegNon1\" form=\"sunDinvegNon1\">\n                    <mat-radio-button class=\"example-margin\" value=\"veg\">veg</mat-radio-button><br>\n                    <mat-radio-button class=\"example-margin\" value=\"nonVeg\">non Veg</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n              </div><br>\n\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <br><br>\n        <input type=\"submit\"  class=\"btn btn-success\" value=\"Submit\">\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mess-book/mess-book.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/mess-book/mess-book.component.ts ***!
  \*************************************************************/
/*! exports provided: MessBookComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessBookComponent", function() { return MessBookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MessBookComponent = /** @class */ (function () {
    function MessBookComponent(http, router, dialog, authService, spinnerService, flashMessage) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.flashMessage = flashMessage;
    }
    // checking when page is loaded
    MessBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCoupon().subscribe(function (data) {
            if (data.data.success) {
                _this.flashMessage.show("Coupon already booked for this week", { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
        });
        var Info = this.authService.loadUserInfo();
        if (Info.userType === "admin") {
            this.router.navigate(['/']);
        }
    };
    MessBookComponent.prototype.bookCoupon = function () {
        var _this = this;
        var arrMess1 = [];
        var arrMess2 = [];
        var breakfastMess1 = {};
        var lunchMess1 = {};
        var dinnerMess1 = {};
        var breakfastMess2 = {};
        var lunchMess2 = {};
        var dinnerMess2 = {};
        // mess 1
        arrMess1.push({
            breakfast: {
                monBrVegNon: this.monBrVegNon,
                tuesBrVegNon: this.tuesBrVegNon,
                wedBrVegNon: this.wedBrVegNon,
                thuBrVegNon: this.thuBrVegNon,
                friBrVegNon: this.friBrVegNon,
                satBrVegNon: this.satBrVegNon,
                sunBrVegNon: this.sunBrVegNon
            },
            lunch: {
                monLunVegNon: this.monLunVegNon,
                tuesLunVegNon: this.tuesLunVegNon,
                wedLunVegNon: this.wedLunVegNon,
                thuLunVegNon: this.thuLunVegNon,
                friLunVegNon: this.friLunVegNon,
                satLunVegNon: this.satLunVegNon,
                sunLunVegNon: this.sunLunVegNon
            },
            dinner: {
                monDinvegNon: this.monDinvegNon,
                tuesDinVegNon: this.tuesDinvegNon,
                wedDinvegNon: this.wedDinvegNon,
                thuDinvegNon: this.thuDinvegNon,
                friDinvegNon: this.friDinvegNon,
                satDinvegNon: this.satDinvegNon,
                sunDinvegNon: this.sunDinvegNon
            }
        });
        // mess 2
        arrMess2.push({
            breakfast: {
                monBrVegNon: this.monBrVegNon1,
                tuesBrVegNon: this.tuesBrVegNon1,
                wedBrVegNon: this.wedBrVegNon1,
                thuBrVegNon: this.thuBrVegNon1,
                friBrVegNon: this.friBrVegNon1,
                satBrVegNon: this.satBrVegNon1,
                sunBrVegNon: this.sunBrVegNon1
            },
            lunch: {
                monLunVegNon: this.monLunVegNon1,
                tuesLunVegNon: this.tuesLunVegNon1,
                wedLunVegNon: this.wedLunVegNon1,
                thuLunVegNon: this.thuLunVegNon1,
                friLunVegNon: this.friLunVegNon1,
                satLunVegNon: this.satLunVegNon1,
                sunLunVegNon: this.sunLunVegNon1
            },
            dinner: {
                monDinvegNon: this.monDinvegNon1,
                tuesDinVegNon: this.tuesDinvegNon1,
                wedDinvegNon: this.wedDinvegNon1,
                thuDinvegNon: this.thuDinvegNon1,
                friDinvegNon: this.friDinvegNon1,
                satDinvegNon: this.satDinvegNon1,
                sunDinvegNon: this.sunDinvegNon1
            }
        });
        // Mess 1 breakfast
        Object.values(arrMess1[0].breakfast).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                breakfastMess1[index] = {
                    val: val,
                    cost: 10
                };
            }
        });
        // Mess 1 Lunch
        Object.values(arrMess1[0].lunch).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                lunchMess1[index] = {
                    val: val,
                    cost: 25
                };
            }
        });
        // Mess 1 dinner
        Object.values(arrMess1[0].dinner).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                dinnerMess1[index] = {
                    val: val,
                    cost: 25
                };
            }
        });
        // Mess 2 breakfast
        Object.values(arrMess2[0].breakfast).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                breakfastMess2[index] = {
                    val: val,
                    cost: 10
                };
            }
        });
        // Mess 2 Lunch
        Object.values(arrMess2[0].lunch).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                lunchMess2[index] = {
                    val: val,
                    cost: 25
                };
            }
        });
        // Mess 2 dinner
        Object.values(arrMess2[0].dinner).forEach(function (val, index) {
            if (val !== undefined) {
                switch (index) {
                    case 0:
                        index = "Monday";
                        break;
                    case 1:
                        index = "Tuesday";
                        break;
                    case 2:
                        index = "Wednesday";
                        break;
                    case 3:
                        index = "Thursday";
                        break;
                    case 4:
                        index = "Friday";
                        break;
                    case 5:
                        index = "Saturday";
                        break;
                    case 6:
                        index = "Sunday";
                        break;
                }
                dinnerMess2[index] = {
                    val: val,
                    cost: 25
                };
            }
        });
        // Sending data to backend
        var body = {
            mess1: {
                breakfastMess1: breakfastMess1,
                lunchMess1: lunchMess1,
                dinnerMess1: dinnerMess1,
            },
            mess2: {
                breakfastMess2: breakfastMess2,
                lunchMess2: lunchMess2,
                dinnerMess2: dinnerMess2,
            }
        };
        var dialogRef = this.dialog.open(DialogComponent, {
            width: '900px',
            data: body
        });
        // sending coupnons
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            if (result) {
                _this.authService.bookCoupon(body).subscribe(function (data) {
                    if (data.data.success === false) {
                        _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                        _this.spinnerService.hide();
                    }
                    else if (data.data.success === true) {
                        _this.spinnerService.hide();
                        _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                        _this.router.navigate(['/profile']);
                    }
                });
            }
        });
    };
    MessBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mess-book',
            template: __webpack_require__(/*! ./mess-book.component.html */ "./src/app/components/mess-book/mess-book.component.html"),
            styles: [__webpack_require__(/*! ./mess-book.component.css */ "./src/app/components/mess-book/mess-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"]])
    ], MessBookComponent);
    return MessBookComponent;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent(data) {
        this.data = data;
        this.ELEMENT_DATA1 = [
            { day: 'Monday',
                breakfast: this.data.mess1.breakfastMess1.Monday ? this.data.mess1.breakfastMess1.Monday.val : "***",
                lunch: this.data.mess1.lunchMess1.Monday ? this.data.mess1.lunchMess1.Monday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Monday ? this.data.mess1.dinnerMess1.Monday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Monday, this.data.mess1.lunchMess1.Monday, this.data.mess1.dinnerMess1.Monday)
            },
            { day: 'Tuesday',
                breakfast: this.data.mess1.breakfastMess1.Tuesday ? this.data.mess1.breakfastMess1.Tuesday.val : "***",
                lunch: this.data.mess1.lunchMess1.Tuesday ? this.data.mess1.lunchMess1.Tuesday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Tuesday ? this.data.mess1.dinnerMess1.Tuesday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Tuesday, this.data.mess1.lunchMess1.Tuesday, this.data.mess1.dinnerMess1.Tuesday)
            },
            { day: 'Wednesday',
                breakfast: this.data.mess1.breakfastMess1.Wednesday ? this.data.mess1.breakfastMess1.Wednesday.val : "***",
                lunch: this.data.mess1.lunchMess1.Wednesday ? this.data.mess1.lunchMess1.Wednesday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Wednesday ? this.data.mess1.dinnerMess1.Wednesday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Wednesday, this.data.mess1.lunchMess1.Wednesday, this.data.mess1.dinnerMess1.Wednesday)
            },
            { day: 'Thursday',
                breakfast: this.data.mess1.breakfastMess1.Thursday ? this.data.mess1.breakfastMess1.Thursday.val : "***",
                lunch: this.data.mess1.lunchMess1.Thursday ? this.data.mess1.lunchMess1.Thursday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Thursday ? this.data.mess1.dinnerMess1.Thursday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Thursday, this.data.mess1.lunchMess1.Thursday, this.data.mess1.dinnerMess1.Thursday)
            },
            { day: 'Friday',
                breakfast: this.data.mess1.breakfastMess1.Friday ? this.data.mess1.breakfastMess1.Friday.val : "***",
                lunch: this.data.mess1.lunchMess1.Friday ? this.data.mess1.lunchMess1.Friday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Friday ? this.data.mess1.dinnerMess1.Friday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Friday, this.data.mess1.lunchMess1.Friday, this.data.mess1.dinnerMess1.Friday)
            },
            { day: 'Saturday',
                breakfast: this.data.mess1.breakfastMess1.Saturday ? this.data.mess1.breakfastMess1.Saturday.val : "***",
                lunch: this.data.mess1.lunchMess1.Saturday ? this.data.mess1.lunchMess1.Saturday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Saturday ? this.data.mess1.dinnerMess1.Saturday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Saturday, this.data.mess1.lunchMess1.Saturday, this.data.mess1.dinnerMess1.Saturday)
            },
            { day: 'Sunday',
                breakfast: this.data.mess1.breakfastMess1.Sunday ? this.data.mess1.breakfastMess1.Sunday.val : "***",
                lunch: this.data.mess1.lunchMess1.Sunday ? this.data.mess1.lunchMess1.Sunday.val : "***",
                dinner: this.data.mess1.dinnerMess1.Sunday ? this.data.mess1.dinnerMess1.Sunday.val : "***",
                cost: this.checkCost(this.data.mess1.breakfastMess1.Sunday, this.data.mess1.lunchMess1.Sunday, this.data.mess1.dinnerMess1.Sunday)
            }
        ];
        // MESS 2 DATA
        this.ELEMENT_DATA2 = [
            { day: 'Monday',
                breakfast: this.data.mess2.breakfastMess2.Monday ? this.data.mess2.breakfastMess2.Monday.val : "***",
                lunch: this.data.mess2.lunchMess2.Monday ? this.data.mess2.lunchMess2.Monday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Monday ? this.data.mess2.dinnerMess2.Monday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Monday, this.data.mess2.lunchMess2.Monday, this.data.mess2.dinnerMess2.Monday)
            },
            { day: 'Tuesday',
                breakfast: this.data.mess2.breakfastMess2.Tuesday ? this.data.mess2.breakfastMess2.Tuesday.val : "***",
                lunch: this.data.mess2.lunchMess2.Tuesday ? this.data.mess2.lunchMess2.Tuesday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Tuesday ? this.data.mess2.dinnerMess2.Tuesday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Tuesday, this.data.mess2.lunchMess2.Tuesday, this.data.mess2.dinnerMess2.Tuesday)
            },
            { day: 'Wednesday',
                breakfast: this.data.mess2.breakfastMess2.Wednesday ? this.data.mess2.breakfastMess2.Wednesday.val : "***",
                lunch: this.data.mess2.lunchMess2.Wednesday ? this.data.mess2.lunchMess2.Wednesday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Wednesday ? this.data.mess2.dinnerMess2.Wednesday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Wednesday, this.data.mess2.lunchMess2.Wednesday, this.data.mess2.dinnerMess2.Wednesday)
            },
            { day: 'Thursday',
                breakfast: this.data.mess2.breakfastMess2.Thursday ? this.data.mess2.breakfastMess2.Thursday.val : "***",
                lunch: this.data.mess2.lunchMess2.Thursday ? this.data.mess2.lunchMess2.Thursday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Thursday ? this.data.mess2.dinnerMess2.Thursday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Thursday, this.data.mess2.lunchMess2.Thursday, this.data.mess2.dinnerMess2.Thursday)
            },
            { day: 'Friday',
                breakfast: this.data.mess2.breakfastMess2.Friday ? this.data.mess2.breakfastMess2.Friday.val : "***",
                lunch: this.data.mess2.lunchMess2.Friday ? this.data.mess2.lunchMess2.Friday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Friday ? this.data.mess2.dinnerMess2.Friday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Friday, this.data.mess2.lunchMess2.Friday, this.data.mess2.dinnerMess2.Friday)
            },
            { day: 'Saturday',
                breakfast: this.data.mess2.breakfastMess2.Saturday ? this.data.mess2.breakfastMess2.Saturday.val : "***",
                lunch: this.data.mess2.lunchMess2.Saturday ? this.data.mess2.lunchMess2.Saturday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Saturday ? this.data.mess2.dinnerMess2.Saturday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Saturday, this.data.mess2.lunchMess2.Saturday, this.data.mess2.dinnerMess2.Saturday)
            },
            { day: 'Sunday',
                breakfast: this.data.mess2.breakfastMess2.Sunday ? this.data.mess2.breakfastMess2.Sunday.val : "***",
                lunch: this.data.mess2.lunchMess2.Sunday ? this.data.mess2.lunchMess2.Sunday.val : "***",
                dinner: this.data.mess2.dinnerMess2.Sunday ? this.data.mess2.dinnerMess2.Sunday.val : "***",
                cost: this.checkCost(this.data.mess2.breakfastMess2.Sunday, this.data.mess2.lunchMess2.Sunday, this.data.mess2.dinnerMess2.Sunday)
            }
        ];
        this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner', 'cost'];
        this.dataSource1 = this.ELEMENT_DATA1;
        this.dataSource2 = this.ELEMENT_DATA2;
    }
    DialogComponent.prototype.checkCost = function (val1, val2, val3) {
        if (val1 === undefined && val2 === undefined && val3 === undefined) {
            return 0;
        }
        else if (val1 === undefined && val2 === undefined) {
            return val3.cost;
        }
        else if (val2 === undefined && val3 === undefined) {
            return val1.cost;
        }
        else if (val3 === undefined && val1 === undefined) {
            return val2.cost;
        }
        else if (val1 === undefined) {
            return val2.cost + val3.cost;
        }
        else if (val2 === undefined) {
            return val1.cost + val3.cost;
        }
        else if (val3 === undefined) {
            return val1.cost + val2.cost;
        }
        else {
            return val1.cost + val2.cost + val3.cost;
        }
    };
    DialogComponent.prototype.getTotalCostMess1 = function () {
        return this.ELEMENT_DATA1.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    DialogComponent.prototype.getTotalCostMess2 = function () {
        return this.ELEMENT_DATA2.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-component',
            template: __webpack_require__(/*! ./dialog-component.html */ "./src/app/components/mess-book/dialog-component.html"),
            styles: [__webpack_require__(/*! ./dialog-component.css */ "./src/app/components/mess-book/dialog-component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\" onmousedown=\"return false\">IIIT Rosie</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- user -->\n      <li class=\"nav-item c\" *ngIf=\"authService.loggedIn() && !admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" href=\"profile\" onmousedown=\"return false\">Profile</a>\n      </li>\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"bookCoupon\" onmousedown=\"return false\">Book Coupon</a>\n      </li>\n      <div *ngIf=\"user\">\n        <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n         <a class=\"nav-link\" href=\"setting\" onmousedown=\"return false\">Settings</a>\n        </li>\n      </div>\n\n      <!-- God route-->\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !user && !messDown && !messUp\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"god\" onmousedown=\"return false\">Delete Coupons</a>\n      </li>\n\n      <!-- admin down-->\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !user && messDown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"adminMess1\" onmousedown=\"return false\">All Coupons</a>\n      </li>\n\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !user && messDown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"adminMess1Users\" onmousedown=\"return false\">User Coupons</a>\n      </li>\n\n      <!-- admin up-->\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !user && messUp\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"adminMess2\" onmousedown=\"return false\">All Coupons</a>\n      </li>\n\n      <li class=\"nav-item d\" *ngIf=\"authService.loggedIn() && !user && messUp\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n       <a class=\"nav-link\" href=\"adminMess2Users\" onmousedown=\"return false\">User Coupons</a>\n      </li>\n\n    </ul>\n    <ul class=\"navbar-nav \">\n      <li class=\"nav-item \" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <button  class=\"btn btn-sm nav-link btn-danger\" (click)=\"onlogout()\" onmousedown=\"return false\">Logout</button>\n      </li>\n\n      <li class=\"nav-item e\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\n        <a href=\"register\" class=\"nav-link\" onmousedown=\"return false\">signup</a>\n      </li>\n      <li class=\"nav-item f\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"login\" class=\"nav-link\" onmousedown=\"return false\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (data) {
                _this.user = data.data.user;
            });
            // checking for admin
            var Info = this.authService.loadUserInfo();
            if (Info.userType === "admin") {
                this.admin = Info;
                if (Info.messType === "mess1") {
                    this.messDown = Info.messType;
                }
                else if (Info.messType === "mess2") {
                    this.messUp = Info.messType;
                }
                else {
                    this.god = Info.messType;
                }
            }
        }
    };
    NavbarComponent.prototype.onlogout = function () {
        this.authService.loggedOut();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileCard{\n  background-color: #2c2c2c;\n  color: #F1F8FE;\n}\n\n.hovere{\n  cursor: pointer;\n  color: white\n}\n\ntable {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<h1 class=\"hovere\">{{user.collegeId}}'s Profile</h1>\n<hr>\n  <div class=\"jumbotron profileCard\">\n    <h3 class=\"profileCard\">Email : <span style=\"font-size:14px;\"> {{user.email}}</span></h3>\n\n    <div *ngIf=\"user\">\n      <div class=\"well\">\n        <a href=\"setting\" class=\"btn btn-success\" onmousedown=\"return false\">Update Profile</a>\n      </div>\n    </div>\n    <br/>\n  </div>\n\n  <h1 style=\"color:white\">Your coupon this week</h1>\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Mess1 (Ground Floor)\n        </mat-panel-title>\n        <mat-panel-description>\n          Press this to toggle\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div *ngIf=\"messDown\">\n      <!-- Ground Floor Mess -->\n      <div class=\"jumbotron\">\n        <h3>Booked on:- {{bookedDate}}</h3>\n        <table mat-table [dataSource]=\"messDown\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n\n          <ng-container matColumnDef=\"day\">\n            <th mat-header-cell *matHeaderCellDef> Day </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.day}} </td>\n            <td mat-footer-cell *matFooterCellDef> Total </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"breakfast\">\n            <th mat-header-cell *matHeaderCellDef> BreakFast </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.breakfast}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"lunch\">\n            <th mat-header-cell *matHeaderCellDef> Lunch </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.lunch}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"dinner\">\n            <th mat-header-cell *matHeaderCellDef> Dinner </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.dinner}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"cost\">\n          <th mat-header-cell *matHeaderCellDef> Cost </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cost}} </td>\n          <td mat-footer-cell *matFooterCellDef> {{costDown}} </td>\n        </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n\n      </div>\n      </div>\n      <!-- if no coupon-->\n      <div *ngIf=\"message\">\n        <p style=\"color:white\">{{message}}</p>\n      </div>\n    </mat-expansion-panel>\n\n\n    <br><br>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Mess 2 (First floor)\n        </mat-panel-title>\n        <mat-panel-description>\n          Press this to toggle\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div *ngIf=\"messUp\">\n      <!-- 1st Floor Mess -->\n      <div class=\"jumbotron\">\n        <h3>Booked on:- {{bookedDate}}</h3>\n        <table mat-table [dataSource]=\"messUp\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n\n          <ng-container matColumnDef=\"day\">\n            <th mat-header-cell *matHeaderCellDef> Day </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.day}} </td>\n            <td mat-footer-cell *matFooterCellDef> Total </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"breakfast\">\n            <th mat-header-cell *matHeaderCellDef> BreakFast </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.breakfast}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"lunch\">\n            <th mat-header-cell *matHeaderCellDef> Lunch </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.lunch}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"dinner\">\n            <th mat-header-cell *matHeaderCellDef> Dinner </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.dinner}} </td>\n            <td mat-footer-cell *matFooterCellDef>  </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"cost\">\n          <th mat-header-cell *matHeaderCellDef> Cost </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cost}} </td>\n          <td mat-footer-cell *matFooterCellDef> {{costUp}} </td>\n        </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n      </div>\n      </div>\n\n      <!-- if no coupon-->\n      <div *ngIf=\"message\">\n        <p style=\"color:white\">{{message}}</p>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
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
    function ProfileComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getProfile().subscribe(function (data) {
            _this.spinnerService.hide();
            _this.user = data.data.user;
            var Info = _this.authService.loadUserInfo();
            if (Info.userType === "admin") {
                _this.router.navigate(['/']);
            }
        });
        this.authService.getCoupon().subscribe(function (data) {
            if (data.data.success) {
                _this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner', 'cost'];
                _this.messDown = data.data.bookedCouponDown.messdown;
                _this.messUp = data.data.bookedCouponUp.messup;
                _this.costDown = _this.messDown.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
                _this.costUp = _this.messUp.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
                _this.bookedDate = data.data.bookedCouponUp.createdAt || data.data.bookedCouponDown.createdAt;
            }
            else {
                _this.message = data.message;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerCard{\n  background-color: #2c2c2c;\n  color: #F1F8FE;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #868e96e3;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron registerCard\">\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-3\">\n  </div>\n  <div class=\"col-xs-12  col-md-6\">\n    <h1 class=\"hovere\"><legend>SignUp</legend></h1>\n    <hr/>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputcollegeId\">College ID</label>\n        <input type=\"text\" [(ngModel)]=\"collegeId\" name=\"collegeId\" class=\"form-control\" id=\"exampleInputcollegeId\"  maxlength=\"14\" placeholder=\"Enter College ID\" required autofocus>\n        <small id=\"exampleInputcollegeId\" class=\"form-text\">Enter your college ID</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputName\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"exampleInputcollegeId\"  maxlength=\"40\" placeholder=\"Enter your name\" required>\n        <small id=\"exampleInputName\" class=\"form-text\">Enter your Name</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"exampleInputPassword1\" placeholder=\"Password\" maxlength=\"40\" required>\n        <small id=\"exampleInputPassword1\" class=\"form-text\">Your password is protetced with us.</small>\n      </div>\n      <mat-radio-group name=\"sex\" [(ngModel)]=\"sex\" form=\"sex\">\n        <label for=\"\">Please select your sex</label><br>\n        <mat-radio-button class=\"example-margin\" value=\"male\">Male</mat-radio-button><br>\n        <mat-radio-button class=\"example-margin\" value=\"female\">Female</mat-radio-button>\n      </mat-radio-group>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Sign UP\">\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
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
    function RegisterComponent(router, flashMessage, http, authService, spinnerService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.authService = authService;
        this.spinnerService = spinnerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (this.router.url === '/register') {
                this.router.navigate(['/']);
            }
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            collegeId: this.collegeId,
            password: this.password,
            sex: this.sex,
            name: this.name
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
                _this.router.navigate(['/register']);
            }
            else if (data.data.success === true) {
                _this.spinnerService.hide();
                _this.flashMessage.show('Please verify your collegeId with link sent to your college Email ID', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/setting/setting.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settingsCard{\n  background-color: #2c2c2c;\n  color: #F1F8FE;\n}\n\n.hovere{\n  cursor: pointer;\n  color: #868e96e3;\n}\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\n  <div class=\"container-fluid jumbotron settingsCard\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-3\">\n      </div>\n      <div class=\"col-xs-12  col-md-6\">\n        <h1 class=\"hovere\"><legend>Update Settings</legend></h1>\n        <hr/>\n        <form (submit)=\"changeSetting()\">\n          <div class=\"form-group\">\n            <label for=\"password\"> Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\" maxlength=\"20\" placeholder=\"Update Password\" required >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirmPassword\">Confirm Password</label>\n            <input type=\"password\" [(ngModel)]=\"confirmPassword\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" maxlength=\"20\" placeholder=\"Confirm Updated Password\" required >\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingComponent = /** @class */ (function () {
    function SettingComponent(router, authService, flashMessage, http, spinnerService) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.http = http;
        this.spinnerService = spinnerService;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getProfile().subscribe(function (data) {
            _this.spinnerService.hide();
            _this.user = data.data.user;
        });
        var Info = this.authService.loadUserInfo();
        if (Info.userType === "admin") {
            this.router.navigate(['/']);
        }
    };
    SettingComponent.prototype.changeSetting = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        this.authService.changeSetting(user).subscribe(function (data) {
            if (data.data.success === false) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
                _this.spinnerService.hide();
            }
            else if (data.data.success === true) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
                _this.spinnerService.hide();
                _this.router.navigate(['/profile']);
            }
        });
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.flashMessage.show('You need to login to view this page', { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('auth/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('admin/login', admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.activateUser = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/activate', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get profile
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var userId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('user/profile/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get ground floor users for admin
    AuthService.prototype.getUsersMessDown = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var adminId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('admin/mess1/all/' + adminId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get 1st floor users for admin
    AuthService.prototype.getUsersmessUp = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var adminId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('admin/mess2/all/' + adminId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // God admin route
    AuthService.prototype.god = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var adminId = this.loadUserInfo()._id;
        headers.append('x-access-token', data);
        headers.append('Content-Type', 'application/json');
        return this.http.post('admin/god/' + adminId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // get coupon
    AuthService.prototype.getCoupon = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var userId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('book/getCoupon/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // changing password
    AuthService.prototype.changeSetting = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var userId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('user/setting/' + userId, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // booking couon
    AuthService.prototype.bookCoupon = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        var userId = this.loadUserInfo()._id;
        headers.append('x-access-token', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('book/bookCoupon/' + userId, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token-id', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token-id');
        this.authToken = token;
    };
    AuthService.prototype.loadUserInfo = function () {
        var user = localStorage.getItem('user');
        return JSON.parse(user);
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('token-id');
    };
    AuthService.prototype.loggedOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/knrt10/dev/rosieIIIT/rosieIIITbbsrfrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map