(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-widget/first-widget.component */ "./src/app/first-widget/first-widget.component.ts");
/* harmony import */ var _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-widget/second-widget.component */ "./src/app/second-widget/second-widget.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set/set.component */ "./src/app/set/set.component.ts");
/* harmony import */ var _get_get_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get/get.component */ "./src/app/get/get.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










class AppComponent {
    constructor() {
        this.title = 'ngNt';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-first-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-second-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_4__["FirstWidgetComponent"], _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_5__["SecondWidgetComponent"], _set_set_component__WEBPACK_IMPORTED_MODULE_6__["SetComponent"], _get_get_component__WEBPACK_IMPORTED_MODULE_7__["GetComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-widget/first-widget.component */ "./src/app/first-widget/first-widget.component.ts");
/* harmony import */ var _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second-widget/second-widget.component */ "./src/app/second-widget/second-widget.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set/set.component */ "./src/app/set/set.component.ts");
/* harmony import */ var _get_get_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get/get.component */ "./src/app/get/get.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
        _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_6__["FirstWidgetComponent"],
        _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_7__["SecondWidgetComponent"],
        _set_set_component__WEBPACK_IMPORTED_MODULE_8__["SetComponent"],
        _get_get_component__WEBPACK_IMPORTED_MODULE_9__["GetComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                    _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_6__["FirstWidgetComponent"],
                    _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_7__["SecondWidgetComponent"],
                    _set_set_component__WEBPACK_IMPORTED_MODULE_8__["SetComponent"],
                    _get_get_component__WEBPACK_IMPORTED_MODULE_9__["GetComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 25, vars: 0, consts: [[1, "banner"], [1, "container"], [1, "row"], [1, "col-12"], [1, "banner__title"], ["src", "assets/images/header/header_mob.png", "alt", "mobile image", 1, "banner__image", "mx-auto", "d-block", "d-sm-none"], [1, "banner__desc"], [1, "col-6", "col-md-12"], [1, "banner__subtitle"], [1, "col-6", "d-block", "d-md-none"], [1, "banner-mobile__buttons", "ml-n2", "d-flex", "justify-content-end"], ["href", "javascript:void(0)", 1, "banner-mobile__btn"], ["src", "assets/images/header/app_mob.svg", "alt", "app mobile store", 1, "banner__img"], ["src", "assets/images/header/google_mob.svg", "alt", "google mobile store", 1, "banner__img"], [1, "col-12", "d-none", "d-md-block"], [1, "banner__buttons", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "banner__btn"], ["src", "assets/images/header/app.svg", "alt", "app store", 1, "banner__img"], ["src", "assets/images/header/google.svg", "alt", "google store", 1, "banner__img"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sed do eiusmod tempor incididunt ut labore et dolore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/header/header.png\") 50% 0% no-repeat;\n}\n@media screen and (max-width: 767px) {\n  .banner[_ngcontent-%COMP%] {\n    padding-bottom: 100px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .banner[_ngcontent-%COMP%] {\n    background-image: none;\n    padding-bottom: 0;\n  }\n}\n.banner__title[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-top: 250px;\n  font-weight: 600;\n  font-size: 52px;\n  line-height: 71px;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: white;\n}\n@media screen and (max-width: 575px) {\n  .banner__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    text-align: left;\n    padding-left: 0;\n    margin-top: 90px;\n    letter-spacing: 0.3px;\n  }\n}\n.banner__image[_ngcontent-%COMP%] {\n  margin-top: 44px;\n}\n.banner__subtitle[_ngcontent-%COMP%] {\n  margin-top: 87px;\n  font-size: 18px;\n  line-height: 25px;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n}\n@media screen and (max-width: 767px) {\n  .banner__subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 25px;\n    margin-top: 38px;\n    text-align: left;\n    font-weight: 600;\n    margin-right: -20px;\n  }\n}\n.banner__desc[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 24px;\n  color: white;\n  text-align: center;\n}\n@media screen and (max-width: 575px) {\n  .banner__desc[_ngcontent-%COMP%] {\n    margin-top: 22px;\n    font-weight: 300;\n    font-size: 18px;\n    line-height: 24px;\n    color: #f7f3f2;\n    text-align: left;\n  }\n}\n.banner__buttons[_ngcontent-%COMP%] {\n  margin-top: 27px;\n  padding-bottom: 289px;\n}\n.banner__btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 30px;\n}\n.banner-mobile__buttons[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.banner-mobile__btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0VBQUE7QUNDRjtBRENFO0VBSEY7SUFJSSxxQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQVBGO0lBUUksc0JBQUE7SUFDQSxpQkFBQTtFQ0dGO0FBQ0Y7QURERTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNHSjtBRERJO0VBWEY7SUFZSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDSUo7QUFDRjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkk7RUFSRjtJQVNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDS0o7QUFDRjtBREhFO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0o7QURISTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ01KO0FBQ0Y7QURKRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNNSjtBREhFO0VBQ0Usa0JBQUE7QUNLSjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBRERFO0VBQ0Usa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyLnBuZ1wiKSA1MCUgMCUgbm8tcmVwZWF0O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19pbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xyXG4gIH1cclxuICAmX19zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4N3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2Rlc2Mge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjZjdmM2YyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjg5cHg7XHJcbiAgfVxyXG5cclxuICAmX19idG46bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gICYtbW9iaWxlX19idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAmLW1vYmlsZV9fYnRuOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyLnBuZ1wiKSA1MCUgMCUgbm8tcmVwZWF0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmJhbm5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG4uYmFubmVyX190aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBsaW5lLWhlaWdodDogNzFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5iYW5uZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIH1cbn1cbi5iYW5uZXJfX2ltYWdlIHtcbiAgbWFyZ2luLXRvcDogNDRweDtcbn1cbi5iYW5uZXJfX3N1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogODdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFubmVyX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIH1cbn1cbi5iYW5uZXJfX2Rlc2Mge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYmFubmVyX19kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjZjdmM2YyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5iYW5uZXJfX2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMjg5cHg7XG59XG4uYmFubmVyX19idG46bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmJhbm5lci1tb2JpbGVfX2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLmJhbm5lci1tb2JpbGVfX2J0bjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/first-widget/first-widget.component.ts":
/*!********************************************************!*\
  !*** ./src/app/first-widget/first-widget.component.ts ***!
  \********************************************************/
/*! exports provided: FirstWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWidgetComponent", function() { return FirstWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FirstWidgetComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FirstWidgetComponent.ɵfac = function FirstWidgetComponent_Factory(t) { return new (t || FirstWidgetComponent)(); };
FirstWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstWidgetComponent, selectors: [["app-first-widget"]], decls: 27, vars: 0, consts: [[1, "widget"], [1, "container"], [1, "row"], [1, "col-lg-6", "order-2", "order-lg-1"], [1, "widget__title"], [1, "widget-first__items"], [1, "widget__item"], [1, "widget__subtitle"], [1, "widget__txt"], ["href", "javascript:void(0)", 1, "widget__btn", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-6", "order-1", "order-lg-2"], ["src", "assets/images/first-widget/img1.png", "alt", "first image", 1, "d-none", "d-md-block", "widget__img", "widget-first__img", "img-fluid"], ["src", "assets/images/first-widget/img1_mob.png", "alt", "first mobile image", 1, "d-block", "d-md-none", "widget__img", "widget-first__img"]], template: function FirstWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Viverra tellus in hac habitasse platea dictumst ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vestibulum rhoncus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " At auctor urna nunc id cursus metus aliquam. Sit amet aliquam id diam maecenas ultricies mi eget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lectus arcu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Montes nascetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " ridiculus mus mauris vitae ultricies leo. Libero justo laoreet sit amet. Morbi tincidunt augue interdum velit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".widget__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 54px;\n  margin-top: 2px;\n}\n@media screen and (max-width: 575px) {\n  .widget__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    margin-left: 5px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__title[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__items[_ngcontent-%COMP%] {\n    margin-top: 136vw;\n  }\n}\n.widget__item[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  margin-top: 61px;\n  margin-right: 100px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 47px;\n  height: 47px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n  margin-left: -67px;\n  margin-top: -5px;\n}\n.widget__item[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 58px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 63px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:last-child {\n  margin-top: 58px;\n}\n.widget__subtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .widget__subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 23px;\n    letter-spacing: 0.3px;\n  }\n}\n.widget__txt[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 23px;\n  color: #adadad;\n  letter-spacing: 0.5px;\n}\n@media screen and (max-width: 575px) {\n  .widget__txt[_ngcontent-%COMP%] {\n    margin-top: 0;\n    letter-spacing: 0;\n  }\n}\n.widget__btn[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  margin-top: 88px;\n  margin-bottom: 266px;\n  font-family: \"Proxima Nova\";\n  display: block;\n  width: 245px;\n  height: 50px;\n  background: #0dc78f;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__btn[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    margin-bottom: 0px;\n  }\n}\n.widget__btn[_ngcontent-%COMP%]:hover {\n  color: #0dc78f;\n  background-color: #fff;\n  text-decoration: none;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__img[_ngcontent-%COMP%] {\n    right: 0;\n    max-width: 100%;\n    margin-top: 166px;\n  }\n}\n.widget-first__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 934px;\n}\n@media screen and (max-width: 991px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__img[_ngcontent-%COMP%] {\n    margin-top: 58px;\n  }\n}\n.second-widget__block[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 104px;\n  padding-bottom: 458px;\n}\n@media screen and (max-width: 1200px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    padding-bottom: 190px;\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 575px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3Qtd2lkZ2V0L0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGZpcnN0LXdpZGdldFxcZmlyc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maXJzdC13aWRnZXQvZmlyc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQU5GO0lBT0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNDSjtBQUNGO0FER0k7RUFERjtJQUVJLGlCQUFBO0VDQUo7QUFDRjtBRElJO0VBREY7SUFFSSxpQkFBQTtFQ0RKO0FBQ0Y7QURHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFMRjtJQU1JLGlCQUFBO0VDQUo7QUFDRjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERUk7RUFDRSxnQkFBQTtBQ0FOO0FEQ007RUFGRjtJQUdJLGdCQUFBO0VDRU47QUFDRjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtFQ0dKO0FBQ0Y7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHSjtBRERJO0VBUkY7SUFTSSxhQUFBO0lBQ0EsaUJBQUE7RUNJSjtBQUNGO0FEREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNHSjtBRERJO0VBakJGO0lBa0JJLGdCQUFBO0lBQ0Esa0JBQUE7RUNJSjtBQUNGO0FERkk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNJTjtBRENJO0VBREY7SUFFSSxRQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDRUo7QUFDRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDRUo7QURBSTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSxtQkFBQTtFQ0dKO0FBQ0Y7QURGSTtFQVJGO0lBU0ksa0JBQUE7SUFDQSxtQkFBQTtFQ0tKO0FBQ0Y7QURESTtFQURGO0lBRUksZ0JBQUE7RUNJSjtBQUNGO0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBTEY7SUFNSSxxQkFBQTtJQUNBLGNBQUE7RUNJRjtBQUNGO0FERkU7RUFWRjtJQVdJLGFBQUE7SUFFQSxpQkFBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJzdC13aWRnZXQvZmlyc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldCB7XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLXNlY29uZF9fdGl0bGUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWZpcnN0X19pdGVtcyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMzZ2dztcclxuICAgIH1cclxuICB9XHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDYxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNDdweDtcclxuICAgICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjdweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2M3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19zdWJ0aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdHh0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogI2FkYWRhZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogODhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2NnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUHJveGltYSBOb3ZhXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwZGM3OGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMGRjNzhmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNjZweDtcclxuICAgIH1cclxuICB9XHJcbiAgJi1maXJzdF9faW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5MzRweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1zZWNvbmRfX2ltZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZC13aWRnZXRfX2Jsb2NrIHtcclxuICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDU4cHg7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE5MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiLndpZGdldF9fdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXQtc2Vjb25kX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXQtZmlyc3RfX2l0ZW1zIHtcbiAgICBtYXJnaW4tdG9wOiAxMzZ2dztcbiAgfVxufVxuLndpZGdldF9faXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiA2MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldF9faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbi53aWRnZXRfX2l0ZW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjdweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi53aWRnZXRfX2l0ZW06bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX2l0ZW06bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tdG9wOiA2M3B4O1xuICB9XG59XG4ud2lkZ2V0X19pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xufVxuLndpZGdldF9fc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiAjZmJmYmZiO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldF9fc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIH1cbn1cbi53aWRnZXRfX3R4dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjYWRhZGFkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X190eHQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbn1cbi53aWRnZXRfX2J0biB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI2NnB4O1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIE5vdmFcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMGRjNzhmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX2J0biB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbi53aWRnZXRfX2J0bjpob3ZlciB7XG4gIGNvbG9yOiAjMGRjNzhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX2ltZyB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE2NnB4O1xuICB9XG59XG4ud2lkZ2V0LWZpcnN0X19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MzRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC53aWRnZXQtZmlyc3RfX2ltZyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0LWZpcnN0X19pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0LXNlY29uZF9faW1nIHtcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xuICB9XG59XG5cbi5zZWNvbmQtd2lkZ2V0X19ibG9jayB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDRweDtcbiAgcGFkZGluZy1ib3R0b206IDQ1OHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWNvbmQtd2lkZ2V0X19ibG9jayB7XG4gICAgcGFkZGluZy1ib3R0b206IDE5MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2Vjb25kLXdpZGdldF9fYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-first-widget',
                templateUrl: './first-widget.component.html',
                styleUrls: ['./first-widget.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "copyright"], [1, "container"], [1, "row"], [1, "col-12"], [1, "copyright__title"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".copyright[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.copyright__title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 24px;\n  color: #adadad;\n  padding-top: 48px;\n  padding-bottom: 40px;\n  text-align: center;\n}\n@media screen and (max-width: 575px) {\n  .copyright__title[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 14px;\n    line-height: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3B5cmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogI2FkYWRhZDtcclxuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNvcHlyaWdodF9fdGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2FkYWRhZDtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuY29weXJpZ2h0X190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get/get.component.ts":
/*!**************************************!*\
  !*** ./src/app/get/get.component.ts ***!
  \**************************************/
/*! exports provided: GetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetComponent", function() { return GetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GetComponent.ɵfac = function GetComponent_Factory(t) { return new (t || GetComponent)(); };
GetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetComponent, selectors: [["app-get"]], decls: 19, vars: 0, consts: [[1, "get"], [1, "container"], [1, "row"], [1, "col-12"], [1, "set__title", "text-center"], [1, "col-12", "d-none", "d-md-block"], [1, "get__buttons", "banner__buttons", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "banner__btn"], ["src", "assets/images/header/app.svg", "alt", "app store", 1, "banner__img"], ["src", "assets/images/header/google.svg", "alt", "google store", 1, "banner__img"], [1, "col-12", "d-block", "d-md-none"], [1, "banner-mobile__buttons", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "banner-mobile__btn"], ["src", "assets/images/header/app_mob.svg", "alt", "app mobile store", 1, "banner__img"], ["src", "assets/images/header/google_mob.svg", "alt", "google mobile store", 1, "banner__img"]], template: function GetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 767px) {\n  .get[_ngcontent-%COMP%] {\n    padding-bottom: 100px;\n  }\n}\n.get__buttons[_ngcontent-%COMP%] {\n  margin-top: 54px;\n  padding-bottom: 150px;\n}\n.get-mobile__buttons[_ngcontent-%COMP%] {\n  margin-top: 53px;\n  padding-bottom: 100px;\n}\n.get-mobile__btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: block;\n  font-size: 29px;\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 6px;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  text-align: center;\n}\n.get-mobile__btn[_ngcontent-%COMP%]:hover {\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  color: #0dc78f;\n  border: 1px solid #0dc78f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0L0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGdldFxcZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nZXQvZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxxQkFBQTtFQ0NGO0FBQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9nZXQvZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogNTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICB9XHJcbiAgJi1tb2JpbGVfX2J1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gICYtbW9iaWxlX19idG4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICAgY29sb3I6ICMwZGM3OGY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZGM3OGY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5nZXQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmdldF9fYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDU0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn1cbi5nZXQtbW9iaWxlX19idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNTNweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLmdldC1tb2JpbGVfX2J0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdldC1tb2JpbGVfX2J0bjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgY29sb3I6ICMwZGM3OGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZGM3OGY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-get',
                templateUrl: './get.component.html',
                styleUrls: ['./get.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 39, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-12", "d-block", "d-md-none"], [1, "burger__menu"], ["id", "checkbox", "type", "checkbox"], ["for", "checkbox", 1, "burger__button"], [1, "burger__list"], [1, "burger__logo"], ["href", "javascript:void(0)", 1, "d-flex", "justify-content-center"], ["src", "assets/images/nav/mobile_logo.svg", "alt", "mobile_logo", 1, "nav__img"], [1, "burger__item"], ["href", "javascript:void(0)", 1, "burger__link"], [1, "col-md-4"], [1, "nav__logo"], ["href", "javascript:void(0)", 1, "d-flex"], ["src", "assets/images/nav/logo.svg", "alt", "logo", 1, "nav__img", "d-none", "d-md-block"], ["src", "assets/images/nav/mobile_logo.svg", "alt", "mobile logo", 1, "nav__img", "d-block", "d-md-none"], [1, "col-md-8", "col-lg-6", "col-xl-4", "d-none", "d-md-block"], [1, "nav__menu"], [1, "nav__list", "d-flex", "justify-content-between"], [1, "nav__item"], ["href", "javascript:void(0)", 1, "nav__link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  padding-top: 32px;\n  z-index: 100;\n  width: 100%;\n}\n@media screen and (max-width: 767px) {\n  .header[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.nav__img[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.nav__el[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 43px;\n  height: 43px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n}\n@media screen and (max-width: 575px) {\n  .nav__el[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-left: 11px;\n  }\n}\n.nav__list[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.nav__link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 48px;\n  color: white;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.nav__link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #0dc78f;\n}\n#checkbox[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.burger__el[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 39px;\n  height: 39px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n}\n.burger__item[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n.burger__item[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 79px;\n}\n.burger__logo[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n.burger__button[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  top: 34px;\n  right: 29px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  z-index: 2;\n}\n.burger__list[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n  left: -120%;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  list-style: none;\n  text-align: center;\n  background-color: #141414;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.burger__link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 48px;\n  text-align: center;\n  color: #ffffff;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.burger__link[_ngcontent-%COMP%]:hover {\n  color: #0dc78f;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  text-decoration: none;\n}\n.burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before, .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff;\n  z-index: 2;\n}\n.burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  top: -6px;\n}\n.burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: 6px;\n}\n#checkbox[_ngcontent-%COMP%]    ~ .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71), -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n}\n#checkbox[_ngcontent-%COMP%]:checked    ~ .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n  transition: transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71), -webkit-transform 0.2s cubic-bezier(0.08, 0.81, 0.87, 0.71);\n}\n#checkbox[_ngcontent-%COMP%]:checked    ~ .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  top: 0;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n#checkbox[_ngcontent-%COMP%]:checked    ~ .burger__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  top: 0;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n#checkbox[_ngcontent-%COMP%]:checked    ~ .burger__list[_ngcontent-%COMP%] {\n  display: block;\n  left: 0;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n#checkbox[_ngcontent-%COMP%]:checked    ~ .burger__list[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBTkY7SUFPSSxjQUFBO0VDRUY7QUFDRjtBREVFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBUkY7SUFTSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0FKO0FERUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNBTjtBREtBO0VBQ0Usa0JBQUE7QUNGRjtBRE1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBRE1FO0VBQ0UsZ0JBQUE7QUNKSjtBRE9FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDTEo7QURRRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1BKO0FEVUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNSSjtBRFVJO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxxQkFBQTtBQ1JOO0FEYUE7OztFQUdFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxRQUFBO0FDVkY7QURhQTtFQUNFLCtFQUFBO0VBQUEsdUVBQUE7RUFBQSwrREFBQTtFQUFBLDRIQUFBO0FDVkY7QURhQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwrRUFBQTtFQUFBLHVFQUFBO0VBQUEsK0RBQUE7RUFBQSw0SEFBQTtBQ1ZGO0FEYUE7RUFDRSxNQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ1ZGO0FEYUE7RUFDRSxNQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ1ZGO0FEYUE7RUFDRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNWRjtBRGFBO0VBQ0UsbUJBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2IHtcclxuICAmX19pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcblxyXG4gICZfX2VsIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gICZfX2xpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMGRjNzhmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2NoZWNrYm94IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idXJnZXIge1xyXG4gICZfX2VsIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzOXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIH1cclxuICAmX19pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3OXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNHB4O1xyXG4gICAgcmlnaHQ6IDI5cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbiAgICBsZWZ0OiAtMTIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICZfX2xpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMGRjNzhmO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXJnZXJfX2J1dHRvbiA+IHNwYW4sXHJcbi5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmJlZm9yZSxcclxuLmJ1cmdlcl9fYnV0dG9uID4gc3Bhbjo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IC02cHg7XHJcbn1cclxuXHJcbi5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogNnB4O1xyXG59XHJcblxyXG4jY2hlY2tib3ggfiAuYnVyZ2VyX19idXR0b24gPiBzcGFuIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4wOCwgMC44MSwgMC44NywgMC43MSk7XHJcbn1cclxuXHJcbiNjaGVja2JveDpjaGVja2VkIH4gLmJ1cmdlcl9fYnV0dG9uID4gc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODEsIDAuODcsIDAuNzEpO1xyXG59XHJcblxyXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmJlZm9yZSB7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmFmdGVyIHtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2xpc3Qge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuXG4ubmF2X19pbWcge1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLm5hdl9fZWwge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm5hdl9fZWwge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgfVxufVxuLm5hdl9fbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLm5hdl9fbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuLm5hdl9fbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwZGM3OGY7XG59XG5cbiNjaGVja2JveCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJ1cmdlcl9fZWwge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ1cmdlcl9faXRlbSB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uYnVyZ2VyX19pdGVtOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IDc5cHg7XG59XG4uYnVyZ2VyX19sb2dvIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5idXJnZXJfX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNHB4O1xuICByaWdodDogMjlweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuLmJ1cmdlcl9fbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICBsZWZ0OiAtMTIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJ1cmdlcl9fbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbi5idXJnZXJfX2xpbms6aG92ZXIge1xuICBjb2xvcjogIzBkYzc4ZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXJnZXJfX2J1dHRvbiA+IHNwYW4sXG4uYnVyZ2VyX19idXR0b24gPiBzcGFuOjpiZWZvcmUsXG4uYnVyZ2VyX19idXR0b24gPiBzcGFuOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMjtcbn1cblxuLmJ1cmdlcl9fYnV0dG9uID4gc3Bhbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtNnB4O1xufVxuXG4uYnVyZ2VyX19idXR0b24gPiBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogNnB4O1xufVxuXG4jY2hlY2tib3ggfiAuYnVyZ2VyX19idXR0b24gPiBzcGFuIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODEsIDAuODcsIDAuNzEpO1xufVxuXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2J1dHRvbiA+IHNwYW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODEsIDAuODcsIDAuNzEpO1xufVxuXG4jY2hlY2tib3g6Y2hlY2tlZCB+IC5idXJnZXJfX2J1dHRvbiA+IHNwYW46OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbiNjaGVja2JveDpjaGVja2VkIH4gLmJ1cmdlcl9fYnV0dG9uID4gc3Bhbjo6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuI2NoZWNrYm94OmNoZWNrZWQgfiAuYnVyZ2VyX19saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cblxuI2NoZWNrYm94OmNoZWNrZWQgfiAuYnVyZ2VyX19saXN0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/second-widget/second-widget.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/second-widget/second-widget.component.ts ***!
  \**********************************************************/
/*! exports provided: SecondWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondWidgetComponent", function() { return SecondWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecondWidgetComponent {
    constructor() {
    }
    ngOnInit() { }
}
SecondWidgetComponent.ɵfac = function SecondWidgetComponent_Factory(t) { return new (t || SecondWidgetComponent)(); };
SecondWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondWidgetComponent, selectors: [["app-second-widget"]], decls: 26, vars: 0, consts: [[1, "widget"], [1, "container"], [1, "row"], [1, "col-lg-6", "d-none", "d-md-block"], ["src", "assets/images/second__widget/img2.png", "alt", "second image"], [1, "col-lg-6"], [1, "widget__block", "second-widget__block"], [1, "widget__title", "widget-second__title"], ["src", "assets/images/second__widget/img2.png", "alt", "second mobile image", 1, "d-block", "d-md-none", "widget-second__img"], [1, "widget-second__items"], [1, "widget__item", "mr-0"], [1, "widget__subtitle"], [1, "widget__txt"], [1, "widget__subtitle", "pt-1", "pt-md-0"], [1, "widget__item"], [1, "widget__subtitle", "pt-md-0"]], template: function SecondWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ut placerat orci nulla pellentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vestibulum rhoncus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " At auctor urna nunc id cursus metus aliquam. Sit amet aliquam id diam maecenas ultricies mi eget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lectus arcu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Montes nascetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ridiculus mus mauris vitae ultricies leo. Libero justo laoreet sit amet. Morbi tincidunt augue interdum velit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".widget__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 54px;\n  margin-top: 2px;\n}\n@media screen and (max-width: 575px) {\n  .widget__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    margin-left: 5px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__title[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__items[_ngcontent-%COMP%] {\n    margin-top: 136vw;\n  }\n}\n.widget__item[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  margin-top: 61px;\n  margin-right: 100px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 47px;\n  height: 47px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n  margin-left: -67px;\n  margin-top: -5px;\n}\n.widget__item[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 58px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 63px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:last-child {\n  margin-top: 58px;\n}\n.widget__subtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .widget__subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 23px;\n    letter-spacing: 0.3px;\n  }\n}\n.widget__txt[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 23px;\n  color: #adadad;\n  letter-spacing: 0.5px;\n}\n@media screen and (max-width: 575px) {\n  .widget__txt[_ngcontent-%COMP%] {\n    margin-top: 0;\n    letter-spacing: 0;\n  }\n}\n.widget__btn[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  margin-top: 88px;\n  margin-bottom: 266px;\n  font-family: \"Proxima Nova\";\n  display: block;\n  width: 245px;\n  height: 50px;\n  background: #0dc78f;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__btn[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    margin-bottom: 0px;\n  }\n}\n.widget__btn[_ngcontent-%COMP%]:hover {\n  color: #0dc78f;\n  background-color: #fff;\n  text-decoration: none;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__img[_ngcontent-%COMP%] {\n    right: 0;\n    max-width: 100%;\n    margin-top: 166px;\n  }\n}\n.widget-first__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 934px;\n}\n@media screen and (max-width: 991px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__img[_ngcontent-%COMP%] {\n    margin-top: 58px;\n  }\n}\n.second-widget__block[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 104px;\n  padding-bottom: 458px;\n}\n@media screen and (max-width: 1200px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    padding-bottom: 190px;\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 575px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kLXdpZGdldC9FOlxcU2FuZGJveFxcTmlrb19fVGVjaG5vbG9naWVzXFxuZ050L3NyY1xcYXBwXFxzZWNvbmQtd2lkZ2V0XFxzZWNvbmQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWNvbmQtd2lkZ2V0L3NlY29uZC13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBSjtBREVJO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0NKO0FBQ0Y7QURHSTtFQURGO0lBRUksaUJBQUE7RUNBSjtBQUNGO0FESUk7RUFERjtJQUVJLGlCQUFBO0VDREo7QUFDRjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUxGO0lBTUksaUJBQUE7RUNBSjtBQUNGO0FERUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFSTtFQUNFLGdCQUFBO0FDQU47QURDTTtFQUZGO0lBR0ksZ0JBQUE7RUNFTjtBQUNGO0FEQUk7RUFDRSxnQkFBQTtBQ0VOO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFORjtJQU9JLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0VDR0o7QUFDRjtBRERFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0dKO0FEREk7RUFSRjtJQVNJLGFBQUE7SUFDQSxpQkFBQTtFQ0lKO0FBQ0Y7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0dKO0FEREk7RUFqQkY7SUFrQkksZ0JBQUE7SUFDQSxrQkFBQTtFQ0lKO0FBQ0Y7QURGSTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0lOO0FEQ0k7RUFERjtJQUVJLFFBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNFSjtBQUNGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFJO0VBSkY7SUFLSSxnQkFBQTtJQUNBLG1CQUFBO0VDR0o7QUFDRjtBREZJO0VBUkY7SUFTSSxrQkFBQTtJQUNBLG1CQUFBO0VDS0o7QUFDRjtBRERJO0VBREY7SUFFSSxnQkFBQTtFQ0lKO0FBQ0Y7QURBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFMRjtJQU1JLHFCQUFBO0lBQ0EsY0FBQTtFQ0lGO0FBQ0Y7QURGRTtFQVZGO0lBV0ksYUFBQTtJQUVBLGlCQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC13aWRnZXQvc2Vjb25kLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1zZWNvbmRfX3RpdGxlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1maXJzdF9faXRlbXMge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTM2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDQ3cHg7XHJcbiAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTY3cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3R4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDg4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgTm92YVwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNzhmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzBkYzc4ZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTY2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtZmlyc3RfX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTM0cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtc2Vjb25kX19pbWcge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWNvbmQtd2lkZ2V0X19ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogNTZweDtcclxuICBtYXJnaW4tbGVmdDogMTA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ1OHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxOTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsIi53aWRnZXRfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0LXNlY29uZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0LWZpcnN0X19pdGVtcyB7XG4gICAgbWFyZ2luLXRvcDogMTM2dnc7XG4gIH1cbn1cbi53aWRnZXRfX2l0ZW0ge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgbWFyZ2luLXRvcDogNjFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG4ud2lkZ2V0X19pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTY3cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG4ud2lkZ2V0X19pdGVtOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19pdGVtOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLXRvcDogNjNweDtcbiAgfVxufVxuLndpZGdldF9faXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNThweDtcbn1cbi53aWRnZXRfX3N1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogI2ZiZmJmYjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICB9XG59XG4ud2lkZ2V0X190eHQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogI2FkYWRhZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldF9fdHh0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG59XG4ud2lkZ2V0X19idG4ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiA4OHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYSBOb3ZhXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzBkYzc4ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19idG4ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4ud2lkZ2V0X19idG46aG92ZXIge1xuICBjb2xvcjogIzBkYzc4ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19pbWcge1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNjZweDtcbiAgfVxufVxuLndpZGdldC1maXJzdF9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTM0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAud2lkZ2V0LWZpcnN0X19pbWcge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1maXJzdF9faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1zZWNvbmRfX2ltZyB7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbiAgfVxufVxuXG4uc2Vjb25kLXdpZGdldF9fYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMTA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0NThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2Vjb25kLXdpZGdldF9fYmxvY2sge1xuICAgIHBhZGRpbmctYm90dG9tOiAxOTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNlY29uZC13aWRnZXRfX2Jsb2NrIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-second-widget",
                templateUrl: "./second-widget.component.html",
                styleUrls: ["./second-widget.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/set/set.component.ts":
/*!**************************************!*\
  !*** ./src/app/set/set.component.ts ***!
  \**************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SetComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SetComponent.ɵfac = function SetComponent_Factory(t) { return new (t || SetComponent)(); };
SetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetComponent, selectors: [["app-set"]], decls: 22, vars: 0, consts: [[1, "set"], [1, "container"], [1, "row"], [1, "col-12"], [1, "set__title"], [1, "set__items", "d-flex", "justify-content-between", "flex-column", "flex-md-row"], [1, "set__item"], [1, "set__subtitle"], [1, "set__txt"]], template: function SetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ullamcorper dignissim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lectus arcu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Morbi tincidunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Ugue interdum velit. Ut placerat orci nulla pellentesque dignissim enim sit amet. Ut sem nulla pharetra diam sit amet nisl suscipit. Tellus in hac habitasse platea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Diam phasellus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Vestibulum lorem sed risus ultricies tristique nulla. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".set[_ngcontent-%COMP%] {\n  padding-bottom: 219px;\n}\n@media screen and (max-width: 575px) {\n  .set[_ngcontent-%COMP%] {\n    padding-bottom: 16px;\n  }\n}\n.set__title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 48px;\n  text-align: center;\n}\n@media screen and (max-width: 575px) {\n  .set__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    text-align: left;\n    margin-top: 84px;\n  }\n}\n.set__subtitle[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  letter-spacing: 0.630667px;\n}\n.set__items[_ngcontent-%COMP%] {\n  margin-left: 103px;\n}\n@media screen and (max-width: 575px) {\n  .set__items[_ngcontent-%COMP%] {\n    margin-left: 89px;\n  }\n}\n.set__item[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 0 22%;\n  margin-top: 71px;\n}\n@media screen and (max-width: 575px) {\n  .set__item[_ngcontent-%COMP%] {\n    margin-top: 56px;\n    margin-right: 20px;\n  }\n}\n.set__item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 47px;\n  height: 47px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n  margin-left: -69px;\n  margin-top: -5px;\n}\n@media screen and (max-width: 575px) {\n  .set__item[_ngcontent-%COMP%]:before {\n    margin-left: -67px;\n  }\n}\n.set__txt[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 23px;\n  letter-spacing: 0.487333px;\n  color: #adadad;\n  margin-right: 25px;\n}\n@media screen and (max-width: 575px) {\n  .set__txt[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0L0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXHNldFxcc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXQvc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBRENFO0VBSEY7SUFJSSxvQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFJO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDR0o7QUFDRjtBRERFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDR0o7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURESTtFQUZGO0lBR0ksaUJBQUE7RUNJSjtBQUNGO0FERkU7RUFDRSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkk7RUFKRjtJQUtJLGdCQUFBO0lBQ0Esa0JBQUE7RUNLSjtBQUNGO0FESEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDS047QURKTTtFQVRGO0lBVUksa0JBQUE7RUNPTjtBQUNGO0FESkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTUo7QURKSTtFQVJGO0lBU0ksZUFBQTtJQUNBLGdCQUFBO0VDT0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NldC9zZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjE5cHg7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiA4NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19zdWJ0aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjYzMDY2N3B4O1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwM3B4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDg5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2l0ZW0ge1xyXG4gICAgZmxleDogMCAwIDIyJTtcclxuICAgIG1hcmdpbi10b3A6IDcxcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNDdweDtcclxuICAgICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjlweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTY3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fdHh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjQ4NzMzM3B4O1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2V0IHtcbiAgcGFkZGluZy1ib3R0b206IDIxOXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNldCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbn1cbi5zZXRfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNldF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDg0cHg7XG4gIH1cbn1cbi5zZXRfX3N1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYzMDY2N3B4O1xufVxuLnNldF9faXRlbXMge1xuICBtYXJnaW4tbGVmdDogMTAzcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2V0X19pdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDg5cHg7XG4gIH1cbn1cbi5zZXRfX2l0ZW0ge1xuICBmbGV4OiAwIDAgMjIlO1xuICBtYXJnaW4tdG9wOiA3MXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNldF9faXRlbSB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5zZXRfX2l0ZW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjlweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zZXRfX2l0ZW06YmVmb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogLTY3cHg7XG4gIH1cbn1cbi5zZXRfX3R4dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjQ4NzMzM3B4O1xuICBjb2xvcjogI2FkYWRhZDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNldF9fdHh0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set',
                templateUrl: './set.component.html',
                styleUrls: ['./set.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SliderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 16, vars: 0, consts: [[1, "slider"], [1, "container"], [1, "row"], [1, "col-12", "col-md-5"], [1, "slider__title"], [1, "col-12", "col-md-7"], [1, "slider__block"], [1, "slider__content", "mx-auto", "d-flex", "flex-column", "justify-content-center", "align-items-start", "pl-5"], [1, "slider__desc"], [1, "slider__txt"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nibh nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Condimentum id venenatis a condimentum vitae sapien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.slider[_ngcontent-%COMP%] {\n  padding-bottom: 190px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .slider[_ngcontent-%COMP%] {\n    padding-bottom: 80px;\n  }\n}\n.slider__title[_ngcontent-%COMP%] {\n  padding-top: 129px;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 48px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .slider__title[_ngcontent-%COMP%] {\n    padding-top: 99px;\n    font-size: 24px;\n    line-height: 33px;\n  }\n}\n.slider__block[_ngcontent-%COMP%] {\n  padding-top: 104px;\n}\n@media screen and (max-width: 575px) {\n  .slider__block[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n}\n.slider__content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.slider__content[_ngcontent-%COMP%]:before, .slider__content[_ngcontent-%COMP%]:after {\n  font-family: \"FontAwesome\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background-color: white;\n  color: black;\n  border-radius: 50%;\n  text-align: center;\n  padding-top: 14px;\n  margin-top: -12px;\n}\n@media screen and (max-width: 575px) {\n  .slider__content[_ngcontent-%COMP%]:before, .slider__content[_ngcontent-%COMP%]:after {\n    width: 0;\n    height: 0;\n    color: #fbfbfb;\n    padding-top: 0;\n    margin-top: 5px;\n    top: 0;\n  }\n}\n.slider__content[_ngcontent-%COMP%]:before {\n  content: \"\uF053\";\n  margin-left: -15px;\n}\n@media screen and (max-width: 575px) {\n  .slider__content[_ngcontent-%COMP%]:before {\n    margin-left: 2px;\n    left: 0;\n  }\n}\n.slider__content[_ngcontent-%COMP%]:hover:before, .slider__content[_ngcontent-%COMP%]:hover:after {\n  cursor: pointer;\n}\n.slider__content[_ngcontent-%COMP%]:after {\n  content: \"\uF054\";\n  right: 0;\n}\n@media screen and (max-width: 575px) {\n  .slider__content[_ngcontent-%COMP%]:after {\n    right: 10px;\n  }\n}\n.slider__desc[_ngcontent-%COMP%] {\n  padding-left: 143px;\n  font-style: italic;\n  font-size: 18px;\n  line-height: 33px;\n  letter-spacing: -0.8px;\n}\n@media screen and (max-width: 991px) {\n  .slider__desc[_ngcontent-%COMP%] {\n    padding-left: 102px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .slider__desc[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 34px;\n    padding-left: 0;\n    margin-left: -5px;\n  }\n}\n.slider__txt[_ngcontent-%COMP%] {\n  padding-left: 143px;\n  padding-right: 170px;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.401333px;\n}\n@media screen and (max-width: 991px) {\n  .slider__txt[_ngcontent-%COMP%] {\n    padding-left: 102px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .slider__txt[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-top: -5px;\n    font-size: 14px;\n    line-height: 19px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2xpZGVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBREVGO0FDREU7RUFIRjtJQUlJLG9CQUFBO0VESUY7QUFDRjtBQ0hFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURLSjtBQ0hJO0VBUEY7SUFRSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRE1KO0FBQ0Y7QUNKRTtFQUNFLGtCQUFBO0FETUo7QUNKSTtFQUhGO0lBSUksaUJBQUE7RURPSjtBQUNGO0FDSkU7RUFDRSxrQkFBQTtBRE1KO0FDSEU7RUFFRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRElKO0FDRkk7RUFiRjtJQWNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtFREtKO0FBQ0Y7QUNIRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBREtKO0FDSEk7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsT0FBQTtFRE1KO0FBQ0Y7QUNIRTtFQUVFLGVBQUE7QURJSjtBQ0RFO0VBQ0UsWUFBQTtFQUNBLFFBQUE7QURHSjtBQ0ZJO0VBSEY7SUFJSSxXQUFBO0VES0o7QUFDRjtBQ0ZFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FESUo7QUNGSTtFQVBGO0lBUUksbUJBQUE7RURLSjtBQUNGO0FDSkk7RUFWRjtJQVdJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFRE9KO0FBQ0Y7QUNMRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBRE9KO0FDTEk7RUFQRjtJQVFJLG1CQUFBO0VEUUo7QUFDRjtBQ05JO0VBWEY7SUFZSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VEU0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2xpZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDE5MHB4O1xuICBjb2xvcjogI2ZiZmJmYjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zbGlkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICB9XG59XG4uc2xpZGVyX190aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMjlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgY29sb3I6ICNmYmZiZmI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2xpZGVyX190aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDk5cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICB9XG59XG4uc2xpZGVyX19ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAxMDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zbGlkZXJfX2Jsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxufVxuLnNsaWRlcl9fY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXJfX2NvbnRlbnQ6YmVmb3JlLCAuc2xpZGVyX19jb250ZW50OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNsaWRlcl9fY29udGVudDpiZWZvcmUsIC5zbGlkZXJfX2NvbnRlbnQ6YWZ0ZXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBjb2xvcjogI2ZiZmJmYjtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdG9wOiAwO1xuICB9XG59XG4uc2xpZGVyX19jb250ZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GTXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zbGlkZXJfX2NvbnRlbnQ6YmVmb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRlbnQ6aG92ZXI6YmVmb3JlLCAuc2xpZGVyX19jb250ZW50OmhvdmVyOmFmdGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNsaWRlcl9fY29udGVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG4gIHJpZ2h0OiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNsaWRlcl9fY29udGVudDphZnRlciB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5zbGlkZXJfX2Rlc2Mge1xuICBwYWRkaW5nLWxlZnQ6IDE0M3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2xpZGVyX19kZXNjIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2xpZGVyX19kZXNjIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICB9XG59XG4uc2xpZGVyX190eHQge1xuICBwYWRkaW5nLWxlZnQ6IDE0M3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDAxMzMzcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2xpZGVyX190eHQge1xuICAgIHBhZGRpbmctbGVmdDogMTAycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zbGlkZXJfX3R4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn0iLCIuc2xpZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XHJcbiAgY29sb3I6ICNmYmZiZmI7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTI5cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogOTlweDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fYmxvY2sge1xyXG4gICAgcGFkZGluZy10b3A6IDEwNHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50OmJlZm9yZSxcclxuICAmX19jb250ZW50OmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19jb250ZW50OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjA1M1wiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50OmhvdmVyOmJlZm9yZSxcclxuICAmX19jb250ZW50OmhvdmVyOmFmdGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGYwNTRcIjtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19kZXNjIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTQzcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMDJweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3R4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTcwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjQwMTMzM3B4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Sandbox\Niko__Technologies\ngNt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map