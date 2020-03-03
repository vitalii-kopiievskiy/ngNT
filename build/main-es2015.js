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
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
        _first_widget_first_widget_component__WEBPACK_IMPORTED_MODULE_6__["FirstWidgetComponent"],
        _second_widget_second_widget_component__WEBPACK_IMPORTED_MODULE_7__["SecondWidgetComponent"],
        _set_set_component__WEBPACK_IMPORTED_MODULE_8__["SetComponent"],
        _get_get_component__WEBPACK_IMPORTED_MODULE_9__["GetComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"]] }); })();
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
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"]],
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
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 25, vars: 0, consts: [[1, "banner"], [1, "container"], [1, "row"], [1, "col-12"], [1, "banner__title"], ["src", "assets/images/banner/banner_mob.png", "alt", "banner mobile image", 1, "banner__image", "mx-auto", "d-block", "d-sm-none"], [1, "banner__desc"], [1, "col-6", "col-md-12"], [1, "banner__subtitle"], [1, "col-6", "d-block", "d-md-none"], [1, "banner-mobile__buttons", "ml-n2", "d-flex", "justify-content-end"], ["href", "javascript:void(0)", 1, "banner-mobile__btn"], ["src", "assets/images/header/app_mob.svg", "alt", "app mobile store", 1, "banner__img"], ["src", "assets/images/header/google_mob.svg", "alt", "google mobile store", 1, "banner__img"], [1, "col-12", "d-none", "d-md-block"], [1, "banner__buttons", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "banner__btn"], ["src", "assets/images/header/app.svg", "alt", "app store", 1, "banner__img"], ["src", "assets/images/header/google.svg", "alt", "google store", 1, "banner__img"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  background: url(\"assets/images/banner/banner.png\") 50% 0% no-repeat;\n}\n@media screen and (max-width: 767px) {\n  .banner[_ngcontent-%COMP%] {\n    padding-bottom: 100px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .banner[_ngcontent-%COMP%] {\n    background-image: none;\n    padding-bottom: 0;\n  }\n}\n.banner__title[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  margin-top: 250px;\n  font-weight: 600;\n  font-size: 52px;\n  line-height: 71px;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: white;\n}\n@media screen and (max-width: 575px) {\n  .banner__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    text-align: left;\n    padding-left: 0;\n    margin-top: 90px;\n    letter-spacing: 0.3px;\n  }\n}\n.banner__image[_ngcontent-%COMP%] {\n  margin-top: 44px;\n}\n.banner__subtitle[_ngcontent-%COMP%] {\n  margin-top: 87px;\n  font-size: 18px;\n  line-height: 25px;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n}\n@media screen and (max-width: 767px) {\n  .banner__subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 25px;\n    margin-top: 38px;\n    text-align: left;\n    font-weight: 600;\n    margin-right: -20px;\n  }\n}\n.banner__desc[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 24px;\n  color: white;\n  text-align: center;\n}\n@media screen and (max-width: 575px) {\n  .banner__desc[_ngcontent-%COMP%] {\n    margin-top: 22px;\n    font-weight: 300;\n    font-size: 18px;\n    line-height: 24px;\n    color: #f7f3f2;\n    text-align: left;\n  }\n}\n.banner__buttons[_ngcontent-%COMP%] {\n  margin-top: 27px;\n  padding-bottom: 289px;\n}\n.banner__btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 30px;\n}\n.banner-mobile__buttons[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.banner-mobile__btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0VBQUE7QUNDRjtBRENFO0VBSEY7SUFJSSxxQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQVBGO0lBUUksc0JBQUE7SUFDQSxpQkFBQTtFQ0dGO0FBQ0Y7QURERTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNHSjtBRERJO0VBWEY7SUFZSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDSUo7QUFDRjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkk7RUFSRjtJQVNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDS0o7QUFDRjtBREhFO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0o7QURISTtFQVRGO0lBVUksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ01KO0FBQ0Y7QURKRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNNSjtBREhFO0VBQ0Usa0JBQUE7QUNLSjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBRERFO0VBQ0Usa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYW5uZXIvYmFubmVyLnBuZ1wiKSA1MCUgMCUgbm8tcmVwZWF0O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19pbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xyXG4gIH1cclxuICAmX19zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4N3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2Rlc2Mge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjZjdmM2YyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjg5cHg7XHJcbiAgfVxyXG5cclxuICAmX19idG46bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gICYtbW9iaWxlX19idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAmLW1vYmlsZV9fYnRuOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYW5uZXIvYmFubmVyLnBuZ1wiKSA1MCUgMCUgbm8tcmVwZWF0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmJhbm5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG4uYmFubmVyX190aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAyNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBsaW5lLWhlaWdodDogNzFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5iYW5uZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIH1cbn1cbi5iYW5uZXJfX2ltYWdlIHtcbiAgbWFyZ2luLXRvcDogNDRweDtcbn1cbi5iYW5uZXJfX3N1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogODdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFubmVyX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIH1cbn1cbi5iYW5uZXJfX2Rlc2Mge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuYmFubmVyX19kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjZjdmM2YyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5iYW5uZXJfX2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMjg5cHg7XG59XG4uYmFubmVyX19idG46bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmJhbm5lci1tb2JpbGVfX2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLmJhbm5lci1tb2JpbGVfX2J0bjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG59Il19 */"] });
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
    } }, styles: [".widget__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 54px;\n  margin-top: 2px;\n}\n@media screen and (max-width: 575px) {\n  .widget__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 33px;\n    margin-left: 5px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__title[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__items[_ngcontent-%COMP%] {\n    margin-top: 136vw;\n  }\n}\n.widget__item[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  margin-top: 61px;\n  margin-right: 100px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 47px;\n  height: 47px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n  margin-left: -67px;\n  margin-top: -5px;\n}\n.widget__item[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 58px;\n}\n@media screen and (max-width: 575px) {\n  .widget__item[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 63px;\n  }\n}\n.widget__item[_ngcontent-%COMP%]:last-child {\n  margin-top: 58px;\n}\n.widget__subtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .widget__subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 23px;\n    letter-spacing: 0.3px;\n  }\n}\n.widget__txt[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 23px;\n  color: #adadad;\n  letter-spacing: 0.5px;\n}\n@media screen and (max-width: 575px) {\n  .widget__txt[_ngcontent-%COMP%] {\n    margin-top: 0;\n    letter-spacing: 0;\n  }\n}\n.widget__btn[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  margin-top: 88px;\n  margin-bottom: 266px;\n  display: block;\n  width: 245px;\n  height: 50px;\n  background: #0dc78f;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__btn[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    margin-bottom: 0px;\n  }\n}\n.widget__btn[_ngcontent-%COMP%]:hover {\n  color: #0dc78f;\n  background-color: #fff;\n  text-decoration: none;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n@media screen and (max-width: 575px) {\n  .widget__img[_ngcontent-%COMP%] {\n    right: 0;\n    max-width: 100%;\n    margin-top: 166px;\n  }\n}\n.widget-first__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 934px;\n}\n@media screen and (max-width: 991px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-first__img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .widget-second__img[_ngcontent-%COMP%] {\n    margin-top: 58px;\n  }\n}\n.second-widget__block[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 104px;\n  padding-bottom: 458px;\n}\n@media screen and (max-width: 1200px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    padding-bottom: 190px;\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 575px) {\n  .second-widget__block[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3Qtd2lkZ2V0L0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGZpcnN0LXdpZGdldFxcZmlyc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maXJzdC13aWRnZXQvZmlyc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQU5GO0lBT0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNDSjtBQUNGO0FER0k7RUFERjtJQUVJLGlCQUFBO0VDQUo7QUFDRjtBRElJO0VBREY7SUFFSSxpQkFBQTtFQ0RKO0FBQ0Y7QURHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFMRjtJQU1JLGlCQUFBO0VDQUo7QUFDRjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERUk7RUFDRSxnQkFBQTtBQ0FOO0FEQ007RUFGRjtJQUdJLGdCQUFBO0VDRU47QUFDRjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtFQ0dKO0FBQ0Y7QURERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHSjtBRERJO0VBUkY7SUFTSSxhQUFBO0lBQ0EsaUJBQUE7RUNJSjtBQUNGO0FEREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDR0o7QURESTtFQWhCRjtJQWlCSSxnQkFBQTtJQUNBLGtCQUFBO0VDSUo7QUFDRjtBREZJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDSU47QURDSTtFQURGO0lBRUksUUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ0VKO0FBQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUk7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsbUJBQUE7RUNHSjtBQUNGO0FERkk7RUFSRjtJQVNJLGtCQUFBO0lBQ0EsbUJBQUE7RUNLSjtBQUNGO0FEREk7RUFERjtJQUVJLGdCQUFBO0VDSUo7QUFDRjtBREFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDR0Y7QURERTtFQUxGO0lBTUkscUJBQUE7SUFDQSxjQUFBO0VDSUY7QUFDRjtBREZFO0VBVkY7SUFXSSxhQUFBO0lBRUEsaUJBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmlyc3Qtd2lkZ2V0L2ZpcnN0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1zZWNvbmRfX3RpdGxlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1maXJzdF9faXRlbXMge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTM2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDQ3cHg7XHJcbiAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTY3cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3R4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDg4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNjZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI0NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBkYzc4ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMwZGM3OGY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2NnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWZpcnN0X19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDkzNHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLXNlY29uZF9faW1nIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vjb25kLXdpZGdldF9fYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0NThweDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iLCIud2lkZ2V0X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1zZWNvbmRfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1maXJzdF9faXRlbXMge1xuICAgIG1hcmdpbi10b3A6IDEzNnZ3O1xuICB9XG59XG4ud2lkZ2V0X19pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDYxcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufVxuLndpZGdldF9faXRlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02N3B4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLndpZGdldF9faXRlbTpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldF9faXRlbTpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi10b3A6IDYzcHg7XG4gIH1cbn1cbi53aWRnZXRfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDU4cHg7XG59XG4ud2lkZ2V0X19zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6ICNmYmZiZmI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgfVxufVxuLndpZGdldF9fdHh0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICNhZGFkYWQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53aWRnZXRfX3R4dCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgfVxufVxuLndpZGdldF9fYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogODhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjY2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzBkYzc4ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19idG4ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4ud2lkZ2V0X19idG46aG92ZXIge1xuICBjb2xvcjogIzBkYzc4ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud2lkZ2V0X19pbWcge1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNjZweDtcbiAgfVxufVxuLndpZGdldC1maXJzdF9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTM0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAud2lkZ2V0LWZpcnN0X19pbWcge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1maXJzdF9faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndpZGdldC1zZWNvbmRfX2ltZyB7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbiAgfVxufVxuXG4uc2Vjb25kLXdpZGdldF9fYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMTA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0NThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2Vjb25kLXdpZGdldF9fYmxvY2sge1xuICAgIHBhZGRpbmctYm90dG9tOiAxOTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNlY29uZC13aWRnZXRfX2Jsb2NrIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59Il19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HeaderComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} }
function HeaderComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function HeaderComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_9_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.visible = !ctx_r3.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.visible = !ctx_r5.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_9_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.visible = !ctx_r6.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { trigger } from "@angular/animations";
class HeaderComponent {
    constructor() {
        this.visible = true;
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 3, consts: [[1, "header"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-12", "d-block", "d-md-none"], [1, "burger__menu"], [1, "burger__button", 3, "click"], ["src", "assets/images/header/burger.svg", "alt", "burger button", 4, "ngIf"], ["src", "assets/images/header/close.svg", "alt", "close button", 4, "ngIf"], ["class", "burger__list", 4, "ngIf"], [1, "col-md-4"], [1, "nav__logo"], ["href", "javascript:void(0)", 1, "d-flex"], ["src", "assets/images/nav/logo.svg", "alt", "logo", 1, "nav__img", "d-none", "d-md-block"], ["src", "assets/images/nav/mobile_logo.svg", "alt", "mobile logo", 1, "nav-mobile__img", "d-block", "d-md-none"], [1, "col-md-8", "col-lg-6", "col-xl-4", "d-none", "d-md-block"], [1, "nav__menu"], [1, "nav__list", "d-flex", "justify-content-between"], [1, "nav__item"], ["href", "javascript:void(0)", 1, "nav__link"], ["src", "assets/images/header/burger.svg", "alt", "burger button"], ["src", "assets/images/header/close.svg", "alt", "close button"], [1, "burger__list"], [1, "burger__logo"], ["href", "javascript:void(0)", 1, "d-flex", "justify-content-center"], ["src", "assets/images/nav/mobile_logo.svg", "alt", "mobile_logo", 1, "nav__img"], [1, "burger__item"], ["href", "javascript:void(0)", 1, "burger__link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { return ctx.visible = !ctx.visible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_img_7_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_img_8_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ul_9_Template, 13, 0, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  padding-top: 32px;\n  z-index: 100;\n  width: 100%;\n}\n@media screen and (max-width: 767px) {\n  .header[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.nav__img[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.nav-mobile__img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.nav__el[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 43px;\n  height: 43px;\n  background-color: #c4c4c4;\n  border-radius: 50%;\n}\n@media screen and (max-width: 575px) {\n  .nav__el[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-left: 11px;\n  }\n}\n.nav__list[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.nav__link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 48px;\n  color: white;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.nav__link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #0dc78f;\n}\n.burger__item[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n.burger__item[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 79px;\n}\n.burger__logo[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n.burger__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 34px;\n  right: 29px;\n  cursor: pointer;\n  z-index: 3;\n}\n.burger__list[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  list-style: none;\n  text-align: center;\n  background-color: #141414;\n  z-index: 2;\n}\n.burger__link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 48px;\n  text-align: center;\n  color: #ffffff;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.burger__link[_ngcontent-%COMP%]:hover {\n  color: #0dc78f;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBTkY7SUFPSSxjQUFBO0VDRUY7QUFDRjtBREVFO0VBQ0UsZ0JBQUE7QUNDSjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBUkY7SUFTSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0FKO0FERUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNBTjtBRE1FO0VBQ0UsZ0JBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBRE1FO0VBQ0UsZ0JBQUE7QUNKSjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDTEo7QURRRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNOSjtBRFNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDUEo7QURTSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EscUJBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2IHtcclxuICAmX19pbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgJi1tb2JpbGVfX2ltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fZWwge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQzcHg7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICB9XHJcbiAgJl9fbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICMwZGM3OGY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnVyZ2VyIHtcclxuICAmX19pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfVxyXG4gICZfX2l0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi10b3A6IDc5cHg7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNHB4O1xyXG4gICAgcmlnaHQ6IDI5cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMwZGM3OGY7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG5cbi5uYXZfX2ltZyB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4ubmF2LW1vYmlsZV9faW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5uYXZfX2VsIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5uYXZfX2VsIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIH1cbn1cbi5uYXZfX2xpc3Qge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5uYXZfX2xpbmsge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbi5uYXZfX2xpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMGRjNzhmO1xufVxuXG4uYnVyZ2VyX19pdGVtIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5idXJnZXJfX2l0ZW06bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogNzlweDtcbn1cbi5idXJnZXJfX2xvZ28ge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuLmJ1cmdlcl9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM0cHg7XG4gIHJpZ2h0OiAyOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG4uYnVyZ2VyX19saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gIHotaW5kZXg6IDI7XG59XG4uYnVyZ2VyX19saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuLmJ1cmdlcl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMGRjNzhmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss"]
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
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SliderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r8.txt, " ");
} }
const _c0 = function () { return ["owl-theme", "row", "sliding"]; };
class SliderComponent {
    constructor() {
        this.carouselOptions = {
            dots: false,
            margin: 25,
            nav: true,
            // navElement: true,
            navText: [
                "<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>",
                "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                1500: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        };
        this.items = [
            {
                desc: "Nibh nisl",
                txt: "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
            },
            {
                desc: "Nibh nisl",
                txt: "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
            },
            {
                desc: "Nibh nisl",
                txt: "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
            }
        ];
    }
    ngOnInit() { }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 11, vars: 5, consts: [[1, "slider"], [1, "container"], [1, "row"], [1, "col-12", "col-md-5"], [1, "slider__title"], [1, "col-12", "col-md-7"], [1, "slider__block"], [3, "options", "items", "carouselClasses"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "slide-text"], [1, "slider__desc"], [1, "slider__txt"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "owl-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SliderComponent_div_10_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.items)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".slider[_ngcontent-%COMP%] {\n  padding-bottom: 190px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .slider[_ngcontent-%COMP%] {\n    padding-bottom: 80px;\n  }\n}\n.slider__title[_ngcontent-%COMP%] {\n  padding-top: 129px;\n  font-weight: 300;\n  font-size: 35px;\n  line-height: 48px;\n  color: #fbfbfb;\n}\n@media screen and (max-width: 575px) {\n  .slider__title[_ngcontent-%COMP%] {\n    padding-top: 99px;\n    font-size: 24px;\n    line-height: 33px;\n  }\n}\n.slider__block[_ngcontent-%COMP%] {\n  padding-top: 104px;\n  padding-left: 82px;\n}\n@media screen and (max-width: 991px) {\n  .slider__block[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n.slider__desc[_ngcontent-%COMP%] {\n  padding-left: 143px;\n  font-style: italic;\n  font-size: 18px;\n  line-height: 33px;\n  letter-spacing: -0.8px;\n}\n@media screen and (max-width: 991px) {\n  .slider__desc[_ngcontent-%COMP%] {\n    padding-left: 102px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .slider__desc[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 34px;\n    padding-left: 60;\n    margin-left: -5px;\n  }\n}\n.slider__txt[_ngcontent-%COMP%] {\n  padding-left: 143px;\n  margin-right: 170px;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.401333px;\n}\n@media screen and (max-width: 1199px) {\n  .slider__txt[_ngcontent-%COMP%] {\n    padding-left: 102px;\n    margin-right: 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .slider__txt[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .slider__txt[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-top: -5px;\n    font-size: 14px;\n    line-height: 19px;\n    padding-left: 60px;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL0U6XFxTYW5kYm94XFxOaWtvX19UZWNobm9sb2dpZXNcXG5nTnQvc3JjXFxhcHBcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUhGO0lBSUksb0JBQUE7RUNHRjtBQUNGO0FERkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lKO0FERkk7RUFQRjtJQVFJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDS0o7QUFDRjtBREhFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESkk7RUFIRjtJQUlJLGVBQUE7RUNPSjtBQUNGO0FESkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNNSjtBREpJO0VBUEY7SUFRSSxtQkFBQTtFQ09KO0FBQ0Y7QUROSTtFQVZGO0lBV0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ1NKO0FBQ0Y7QURQRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ1NKO0FEUkk7RUFORjtJQU9JLG1CQUFBO0lBQ0EsaUJBQUE7RUNXSjtBQUNGO0FEVkk7RUFWRjtJQVdJLGlCQUFBO0VDYUo7QUFDRjtBRFhJO0VBZEY7SUFlSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDY0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XHJcbiAgY29sb3I6ICNmYmZiZmI7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTI5cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogOTlweDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fYmxvY2sge1xyXG4gICAgcGFkZGluZy10b3A6IDEwNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MnB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZGVzYyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0M3B4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAycHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdHh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTQzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40MDEzMzNweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNsaWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxOTBweDtcbiAgY29sb3I6ICNmYmZiZmI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2xpZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgfVxufVxuLnNsaWRlcl9fdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTI5cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjZmJmYmZiO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnNsaWRlcl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA5OXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgfVxufVxuLnNsaWRlcl9fYmxvY2sge1xuICBwYWRkaW5nLXRvcDogMTA0cHg7XG4gIHBhZGRpbmctbGVmdDogODJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zbGlkZXJfX2Jsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbi5zbGlkZXJfX2Rlc2Mge1xuICBwYWRkaW5nLWxlZnQ6IDE0M3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2xpZGVyX19kZXNjIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2xpZGVyX19kZXNjIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxufVxuLnNsaWRlcl9fdHh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDAxMzMzcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLnNsaWRlcl9fdHh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2xpZGVyX190eHQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuc2xpZGVyX190eHQge1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-slider",
                templateUrl: "./slider.component.html",
                styleUrls: ["./slider.component.scss"]
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
