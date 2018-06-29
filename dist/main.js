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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
        this.hello = 'hello from app.component.ts';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_test_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/test.service.client */ "./src/app/services/test.service.client.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _components_placestest_placestest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/placestest/placestest.component */ "./src/app/components/placestest/placestest.component.ts");
/* harmony import */ var _services_place_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/place.service.client */ "./src/app/services/place.service.client.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _components_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/event/event-list/event-list.component */ "./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var _components_event_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/event/event-new/event-new.component */ "./src/app/components/event/event-new/event-new.component.ts");
/* harmony import */ var _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/activity/activity-list/activity-list.component */ "./src/app/components/activity/activity-list/activity-list.component.ts");
/* harmony import */ var _components_activity_activity_new_activity_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/activity/activity-new/activity-new.component */ "./src/app/components/activity/activity-new/activity-new.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_new_activitysuggestion_new_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/activity/activitysuggestion-new/activitysuggestion-new.component */ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_list_activitysuggestion_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/activity/activitysuggestion-list/activitysuggestion-list.component */ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/activities.service.client */ "./src/app/services/activities.service.client.ts");
/* harmony import */ var _components_travelers_view_travelers_view_travelers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/travelers/view-travelers/view-travelers.component */ "./src/app/components/travelers/view-travelers/view-travelers.component.ts");
/* harmony import */ var _components_travelers_view_following_view_following_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/travelers/view-following/view-following.component */ "./src/app/components/travelers/view-following/view-following.component.ts");
/* harmony import */ var _components_user_main_main_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user/main/main.component */ "./src/app/components/user/main/main.component.ts");
/* harmony import */ var _components_travelers_search_travelers_search_travelers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/travelers/search-travelers/search-travelers.component */ "./src/app/components/travelers/search-travelers/search-travelers.component.ts");
/* harmony import */ var _components_event_event_browse_event_browse_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/event/event-browse/event-browse.component */ "./src/app/components/event/event-browse/event-browse.component.ts");
/* harmony import */ var _components_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/event/event-details/event-details.component */ "./src/app/components/event/event-details/event-details.component.ts");
/* harmony import */ var _components_activity_activity_details_activity_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/activity/activity-details/activity-details.component */ "./src/app/components/activity/activity-details/activity-details.component.ts");
/* harmony import */ var _components_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/event/event-edit/event-edit.component */ "./src/app/components/event/event-edit/event-edit.component.ts");
/* harmony import */ var _components_activity_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/activity/activity-edit/activity-edit.component */ "./src/app/components/activity/activity-edit/activity-edit.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_edit_activitysuggestion_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/activity/activitysuggestion-edit/activitysuggestion-edit.component */ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.ts");
/* harmony import */ var _services_suggestion_service_client__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/suggestion.service.client */ "./src/app/services/suggestion.service.client.ts");
/* harmony import */ var _components_travelers_prompt_to_login_or_register_prompt_to_login_or_register_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component */ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.ts");
/* harmony import */ var _components_promotion_promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/promotion/promotion-edit/promotion-edit.component */ "./src/app/components/promotion/promotion-edit/promotion-edit.component.ts");
/* harmony import */ var _components_promotion_promotion_new_promotion_new_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/promotion/promotion-new/promotion-new.component */ "./src/app/components/promotion/promotion-new/promotion-new.component.ts");
/* harmony import */ var _components_promotion_promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/promotion/promotion-list/promotion-list.component */ "./src/app/components/promotion/promotion-list/promotion-list.component.ts");
/* harmony import */ var _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/promotion.service.client */ "./src/app/services/promotion.service.client.ts");
/* harmony import */ var _components_marketer_profile_profile_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/marketer/profile/profile.component */ "./src/app/components/marketer/profile/profile.component.ts");
/* harmony import */ var _services_admin_service_client__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/admin.service.client */ "./src/app/services/admin.service.client.ts");
/* harmony import */ var _services_marketer_service_client__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/marketer.service.client */ "./src/app/services/marketer.service.client.ts");
/* harmony import */ var _services_all_users_guard_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/all-users-guard.service */ "./src/app/services/all-users-guard.service.ts");
/* harmony import */ var _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/admin/admin-main/admin-main.component */ "./src/app/components/admin/admin-main/admin-main.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_admin_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/admin/user-edit/user-edit.component */ "./src/app/components/admin/user-edit/user-edit.component.ts");
/* harmony import */ var _components_admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/admin/user-create/user-create.component */ "./src/app/components/admin/user-create/user-create.component.ts");
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
            // Declare components here
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_placestest_placestest_component__WEBPACK_IMPORTED_MODULE_13__["PlacestestComponent"],
                _components_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_18__["EventListComponent"],
                _components_event_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_19__["EventNewComponent"],
                _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_20__["ActivityListComponent"],
                _components_activity_activity_new_activity_new_component__WEBPACK_IMPORTED_MODULE_21__["ActivityNewComponent"],
                _components_activity_activitysuggestion_new_activitysuggestion_new_component__WEBPACK_IMPORTED_MODULE_22__["ActivitysuggestionNewComponent"],
                _components_activity_activitysuggestion_list_activitysuggestion_list_component__WEBPACK_IMPORTED_MODULE_23__["ActivitysuggestionListComponent"],
                _components_travelers_view_travelers_view_travelers_component__WEBPACK_IMPORTED_MODULE_27__["ViewTravelersComponent"],
                _components_travelers_view_following_view_following_component__WEBPACK_IMPORTED_MODULE_28__["ViewFollowingComponent"],
                _components_user_main_main_component__WEBPACK_IMPORTED_MODULE_29__["MainComponent"],
                _components_travelers_search_travelers_search_travelers_component__WEBPACK_IMPORTED_MODULE_30__["SearchTravelersComponent"],
                _components_event_event_browse_event_browse_component__WEBPACK_IMPORTED_MODULE_31__["EventBrowseComponent"],
                _components_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_32__["EventDetailsComponent"],
                _components_activity_activity_details_activity_details_component__WEBPACK_IMPORTED_MODULE_33__["ActivityDetailsComponent"],
                _components_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_34__["EventEditComponent"],
                _components_activity_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_35__["ActivityEditComponent"],
                _components_activity_activitysuggestion_edit_activitysuggestion_edit_component__WEBPACK_IMPORTED_MODULE_36__["ActivitysuggestionEditComponent"],
                _components_travelers_prompt_to_login_or_register_prompt_to_login_or_register_component__WEBPACK_IMPORTED_MODULE_38__["PromptToLoginOrRegisterComponent"],
                _components_promotion_promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_39__["PromotionEditComponent"],
                _components_promotion_promotion_new_promotion_new_component__WEBPACK_IMPORTED_MODULE_40__["PromotionNewComponent"],
                _components_promotion_promotion_list_promotion_list_component__WEBPACK_IMPORTED_MODULE_41__["PromotionListComponent"],
                _components_marketer_profile_profile_component__WEBPACK_IMPORTED_MODULE_43__["ProfileMarketerComponent"],
                _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_47__["AdminMainComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_48__["HomepageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_49__["FooterComponent"],
                _components_admin_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_50__["UserEditComponent"],
                _components_admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_51__["UserCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyArbhF-owYmnIdhp4hXlxG-nCRUxc0HF2c',
                    libraries: ['places']
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            // Client Side services here
            providers: [_services_test_service_client__WEBPACK_IMPORTED_MODULE_8__["TestService"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_16__["TravelerService"],
                _services_place_service_client__WEBPACK_IMPORTED_MODULE_14__["PlaceService"],
                _services_event_service_client__WEBPACK_IMPORTED_MODULE_17__["EventService"],
                _services_shared_service_client__WEBPACK_IMPORTED_MODULE_24__["SharedService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
                _services_all_users_guard_service__WEBPACK_IMPORTED_MODULE_46__["AllUsersGuardService"],
                _services_admin_service_client__WEBPACK_IMPORTED_MODULE_44__["AdminServiceClient"],
                _services_marketer_service_client__WEBPACK_IMPORTED_MODULE_45__["MarketerServiceClient"],
                _services_activities_service_client__WEBPACK_IMPORTED_MODULE_26__["ActivitiesService"],
                _services_suggestion_service_client__WEBPACK_IMPORTED_MODULE_37__["SuggestionService"],
                _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_42__["PromotionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_placestest_placestest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/placestest/placestest.component */ "./src/app/components/placestest/placestest.component.ts");
/* harmony import */ var _components_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/event/event-list/event-list.component */ "./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var _components_event_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/event/event-new/event-new.component */ "./src/app/components/event/event-new/event-new.component.ts");
/* harmony import */ var _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/activity/activity-list/activity-list.component */ "./src/app/components/activity/activity-list/activity-list.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_travelers_view_travelers_view_travelers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/travelers/view-travelers/view-travelers.component */ "./src/app/components/travelers/view-travelers/view-travelers.component.ts");
/* harmony import */ var _components_activity_activity_new_activity_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/activity/activity-new/activity-new.component */ "./src/app/components/activity/activity-new/activity-new.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_list_activitysuggestion_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/activity/activitysuggestion-list/activitysuggestion-list.component */ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_new_activitysuggestion_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/activity/activitysuggestion-new/activitysuggestion-new.component */ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.ts");
/* harmony import */ var _components_travelers_view_following_view_following_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/travelers/view-following/view-following.component */ "./src/app/components/travelers/view-following/view-following.component.ts");
/* harmony import */ var _components_user_main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/main/main.component */ "./src/app/components/user/main/main.component.ts");
/* harmony import */ var _components_activity_activitysuggestion_edit_activitysuggestion_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/activity/activitysuggestion-edit/activitysuggestion-edit.component */ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.ts");
/* harmony import */ var _components_event_event_browse_event_browse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/event/event-browse/event-browse.component */ "./src/app/components/event/event-browse/event-browse.component.ts");
/* harmony import */ var _components_marketer_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/marketer/profile/profile.component */ "./src/app/components/marketer/profile/profile.component.ts");
/* harmony import */ var _services_admin_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/admin.service.client */ "./src/app/services/admin.service.client.ts");
/* harmony import */ var _services_marketer_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/marketer.service.client */ "./src/app/services/marketer.service.client.ts");
/* harmony import */ var _services_all_users_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/all-users-guard.service */ "./src/app/services/all-users-guard.service.ts");
/* harmony import */ var _components_promotion_promotion_new_promotion_new_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/promotion/promotion-new/promotion-new.component */ "./src/app/components/promotion/promotion-new/promotion-new.component.ts");
/* harmony import */ var _components_promotion_promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/promotion/promotion-edit/promotion-edit.component */ "./src/app/components/promotion/promotion-edit/promotion-edit.component.ts");
/* harmony import */ var _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/admin-main/admin-main.component */ "./src/app/components/admin/admin-main/admin-main.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_admin_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin/user-edit/user-edit.component */ "./src/app/components/admin/user-edit/user-edit.component.ts");
/* harmony import */ var _components_admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin/user-create/user-create.component */ "./src/app/components/admin/user-create/user-create.component.ts");





























var APP_ROUTES = [
    { path: 'places', component: _components_placestest_placestest_component__WEBPACK_IMPORTED_MODULE_5__["PlacestestComponent"] },
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_26__["HomepageComponent"] },
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'main', component: _components_user_main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'travelcord', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"] },
    { path: 'traveler', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_services_all_users_guard_service__WEBPACK_IMPORTED_MODULE_21__["AllUsersGuardService"]] },
    { path: 'admin', component: _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_24__["AdminMainComponent"], canActivate: [_services_admin_service_client__WEBPACK_IMPORTED_MODULE_19__["AdminServiceClient"]] },
    { path: 'admin/:travelerId', component: _components_admin_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_27__["UserEditComponent"], canActivate: [_services_admin_service_client__WEBPACK_IMPORTED_MODULE_19__["AdminServiceClient"]] },
    { path: 'admin/create/user', component: _components_admin_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_28__["UserCreateComponent"], canActivate: [_services_admin_service_client__WEBPACK_IMPORTED_MODULE_19__["AdminServiceClient"]] },
    { path: 'event-list/:tid', component: _components_event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__["EventListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'event-list', component: _components_user_main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'marketer', component: _components_marketer_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileMarketerComponent"], canActivate: [_services_marketer_service_client__WEBPACK_IMPORTED_MODULE_20__["MarketerServiceClient"]] },
    { path: 'browseEvents', component: _components_event_event_browse_event_browse_component__WEBPACK_IMPORTED_MODULE_17__["EventBrowseComponent"] },
    { path: 'event/new', component: _components_event_event_new_event_new_component__WEBPACK_IMPORTED_MODULE_7__["EventNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'promotion/new', component: _components_promotion_promotion_new_promotion_new_component__WEBPACK_IMPORTED_MODULE_22__["PromotionNewComponent"], canActivate: [_services_marketer_service_client__WEBPACK_IMPORTED_MODULE_20__["MarketerServiceClient"]] },
    { path: 'promotion/:promotionId', component: _components_promotion_promotion_edit_promotion_edit_component__WEBPACK_IMPORTED_MODULE_23__["PromotionEditComponent"], canActivate: [_services_marketer_service_client__WEBPACK_IMPORTED_MODULE_20__["MarketerServiceClient"]] },
    { path: 'event/:eventId/activity', component: _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_8__["ActivityListComponent"] },
    { path: 'event/:eventId/activity/new', component: _components_activity_activity_new_activity_new_component__WEBPACK_IMPORTED_MODULE_11__["ActivityNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'event/:eventId/:activityId', component: _components_activity_activitysuggestion_list_activitysuggestion_list_component__WEBPACK_IMPORTED_MODULE_12__["ActivitysuggestionListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'event/:eventId/:activityId/newSuggestion', component: _components_activity_activitysuggestion_new_activitysuggestion_new_component__WEBPACK_IMPORTED_MODULE_13__["ActivitysuggestionNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'event/:eventId/:activityId/:suggestionId', component: _components_activity_activitysuggestion_edit_activitysuggestion_edit_component__WEBPACK_IMPORTED_MODULE_16__["ActivitysuggestionEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'following', component: _components_travelers_view_following_view_following_component__WEBPACK_IMPORTED_MODULE_14__["ViewFollowingComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'allTravelers', component: _components_travelers_view_travelers_view_travelers_component__WEBPACK_IMPORTED_MODULE_10__["ViewTravelersComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/activity/activity-details/activity-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/activity/activity-details/activity-details.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activity-details/activity-details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/activity/activity-details/activity-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activityExists\">\n  <h2>\n    {{activity['activityName']}}\n  </h2>\n  <h4>\n    {{activity['description']}}\n  </h4>\n  <div *ngIf=\"isEventOwner\">\n    <div>\n      <a (click)=\"showEdit=!showEdit\">Edit Activity</a>\n    </div>\n    <div *ngIf=\"showEdit\">\n      <app-activity-edit></app-activity-edit>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/activity/activity-details/activity-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/activity/activity-details/activity-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: ActivityDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsComponent", function() { return ActivityDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityDetailsComponent = /** @class */ (function () {
    function ActivityDetailsComponent(activitiesService, eventService, sharedService, activatedRoute) {
        this.activitiesService = activitiesService;
        this.eventService = eventService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.activity = {};
    }
    ActivityDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEventOwner = false;
        this.activityExists = false;
        this.showEdit = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['activityId']) {
                _this.activitiesService.findActivityById(params['activityId'])
                    .subscribe(function (activity) {
                    _this.activity = activity;
                    if (activity) {
                        _this.activityExists = true;
                    }
                });
                _this.eventService.findEventById(params['eventId']).subscribe(function (theEvent) {
                    if (theEvent) {
                        if (_this.sharedService.user['_id'] == theEvent['owner']['_id']) {
                            _this.isEventOwner = true;
                        }
                    }
                });
            }
        });
    };
    ActivityDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-details',
            template: __webpack_require__(/*! ./activity-details.component.html */ "./src/app/components/activity/activity-details/activity-details.component.html"),
            styles: [__webpack_require__(/*! ./activity-details.component.css */ "./src/app/components/activity/activity-details/activity-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_activities_service_client__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ActivityDetailsComponent);
    return ActivityDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activity-edit/activity-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/activity/activity-edit/activity-edit.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activity-edit/activity-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/activity/activity-edit/activity-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEventOwner\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"activityName\">Activity Name</label>\n      <input placeholder=\"Dinner\"\n             id=\"activityName\"\n             name=\"activityName\"\n             type=\"text\"\n             class=\"form-control\"\n             required\n             [(ngModel)]=\"activityName\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input placeholder=\"2017 trip with Alice and Bob\"\n             id=\"description\"\n             name=\"description\"\n             type=\"text\"\n             class=\"form-control\"\n             required\n             [(ngModel)]=\"description\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"startDate\">Start Date</label>\n      <br>\n      Current: {{startDate | date: 'yyyy-MM-dd' }}\n      <input   id=\"startDate\"\n               name=\"startDate\"\n               type=\"Date\"\n               class=\"form-control\"\n               required\n               [(ngModel)]=\"newStartDate\"/>\n    </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       (click)=\"updateActivity()\">Update</a>\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteActivity()\">Delete</a>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/activity/activity-edit/activity-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/activity/activity-edit/activity-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityEditComponent", function() { return ActivityEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityEditComponent = /** @class */ (function () {
    function ActivityEditComponent(activitiesService, eventService, router, activatedRoute, sharedService) {
        this.activitiesService = activitiesService;
        this.eventService = eventService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.errorMsg = 'Those fields cannot be blank.';
    }
    ActivityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEventOwner = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.activitiesService.findActivityById(params['activityId']).subscribe(function (theActivity) {
                if (theActivity) {
                    _this.activity = theActivity;
                    _this.activityName = _this.activity['activityName'];
                    _this.description = _this.activity['description'];
                    _this.startDate = _this.activity['startDate'];
                }
            });
            _this.eventService.findEventById(params['eventId']).subscribe(function (theEvent) {
                if (theEvent) {
                    if (_this.sharedService.user['_id'] == theEvent['owner']['_id']) {
                        _this.isEventOwner = true;
                    }
                }
            });
        });
    };
    ActivityEditComponent.prototype.updateActivity = function () {
        if ((!this.newStartDate) || (this.activityName === '') || (this.description === '')) {
            this.errorFlag = true;
        }
        else {
            this.activity['activityName'] = this.activityName;
            this.activity['description'] = this.description;
            this.activity['startDate'] = new Date(this.newStartDate);
            this.activity['startDate'].setMinutes(this.activity['startDate'].getMinutes() + this.activity['startDate'].getTimezoneOffset());
            this.activitiesService.updateActivity(this.activity['_id'], this.activity).subscribe(function (activity) {
                window.location.reload();
            });
        }
    };
    ActivityEditComponent.prototype.deleteActivity = function () {
        var _this = this;
        this.activitiesService.deleteActivity(this.activity['_id']).subscribe(function (activity) {
            _this.router.navigate(['/main']);
        });
    };
    ActivityEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-edit',
            template: __webpack_require__(/*! ./activity-edit.component.html */ "./src/app/components/activity/activity-edit/activity-edit.component.html"),
            styles: [__webpack_require__(/*! ./activity-edit.component.css */ "./src/app/components/activity/activity-edit/activity-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ActivityEditComponent);
    return ActivityEditComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activity-list/activity-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/activity/activity-list/activity-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activity-list/activity-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/activity/activity-list/activity-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/event-list']\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-nav header-main-text-color\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left hidden-xs\">\n      <a class=\"navbar-brand thick\">\n        <b>Activities: {{event['eventName']}}</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\" *ngIf=\"isLoggedIn\">\n      <a [routerLink]=\"['/event', eventId, 'activity', 'new']\">\n        <span class=\"glyphicon glyphicon-plus navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"main-body-content\">\n  <div>\n    <div class=\"col-sm-4\">\n      <app-event-details></app-event-details>\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Users in this event:</h3>\n        </div>\n        <div *ngFor=\"let traveler of event['travelers']\" class=\"aj-users-event\">\n          <a>{{traveler.firstName}} {{traveler.lastName}}</a>\n        </div>\n      </div>\n      <div *ngIf=\"userIsOwner\">\n        Add Users To This Event:\n        <br>\n        <app-search-travelers></app-search-travelers>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <ul class=\"list-group\">\n        <h1>Activities</h1>\n        <li class=\"list-group-item\" *ngFor=\"let activity of activities\">\n          <h4>\n            <a [routerLink]=\"['/event', eventId, activity['_id']]\">{{activity.activityName}}</a>\n            on {{activity['startDate'] | date:'MM-dd-yyyy'}}\n          </h4>\n          <div *ngIf=\"activity['isDecided']\">\n            Decided Activity:\n            {{activity['decidedActivity'].activitySuggestionName}}\n            <br>\n            {{activity['decidedActivity'].suggestionLocation}}\n          </div>\n          <div *ngIf=\"!activity['isDecided']\">\n            <a [routerLink]=\"['/event', eventId, activity['_id']]\">Undecided.  Suggest & Vote.</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/activity/activity-list/activity-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/activity/activity-list/activity-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityListComponent = /** @class */ (function () {
    function ActivityListComponent(eventService, activatedRoute, sharedService) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.event = {};
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.eventId = params['eventId'];
            _this.event = _this.eventService.findEventById(_this.eventId).subscribe(function (event) {
                if (event) {
                    _this.event = event;
                    if (_this.event['owner']['_id'] === _this.sharedService.user['_id']) {
                        _this.userIsOwner = true;
                    }
                    if (_this.event['activities']) {
                        _this.activities = _this.event['activities'];
                    }
                    if (_this.sharedService.user['_id']) {
                        _this.isLoggedIn = true;
                    }
                    else {
                        _this.isLoggedIn = false;
                    }
                }
            });
        });
    };
    ActivityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-list',
            template: __webpack_require__(/*! ./activity-list.component.html */ "./src/app/components/activity/activity-list/activity-list.component.html"),
            styles: [__webpack_require__(/*! ./activity-list.component.css */ "./src/app/components/activity/activity-list/activity-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ActivityListComponent);
    return ActivityListComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activity-new/activity-new.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/activity/activity-new/activity-new.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activity-new/activity-new.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/activity/activity-new/activity-new.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top header-footer-blue-steel\">\n  <div class=\"nav-header-content\">\n    <div class=\"col-sm-3 col-xs-1 nav-padding-zero\">\n      <a [routerLink]=\"['/event', eventId, 'activity']\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n      <div class=\"nav-padding-zero hidden-xs nav-padding-zero navbar-text-main-theme\">\n        <b>New Activity</b>\n      </div>\n    </div>\n    <div class=\"col-xs-1 nav-padding-zero pull-right\">\n      <a (click)=\"createActivity()\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-ok pull-right\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid aj-content-full-height  aj-bump-for-nav\">\n  <div class=\"row aj-content-full-height\">\n    <div class=\"col-sm-9 col-sm-12 aj-split-content-right\">\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"activityname\">Activity Name</label>\n          <input placeholder=\"Dinner\"\n                 id=\"activityname\"\n                 name=\"activityname\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 required\n                 [(ngModel)]=\"activityname\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <input placeholder=\"description\"\n                 id=\"description\"\n                 name=\"description\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 required\n                 [(ngModel)]=\"description\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"startDate\">Start Date</label>\n          <input placeholder=\"Date\"\n                 id=\"startDate\"\n                 name=\"startDate\"\n                 type=\"Date\"\n                 class=\"form-control\"\n                 required\n                 [(ngModel)]=\"startDate\"/>\n        </div>\n\n        <button class=\"btn btn-danger btn-block\" (click)=\"createActivity()\" type=\"submit\">Create Activity\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/activity/activity-new/activity-new.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/activity/activity-new/activity-new.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActivityNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityNewComponent", function() { return ActivityNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivityNewComponent = /** @class */ (function () {
    function ActivityNewComponent(travelerService, eventService, activityService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.activityService = activityService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.activities = [{}];
        this.errorMsg = 'Those fields cannot be blank.';
    }
    ActivityNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.eventId = params['eventId'];
            _this.activityService.findAllActivitiesForEvent(_this.eventId).subscribe(function (theActivities) {
                if (theActivities) {
                    _this.activities = theActivities;
                }
            });
            _this.activityname = '';
            _this.description = '';
        });
    };
    ActivityNewComponent.prototype.createActivity = function () {
        var _this = this;
        if (this.activityname === '' || this.description === '') {
            this.errorFlag = true;
        }
        else {
            this.aNewActivity = {
                activityName: this.activityname,
                description: this.description, startDate: new Date(this.startDate)
            };
            this.aNewActivity['startDate']
                .setMinutes(this.aNewActivity['startDate']
                .getMinutes() + this.aNewActivity['startDate']
                .getTimezoneOffset());
            this.activityService.createActivity(this.eventId, this.aNewActivity).subscribe(function (theActivities) {
                _this.router.navigate(['/event', _this.eventId, 'activity']);
            });
        }
    };
    ActivityNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-new',
            template: __webpack_require__(/*! ./activity-new.component.html */ "./src/app/components/activity/activity-new/activity-new.component.html"),
            styles: [__webpack_require__(/*! ./activity-new.component.css */ "./src/app/components/activity/activity-new/activity-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _services_activities_service_client__WEBPACK_IMPORTED_MODULE_5__["ActivitiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ActivityNewComponent);
    return ActivityNewComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/event', eventId, 'activity']\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-nav header-main-text-color\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Suggestions</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\" *ngIf=\"isLoggedIn\">\n      <a [routerLink]=\"['/event', eventId, activityId, 'newSuggestion']\">\n        <span class=\"glyphicon glyphicon-plus navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"main-body-content\">\n  <div class=\"aj-pad-for-footer\">\n\n    <div class=\"col-md-2 aj-pad-for-footer\">\n      <app-activity-details></app-activity-details>\n    </div>\n\n    <div class=\"col-md-6 aj-pad-for-footer\">\n\n      <h1>Suggestions</h1>\n\n      <div class=\"panel panel-warning\" *ngFor=\"let promotion of promotions\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Promoted Content</h3>\n        </div>\n        <li class=\"list-group-item\">\n          <strong>{{promotion['suggestionName']}}</strong>\n          <br>{{promotion['suggestionLocation']}}\n          <br><a href=\"http://{{promotion['businessURL']}}\" target=\"new\">{{promotion['businessName']}}</a>\n          <br><a (click)=\"removePromotionForMe(promotion['_id'])\" *ngIf=\"isLoggedIn\">Remove Promotion</a>\n        </li>\n      </div>\n\n\n      <div class=\"panel panel-primary\" *ngFor=\"let suggestion of suggestions\">\n        <div class=\"panel-heading\">\n          <span class=\"panel-title\">Suggestion</span>\n          <a class=\"btn btn-success aj-btn-margin\" (click)=\"markAsDecided(suggestion['_id'])\" *ngIf=\"isLoggedIn\">Mark as\n            decided</a>\n        </div>\n        <li class=\"list-group-item\">\n          <strong>{{suggestion['activitySuggestionName']}}</strong>\n          <a [routerLink]=\"['/event', eventId, activityId, suggestion['_id']]\" (click)=\"setEdit()\"><span\n            class=\"glyphicon glyphicon-cog\"></span></a>\n\n          <br>Location: {{suggestion['suggestionLocation']}}\n          <br>Votes: {{suggestion['travelerUpVoters'].length}}\n          <br>People who voted for this suggestion:\n          <div *ngFor=\"let voter of suggestion['travelerUpVoters']\">\n            {{voter['firstName']}}\n          </div>\n\n          <div *ngIf=\"isLoggedIn\" class=\"aj-btn-margin\">\n            <span>\n              <a class=\"btn btn-primary\" (click)=\"upVote(suggestion['_id'])\">Upvote</a>\n              <a (click)=\"unVote(suggestion['_id'])\">Undo Vote</a>\n            </span>\n          </div>\n\n          <div *ngIf=\"!isLoggedIn\">\n            <app-prompt-to-login-or-register></app-prompt-to-login-or-register>\n          </div>\n        </li>\n      </div>\n\n\n      <div *ngIf=\"isEventOwner\">\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"activitySuggestionName\">Suggestion Name</label>\n            <input placeholder=\"McDonalds\"\n                   id=\"activitySuggestionName\"\n                   name=\"activitySuggestionName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"activitySuggestionName\"/>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"suggestionLocation\">Location</label>\n            <input placeholder=\"1337 Leet Lane\"\n                   id=\"suggestionLocation\"\n                   name=\"suggestionLocation\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"suggestionLocation\"/>\n          </div>\n\n          <a class=\"btn btn-primary btn-block\"\n             (click)=\"updateSuggestion()\">Update</a>\n\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deleteSuggestion()\">Delete</a>\n\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ActivitysuggestionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitysuggestionEditComponent", function() { return ActivitysuggestionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/promotion.service.client */ "./src/app/services/promotion.service.client.ts");
/* harmony import */ var _services_suggestion_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/suggestion.service.client */ "./src/app/services/suggestion.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivitysuggestionEditComponent = /** @class */ (function () {
    function ActivitysuggestionEditComponent(activitiesService, eventService, router, promotionService, activatedRoute, sharedService, suggestionService) {
        this.activitiesService = activitiesService;
        this.eventService = eventService;
        this.router = router;
        this.promotionService = promotionService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.suggestionService = suggestionService;
        this.errorMsg = 'Those fields cannot be blank.';
    }
    ActivitysuggestionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEventOwner = false;
        this.isLoggedIn = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.activityId = params['activityId'];
            _this.eventId = params['eventId'];
            _this.editSuggestionId = params['suggestionId'];
            _this.eventService.findEventById(params['eventId']).subscribe(function (theEvent) {
                if (theEvent) {
                    if (_this.sharedService.user['_id'] == theEvent['owner']['_id']) {
                        _this.isEventOwner = true;
                    }
                }
            });
            _this.suggestionService.findSuggestionById(params['suggestionId']).subscribe(function (suggestion) {
                _this.suggestion = suggestion;
                _this.activitySuggestionName = suggestion['activitySuggestionName'];
                _this.suggestionLocation = suggestion['suggestionLocation'];
            });
        });
        this.activitiesService.findAllSuggestionsForActivity(this.activityId).subscribe(function (allSuggestions) {
            if (allSuggestions) {
                _this.suggestions = allSuggestions;
            }
        });
        this.activitiesService.findActivityById(this.activityId).subscribe(function (activity) {
            _this.activity = activity;
            _this.promotions = _this.activity['promotions'];
            for (var v = 0; v < _this.promotions.length; v++) {
                _this.promotions[v]['views'] += 1;
                _this.promotionService.updatePromotion(_this.promotions[v]).subscribe(function (promotion) {
                });
            }
        });
        if (this.sharedService.user['_id']) {
            this.isLoggedIn = true;
        }
    };
    ActivitysuggestionEditComponent.prototype.upVote = function (suggestionId) {
        var _this = this;
        this.activitiesService.upVote(this.sharedService.user['_id'], suggestionId).subscribe(function (suggestion) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionEditComponent.prototype.unVote = function (suggestionId) {
        var _this = this;
        this.activitiesService.unVote(this.sharedService.user['_id'], suggestionId).subscribe(function (suggestion) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionEditComponent.prototype.markAsDecided = function (suggestionId) {
        this.activitiesService.markAsDecided(this.activityId, suggestionId).subscribe(function (activity) {
        });
    };
    ActivitysuggestionEditComponent.prototype.removePromotionForMe = function (promotionId) {
        var _this = this;
        this.promotionService.removePromotionForMe(this.activityId, promotionId)
            .subscribe(function (removed) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionEditComponent.prototype.updateSuggestion = function () {
        var _this = this;
        if ((this.activitySuggestionName === '') || (this.suggestionLocation === '')) {
            this.errorFlag = true;
        }
        else {
            this.suggestion['activitySuggestionName'] = this.activitySuggestionName;
            this.suggestion['suggestionLocation'] = this.suggestionLocation;
            this.suggestionService.updateSuggestion(this.suggestion['_id'], this.suggestion).subscribe(function (suggestion) {
                _this.ngOnInit();
            });
        }
    };
    ActivitysuggestionEditComponent.prototype.deleteSuggestion = function () {
        this.suggestionService.deleteSuggestion(this.activityId, this.suggestion['_id']).subscribe(function (suggestion) {
        });
        this.router.navigate(['/event', this.eventId, this.activityId]);
    };
    ActivitysuggestionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activitysuggestion-edit',
            template: __webpack_require__(/*! ./activitysuggestion-edit.component.html */ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.html"),
            styles: [__webpack_require__(/*! ./activitysuggestion-edit.component.css */ "./src/app/components/activity/activitysuggestion-edit/activitysuggestion-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__["PromotionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _services_suggestion_service_client__WEBPACK_IMPORTED_MODULE_6__["SuggestionService"]])
    ], ActivitysuggestionEditComponent);
    return ActivitysuggestionEditComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/event', eventId, 'activity']\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-nav header-main-text-color\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Suggestions</b>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-right\" *ngIf=\"isLoggedIn\">\n      <a [routerLink]=\"['/event', eventId, activityId, 'newSuggestion']\">\n        <span class=\"glyphicon glyphicon-plus navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"main-body-content\">\n  <div class=\"aj-pad-for-footer\">\n\n    <div class=\"col-md-2 aj-pad-for-footer\">\n      <app-activity-details></app-activity-details>\n    </div>\n\n    <div class=\"col-md-6 aj-pad-for-footer\">\n\n      <h1>Suggestions</h1>\n\n      <div class=\"panel panel-warning\" *ngFor=\"let promotion of promotions\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Promoted Content</h3>\n        </div>\n        <li class=\"list-group-item\">\n          <strong>{{promotion['suggestionName']}}</strong>\n          <br>{{promotion['suggestionLocation']}}\n          <br><a href=\"http://{{promotion['businessURL']}}\" target=\"new\">{{promotion['businessName']}}</a>\n          <br><a (click)=\"removePromotionForMe(promotion['_id'])\" *ngIf=\"isLoggedIn\">Remove Promotion</a>\n        </li>\n      </div>\n\n\n      <div class=\"panel panel-primary\" *ngFor=\"let suggestion of suggestions\">\n        <div class=\"panel-heading\">\n          <span class=\"panel-title\">Suggestion</span>\n          <a class=\"btn btn-success aj-btn-margin\" (click)=\"markAsDecided(suggestion['_id'])\" *ngIf=\"isLoggedIn\">Mark as decided</a>\n        </div>\n        <li class=\"list-group-item\">\n          <strong>{{suggestion['activitySuggestionName']}}</strong>\n          <a [routerLink]=\"['/event', eventId, activityId, suggestion['_id']]\"><span class=\"glyphicon glyphicon-cog\"></span></a>\n\n          <br>Location: {{suggestion['suggestionLocation']}}\n          <br>Votes: {{suggestion['travelerUpVoters'].length}}\n          <br>People who voted for this suggestion:\n          <div *ngFor=\"let voter of suggestion['travelerUpVoters']\">\n            {{voter['firstName']}}\n          </div>\n\n          <div *ngIf=\"isLoggedIn\" class=\"aj-btn-margin\">\n            <span>\n              <a class=\"btn btn-primary\" (click)=\"upVote(suggestion['_id'])\">Upvote</a>\n              <a (click)=\"unVote(suggestion['_id'])\">Undo Vote</a>\n            </span>\n          </div>\n\n          <div *ngIf=\"!isLoggedIn\">\n            <app-prompt-to-login-or-register></app-prompt-to-login-or-register>\n          </div>\n        </li>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ActivitysuggestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitysuggestionListComponent", function() { return ActivitysuggestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/promotion.service.client */ "./src/app/services/promotion.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivitysuggestionListComponent = /** @class */ (function () {
    function ActivitysuggestionListComponent(activitiesService, eventService, router, promotionService, activatedRoute, sharedService) {
        this.activitiesService = activitiesService;
        this.eventService = eventService;
        this.router = router;
        this.promotionService = promotionService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    ActivitysuggestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canEdit = false;
        this.isEventOwner = false;
        this.isLoggedIn = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.activityId = params['activityId'];
            _this.eventId = params['eventId'];
            _this.editSuggestionId = params['suggestionId'];
            if (_this.editSuggestionId) {
                _this.canEdit = true;
            }
            _this.eventService.findEventById(params['eventId']).subscribe(function (theEvent) {
                if (theEvent) {
                    if (_this.sharedService.user['_id'] == theEvent['owner']['_id']) {
                        _this.isEventOwner = true;
                    }
                }
            });
        });
        this.activitiesService.findAllSuggestionsForActivity(this.activityId).subscribe(function (allSuggestions) {
            if (allSuggestions) {
                _this.suggestions = allSuggestions;
            }
        });
        this.activitiesService.findActivityById(this.activityId).subscribe(function (activity) {
            _this.activity = activity;
            _this.promotions = _this.activity['promotions'];
            for (var v = 0; v < _this.promotions.length; v++) {
                _this.promotions[v]['views'] += 1;
                _this.promotionService.updatePromotion(_this.promotions[v]).subscribe(function (promotion) { });
            }
        });
        if (this.sharedService.user['_id']) {
            this.isLoggedIn = true;
        }
    };
    ActivitysuggestionListComponent.prototype.upVote = function (suggestionId) {
        var _this = this;
        this.activitiesService.upVote(this.sharedService.user['_id'], suggestionId).subscribe(function (suggestion) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionListComponent.prototype.unVote = function (suggestionId) {
        var _this = this;
        this.activitiesService.unVote(this.sharedService.user['_id'], suggestionId).subscribe(function (suggestion) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionListComponent.prototype.markAsDecided = function (suggestionId) {
        this.activitiesService.markAsDecided(this.activityId, suggestionId).subscribe(function (activity) {
        });
    };
    ActivitysuggestionListComponent.prototype.removePromotionForMe = function (promotionId) {
        var _this = this;
        this.promotionService.removePromotionForMe(this.activityId, promotionId)
            .subscribe(function (removed) {
            _this.ngOnInit();
        });
    };
    ActivitysuggestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activitysuggestion-list',
            template: __webpack_require__(/*! ./activitysuggestion-list.component.html */ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.html"),
            styles: [__webpack_require__(/*! ./activitysuggestion-list.component.css */ "./src/app/components/activity/activitysuggestion-list/activitysuggestion-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_activities_service_client__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__["PromotionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ActivitysuggestionListComponent);
    return ActivitysuggestionListComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/event', eventId, activityId]\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-nav header-main-text-color\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Suggestions</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"main-body-content aj-bump-for-nav\">\n\n  <div>\n    <div class=\"col-sm-4\">\n      Search for a place\n      <input placeholder=\"Golden Gate Bridge\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             required\n             [(ngModel)]=\"searchTerm\"/>\n      <a class=\"btn btn-primary btn-block\"\n         (click)=\"placesAutoComplete()\">Predict</a>\n\n\n      <div class=\"row\" *ngFor=\"let aResult of result\">\n\n\n        <div class=\"col-xs-9 col-sm-11\">\n          <h3>\n            {{aResult.description}}\n          </h3>\n          <a class=\"btn btn-success\" (click)=\"addSuggestion(aResult.place_id)\">Suggest as activity</a>\n          <a class=\"btn\"\n             (click)=\"moreDetails(aResult.place_id)\">More Details</a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm-8\">\n\n      <div *ngIf=\"detailsFlag\">\n        <h3>\n          Address: {{details['formatted_address']}}\n        </h3>\n        <h4>\n          {{details['formatted_phone_number']}}\n        </h4>\n\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Users rate this place: {{details['rating']}}</h3>\n          </div>\n        </div>\n\n        <div class=\"panel panel-primary aj-panel-no-border\">\n          <div class=\"row pull-middle\" *ngFor=\"let review of reviews\">\n            <div>\n              <div class=\"col-sm-3 pull-center\">\n                <img src=\"{{review.profile_photo_url}}\" class=\"img-circle\"/>\n              </div>\n              <div class=\"col-sm-9\">\n                <h4>\n                  {{review.author_name}} rates it a {{review.rating}}\n                </h4>\n                <p>\n                  {{review.text}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ActivitysuggestionNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitysuggestionNewComponent", function() { return ActivitysuggestionNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_place_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/place.service.client */ "./src/app/services/place.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivitysuggestionNewComponent = /** @class */ (function () {
    function ActivitysuggestionNewComponent(placeService, activatedRoute, router, activitiesService) {
        this.placeService = placeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activitiesService = activitiesService;
    }
    ActivitysuggestionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detailsFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.activityId = params['activityId'];
            _this.eventId = params['eventId'];
        });
    };
    ActivitysuggestionNewComponent.prototype.placesAutoComplete = function () {
        var _this = this;
        this.placeService.placesAutoComplete(this.searchTerm).subscribe(function (results) {
            _this.result = results;
        });
    };
    ActivitysuggestionNewComponent.prototype.addSuggestion = function (placeid) {
        var _this = this;
        this.placeService.moreDetails(placeid).subscribe(function (details) {
            _this.aNewSuggestion = { activitySuggestionName: details.name, suggestionLocation: details.formatted_address };
            _this.activitiesService.addSuggestion(_this.activityId, _this.aNewSuggestion)
                .subscribe(function (suggestion) {
                _this.router.navigate(['/event', _this.eventId, _this.activityId]);
            });
        });
    };
    ActivitysuggestionNewComponent.prototype.moreDetails = function (placeid) {
        var _this = this;
        this.placeService.moreDetails(placeid).subscribe(function (details) {
            _this.detailsFlag = true;
            _this.details = details;
            _this.reviews = details.reviews;
        });
    };
    ActivitysuggestionNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activitysuggestion-new',
            template: __webpack_require__(/*! ./activitysuggestion-new.component.html */ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.html"),
            styles: [__webpack_require__(/*! ./activitysuggestion-new.component.css */ "./src/app/components/activity/activitysuggestion-new/activitysuggestion-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_place_service_client__WEBPACK_IMPORTED_MODULE_1__["PlaceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_activities_service_client__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"]])
    ], ActivitysuggestionNewComponent);
    return ActivitysuggestionNewComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-main/admin-main.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/admin-main/admin-main.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-main/admin-main.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-main/admin-main.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Welcome {{user['firstName']}}!</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container main-content\">\n  <span *ngIf=\"!loggedIn\">\n    <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\"\n            type=\"submit\">Login\n    </button>\n    <button class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\"\n            type=\"submit\">Register\n    </button>\n  </span>\n\n  <span *ngIf=\"loggedIn\">\n    <div class=\"panel panel-danger\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Users</h3>\n      </div>\n\n      <div *ngFor=\"let user of travelers\">\n        <div class=\"panel-body aj-panel-border\">\n          {{user['email']}} <a (click)=\"deleteTraveler(user)\">Delete Account</a>  <a [routerLink]=\"['/admin', user['_id']]\">Edit Account</a>\n        </div>\n      </div>\n    </div>\n  </span>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/admin', 'create', 'user']\">Create New Account</a>\n  <span *ngIf=\"!loggedIn\">\n    <app-event-browse></app-event-browse>\n  </span>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/admin/admin-main/admin-main.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-main/admin-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainComponent", function() { return AdminMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_activities_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/activities.service.client */ "./src/app/services/activities.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminMainComponent = /** @class */ (function () {
    function AdminMainComponent(activatedRoute, router, activitiesService, travelerService, sharedService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activitiesService = activitiesService;
        this.travelerService = travelerService;
        this.sharedService = sharedService;
        this.user = {};
    }
    AdminMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = false;
        this.user = this.sharedService.user;
        if (this.sharedService.user['_id']) {
            this.loggedIn = true;
        }
        this.travelerService.findAllTravelers().subscribe(function (travelers) {
            _this.travelers = travelers;
        });
    };
    AdminMainComponent.prototype.deleteTraveler = function (traveler) {
        var _this = this;
        this.travelerService.deleteTraveler(traveler).subscribe(function (t) {
            _this.ngOnInit();
        });
    };
    AdminMainComponent.prototype.deleteActivity = function (activityId) {
        var _this = this;
        this.activitiesService.deleteActivity(activityId).subscribe(function (t) {
            _this.ngOnInit();
        });
    };
    AdminMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-main',
            template: __webpack_require__(/*! ./admin-main.component.html */ "./src/app/components/admin/admin-main/admin-main.component.html"),
            styles: [__webpack_require__(/*! ./admin-main.component.css */ "./src/app/components/admin/admin-main/admin-main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_activities_service_client__WEBPACK_IMPORTED_MODULE_4__["ActivitiesService"],
            _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_3__["TravelerService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], AdminMainComponent);
    return AdminMainComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/user-create/user-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/user-create/user-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/user-create/user-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/user-create/user-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Create New Account</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"createTraveler()\" class=\"\">\n        <span class=\"glyphicon glyphicon-ok navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<div class=\"container main-content\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"email\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [(ngModel)]=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             id=\"password\"\n             name=\"password\"\n      />\n    </div>\n\n    <div class=\" aj-button-margin\">\n      <a class=\"btn btn-success btn-block\"\n         (click)=\"createTraveler()\" type=\"submit\">Create Account</a>\n    </div>\n  </form>\n  <div class=\" aj-button-margin\">\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]=\"['/admin']\">Back to admin page</a>\n  </div>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/admin/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(travelerService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.traveler = {};
        this.errorMsg = 'Email required. Role must be TRAVELER, MARKETER, or ADMIN';
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.createTraveler = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.email).subscribe(function (traveler) {
            if (traveler !== null) {
                _this.errorFlag = true;
            }
            else if ((_this.email === '') || (_this.password === '')) {
                _this.errorFlag = true;
            }
            else {
                _this.traveler['email'] = _this.email;
                _this.traveler['password'] = _this.password;
                _this.travelerService.register(_this.email, _this.password).subscribe(function (theTraveler) {
                    _this.router.navigate(['/admin']);
                });
            }
        });
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/components/admin/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.css */ "./src/app/components/admin/user-create/user-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/user-edit/user-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/user-edit/user-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/user-edit/user-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/user-edit/user-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateTraveler()\" class=\"\">\n        <span class=\"glyphicon glyphicon-ok navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<div class=\"container main-content\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"email\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [(ngModel)]=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             id=\"password\"\n             name=\"password\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input [(ngModel)]=\"phone\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"phone\"\n             name=\"phone\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"role\">Role</label>\n      <input [(ngModel)]=\"role\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"role\"\n             name=\"role\"\n      />\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/admin']\">Back to admin page</a>\n\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteTraveler()\">Delete Account</a>\n  <br>\n  <p class=\"pull-right\">Member since {{monthJoined}} / {{yearJoined}}</p>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/admin/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(travelerService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.traveler = {};
        this.errorMsg = 'Someone else is already registered with that email.';
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.travelerId = params['travelerId'];
            _this.travelerService.findTravelerById(_this.travelerId).subscribe(function (traveler) {
                _this.traveler = traveler;
                _this.travelerId = _this.traveler['_id'];
                _this.email = _this.traveler['email'];
                _this.firstName = _this.traveler['firstName'];
                _this.lastName = _this.traveler['lastName'];
                _this.phone = _this.traveler['phone'];
                _this.role = _this.traveler['role'];
                _this.dateCreated = new Date(_this.traveler['dateCreated']);
                _this.monthJoined = _this.dateCreated.getMonth();
                _this.yearJoined = _this.dateCreated.getFullYear();
            });
        });
        if (this.sharedService.user['role'] == 'MARKETER') {
            this.isMarketer = true;
        }
        if (this.sharedService.user['role'] == 'TRAVELER') {
            this.isTraveler = true;
        }
    };
    UserEditComponent.prototype.updateTraveler = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.email).subscribe(function (traveler) {
            if ((traveler) && (_this.email !== '') && (traveler.email == _this.sharedService.user['email'])) {
                _this.errorFlag = true;
            }
            else {
                _this.traveler['email'] = _this.email;
                _this.traveler['firstName'] = _this.firstName;
                _this.traveler['lastName'] = _this.lastName;
                _this.traveler['phone'] = _this.phone;
                _this.traveler['role'] = _this.role;
                _this.traveler['password'] = _this.password;
                _this.travelerService.updateTraveler(_this.travelerId, _this.traveler).subscribe(function (theTraveler) {
                    _this.router.navigate(['/admin']);
                });
            }
        });
    };
    UserEditComponent.prototype.deleteTraveler = function () {
        var _this = this;
        this.travelerService.deleteTraveler(this.traveler).subscribe(function (theTraveler) {
            _this.router.navigate(['/admin']);
        });
    };
    UserEditComponent.prototype.logout = function () {
        var _this = this;
        this.travelerService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/admin/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/components/admin/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event-browse/event-browse.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/event/event-browse/event-browse.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-browse/event-browse.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/event/event-browse/event-browse.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <p class=\"navbar-header pull-left\">\n      <a [routerLink]=\"['/login']\" class=\"navbar-brand thick\">\n        Login/Register to start planning a trip!\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"panel panel-danger\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">All Events</h3>\n  </div>\n  <div *ngFor=\"let event of events\" class=\"aj-users-event\">\n    <a [routerLink]=\"['/event', event['_id'], 'activity']\">{{event['eventName']}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event/event-browse/event-browse.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/event/event-browse/event-browse.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventBrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBrowseComponent", function() { return EventBrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventBrowseComponent = /** @class */ (function () {
    function EventBrowseComponent(eventService) {
        this.eventService = eventService;
        this.events = [{}];
    }
    EventBrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.findAllEvents().subscribe(function (events) {
            _this.events = events;
        });
    };
    EventBrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-browse',
            template: __webpack_require__(/*! ./event-browse.component.html */ "./src/app/components/event/event-browse/event-browse.component.html"),
            styles: [__webpack_require__(/*! ./event-browse.component.css */ "./src/app/components/event/event-browse/event-browse.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventBrowseComponent);
    return EventBrowseComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event-details/event-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/event/event-details/event-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-details/event-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/event/event-details/event-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"eventExists\">\n  <h3>{{event['eventName']}}</h3>\n  <h4>{{event['description']}}</h4>\n  <h5>Owner: {{event['owner']['email']}}</h5>\n\n</div>\n<div *ngIf=\"isEventOwner\"><a (click)=\"showEdit=!showEdit\">Edit event</a></div>\n<div *ngIf=\"showEdit\">\n  <app-event-edit></app-event-edit>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event/event-details/event-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/event/event-details/event-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, activatedRoute, sharedService) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.event = {};
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = false;
        this.showEdit = false;
        this.eventExists = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['eventId']) {
                _this.eventService.findEventById(params['eventId'])
                    .subscribe(function (event) {
                    _this.event = event;
                    if (event) {
                        _this.eventExists = true;
                        if (_this.sharedService.user['_id'] == _this.event['owner']['_id']) {
                            _this.isEventOwner = true;
                        }
                    }
                });
            }
        });
        if (this.sharedService.user['_id']) {
            this.isLoggedIn = true;
        }
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/components/event/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.css */ "./src/app/components/event/event-details/event-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/event/event-edit/event-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/event/event-edit/event-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEventOwner\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"eventname\">Event Name</label>\n      <input placeholder=\"Trip to Japan\"\n             id=\"eventname\"\n             name=\"eventname\"\n             type=\"text\"\n             class=\"form-control\"\n             required\n             [(ngModel)]=\"eventname\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input placeholder=\"2017 trip with Alice and Bob\"\n             id=\"description\"\n             name=\"description\"\n             type=\"text\"\n             class=\"form-control\"\n             required\n             [(ngModel)]=\"description\"/>\n    </div>\n\n    <a class=\"btn btn-primary btn-block\"\n       (click)=\"updateEvent()\">Update</a>\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteEvent()\">Delete</a>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/event/event-edit/event-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditComponent", function() { return EventEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventEditComponent = /** @class */ (function () {
    function EventEditComponent(eventService, router, activatedRoute, sharedService) {
        this.eventService = eventService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.errorMsg = 'Those fields cannot be blank.';
    }
    EventEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEventOwner = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.eventService.findEventById(params['eventId']).subscribe(function (theEvent) {
                if (theEvent) {
                    _this.event = theEvent;
                    _this.eventname = _this.event['eventName'];
                    _this.description = _this.event['description'];
                    if (_this.sharedService.user['_id'] == _this.event['owner']['_id']) {
                        _this.isEventOwner = true;
                    }
                }
            });
        });
    };
    EventEditComponent.prototype.updateEvent = function () {
        this.event['eventName'] = this.eventname;
        this.event['description'] = this.description;
        this.eventService.updateEvent(this.event['_id'], this.event).subscribe(function (event) {
            window.location.reload();
        });
    };
    EventEditComponent.prototype.removeTravelerFromEvent = function () {
        var _this = this;
        this.eventService.removeTravelerFromEvent(this.sharedService.user['_id'], this.event['_id'])
            .subscribe(function (event) {
            _this.router.navigate(['/event-list']);
        });
    };
    EventEditComponent.prototype.deleteEvent = function () {
        var _this = this;
        this.eventService.deleteEvent(this.event['_id']).subscribe(function (event) {
            _this.router.navigate(['/main']);
        });
    };
    EventEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-edit',
            template: __webpack_require__(/*! ./event-edit.component.html */ "./src/app/components/event/event-edit/event-edit.component.html"),
            styles: [__webpack_require__(/*! ./event-edit.component.css */ "./src/app/components/event/event-edit/event-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], EventEditComponent);
    return EventEditComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"eventExists\">\n  <div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Your Events</h3>\n    </div>\n    <div *ngFor=\"let anEvent of events\">\n      <div class=\"panel-body aj-panel-border\">\n        <a [routerLink]=\"['/event', anEvent['_id'], 'activity']\" class=\"eventList\">{{anEvent['eventName']}}</a>\n      </div>\n    </div>\n    <button class=\"btn btn-danger btn-block\" [routerLink]=\"['/event', 'new']\" type=\"submit\">New Event\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventListComponent = /** @class */ (function () {
    function EventListComponent(travelerService, eventService, activatedRoute, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventExists = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['tid']) {
                _this.travelerId = params['tid'];
                _this.travelerService.findAllEventsForTraveler(_this.travelerId).subscribe(function (theEvents) {
                    if (theEvents) {
                        _this.events = theEvents;
                        _this.eventExists = true;
                    }
                });
            }
        });
        if (this.sharedService.user['_id']) {
            this.travelerService.findAllEventsForTraveler(this.sharedService.user['_id']).subscribe(function (theEvents) {
                if (theEvents) {
                    _this.events = theEvents;
                    _this.eventExists = true;
                }
            });
        }
    };
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/components/event/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.css */ "./src/app/components/event/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/event/event-new/event-new.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/event/event-new/event-new.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top header-footer-blue-steel\">\n  <div class=\"nav-header-content\">\n    <div class=\"col-sm-3 col-xs-1 nav-padding-zero\">\n      <a [routerLink]=\"['/event-list']\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n      <div class=\"nav-padding-zero hidden-xs nav-padding-zero navbar-text-main-theme\">\n        <b>Events</b>\n      </div>\n      <div class=\"navbar-split-padding hidden-xs nav-padding-zero pull-right\">\n      </div>\n    </div>\n    <div class=\"col-sm-8 col-xs-10 nav-padding-zero navbar-text-main-theme\">\n      <b>New Event</b>\n    </div>\n    <div class=\"col-xs-1 nav-padding-zero\">\n      <a (click)=\"createEvent()\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-ok pull-right\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid aj-content-full-height\">\n  <div class=\"row aj-content-full-height aj-bump-for-nav\">\n    <div class=\"col-sm-3 hidden-xs aj-split-content-left\">\n      <app-event-list></app-event-list>\n    </div>\n    <div class=\"col-sm-9 col-sm-12 aj-split-content-right\">\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"eventname\">Event Name</label>\n          <input placeholder=\"Trip to Japan\"\n                 id=\"eventname\"\n                 name=\"eventname\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 required\n                 [(ngModel)]=\"eventname\"/>\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <input placeholder=\"2017 trip with Alice and Bob\"\n                 id=\"description\"\n                 name=\"description\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 required\n                 [(ngModel)]=\"description\"/>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/event-new/event-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventNewComponent", function() { return EventNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventNewComponent = /** @class */ (function () {
    function EventNewComponent(travelerService, eventService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.events = [{}];
        this.errorMsg = 'Those fields cannot be blank.';
    }
    EventNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.travelerService.findAllEventsForTraveler(_this.sharedService.user['_id']).subscribe(function (theEvents) {
                if (theEvents) {
                    _this.events = theEvents;
                }
            });
            _this.eventname = '';
            _this.description = '';
        });
    };
    EventNewComponent.prototype.createEvent = function () {
        var _this = this;
        if (this.eventname === '' || this.description === '') {
            this.errorFlag = true;
        }
        else {
            this.aNewEvent = { eventName: this.eventname,
                description: this.description, owner: this.sharedService.user['_id'] };
            this.eventService.createEvent(this.sharedService.user['_id'], this.aNewEvent).subscribe(function (theEvents) {
                _this.router.navigate(['/event-list']);
            });
        }
    };
    EventNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-new',
            template: __webpack_require__(/*! ./event-new.component.html */ "./src/app/components/event/event-new/event-new.component.html"),
            styles: [__webpack_require__(/*! ./event-new.component.css */ "./src/app/components/event/event-new/event-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_3__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], EventNewComponent);
    return EventNewComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<nav class=\"navbar navbar-fixed-bottom header-footer-blue-steel\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/traveler']\" class=\"nav-hover\">\n        <span class=\"glyphicon glyphicon-user navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!-- End Footer-->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content container\">\n  <div class=\"col-sm-6\">\n    <h1>\n      <img class=\"img-thumbnail\"\n           src=\"http://www.zeepod.io/wp-content/uploads/2017/11/RETIREES1015-family-travel-plans-1.jpg\"/>\n    </h1>\n    <div class=\"pull-center pull-full-width\">\n      <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\">Start Planning</a>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <h1>\n      <a [routerLink]=\"['/login']\">TravelCord!</a>\n    </h1>\n    <p>\n      Planning a trip and can't keep track of all the ideas and what you are going to do?\n      TravelCord helps you coordinate activities and suggestions for events. </p>\n\n    <div class=\"panel-group\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            A few of the things you can do\n          </h3>\n        </div>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item panel-body\">\n            Create events\n          </li>\n          <li class=\"list-group-item panel-body\">\n            Manage an itinerary of activities\n          </li>\n          <li class=\"list-group-item panel-body\">\n            Suggest ideas for activities\n          </li>\n          <li class=\"list-group-item panel-body\">\n            Pull places from Google's API for suggestions\n          </li>\n          <li class=\"list-group-item panel-body\">\n            Vote and decide on activities.\n          </li>\n        </ul>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content pull-center\">\n\n  <div class=\"col-sm-12\">\n    <img class=\"img-rounded float-left\" alt=\"Arnold Esguerra\" src=\"../../../assets/projectimages/aj.png\"/>\n    <h3>\n      Arnold \"AJ\" Esguerra\n    </h3>\n    <h4>\n      <a [routerLink]=\"['/travelcord']\">Project Main Page</a>\n    </h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/marketer/profile/profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/marketer/profile/profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/marketer/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/marketer/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <span *ngIf=\"loggedIn\">Welcome {{user['firstName']}}!</span>\n        <span *ngIf=\"!loggedIn\"><button class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\"\n              type=\"submit\">Login</button>\n          <button class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\"\n              type=\"submit\">Register\n      </button>\n    </span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container main-content\">\n\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Your Promotions\n        <a [routerLink]=\"['/promotion', 'new']\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </h3>\n    </div>\n    <app-promotion-list></app-promotion-list>\n\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/marketer/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/marketer/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileMarketerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMarketerComponent", function() { return ProfileMarketerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileMarketerComponent = /** @class */ (function () {
    function ProfileMarketerComponent(activatedRoute, router, sharedService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    ProfileMarketerComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
        this.user = this.sharedService.user;
        if (this.sharedService.user['_id']) {
            this.loggedIn = true;
        }
    };
    ProfileMarketerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/marketer/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/marketer/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ProfileMarketerComponent);
    return ProfileMarketerComponent;
}());



/***/ }),

/***/ "./src/app/components/placestest/placestest.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/placestest/placestest.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n"

/***/ }),

/***/ "./src/app/components/placestest/placestest.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/placestest/placestest.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body-content\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <h1>\n        Search for a place\n      </h1>\n      <input   placeholder=\"Golden Gate Bridge\"\n               name=\"theSearchTerm\"\n               type=\"text\"\n               class=\"form-control\"\n               required\n               [(ngModel)]=\"searchTerm\"/>\n      <a class=\"btn btn-primary btn-block\"\n         (click)=\"placesAutoComplete()\">Predict</a>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\" *ngFor=\"let aResult of result\">\n        <div class=\"col-xs-9 col-sm-11\">\n          {{aResult.description}}\n          <br>\n          <a class=\"btn\"\n             (click)=\"moreDetails(aResult.place_id)\">\n            <h4>More Details</h4>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div *ngIf=\"detailsFlag\">\n        Address: {{details['formatted_address']}}\n        <br>\n        OverallRating: {{details['rating']}}\n        <br>\n        <br>\n\n        <div class=\"row\" *ngFor=\"let review of reviews\">\n          Review by {{review.author_name}} gives a {{review.rating}}\n          <br>\n          <img src=\"{{review.profile_photo_url}}\"/>\n          <br>\n          {{review.text}}\n          <br>\n          <br>\n\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/components/placestest/placestest.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/placestest/placestest.component.ts ***!
  \***************************************************************/
/*! exports provided: PlacestestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacestestComponent", function() { return PlacestestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_place_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/place.service.client */ "./src/app/services/place.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacestestComponent = /** @class */ (function () {
    function PlacestestComponent(placeService) {
        this.placeService = placeService;
    }
    PlacestestComponent.prototype.ngOnInit = function () {
        this.detailsFlag = false;
    };
    PlacestestComponent.prototype.placesAutoComplete = function () {
        var _this = this;
        this.placeService.placesAutoComplete(this.searchTerm).subscribe(function (results) {
            console.log(results);
            _this.result = results;
        });
    };
    PlacestestComponent.prototype.moreDetails = function (placeid) {
        var _this = this;
        this.placeService.moreDetails(placeid).subscribe(function (details) {
            console.log(details);
            _this.detailsFlag = true;
            _this.details = details;
            _this.reviews = details.reviews;
        });
    };
    PlacestestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-placestest',
            template: __webpack_require__(/*! ./placestest.component.html */ "./src/app/components/placestest/placestest.component.html"),
            styles: [__webpack_require__(/*! ./placestest.component.css */ "./src/app/components/placestest/placestest.component.css")]
        }),
        __metadata("design:paramtypes", [_services_place_service_client__WEBPACK_IMPORTED_MODULE_1__["PlaceService"]])
    ], PlacestestComponent);
    return PlacestestComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion/promotion-edit/promotion-edit.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-edit/promotion-edit.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/promotion/promotion-edit/promotion-edit.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-edit/promotion-edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top header-footer-blue-steel\">\n\n  <div class=\"nav-header-content\">\n\n\n    <div class=\"col-sm-3 col-xs-1 nav-padding-zero\">\n\n      <a [routerLink]=\"['/event-list']\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n\n      <div class=\"nav-padding-zero hidden-xs nav-padding-zero navbar-text-main-theme\">\n        <b>Events</b>\n      </div>\n\n      <div class=\"navbar-split-padding hidden-xs nav-padding-zero pull-right\">\n        <a [routerLink]=\"['/event', 'new']\" class=\"navbar-text-main-theme nav-padding-zero\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n\n    </div>\n\n    <div class=\"col-sm-8 col-xs-10 nav-padding-zero navbar-text-main-theme\">\n      <b>New Event</b>\n    </div>\n\n    <div class=\"col-xs-1 nav-padding-zero\">\n      <a (click)=\"updatePromotion()\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-ok pull-right\"></span>\n      </a>\n    </div>\n\n  </div>\n\n</nav>\n\n\n<div class=\"main-body-content aj-content-full-height\">\n\n  <div class=\"container-fluid aj-content-full-height\">\n\n    <div class=\"row aj-content-full-height\">\n\n      <div class=\"col-sm-3 hidden-xs aj-split-content-left\">\n        <app-promotion-list></app-promotion-list>\n      </div>\n\n      <div class=\"col-sm-9 col-sm-12 aj-split-content-right\">\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"suggestionName\">Promotion Title</label>\n            <input placeholder=\"Eat Great Ramen!\"\n                   id=\"suggestionName\"\n                   name=\"suggestionName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"suggestionName\"/>\n\n            <input placeholder=\"Fu-unji Ramen\"\n                   id=\"businessName\"\n                   name=\"businessName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"businessName\"/>\n\n            <label for=\"suggestionLocation\">Location</label>\n            <input placeholder=\"127 Tokyo Lane, Tokyo, Japan\"\n                   id=\"suggestionLocation\"\n                   name=\"suggestionLocation\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"suggestionLocation\"/>\n\n            <label for=\"businessURL\">Business URL</label>\n            <input placeholder=\"https://www.tripadvisor.com/Restaurant_Review-g1066456-d1679642-Reviews-Fuunji-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html\"\n                   id=\"businessURL\"\n                   name=\"suggestionLocation\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"businessURL\"/>\n          </div>\n\n          <a class=\"btn btn-primary btn-block\"\n             (click)=\"deployPromotion()\">Deploy</a>\n\n          <br><br>\n\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deletePromotion()\">Delete</a>\n\n        </form>\n\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/promotion/promotion-edit/promotion-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-edit/promotion-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PromotionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionEditComponent", function() { return PromotionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/promotion.service.client */ "./src/app/services/promotion.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PromotionEditComponent = /** @class */ (function () {
    function PromotionEditComponent(travelerService, eventService, promotionService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.promotionService = promotionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Those fields cannot be blank.';
    }
    PromotionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.promotionService.findPromotionById(params['promotionId'])
                .subscribe(function (promotion) {
                _this.thePromotion = promotion;
                _this.suggestionName = _this.thePromotion['suggestionName'];
                _this.suggestionLocation = _this.thePromotion['suggestionLocation'];
                _this.businessName = _this.thePromotion['businessName'];
                _this.businessURL = _this.thePromotion['businessURL'];
            });
        });
    };
    PromotionEditComponent.prototype.updatePromotion = function () {
        var _this = this;
        if (this.suggestionName === ''
            || this.suggestionLocation === ''
            || this.businessName === ''
            || this.businessURL === '') {
            this.errorFlag = true;
        }
        else {
            this.thePromotion['suggestionName'] = this.suggestionName;
            this.thePromotion['suggestionLocation'] = this.suggestionLocation;
            this.thePromotion['businessName'] = this.businessName;
            this.thePromotion['businessURL'] = this.businessURL;
            this.promotionService.updatePromotion(this.thePromotion).subscribe(function (thePromotion) {
                _this.router.navigate(['/marketer']);
            });
        }
    };
    PromotionEditComponent.prototype.deletePromotion = function () {
        var _this = this;
        this.promotionService.deletePromotion(this.thePromotion['_id'], this.sharedService.user['_id']).subscribe(function (thePromotion) {
            _this.router.navigate(['/marketer']);
        });
    };
    PromotionEditComponent.prototype.deployPromotion = function () {
        var _this = this;
        this.promotionService.deployPromotion(this.thePromotion['_id'], this.thePromotion).subscribe(function (thePromotion) {
            _this.router.navigate(['/marketer']);
        });
    };
    PromotionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-edit',
            template: __webpack_require__(/*! ./promotion-edit.component.html */ "./src/app/components/promotion/promotion-edit/promotion-edit.component.html"),
            styles: [__webpack_require__(/*! ./promotion-edit.component.css */ "./src/app/components/promotion/promotion-edit/promotion-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_3__["PromotionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], PromotionEditComponent);
    return PromotionEditComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion/promotion-list/promotion-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-list/promotion-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/promotion/promotion-list/promotion-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-list/promotion-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-warning\" *ngFor=\"let aPromotion of promotions\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><strong><a [routerLink]=\"['/promotion', aPromotion['_id']]\">{{aPromotion['suggestionName']}}</a></strong></h3>\n  </div>\n  <li class=\"list-group-item\">\n\n    <strong>Analytics:</strong>\n    <br>\n    <table class=\"aj-tablepadding\">\n      <tr>\n        <td>Views</td>\n        <td>{{aPromotion['views']}}</td>\n      </tr>\n      <tr>\n        <td>\n          Number of Activities Suggested to:\n        </td>\n        <td>\n          {{aPromotion['addedToActivitiesTotal']}}\n        </td>\n      </tr>\n    </table>\n  </li>\n</div>\n"

/***/ }),

/***/ "./src/app/components/promotion/promotion-list/promotion-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-list/promotion-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PromotionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionListComponent", function() { return PromotionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionListComponent = /** @class */ (function () {
    function PromotionListComponent(travelerService, eventService, activatedRoute, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    PromotionListComponent.prototype.ngOnInit = function () {
        this.promotionExists = false;
        this.isLoggedIn = false;
        if (this.sharedService.user['_id']) {
            if (this.sharedService.user['myPromotions'].length > 0) {
                this.promotions = this.sharedService.user['myPromotions'];
                this.promotionExists = true;
            }
            this.isLoggedIn = true;
        }
    };
    PromotionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-list',
            template: __webpack_require__(/*! ./promotion-list.component.html */ "./src/app/components/promotion/promotion-list/promotion-list.component.html"),
            styles: [__webpack_require__(/*! ./promotion-list.component.css */ "./src/app/components/promotion/promotion-list/promotion-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], PromotionListComponent);
    return PromotionListComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion/promotion-new/promotion-new.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-new/promotion-new.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/promotion/promotion-new/promotion-new.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-new/promotion-new.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top header-footer-blue-steel\">\n\n  <div class=\"nav-header-content\">\n\n\n    <div class=\"col-sm-3 col-xs-1 nav-padding-zero\">\n\n      <a [routerLink]=\"['/marketer']\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-chevron-left pull\"></span>\n      </a>\n\n      <div class=\"nav-padding-zero hidden-xs nav-padding-zero navbar-text-main-theme\">\n        <b>New Promotion</b>\n      </div>\n\n\n    </div>\n\n    <div class=\"col-xs-1 nav-padding-zero pull-right\">\n      <a (click)=\"createPromotion()\" class=\"navbar-text-main-theme\">\n        <span class=\"glyphicon glyphicon-ok pull-right\"></span>\n      </a>\n    </div>\n\n  </div>\n\n</nav>\n\n\n<div class=\"main-body-content aj-content-full-height\">\n\n  <div class=\"container-fluid aj-content-full-height\">\n\n    <div class=\"row aj-content-full-height\">\n\n      <div class=\"col-sm-3 hidden-xs aj-split-content-left\">\n        <app-promotion-list></app-promotion-list>\n      </div>\n\n      <div class=\"col-sm-9 col-sm-12 aj-split-content-right\">\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"suggestionName\">Promotion Title</label>\n            <input placeholder=\"Eat Great Ramen!\"\n                   id=\"suggestionName\"\n                   name=\"suggestionName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"suggestionName\"/>\n\n            <input placeholder=\"Fu-unji Ramen\"\n                   id=\"businessName\"\n                   name=\"businessName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"businessName\"/>\n\n            <label for=\"suggestionLocation\">Location</label>\n            <input placeholder=\"127 Tokyo Lane, Tokyo, Japan\"\n                   id=\"suggestionLocation\"\n                   name=\"suggestionLocation\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"suggestionLocation\"/>\n\n            <label for=\"businessURL\">Business URL</label>\n            <input placeholder=\"https://www.tripadvisor.com/Restaurant_Review-g1066456-d1679642-Reviews-Fuunji-Shibuya_Tokyo_Tokyo_Prefecture_Kanto.html\"\n                   id=\"businessURL\"\n                   name=\"suggestionLocation\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   required\n                   [(ngModel)]=\"businessURL\"/>\n          </div>\n\n          <a class=\"btn btn-success btn-block\"\n             (click)=\"createPromotion()\">Create Promotion</a>\n        </form>\n\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/promotion/promotion-new/promotion-new.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/promotion/promotion-new/promotion-new.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PromotionNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionNewComponent", function() { return PromotionNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/promotion.service.client */ "./src/app/services/promotion.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PromotionNewComponent = /** @class */ (function () {
    function PromotionNewComponent(travelerService, eventService, promotionService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.promotionService = promotionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Those fields cannot be blank.';
    }
    PromotionNewComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
        });
        this.suggestionName = '';
        this.suggestionLocation = '';
        this.businessName = '';
        this.businessURL = '';
    };
    PromotionNewComponent.prototype.createPromotion = function () {
        var _this = this;
        if (this.suggestionName === ''
            || this.suggestionLocation === ''
            || this.businessName === ''
            || this.businessURL === '') {
            this.errorFlag = true;
        }
        else {
            this.aNewPromotion = { suggestionName: this.suggestionName,
                suggestionLocation: this.suggestionLocation,
                businessName: this.businessName,
                businessURL: this.businessURL };
            this.promotionService.createPromotion(this.sharedService.user['_id'], this.aNewPromotion).subscribe(function (thePromotion) {
                _this.router.navigate(['/marketer']);
            });
        }
    };
    PromotionNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-new',
            template: __webpack_require__(/*! ./promotion-new.component.html */ "./src/app/components/promotion/promotion-new/promotion-new.component.html"),
            styles: [__webpack_require__(/*! ./promotion-new.component.css */ "./src/app/components/promotion/promotion-new/promotion-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _services_promotion_service_client__WEBPACK_IMPORTED_MODULE_5__["PromotionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], PromotionNewComponent);
    return PromotionNewComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/test.service.client */ "./src/app/services/test.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_test_service_client__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn\">\n  <a [routerLink]=\"['/login']\">Login/Register as a traveler to view more</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PromptToLoginOrRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptToLoginOrRegisterComponent", function() { return PromptToLoginOrRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromptToLoginOrRegisterComponent = /** @class */ (function () {
    function PromptToLoginOrRegisterComponent(sharedService) {
        this.sharedService = sharedService;
    }
    PromptToLoginOrRegisterComponent.prototype.ngOnInit = function () {
        if (this.sharedService.user['_id']) {
            this.isLoggedIn = true;
        }
    };
    PromptToLoginOrRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prompt-to-login-or-register',
            template: __webpack_require__(/*! ./prompt-to-login-or-register.component.html */ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.html"),
            styles: [__webpack_require__(/*! ./prompt-to-login-or-register.component.css */ "./src/app/components/travelers/prompt-to-login-or-register/prompt-to-login-or-register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_service_client__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], PromptToLoginOrRegisterComponent);
    return PromptToLoginOrRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/travelers/search-travelers/search-travelers.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/travelers/search-travelers/search-travelers.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelers/search-travelers/search-travelers.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/travelers/search-travelers/search-travelers.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <input placeholder=\"email\"\n         name=\"email\"\n         type=\"text\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"searchTerm\"/>\n  <a class=\"btn btn-primary btn-block\"\n     (click)=\"findUser()\" type=\"submit\">Find User</a>\n</form>\n<div *ngIf=\"userSearched\">\n  <div *ngIf=\"firstNameExists\">\n    First Name: {{travelerSearchedFor.firstName}}\n  </div>\n  <div *ngIf=\"lastNameExists\">\n    Last Name: {{travelerSearchedFor.lastName}}\n  </div>\n  Email: {{travelerSearchedFor.email}}\n  <br>\n  <div *ngIf=\"canAddToEvent\">\n    <a class=\"btn btn-primary aj-button-margin\" (click)=\"addUserToEvent()\">Add to event</a>\n  </div>\n  <a class=\"btn btn-primary aj-button-margin\" (click)=\"follow(travelerSearchedFor['_id'])\">Follow</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/travelers/search-travelers/search-travelers.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/travelers/search-travelers/search-travelers.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchTravelersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTravelersComponent", function() { return SearchTravelersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchTravelersComponent = /** @class */ (function () {
    function SearchTravelersComponent(travelerService, eventService, sharedService, router, activatedRoute) {
        this.travelerService = travelerService;
        this.eventService = eventService;
        this.sharedService = sharedService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SearchTravelersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSearched = false;
        this.canAddToEvent = false;
        this.firstNameExists = false;
        this.lastNameExists = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['eventId']) {
                _this.eventService.findEventById(params['eventId']).subscribe(function (event) {
                    _this.event = event;
                });
            }
        });
    };
    SearchTravelersComponent.prototype.findUser = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.searchTerm).subscribe(function (traveler) {
            _this.travelerSearchedFor = traveler;
            if (traveler) {
                if (_this.travelerSearchedFor['firstName']) {
                    _this.firstNameExists = true;
                }
                if (_this.travelerSearchedFor['lastName']) {
                    _this.lastNameExists = true;
                }
                _this.userSearched = true;
                if (_this.event) {
                    _this.canAddToEvent = true;
                }
            }
        });
    };
    SearchTravelersComponent.prototype.addUserToEvent = function () {
        this.eventService.addTravelerToEvent(this.travelerSearchedFor['_id'], this.event['_id']).subscribe(function (event) {
            window.location.reload();
        });
    };
    SearchTravelersComponent.prototype.follow = function (personToFollow) {
        this.travelerService.follow(this.sharedService.user['_id'], personToFollow)
            .subscribe(function (traveler) {
            window.location.reload();
        });
    };
    SearchTravelersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-travelers',
            template: __webpack_require__(/*! ./search-travelers.component.html */ "./src/app/components/travelers/search-travelers/search-travelers.component.html"),
            styles: [__webpack_require__(/*! ./search-travelers.component.css */ "./src/app/components/travelers/search-travelers/search-travelers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchTravelersComponent);
    return SearchTravelersComponent;
}());



/***/ }),

/***/ "./src/app/components/travelers/view-following/view-following.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/travelers/view-following/view-following.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelers/view-following/view-following.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/travelers/view-following/view-following.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Following</h3>\n  </div>\n\n  <div class=\"list-group-item\" *ngFor=\"let anotherTraveler of followingUsers\">\n    {{anotherTraveler['firstName']}} {{anotherTraveler['lastName']}}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/travelers/view-following/view-following.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/travelers/view-following/view-following.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFollowingComponent", function() { return ViewFollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewFollowingComponent = /** @class */ (function () {
    function ViewFollowingComponent(travelerService, sharedService) {
        this.travelerService = travelerService;
        this.sharedService = sharedService;
        this.followingUsers = [];
    }
    ViewFollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.traveler = this.sharedService.user;
        this.following = this.traveler['following'];
        if (this.following) {
            for (var i = 0; i < this.following.length; i++) {
                this.travelerService.findTravelerById(this.following[i])
                    .subscribe(function (traveler) {
                    _this.followingUsers.push(traveler);
                });
            }
        }
    };
    ViewFollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-following',
            template: __webpack_require__(/*! ./view-following.component.html */ "./src/app/components/travelers/view-following/view-following.component.html"),
            styles: [__webpack_require__(/*! ./view-following.component.css */ "./src/app/components/travelers/view-following/view-following.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ViewFollowingComponent);
    return ViewFollowingComponent;
}());



/***/ }),

/***/ "./src/app/components/travelers/view-travelers/view-travelers.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/travelers/view-travelers/view-travelers.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelers/view-travelers/view-travelers.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/travelers/view-travelers/view-travelers.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/traveler']\">\n        <span class=\"glyphicon glyphicon-chevron-left glyphicon-nav header-main-text-color\"></span>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-header pull-left\">\n\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/event', 'new']\">\n        <span class=\"glyphicon glyphicon-plus navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"main-body-content\">\n  <ul class=\"list-group\">\n\n    Click a traveler to see their events\n    <li class=\"list-group-item\" *ngFor=\"let anotherTraveler of travelers\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-11\">\n\n\n          <a [routerLink]=\"['/event-list', anotherTraveler['_id']]\">FirstName: {{anotherTraveler['firstName']}}</a> ||\n          <a (click)=\"follow(anotherTraveler['_id'])\">Follow</a>\n        </div>\n        <div class=\"col-xs-3 col-sm-1 website-list-icon website-page-icons\">\n\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-fixed-bottom header-footer-blue-steel\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/traveler']\" class=\"nav-hover\">\n        <span class=\"glyphicon glyphicon-user navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<!-- End Footer-->\n"

/***/ }),

/***/ "./src/app/components/travelers/view-travelers/view-travelers.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/travelers/view-travelers/view-travelers.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewTravelersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTravelersComponent", function() { return ViewTravelersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTravelersComponent = /** @class */ (function () {
    function ViewTravelersComponent(travelerService, sharedService) {
        this.travelerService = travelerService;
        this.sharedService = sharedService;
    }
    ViewTravelersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.travelerService.findAllTravelers()
            .subscribe(function (travelers) {
            _this.travelers = travelers;
        });
        this.travelerId = this.sharedService.user['_id'];
    };
    ViewTravelersComponent.prototype.follow = function (personToFollow) {
        this.travelerService.follow(this.travelerId, personToFollow)
            .subscribe(function (traveler) {
        });
    };
    ViewTravelersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-travelers',
            template: __webpack_require__(/*! ./view-travelers.component.html */ "./src/app/components/travelers/view-travelers/view-travelers.component.html"),
            styles: [__webpack_require__(/*! ./view-travelers.component.css */ "./src/app/components/travelers/view-travelers/view-travelers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ViewTravelersComponent);
    return ViewTravelersComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content login-image aj-full-page\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form>\n    <input placeholder=\"email\"\n           name=\"email\"\n           type=\"text\"\n           class=\"form-control\"\n           required\n           [(ngModel)]=\"email\"/>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"password\"\n           required/>\n\n    <button class=\"btn btn-primary btn-block\" (click)=\"login(email, password)\"\n            type=\"submit\">Login!\n    </button>\n  </form>\n  <button class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\"\n          type=\"submit\">Register\n  </button>\n\n  <button class=\"btn btn-success btn-block\" [routerLink]=\"['/main']\"\n          type=\"submit\">Continue without logging in...\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
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
    function LoginComponent(travelerService, router, sharedService) {
        this.travelerService = travelerService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid email or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.email = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.email = email;
        this.password = password;
        if (this.email === '' || this.password === '') {
            this.errorFlag = true;
        }
        else {
            this.travelerService.login(this.email, this.password)
                .subscribe(function (traveler) {
                _this.sharedService.user = traveler;
                if (_this.sharedService.user['role'] === 'MARKETER') {
                    _this.router.navigate(['/marketer']);
                }
                else if (_this.sharedService.user['role'] === 'ADMIN') {
                    _this.router.navigate(['/admin']);
                }
                else {
                    _this.router.navigate(['/event-list']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_2__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/main/main.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/user/main/main.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/main/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/user/main/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Welcome {{user['firstName']}}!</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container main-content\">\n  <span *ngIf=\"!loggedIn\">\n    <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/login']\"\n            type=\"submit\">Login\n    </button>\n    <button class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\"\n            type=\"submit\">Register\n    </button>\n  </span>\n\n  <span *ngIf=\"loggedIn\">\n    <app-event-list></app-event-list>\n    <app-view-following></app-view-following>\n    <app-search-travelers></app-search-travelers>\n  </span>\n  <span *ngIf=\"!loggedIn\">\n    <app-event-browse></app-event-browse>\n  </span>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/user/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(activatedRoute, router, sharedService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
        this.user = this.sharedService.user;
        if (this.sharedService.user['_id']) {
            this.loggedIn = true;
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/user/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/user/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid header-footer-blue-steel\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateTraveler()\" class=\"\">\n        <span class=\"glyphicon glyphicon-ok navbar-link\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<div class=\"container main-content\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"email\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n             />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input [(ngModel)]=\"phone\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"phone\"\n             name=\"phone\"\n      />\n    </div>\n  </form>\n  <div *ngIf=\"isTraveler\">\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]=\"['/event-list']\">View Your Events</a>\n  </div>\n\n  <div *ngIf=\"isMarketer\">\n    <a class=\"btn btn-primary btn-block\"\n       [routerLink]=\"['/marketer']\">View Your Promotions</a>\n  </div>\n  <p>\n    <strong>Manage Account:</strong>\n  </p>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"logout()\">Logout</a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteTraveler()\">Delete Account</a>\n<br>\n  <p class=\"pull-right\">Member since {{monthJoined}} / {{yearJoined}}</p>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
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
    function ProfileComponent(travelerService, activatedRoute, router, sharedService) {
        this.travelerService = travelerService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.traveler = {};
        this.errorMsg = 'Someone else is already registered with that email.';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.isMarketer = false;
        this.isTraveler = false;
        this.traveler = this.sharedService.user;
        this.travelerId = this.traveler['_id'];
        this.email = this.traveler['email'];
        this.firstName = this.traveler['firstName'];
        this.lastName = this.traveler['lastName'];
        this.phone = this.traveler['phone'];
        this.dateCreated = new Date(this.traveler['dateCreated']);
        this.monthJoined = this.dateCreated.getMonth();
        this.yearJoined = this.dateCreated.getFullYear();
        if (this.sharedService.user['role'] == 'MARKETER') {
            this.isMarketer = true;
        }
        if (this.sharedService.user['role'] == 'TRAVELER') {
            this.isTraveler = true;
        }
    };
    ProfileComponent.prototype.updateTraveler = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.email).subscribe(function (traveler) {
            if ((traveler) && (traveler.email !== _this.sharedService.user['email'])) {
                _this.errorFlag = true;
            }
            else {
                _this.sharedService.user['email'] = _this.email;
                _this.sharedService.user['firstName'] = _this.firstName;
                _this.sharedService.user['lastName'] = _this.lastName;
                _this.sharedService.user['phone'] = _this.phone;
                _this.travelerService.updateTraveler(_this.sharedService.user['_id'], _this.sharedService.user).subscribe(function (theTraveler) {
                });
            }
        });
    };
    ProfileComponent.prototype.deleteTraveler = function () {
        var _this = this;
        this.travelerService.deleteTraveler(this.sharedService.user).subscribe(function (theTraveler) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.travelerService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <input placeholder=\"email\"\n         name=\"email\"\n         type=\"text\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"email\"/>\n  <input name=\"password\"\n         type=\"password\"\n         class=\"form-control\"\n         placeholder=\"password\"\n         required\n         [(ngModel)]=\"password\"/>\n  <input name=\"vpassword\"\n         type=\"password\"\n         placeholder=\"verify password\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"vpassword\"/>\n  <input name=\"userType\"\n         id=\"traveler\"\n         value=\"traveler\"\n         type=\"radio\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"userType\"/>\n  <label for=\"traveler\">Traveler</label>\n\n  <input name=\"userType\"\n         id=\"marketer\"\n         value=\"marketer\"\n         type=\"radio\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"userType\"/>\n  <label for=\"marketer\">Marketer</label>\n\n  <div [ngSwitch]=\"userType\">\n    <div *ngSwitchCase=\"'traveler'\">\n      <a class=\"btn btn-primary btn-block\"\n         (click)=\"register()\">Register as Traveler</a>\n    </div>\n    <div *ngSwitchCase=\"'marketer'\">\n      <a class=\"btn btn-primary btn-block\"\n         (click)=\"registerAsMarketer()\">Register as Marketer</a>\n    </div>\n  </div>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\">Cancel</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
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
    function RegisterComponent(travelerService, router, sharedService) {
        this.travelerService = travelerService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.email = '';
        this.password = '';
        this.vpassword = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.email).subscribe(function (traveler) {
            _this.anExistingTraveler = traveler;
            if (_this.anExistingTraveler !== null) {
                _this.errorFlag = true;
            }
            else if (_this.password === '' || _this.email === '') {
                _this.errorFlag = true;
            }
            else if (_this.password !== _this.vpassword) {
                _this.errorFlag = true;
            }
            else {
                _this.travelerService.register(_this.email, _this.password).subscribe(function (aTraveler) {
                    _this.sharedService.user = aTraveler;
                    _this.router.navigate(['/traveler']);
                });
            }
        });
    };
    RegisterComponent.prototype.registerAsMarketer = function () {
        var _this = this;
        this.travelerService.findTravelerByEmail(this.email).subscribe(function (traveler) {
            _this.anExistingTraveler = traveler;
            if (_this.anExistingTraveler !== null) {
                _this.errorFlag = true;
            }
            else if (_this.password === '' || _this.email === '') {
                _this.errorFlag = true;
            }
            else if (_this.password !== _this.vpassword) {
                _this.errorFlag = true;
            }
            else {
                _this.travelerService.register(_this.email, _this.password).subscribe(function (aTraveler) {
                    _this.sharedService.user = aTraveler;
                    _this.sharedService.user['role'] = 'MARKETER';
                    _this.travelerService.updateTraveler(_this.sharedService.user['_id'], _this.sharedService.user)
                        .subscribe(function (aMarketer) {
                        _this.router.navigate(['/marketer']);
                    });
                });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/activities.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/activities.service.client.ts ***!
  \*******************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivitiesService = /** @class */ (function () {
    function ActivitiesService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    ActivitiesService.prototype.createActivity = function (eventId, activity) {
        var url = this.baseUrl + '/api/activity/' + eventId + '/newActivity';
        return this.http.post(url, activity).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.findAllActivitiesForEvent = function (eventId) {
        var _this = this;
        var url = this.baseUrl + '/api/activity/' + eventId + '/allActivities';
        var activities = [];
        return this.http.get(url).map(function (response) {
            for (var i = 0; i < response.json().length; i++) {
                var url2 = _this.baseUrl + '/api/activity/' + response.json()[i];
                _this.http.get(url2).subscribe(function (response2) {
                    activities.push(response2.json());
                });
            }
            return activities;
        });
    };
    ActivitiesService.prototype.findActivityById = function (activityId) {
        var url = this.baseUrl + '/api/activity/' + activityId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.findAllActivities = function () {
        var url = this.baseUrl + '/api/activity/findAllActivities';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.addSuggestion = function (activityId, suggestion) {
        var url = this.baseUrl + '/api/suggestion/' + activityId;
        return this.http.post(url, suggestion).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.findAllSuggestionsForActivity = function (activityId) {
        var url = this.baseUrl + '/api/activity/' + activityId;
        return this.http.get(url).map(function (response) {
            return response.json().activitySuggestions;
        });
    };
    ActivitiesService.prototype.upVote = function (travelerId, suggestionId) {
        var url = this.baseUrl + '/api/suggestion/upvote/' + suggestionId + '/' + travelerId;
        return this.http.post(url, suggestionId).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.unVote = function (travelerId, suggestionId) {
        var url = this.baseUrl + '/api/suggestion/unvote/' + suggestionId + '/' + travelerId;
        return this.http.post(url, suggestionId).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.markAsDecided = function (activityId, suggestionId) {
        var url = this.baseUrl + '/api/activity/' + activityId + '/markDecision/' + suggestionId;
        return this.http.post(url, suggestionId).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.updateActivity = function (activityId, activity) {
        var url = this.baseUrl + '/api/activity/' + activityId;
        return this.http.put(url, activity).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService.prototype.deleteActivity = function (activityId) {
        var url = this.baseUrl + '/api/activity/' + activityId;
        return this.http.delete(url, activityId).map(function (response) {
            return response.json();
        });
    };
    ActivitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ActivitiesService);
    return ActivitiesService;
}());



/***/ }),

/***/ "./src/app/services/admin.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/admin.service.client.ts ***!
  \**************************************************/
/*! exports provided: AdminServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceClient", function() { return AdminServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler.service.client */ "./src/app/services/traveler.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminServiceClient = /** @class */ (function () {
    function AdminServiceClient(travelerService) {
        this.travelerService = travelerService;
    }
    AdminServiceClient.prototype.canActivate = function () {
        return this.travelerService.isAdmin();
    };
    AdminServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"]])
    ], AdminServiceClient);
    return AdminServiceClient;
}());



/***/ }),

/***/ "./src/app/services/all-users-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/all-users-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AllUsersGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersGuardService", function() { return AllUsersGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _traveler_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllUsersGuardService = /** @class */ (function () {
    function AllUsersGuardService(travelerService, router, sharedService) {
        this.travelerService = travelerService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AllUsersGuardService.prototype.canActivate = function () {
        return this.travelerService.loggedIn();
    };
    AllUsersGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_traveler_service_client__WEBPACK_IMPORTED_MODULE_2__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], AllUsersGuardService);
    return AllUsersGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _traveler_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
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
    function AuthGuard(travelerService, router, sharedService) {
        this.travelerService = travelerService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AuthGuard.prototype.canActivate = function () {
        return (this.travelerService.loggedIn()
            && this.travelerService.isTraveler());
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_traveler_service_client__WEBPACK_IMPORTED_MODULE_2__["TravelerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/event.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/event.service.client.ts ***!
  \**************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    EventService.prototype.createEvent = function (travelerId, event) {
        var url = this.baseUrl + '/api/event/' + travelerId + '/newevent';
        return this.http.post(url, event).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.findAllEvents = function () {
        var url = this.baseUrl + '/api/event/findAllEvents';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.findAllEventsForTraveler = function (travelerId) {
        var url = this.baseUrl + '/api/traveler/' + travelerId + '/event';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.findEventById = function (eventId) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.updateEvent = function (eventId, event) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.put(url, event).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.deleteEvent = function (eventId) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.delete(url, eventId).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.removeTravelerFromEvent = function (travelerId, eventId) {
        var url = this.baseUrl + '/api/event/' + eventId + '/' + travelerId;
        return this.http.delete(url, eventId).map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.addTravelerToEvent = function (travelerId, eventId) {
        var url = this.baseUrl + '/api/event/addTraveler/' + eventId + '/' + travelerId;
        return this.http.post(url, event).map(function (response) {
            return response.json();
        });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/marketer.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/marketer.service.client.ts ***!
  \*****************************************************/
/*! exports provided: MarketerServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketerServiceClient", function() { return MarketerServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _traveler_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler.service.client */ "./src/app/services/traveler.service.client.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketerServiceClient = /** @class */ (function () {
    function MarketerServiceClient(travelerService, sharedService) {
        this.travelerService = travelerService;
        this.sharedService = sharedService;
    }
    MarketerServiceClient.prototype.canActivate = function () {
        return (this.travelerService.loggedIn()
            && this.travelerService.isMarketer());
    };
    MarketerServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_traveler_service_client__WEBPACK_IMPORTED_MODULE_1__["TravelerService"],
            _shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], MarketerServiceClient);
    return MarketerServiceClient;
}());



/***/ }),

/***/ "./src/app/services/place.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/place.service.client.ts ***!
  \**************************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PlaceService.prototype.placesAutoComplete = function (searchTerm) {
        var url = this.baseUrl + '/api/places/placesAutoComplete/' + searchTerm;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    PlaceService.prototype.moreDetails = function (placeid) {
        var url = this.baseUrl + '/api/places/details/' + placeid;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.client.ts":
/*!******************************************************!*\
  !*** ./src/app/services/promotion.service.client.ts ***!
  \******************************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromotionService = /** @class */ (function () {
    function PromotionService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PromotionService.prototype.createPromotion = function (travelerId, promotion) {
        var url = this.baseUrl + '/api/promotion/' + travelerId + '/newPromotion';
        return this.http.post(url, promotion).map(function (response) {
            console.log('back from server');
            console.log(response.json());
            return response.json();
        });
    };
    PromotionService.prototype.findPromotionById = function (promotionId) {
        var url = this.baseUrl + '/api/promotion/' + promotionId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    PromotionService.prototype.updatePromotion = function (promotion) {
        var url = this.baseUrl + '/api/promotion/update';
        return this.http.put(url, promotion).map(function (response) {
            return response.json();
        });
    };
    PromotionService.prototype.deletePromotion = function (promotionId, travelerId) {
        var url = this.baseUrl + '/api/promotion/delete/' + promotionId + '/' + travelerId;
        return this.http.delete(url, promotionId).map(function (response) {
            return response.json();
        });
    };
    PromotionService.prototype.deployPromotion = function (promotionId, promotion) {
        var url = this.baseUrl + '/api/promotion/deploy/' + promotionId;
        return this.http.put(url, promotion).map(function (response) {
            return response.json();
        });
    };
    PromotionService.prototype.removePromotionForMe = function (activityId, promotionId) {
        var url = this.baseUrl + '/api/promotion/deleteOne/' + promotionId + '/' + activityId;
        return this.http.delete(url, promotionId).map(function (response) {
            return response.json();
        });
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = {};
    }
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/suggestion.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/suggestion.service.client.ts ***!
  \*******************************************************/
/*! exports provided: SuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionService", function() { return SuggestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuggestionService = /** @class */ (function () {
    function SuggestionService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    SuggestionService.prototype.findSuggestionById = function (suggestionId) {
        var url = this.baseUrl + '/api/suggestion/' + suggestionId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    SuggestionService.prototype.updateSuggestion = function (suggestionId, suggestion) {
        var url = this.baseUrl + '/api/suggestion/' + suggestionId;
        return this.http.put(url, suggestion).map(function (response) {
            return response.json();
        });
    };
    SuggestionService.prototype.deleteSuggestion = function (activityId, suggestionId) {
        var url = this.baseUrl + '/api/suggestion/' + activityId + '/' + suggestionId;
        return this.http.delete(url, suggestionId).map(function (response) {
            return response.json();
        });
    };
    SuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SuggestionService);
    return SuggestionService;
}());



/***/ }),

/***/ "./src/app/services/test.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/test.service.client.ts ***!
  \*************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = /** @class */ (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/traveler.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/traveler.service.client.ts ***!
  \*****************************************************/
/*! exports provided: TravelerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelerService", function() { return TravelerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TravelerService = /** @class */ (function () {
    function TravelerService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    TravelerService.prototype.register = function (email, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            email: email,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.login = function (email, password) {
        this.options.withCredentials = true;
        var url = this.baseUrl + '/api/login';
        var credentials = {
            email: email,
            password: password
        };
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    TravelerService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    TravelerService.prototype.findTravelerByCredentials = function (email, password) {
        var url = this.baseUrl + '/api/traveler?email=' + email + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.findAllTravelers = function () {
        var url = this.baseUrl + '/api/traveler/all';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.createTraveler = function (traveler) {
        var url = this.baseUrl + '/api/traveler/';
        return this.http.post(url, traveler).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.findAllEventsForTraveler = function (travelerId) {
        var _this = this;
        var url = this.baseUrl + '/api/traveler/' + travelerId + '/event';
        var events = [];
        // Get the traveler
        return this.http.get(url).map(function (response) {
            // For each event in the traveler's profile, send another HTTP request to get the event details.
            for (var i = 0; i < response.json().length; i++) {
                var url2 = _this.baseUrl + '/api/event/' + response.json()[i];
                _this.http.get(url2).subscribe(function (response2) {
                    events.push(response2.json());
                });
            }
            return events;
        });
    };
    TravelerService.prototype.findTravelerById = function (travelerId) {
        var url = this.baseUrl + '/api/traveler/' + travelerId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.findTravelerByEmail = function (email) {
        var url = this.baseUrl + '/api/traveler?email=' + email;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.follow = function (travelerId, personToFollow) {
        var url = this.baseUrl + '/api/traveler/' + travelerId + '/follow/' + personToFollow;
        return this.http.post(url, personToFollow).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.updateTraveler = function (travelerId, traveler) {
        var url = this.baseUrl + '/api/traveler/' + travelerId;
        return this.http.put(url, traveler).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.deleteTraveler = function (traveler) {
        var url = this.baseUrl + '/api/traveler/' + traveler._id;
        return this.http.delete(url, traveler).map(function (response) {
            return response.json();
        });
    };
    TravelerService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.baseUrl + '/api/admin/isAdmin';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    TravelerService.prototype.isMarketer = function () {
        var _this = this;
        var url = this.baseUrl + '/api/traveler/isMarketer';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    TravelerService.prototype.isTraveler = function () {
        var _this = this;
        var url = this.baseUrl + '/api/traveler/isTraveler';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    TravelerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TravelerService);
    return TravelerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (user) {
        var url = this.baseUrl + '/api/user/' + user._id;
        return this.http.delete(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aj/code/travelcord/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map