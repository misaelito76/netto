(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./src/$$_lazy_route_resource lazy recursive":
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

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
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

            /***/
        }),

        /***/
        "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.css":
        /*!*********************************************************************************!*\
          !*** ./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.css ***!
          \*********************************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FETUlOL2FkbWluLXVwZGF0ZS1zY2hlZHVsZS9hZG1pbi11cGRhdGUtc2NoZWR1bGUuY29tcG9uZW50LmNzcyJ9 */"

            /***/
        }),

        /***/
        "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.html":
        /*!**********************************************************************************!*\
          !*** ./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.html ***!
          \**********************************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<!-- Top navigation -->\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-sm col-md-0 mr-0\" routerLink=\"/\">\n        <span class=\"user-image\" style=\"background-image: url('assets/Netto.png')\"></span>Netto\n    </a>\n\n    <a class=\"nav-item text-white\" style=\"padding-right: .90rem\" routerLink=\"/login\" *ngIf=\"isLogin\">\n        <span>Login</span>\n    </a>\n    <a class=\"nav-item \" *ngIf=\"!isLogin\">\n        <a class=\"nav-link text-white\" (click)=\"goBack()\">Back</a>\n    </a>\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n\n\n    </div>\n\n\n</nav>\n\n\n\n\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav style=\"background-color:black\" class=\"col-md-2 d-md-block  sidebar text-white\">\n            <div class=\"sidebar-sticky\">\n                <ul class=\"nav flex-column\">\n\n\n                    <!-- routerLink=\"/view-students\" to navigate to view-students component -->\n                    <!-- routerLinkActive=\"active\" activates active class for component-->\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white\" routerLink=\"/admin-list\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-list-ul\"></i>My schedule\n                        </a>\n                    </li>\n\n                    <!-- routerLink=\"/update-schedule\" to navigate to view-students component -->\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white\" routerLink=\"/\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-plus\"></i>Update\n                        </a>\n                    </li>\n\n                    <!-- routerLink=\"/update-schedule\" to navigate to view-students component -->\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white\" routerLink=\"/update-schedule\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-plus\"></i>xx\n                        </a>\n                    </li>\n\n                    <!-- routerLink=\"/update-schedule\" to navigate to view-students component -->\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white\" routerLink=\"/update-schedule\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-plus\"></i>xx\n                        </a>\n                    </li>\n\n                    <!-- routerLink=\"/update-schedule\" to navigate to view-students component -->\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white\" routerLink=\"/update-schedule\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-plus\"></i>xxx\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </nav>\n        <br><br>\n\n\n\n        <div class=\"container text-center\">\n            <br><br> <br><br><br><br>\n            <h1 class=\"h2 \">Update schedule <i class=\"far fa-clipboard\"></i> </h1>\n\n            <br><br>\n            <div class=\"row justify-content-center align-items-center\">\n                <!-- Client\n                    form -->\n                <form [formGroup]=\"editForm\" (ngSubmit)=\"updateForm()\" novalidate>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Name:</b></label>\n                            <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" required>\n                            <p *ngIf=\"FirstName.touched && FirstName.invalid\" class=\"error\"><sup>*</sup>Please enter at least first name</p>\n                            <p *ngIf=\"FirstName.errors?.minlength\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Address:</b></label>\n                            <input type=\"text\" formControlName=\"Address\" class=\"form-control\" required>\n                            <p *ngIf=\"Address.touched && FirstName.invalid\" class=\"error\"><sup>*</sup>Please enter a valid Address</p>\n                            <p *ngIf=\"Address.errors?.minlength\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Date:</b></label>\n\n                            <input type=\"date\" formControlName=\"Date\" class=\"form-control text-center\" required>\n                            <p *ngIf=\"Date.touched && Date.invalid\" class=\"error\"><sup>*</sup>Please enter date</p>\n                            <p *ngIf=\"Date.errors?.minlength\" class=\"error\"><sup>*</sup>Date shouldn't be less than 2 words</p>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Time:</b></label>\n                            <input type=\"time\" formControlName=\"time\" class=\"form-control text-center\" required>\n                            <p *ngIf=\"time.touched && time.invalid\" class=\"error\"><sup>*</sup>Please enter time</p>\n                            <p *ngIf=\"time.errors?.time\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Email:</b></label>\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\n                            <p *ngIf=\"email.touched && email.invalid\" class=\"error\"><sup>*</sup>Please enter email</p>\n                            <p *ngIf=\"email.errors?.email\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\n                        </div>\n\n                        <div class=\"col-md-6 mb-3\">\n                            <label><b>Mobile:</b></label>\n                            <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-control\" required>\n                            <p *ngIf=\"mobileNumber.touched && mobileNumber.invalid\" class=\"error\"><sup>*</sup>Please provide contact number\n                            </p>\n                            <p *ngIf=\"mobileNumber.errors?.pattern\" class=\"error\"><sup>*</sup>Use numbers only number\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12 mb-4\">\n                            <label><b>Instructions:</b></label>\n                            <textarea rows=\"2\" cols=\"20\" type=\"text\" formControlName=\"Instructions\" class=\"form-control\"></textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group text-center\">\n                        <button type=\"button\" class=\"btn btn-danger gap-right\" (click)=\"ResetForm()\">Reset</button>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n                    </div>\n\n                </form>\n\n            </div>\n            <br><br><br>\n            <div class=\" text-center\">\n                <p class=\"custom-text\">A Company created for <strong>Detailed Residential and commercial cleaning</strong> Based in <strong>Montreal,Qc Canada</strong></p>\n            </div>\n        </div>\n    </div>\n</div>"

            /***/
        }),

        /***/
        "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.ts":
        /*!********************************************************************************!*\
          !*** ./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.ts ***!
          \********************************************************************************/
        /*! exports provided: AdminUpdateScheduleComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AdminUpdateScheduleComponent", function() { return AdminUpdateScheduleComponent; });
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            // ActivatedRoue is used to get the current associated components information.
            // Location service is used to go back to previous component

            var AdminUpdateScheduleComponent = /** @class */ (function() {
                function AdminUpdateScheduleComponent(crudApi, // Inject CRUD API in constructor
                    fb, // Inject Form Builder service for Reactive forms
                    location, // Location service to go back to previous component
                    actRoute, // Activated route to get the current component's inforamation
                    router, // Router service to navigate to specific component
                    toastr, // Toastr service for alert message
                    authService // Login
                ) {
                    this.crudApi = crudApi;
                    this.fb = fb;
                    this.location = location;
                    this.actRoute = actRoute;
                    this.router = router;
                    this.toastr = toastr;
                    this.authService = authService;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                AdminUpdateScheduleComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.getCurrentUser();
                            _this.updateScheduleData(); // Call updateStudentData() as soon as the component is ready 
                            var id = _this.actRoute.snapshot.paramMap.get('id'); // Getting current component's id or information using ActivatedRoute service
                            _this.crudApi.getOneclient(id).subscribe(function(data) {
                                _this.editForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
                            });
                        }
                        // Login
                        else {
                            _this.router.navigate(['login']);
                        }
                    });
                };
                AdminUpdateScheduleComponent.prototype.getCurrentUser = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        } else {
                            _this.router.navigate(['home']);
                        }
                    });
                };
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "id", {
                    get: function() {
                        return this.editForm.get('id');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "FirstName", {
                    // Accessing form control using getters
                    get: function() {
                        return this.editForm.get('FirstName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "Address", {
                    get: function() {
                        return this.editForm.get('Address');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "Date", {
                    get: function() {
                        return this.editForm.get('Date');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "email", {
                    get: function() {
                        return this.editForm.get('email');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "time", {
                    get: function() {
                        return this.editForm.get('time');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "mobileNumber", {
                    get: function() {
                        return this.editForm.get('mobileNumber');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AdminUpdateScheduleComponent.prototype, "Instructions", {
                    get: function() {
                        return this.editForm.get('Instructions');
                    },
                    enumerable: true,
                    configurable: true
                });
                // Contains Reactive Form logic
                AdminUpdateScheduleComponent.prototype.updateScheduleData = function() {
                    this.editForm = this.fb.group({
                        id: [''],
                        FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
                        Instructions: ['']
                    });
                };
                // Go back to previous component
                AdminUpdateScheduleComponent.prototype.goBack = function() {
                    this.location.back();
                };
                // Below methods fire when somebody click on submit button
                AdminUpdateScheduleComponent.prototype.updateForm = function() {
                    this.crudApi.updateclient(this.editForm.value); // Upupdate-schedule data using CRUD API
                    this.toastr.success(this.editForm.controls['FirstName'].value + ' updated successfully'); // Show succes message when data is successfully submited
                    this.router.navigate(['schedule-cleaning']); // Navigatupdate-schedule's list page update-schedule data is updated
                };
                AdminUpdateScheduleComponent.prototype.ResetForm = function() {
                    this.editForm.reset();
                };
                AdminUpdateScheduleComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: 'app-admin-update-schedule',
                        template: __webpack_require__( /*! ./admin-update-schedule.component.html */ "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.html"),
                        styles: [__webpack_require__( /*! ./admin-update-schedule.component.css */ "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] // Login
                    ])
                ], AdminUpdateScheduleComponent);
                return AdminUpdateScheduleComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/admin-list/admin-list.component.css":
        /*!*****************************************************!*\
          !*** ./src/app/admin-list/admin-list.component.css ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxpc3QvYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

            /***/
        }),

        /***/
        "./src/app/admin-list/admin-list.component.html":
        /*!******************************************************!*\
          !*** ./src/app/admin-list/admin-list.component.html ***!
          \******************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"table-list container text-center\" style=\"margin-top:10%;padding-left:10%\" *ngIf=\" isAdmin==true;else noAdmin\">\n    <div class=\"pricing-header mx-auto\">\n\n        <h1>Cleaning schedule <i class=\"far fa-clipboard\"></i> </h1>\n\n\n\n\n        <table class=\"table table-bordered table-responsive-sm table-responsive-md table-responsive-lg table-hover\">\n            <thead>\n                <tr class=\"text-center\">\n                    <th scope=\"col\">Client Id</th>\n                    <th scope=\"col\">First name</th>\n                    <th scope=\"col\">Address</th>\n                    <th scope=\"col\">Date</th>\n                    <th scope=\"col\">Time</th>\n                    <th scope=\"col\">Email</th>\n                    <th scope=\"col\">Mobile number</th>\n                    <th scope=\"col\">Instructions</th>\n                    <th class=\"text-center\" scope=\"col\">Edit</th>\n                </tr>\n            </thead>\n\n            <tbody class=\"text-center \">\n                <!-- *ngFor loop iterates over Client list array and fetch the client's data -->\n                <!-- paginate pipe will add pagination in client's list, it won't show if items are less then 7 -->\n                <tr *ngFor=\"let profile of clients | paginate: { itemsPerPage: 7, currentPage: p }; let i = index;\">\n                    <th scope=\"row\">{{profile.id}}</th>\n                    <td>{{profile.FirstName}}</td>\n                    <td>{{profile.Address}}</td>\n                    <td>{{profile.Date}}</td>\n                    <td>{{profile.time}}</td>\n                    <td>{{profile.email}}</td>\n                    <td>{{profile.mobileNumber}}</td>\n                    <td>{{profile.Instructions}}</td>\n                    <td class=\"text-center action-block\">\n                        <!-- routerLink=\"/update-schedule/{{client.$key}}\" is refered to { path: 'update-schedule/:id', component: EditclientComponent } in app-routing.moudles.ts -->\n                        <i class=\"far fa-edit\" routerLink=\"/admin-update-schedule/{{profile.id}}\"></i>\n                        <i class=\"far fa-trash-alt\" (click)=\"onDeleteclient(profile)\"></i></td>\n                </tr>\n            </tbody>\n        </table>\n\n\n        <!-- Pagination -->\n        <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\" responsive=\"true\"></pagination-controls>\n    </div>\n</div>\n\n<!--*********************************************CLIENT SIDE********************************************************************************************************-->"

            /***/
        }),

        /***/
        "./src/app/admin-list/admin-list.component.ts":
        /*!****************************************************!*\
          !*** ./src/app/admin-list/admin-list.component.ts ***!
          \****************************************************/
        /*! exports provided: AdminListComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            // CRUD API service class


            var AdminListComponent = /** @class */ (function() {
                function AdminListComponent(authService, router, crudApi, // Inject client CRUD services in constructor.
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.router = router;
                    this.crudApi = crudApi;
                    this.toastr = toastr;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                AdminListComponent.prototype.ngOnInit = function() {
                    this.getListClients();
                    this.getCurrentUser();
                };
                AdminListComponent.prototype.getCurrentUser = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.Email = auth.email;
                            _this.img = auth.photoURL;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        }
                    });
                };
                AdminListComponent.prototype.getListClients = function() {
                    var _this = this;
                    this.crudApi.getAllclients()
                        .subscribe(function(clients) {
                            _this.clients = clients;
                        });
                    this.router.navigate(['admin-list']);
                };
                AdminListComponent.prototype.onDeleteclient = function(idClient) {
                    var confirmacion = confirm('Are you sure?');
                    if (confirmacion) {
                        this.crudApi.deleteclient(idClient);
                    }
                };
                AdminListComponent.prototype.onPreUpdateclient = function(client) {
                    console.log('CLIENT', client);
                    this.crudApi.selectedClient = Object.assign({}, client);
                };
                AdminListComponent.prototype.ResetForm = function() {
                    this.clientForm.reset();
                };
                AdminListComponent.prototype.submitclientData = function() {
                    this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
                    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
                    this.ResetForm(); // Reset form when clicked on reset button
                    this.router.navigate(['admin-list']);
                };;
                AdminListComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-admin-list',
                        template: __webpack_require__( /*! ./admin-list.component.html */ "./src/app/admin-list/admin-list.component.html"),
                        styles: [__webpack_require__( /*! ./admin-list.component.css */ "./src/app/admin-list/admin-list.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] // Toastr service for alert message
                    ])
                ], AdminListComponent);
                return AdminListComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/app-routing.module.ts":
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };



            var AppRoutingModule = /** @class */ (function() {
                function AppRoutingModule() {}
                AppRoutingModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                        declarations: [],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                        ]
                    })
                ], AppRoutingModule);
                return AppRoutingModule;
            }());



            /***/
        }),

        /***/
        "./src/app/app.component.css":
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

            /***/
        }),

        /***/
        "./src/app/app.component.html":
        /*!************************************!*\
          !*** ./src/app/app.component.html ***!
          \************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n<router-outlet></router-outlet>"

            /***/
        }),

        /***/
        "./src/app/app.component.ts":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            var AppComponent = /** @class */ (function() {
                function AppComponent() {
                    this.title = 'app';
                }
                AppComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-root',
                        template: __webpack_require__( /*! ./app.component.html */ "./src/app/app.component.html"),
                        styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
                    })
                ], AppComponent);
                return AppComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/app.module.ts":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var _componentes_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./componentes_/not-found-page/not-found-page.component */ "./src/app/componentes_/not-found-page/not-found-page.component.ts");
            /* harmony import */
            var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */
            var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./guards_/auth.guard */ "./src/app/guards_/auth.guard.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _schedule_cleaning_schedule_cleaning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./schedule-cleaning/schedule-cleaning.component */ "./src/app/schedule-cleaning/schedule-cleaning.component.ts");
            /* harmony import */
            var _update_schedule_update_schedule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./update-schedule/update-schedule.component */ "./src/app/update-schedule/update-schedule.component.ts");
            /* harmony import */
            var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/fire */ "./node_modules/@angular/fire/index.js");
            /* harmony import */
            var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */
            var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! .//app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */
            var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            /* harmony import */
            var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            /* harmony import */
            var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */
            var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */
            var _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./componentes_/users/login/login.component */ "./src/app/componentes_/users/login/login.component.ts");
            /* harmony import */
            var _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./componentes_/users/register/register.component */ "./src/app/componentes_/users/register/register.component.ts");
            /* harmony import */
            var _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./admin-list/admin-list.component */ "./src/app/admin-list/admin-list.component.ts");
            /* harmony import */
            var _ADMIN_admin_update_schedule_admin_update_schedule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./ADMIN/admin-update-schedule/admin-update-schedule.component */ "./src/app/ADMIN/admin-update-schedule/admin-update-schedule.component.ts");
            /* harmony import */
            var _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./componentes_/users/profile/profile.component */ "./src/app/componentes_/users/profile/profile.component.ts");
            /* harmony import */
            var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
            /* harmony import */
            var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
            /* harmony import */
            var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
            /* harmony import */
            var _my_schedule_my_schedule_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./my-schedule/my-schedule.component */ "./src/app/my-schedule/my-schedule.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
































            var routes = [
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
                { path: 'register', component: _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"] },
                { path: 'login', component: _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
                { path: 'schedule-cleaning', component: _schedule_cleaning_schedule_cleaning_component__WEBPACK_IMPORTED_MODULE_10__["AddClientComponent"] },
                { path: 'my-schedule', component: _my_schedule_my_schedule_component__WEBPACK_IMPORTED_MODULE_29__["MyScheduleComponent"] },
                { path: 'profile', component: _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"] },
                { path: 'admin-list', component: _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_23__["AdminListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'admin-update-schedule/:id', component: _ADMIN_admin_update_schedule_admin_update_schedule_component__WEBPACK_IMPORTED_MODULE_24__["AdminUpdateScheduleComponent"] },
                { path: '**', component: _componentes_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"] }
            ];
            // Import RouterModule and inject routes array in it and dont forget to export the RouterModule
            var AppModule = /** @class */ (function() {
                function AppModule() {}
                AppModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                            _schedule_cleaning_schedule_cleaning_component__WEBPACK_IMPORTED_MODULE_10__["AddClientComponent"],
                            _update_schedule_update_schedule_component__WEBPACK_IMPORTED_MODULE_11__["UpdateScheduleComponent"],
                            _admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_23__["AdminListComponent"],
                            _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                            _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                            _componentes_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"],
                            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                            _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
                            _ADMIN_admin_update_schedule_admin_update_schedule_component__WEBPACK_IMPORTED_MODULE_24__["AdminUpdateScheduleComponent"],
                            _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
                            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_28__["NavBarComponent"],
                            _my_schedule_my_schedule_component__WEBPACK_IMPORTED_MODULE_29__["MyScheduleComponent"],
                        ],
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                            _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"],
                            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
                            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot({
                                timeOut: 3000,
                                positionClass: 'toast-bottom-right',
                                preventDuplicates: true,
                            }),
                            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"] // NGX pagination module
                        ],
                        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestore"]],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
                    })
                ], AppModule);
                return AppModule;
            }());



            /***/
        }),

        /***/
        "./src/app/componentes_/not-found-page/not-found-page.component.html":
        /*!***************************************************************************!*\
          !*** ./src/app/componentes_/not-found-page/not-found-page.component.html ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"container-fluid mt-6\">\r\n    <div class=\"col-md-6 mx-auto text-center\">\r\n        <div class=\"card\">\r\n            <h1>Oops!</h1>\r\n            <h2>Someone needs to go now!</h2>\r\n            <div class=\"card-body\">\r\n                <img src=\"assets/404.gif\" class=\"preloader-icon\" alt=\"assets/preloader.gif\">\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <a routerLink=\"/\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-home\"></i> Back home</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

            /***/
        }),

        /***/
        "./src/app/componentes_/not-found-page/not-found-page.component.scss":
        /*!***************************************************************************!*\
          !*** ./src/app/componentes_/not-found-page/not-found-page.component.scss ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzXy9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

            /***/
        }),

        /***/
        "./src/app/componentes_/not-found-page/not-found-page.component.ts":
        /*!*************************************************************************!*\
          !*** ./src/app/componentes_/not-found-page/not-found-page.component.ts ***!
          \*************************************************************************/
        /*! exports provided: NotFoundPageComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var NotFoundPageComponent = /** @class */ (function() {
                function NotFoundPageComponent() {}
                NotFoundPageComponent.prototype.ngOnInit = function() {};
                NotFoundPageComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-not-found-page',
                        template: __webpack_require__( /*! ./not-found-page.component.html */ "./src/app/componentes_/not-found-page/not-found-page.component.html"),
                        styles: [__webpack_require__( /*! ./not-found-page.component.scss */ "./src/app/componentes_/not-found-page/not-found-page.component.scss")]
                    }),
                    __metadata("design:paramtypes", [])
                ], NotFoundPageComponent);
                return NotFoundPageComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/componentes_/users/login/login.component.css":
        /*!**************************************************************!*\
          !*** ./src/app/componentes_/users/login/login.component.css ***!
          \**************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ".form-control.login-user {\r\n  border: 0 solid #fff !important;\r\n}\r\n.btn-social{\r\n  position: relative;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: #fff;\r\n  border-color: rgba(0,0,0,0.2);\r\n}\r\n.btn-facebook{\r\n  background: #3b5998;\r\n}\r\n.btn-google{\r\n  background: #dd4b39;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXNfL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7Q0FDakM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLDhCQUE4QjtDQUMvQjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlc18vdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXNvY2lhbHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9va3tcclxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcbi5idG4tZ29vZ2xle1xyXG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuIl19 */"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/login/login.component.html":
        /*!***************************************************************!*\
          !*** ./src/app/componentes_/users/login/login.component.html ***!
          \***************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<section id=\"login\" class=\"mb-5 mt-5\">\r\n    <div class=\"container\">\r\n        <br><br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n                <div class=\"card_login\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\r\n                                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                                    Something is wrong!\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n                                    <p *ngIf=\"email.touched && email.invalid\" class=\"error\"><sup>*</sup>Please enter an email Address</p>\r\n                                    <p *ngIf=\"email.errors?.minlength\" class=\"error\"><sup>*</sup> Email shouldn't be less than 2 words</p>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\r\n                                <div class=\"form-group\">\r\n                                    <a routerLink=\"/register\" class=\"form-control login-user\">Are you new ?</a>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\r\n                    <span class=\"fab fa-facebook\"></span>\r\n                    FACEBOOK\r\n                  </button>\r\n                                    <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\r\n                    <span class=\"fab fa-google\"></span>\r\n                    GOOGLE\r\n                  </button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/login/login.component.ts":
        /*!*************************************************************!*\
          !*** ./src/app/componentes_/users/login/login.component.ts ***!
          \*************************************************************/
        /*! exports provided: LoginComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };





            var LoginComponent = /** @class */ (function() {
                function LoginComponent(afAuth, router, authService) {
                    this.afAuth = afAuth;
                    this.router = router;
                    this.authService = authService;
                    this.email = '';
                    this.password = '';
                }
                LoginComponent.prototype.ngOnInit = function() {};
                LoginComponent.prototype.clientsForm = function() {
                    this.clientForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                    });
                };
                LoginComponent.prototype.onLogin = function() {
                    var _this = this;
                    this.authService.loginEmailUser(this.email, this.password)
                        .then(function(res) {
                            _this.onLoginRedirect();
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLoginGoogle = function() {
                    var _this = this;
                    this.authService.loginGoogleUser()
                        .then(function(res) {
                            _this.onLoginRedirect();
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLoginFacebook = function() {
                    var _this = this;
                    this.authService.loginFacebookUser()
                        .then(function(res) {
                            _this.onLoginRedirect();
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLoginRedirect = function() {
                    this.router.navigate(['home']);
                };
                LoginComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-login',
                        template: __webpack_require__( /*! ./login.component.html */ "./src/app/componentes_/users/login/login.component.html"),
                        styles: [__webpack_require__( /*! ./login.component.css */ "./src/app/componentes_/users/login/login.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
                ], LoginComponent);
                return LoginComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/componentes_/users/profile/profile.component.css":
        /*!******************************************************************!*\
          !*** ./src/app/componentes_/users/profile/profile.component.css ***!
          \******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ".main-section {\r\n  border: 1px solid #007bff;\r\n  background: #fff;\r\n}\r\n.profile-header {\r\n  background: #007bff;\r\n  height: 150px;\r\n}\r\n.user-detail {\r\n  margin: -50px 0 30px 0;\r\n}\r\nimg {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n.user-details h5 {\r\n  margin: 15px 0 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXNfL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlc18vdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWN0aW9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnByb2ZpbGUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnVzZXItZGV0YWlsIHtcclxuICBtYXJnaW46IC01MHB4IDAgMzBweCAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi51c2VyLWRldGFpbHMgaDUge1xyXG4gIG1hcmdpbjogMTVweCAwIDVweCAwO1xyXG59Il19 */"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/profile/profile.component.html":
        /*!*******************************************************************!*\
          !*** ./src/app/componentes_/users/profile/profile.component.html ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"jumbotron mt-3\">\r\n    <section id=\"profile\" class=\"container\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-12 \">\r\n                        <br>\r\n                        <h1>My schedule <i class=\"far fa-clipboard \"></i></h1>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row user-details\">\r\n                    <div class=\"col-12\">\r\n                        <img src=\"{{img}} \" class=\"rounded-circle img-thumbnail w-25 \" alt=\"profile \">\r\n                        <h5 *ngIf=\"providerId != 'password'\"> {{Email}}</h5>\r\n                        <p>\r\n\r\n                        </p>\r\n\r\n                        <hr>\r\n\r\n\r\n                        <div class=\"card\">\r\n                            <br>\r\n                            <div class=\"card-title\">\r\n\r\n                                <h4>Set Cleaning task</h4>\r\n\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <span>Hit <u><b>Create</b></u> to set date&time, Address and instructions for cleaning you place,\r\n                                         and hit <u><b>My orders</b></u> to check, update or delete the task</span>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <p>\r\n                                    <a href=\"https://www.facebook.com/Sunny-Hostals-261669591256712/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\r\n                                    <a href=\"https://www.instagram.com/misael_jr76/\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i>\r\n                                                </a>\r\n                                    <a href=\"https://twitter.com/Sunnyhostals1\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i>\r\n                                                </a>\r\n                                </p>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <br>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n</div>"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/profile/profile.component.ts":
        /*!*****************************************************************!*\
          !*** ./src/app/componentes_/users/profile/profile.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ProfileComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            // CRUD API service class


            var ProfileComponent = /** @class */ (function() {
                function ProfileComponent(authService, router, crudApi, // Inject client CRUD services in constructor.
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.router = router;
                    this.crudApi = crudApi;
                    this.toastr = toastr;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                ProfileComponent.prototype.ngOnInit = function() {
                    this.getListClients();
                    this.getCurrentUser();
                };
                ProfileComponent.prototype.getCurrentUser = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.Email = auth.email;
                            _this.img = auth.photoURL;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        }
                    });
                };
                ProfileComponent.prototype.getListClients = function() {
                    var _this = this;
                    this.crudApi.getAllclients()
                        .subscribe(function(clients) {
                            _this.clients = clients;
                        });
                    this.router.navigate(['profile']);
                };
                ProfileComponent.prototype.onDeleteclient = function(idClient) {
                    var confirmacion = confirm('Are you sure?');
                    if (confirmacion) {
                        this.crudApi.deleteclient(idClient);
                    }
                };
                ProfileComponent.prototype.onPreUpdateclient = function(client) {
                    console.log('CLIENT', client);
                    this.crudApi.selectedClient = Object.assign({}, client);
                };
                ProfileComponent.prototype.ResetForm = function() {
                    this.clientForm.reset();
                };
                ProfileComponent.prototype.submitclientData = function() {
                    this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
                    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
                    this.ResetForm(); // Reset form when clicked on reset button
                    this.router.navigate(['admin-list']);
                };;
                ProfileComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-profile',
                        template: __webpack_require__( /*! ./profile.component.html */ "./src/app/componentes_/users/profile/profile.component.html"),
                        styles: [__webpack_require__( /*! ./profile.component.css */ "./src/app/componentes_/users/profile/profile.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] // Toastr service for alert message
                    ])
                ], ProfileComponent);
                return ProfileComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/componentes_/users/register/register.component.css":
        /*!********************************************************************!*\
          !*** ./src/app/componentes_/users/register/register.component.css ***!
          \********************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ".form-control.login-user {\r\n  border: 0px solid #fff !important;\r\n}\r\n.btn-social{\r\n  position: relative;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: #fff;\r\n  border-color: rgba(0,0,0,0.2);\r\n}\r\n.btn-facebook{\r\n  background: #3b5998;\r\n}\r\n.btn-google{\r\n  background: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXNfL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLDhCQUE4QjtDQUMvQjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlc18vdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc29jaWFse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29re1xyXG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLmJ0bi1nb29nbGV7XHJcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufSJdfQ== */"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/register/register.component.html":
        /*!*********************************************************************!*\
          !*** ./src/app/componentes_/users/register/register.component.html ***!
          \*********************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<section id=\"register\" class=\"mb-5 mt-5\">\r\n    <div class=\"container\">\r\n        <br><br><br>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n                <div class=\"card_register\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\r\n                                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\r\n                                    <h3>it's been an error!</h3>>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" required minlength=\"8\">\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\r\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                                    <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" required minlength=\"5\" maxlength=\"10\">\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\r\n                                    <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                                    <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\r\n                                </div>\r\n                                <hr>\r\n                                <div class=\"form-group text-center\">\r\n                                    <h5>Select image:</h5>\r\n                                    <input class=\"bg-light\" type=\"file\" (change)=\"onUpload($event)\">\r\n                                </div>\r\n                                <div class=\"progress\">\r\n                                    <div [style.visibility]=\"(uploadPercent == 0) ? 'hidden' : 'visible'\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) +'%'\">\r\n\r\n                                        <!-- <span class=\"progressText\" *ngIf=\"urlImage | async\">\r\n                      Ok!!</span> -->\r\n                                    </div>\r\n                                </div>\r\n                                <br>\r\n                                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\r\n                                <button *ngIf=\"urlImage | async; else btnDisabled\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\r\n                                <ng-template #btnDisabled>\r\n                                    <button type=\"submit\" disabled=true class=\"btn btn-lg btn-warning btn-block\">Register</button>\r\n                                </ng-template>\r\n                                <div class=\"form-group\">\r\n                                    <a routerLink=\"/login\" class=\"form-control login-user\">Do you have account?</a>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\r\n                    <span class=\"fab fa-facebook-f\"></span> \r\n                    FACEBOOK\r\n                  </button>\r\n                                    <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\r\n                    <span class=\"fab fa-goodreads-g\"></span>\r\n                    GOOGLE\r\n                  </button>\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

            /***/
        }),

        /***/
        "./src/app/componentes_/users/register/register.component.ts":
        /*!*******************************************************************!*\
          !*** ./src/app/componentes_/users/register/register.component.ts ***!
          \*******************************************************************/
        /*! exports provided: RegisterComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
            /* harmony import */
            var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };





            var RegisterComponent = /** @class */ (function() {
                function RegisterComponent(router, authService, storage) {
                    this.router = router;
                    this.authService = authService;
                    this.storage = storage;
                    this.email = '';
                    this.password = '';
                }
                RegisterComponent.prototype.ngOnInit = function() {};
                RegisterComponent.prototype.onUpload = function(e) {
                    var _this = this;
                    // console.log('subir', e.target.files[0]);
                    var id = Math.random().toString(36).substring(2);
                    var file = e.target.files[0];
                    var filePath = "uploads/profile_" + id;
                    var ref = this.storage.ref(filePath);
                    var task = this.storage.upload(filePath, file);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function() { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
                };
                RegisterComponent.prototype.onAddUser = function() {
                    var _this = this;
                    this.authService.registerUser(this.email, this.password)
                        .then(function(res) {
                            _this.authService.isAuth().subscribe(function(user) {
                                if (user) {
                                    user.updateProfile({
                                        displayName: '',
                                        photoURL: _this.inputImageUser.nativeElement.value
                                    }).then(function() {
                                        _this.router.navigate(['']);
                                    }).catch(function(error) { return console.log('error', error); });
                                }
                            });
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginGoogle = function() {
                    var _this = this;
                    this.authService.loginGoogleUser()
                        .then(function(res) {
                            _this.onLoginRedirect();
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginFacebook = function() {
                    var _this = this;
                    this.authService.loginFacebookUser()
                        .then(function(res) {
                            _this.onLoginRedirect();
                        }).catch(function(err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginRedirect = function() {
                    this.router.navigate(['/home']);
                };
                __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUser'),
                    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
                ], RegisterComponent.prototype, "inputImageUser", void 0);
                RegisterComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-register',
                        template: __webpack_require__( /*! ./register.component.html */ "./src/app/componentes_/users/register/register.component.html"),
                        styles: [__webpack_require__( /*! ./register.component.css */ "./src/app/componentes_/users/register/register.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
                ], RegisterComponent);
                return RegisterComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/guards_/auth.guard.ts":
        /*!***************************************!*\
          !*** ./src/app/guards_/auth.guard.ts ***!
          \***************************************/
        /*! exports provided: AuthGuard */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
            /* harmony import */
            var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var AuthGuard = /** @class */ (function() {
                function AuthGuard(afsAuth, router) {
                    this.afsAuth = afsAuth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function(next, state) {
                    var _this = this;
                    return this.afsAuth.authState
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(authState) { return !!authState; }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function(auth) {
                            if (!auth) {
                                _this.router.navigate(['/login']);
                            }
                        }));
                };
                AuthGuard = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
                ], AuthGuard);
                return AuthGuard;
            }());



            /***/
        }),

        /***/
        "./src/app/home/home.component.css":
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

            /***/
        }),

        /***/
        "./src/app/home/home.component.html":
        /*!******************************************!*\
          !*** ./src/app/home/home.component.html ***!
          \******************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<!-- Main content -->\n<div class=\"container float-right \"><br><br><br><br><br>\n    <div class=\"card center-align\">\n\n        <div class=\"card-title text-center\">\n            <br>\n            <h1> Schedule your cleaning services</h1>\n        </div>\n        <div class=\"card-body\">\n\n            <!-- Use router template to show the components for which router service is activated -->\n\n\n            <img class=\"img-responsive float-center\" style=\"width:100%\" src=\"/assets/limpiezaa.jpg\">\n\n            <!-- Footer -->\n            <div class=\"card-footer  text-center\">\n\n\n                <p>This company provides cleaning services by using\n                    <a href=\"https://Aqui va el app/\" title=\"Learn Free Full Stack Software Development\">\n           Netto App<br>\n          </a> a cleaning services App available in the\n                    <a href=\"\" title=\"Learn Free Full Stack Software Development\">\n           APP STORE\n          </a><br></p>\n                <a href=\"https://www.facebook.com/Sunny-Hostals-261669591256712/\"><i class=\"fab fa-facebook-f\"></i></a>\n\n                <a href=\"https://www.instagram.com/misael_jr76/\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i>\n                      </a>\n                <a href=\"https://twitter.com/Sunnyhostals1\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i>\n                      </a>\n            </div>\n        </div>\n    </div>"

            /***/
        }),

        /***/
        "./src/app/home/home.component.ts":
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var HomeComponent = /** @class */ (function() {
                function HomeComponent(router) {
                    this.router = router;
                }
                HomeComponent.prototype.ngOnInit = function() {};
                HomeComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-home',
                        template: __webpack_require__( /*! ./home.component.html */ "./src/app/home/home.component.html"),
                        styles: [__webpack_require__( /*! ./home.component.css */ "./src/app/home/home.component.css")]
                    }),
                    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
                ], HomeComponent);
                return HomeComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/my-schedule/my-schedule.component.css":
        /*!*******************************************************!*\
          !*** ./src/app/my-schedule/my-schedule.component.css ***!
          \*******************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXNjaGVkdWxlL215LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MifQ== */"

            /***/
        }),

        /***/
        "./src/app/my-schedule/my-schedule.component.html":
        /*!********************************************************!*\
          !*** ./src/app/my-schedule/my-schedule.component.html ***!
          \********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"table-list container text-center\" style=\"margin-top:10%;padding-left:10%\">\n    <div class=\"pricing-header mx-auto\">\n        <div class=\"row user-details\">\n            <div class=\"col-12\">\n                <img src=\"{{img}} \" class=\"rounded-circle img-thumbnail\" style=\"width:6%\" alt=\"profile \">\n                <h5 *ngIf=\"providerId != 'password'\"> {{Email}}</h5>\n            </div>\n        </div>\n        <h1>Cleaning schedule <i class=\"far fa-clipboard\"></i> </h1>\n\n\n\n\n        <table class=\"table table-bordered table-responsive-sm table-responsive-md table-responsive-lg table-hover\">\n            <thead>\n                <tr class=\"text-center\">\n                    <th scope=\"col\">Client Id</th>\n                    <th scope=\"col\">First name</th>\n                    <th scope=\"col\">Address</th>\n                    <th scope=\"col\">Date</th>\n                    <th scope=\"col\">Time</th>\n                    <th scope=\"col\">Email</th>\n                    <th scope=\"col\">Mobile number</th>\n                    <th scope=\"col\">Instructions</th>\n                    <th class=\"text-center\" scope=\"col\">Edit</th>\n                </tr>\n            </thead>\n\n            <tbody class=\"text-center \" *ngFor=\"let profile of clients \">\n                <!-- *ngFor loop iterates over Client list array and fetch the client's data -->\n                <!-- paginate pipe will add pagination in client's list, it won't show if items are less then 7 -->\n                <tr>\n                    <th scope=\"row\">{{profile.id}}</th>\n                    <td>{{profile.FirstName}}</td>\n                    <td>{{profile.Address}}</td>\n                    <td>{{profile.Date}}</td>\n                    <td>{{profile.time}}</td>\n                    <td>{{profile.email}}</td>\n                    <td>{{profile.mobileNumber}}</td>\n                    <td>{{profile.Instructions}}</td>\n                    <td class=\"text-center action-block\">\n                        <!-- routerLink=\"/update-schedule/{{client.$key}}\" is refered to { path: 'update-schedule/:id', component: EditclientComponent } in app-routing.moudles.ts -->\n                        <i class=\"far fa-edit\" routerLink=\"/admin-update-schedule/{{profile.id}}\"></i>\n                        <i class=\"far fa-trash-alt\" (click)=\"onDeleteclient(profile)\"></i></td>\n                    <td *ngIf=\"profile.userUid == userUid || isAdmin == true; else noOwner\"></td>\n                </tr>\n            </tbody>\n        </table>\n\n\n        <!-- Pagination -->\n        <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\" responsive=\"true\"></pagination-controls>\n    </div>\n</div>"

            /***/
        }),

        /***/
        "./src/app/my-schedule/my-schedule.component.ts":
        /*!******************************************************!*\
          !*** ./src/app/my-schedule/my-schedule.component.ts ***!
          \******************************************************/
        /*! exports provided: MyScheduleComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "MyScheduleComponent", function() { return MyScheduleComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            // CRUD services API
            // Reactive form services
            var MyScheduleComponent = /** @class */ (function() {
                function MyScheduleComponent(authService, router, crudApi, // CRUD API services
                    fb, // Form Builder service for Reactive forms
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.router = router;
                    this.crudApi = crudApi;
                    this.fb = fb;
                    this.toastr = toastr;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                MyScheduleComponent.prototype.ngOnInit = function() {
                    this.clientsForm();
                    this.getListClients();
                    this.getCurrentUser();
                };
                MyScheduleComponent.prototype.getCurrentUser = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.Email = auth.email;
                            _this.img = auth.photoURL;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        }
                    });
                };
                // Reactive client form
                MyScheduleComponent.prototype.clientsForm = function() {
                    this.clientForm = this.fb.group({
                        FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
                        Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
                        Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')]],
                        Instructions: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
                    });
                };
                MyScheduleComponent.prototype.getListClients = function() {
                    var _this = this;
                    this.crudApi.getAllclients()
                        .subscribe(function(clients) {
                            _this.clients = clients;
                        });
                    this.router.navigate(['my-schedule']);
                };
                MyScheduleComponent.prototype.onDeleteclient = function(idClient) {
                    var confirmacion = confirm('Are you sure?');
                    if (confirmacion) {
                        this.crudApi.deleteclient(idClient);
                    }
                };
                MyScheduleComponent.prototype.onPreUpdateclient = function(client) {
                    console.log('CLIENT', client);
                    this.crudApi.selectedClient = Object.assign({}, client);
                };
                MyScheduleComponent.prototype.ResetForm = function() {
                    this.clientForm.reset();
                };
                MyScheduleComponent.prototype.submitclientData = function() {
                    this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
                    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
                    this.ResetForm(); // Reset form when clicked on reset button
                    this.router.navigate(['admin-list']);
                };;
                MyScheduleComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-my-schedule',
                        template: __webpack_require__( /*! ./my-schedule.component.html */ "./src/app/my-schedule/my-schedule.component.html"),
                        styles: [__webpack_require__( /*! ./my-schedule.component.css */ "./src/app/my-schedule/my-schedule.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] // Toastr service for alert message
                    ])
                ], MyScheduleComponent);
                return MyScheduleComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/nav-bar/nav-bar.component.css":
        /*!***********************************************!*\
          !*** ./src/app/nav-bar/nav-bar.component.css ***!
          \***********************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

            /***/
        }),

        /***/
        "./src/app/nav-bar/nav-bar.component.html":
        /*!************************************************!*\
          !*** ./src/app/nav-bar/nav-bar.component.html ***!
          \************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<!-- Top navigation -->\n<nav class=\"navbar  navbar-dark fixed-top bg-dark flex-md-nowrap pt-0 pb-0 shadow\">\n    <a class=\"navbar-brand col-sm col-md-0 mr-0\" routerLink=\"\">\n        <img class=\"user-image\" src=\"/assets/Netto.png\"> Netto\n    </a>\n\n    <a class=\"nav-item\" style=\"padding-right: .90rem\" routerLink=\"/login\" *ngIf=\"!isLogin\">\n        <span class=\"text-white\">Login</span>\n    </a>\n\n    <a class=\"nav-item \" routerLink=\"/register\" *ngIf=\"!isLogin\">\n        <span class=\"text-white\">Register</span>\n    </a>\n\n\n\n    <a class=\"nav-item\" style=\"cursor: pointer;\" *ngIf=\"isLogin\">\n        <a class=\"text-white\" (click)=\"logout()\">Logout</a>\n    </a>\n\n</nav>\n\n<!-- Sidebar navigation -->\n<div class=\"container-fluid\">\n    <div class=\"row \">\n        <nav style=\"background-color:black \" class=\"col-md-2 d-md-block sidebar text-white border-2 \">\n            <div class=\"sidebar-sticky border-2 \">\n                <ul class=\"nav flex-column \">\n\n\n                    <br>\n\n                    <li class=\"nav-item \" *ngIf=\"isAdmin\">\n                        <a class=\"nav-link text-white \" routerLink=\"/admin-list\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-tools \"></i>Admin panel\n                        </a>\n                    </li>\n                    <br>\n\n                    <div class=\"dropdown-divider \"></div>\n                    <li class=\"nav-item \" *ngIf=\"isLogin \">\n\n                        <a class=\"nav-link text-white \" routerLink=\"/profile\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-home \"></i>My Profile\n                        </a>\n                    </li>\n                    <li class=\"nav-item \" *ngIf=\"isLogin \">\n\n                        <a class=\"nav-link text-white \" routerLink=\"/my-schedule\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-home \"></i>MyOrders\n                        </a>\n                    </li>\n\n\n                    <li class=\"nav-item \" *ngIf=\"isLogin \">\n\n                        <a class=\"nav-link text-white \" routerLink=\"/schedule-cleaning\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-home \"></i>Create task\n                        </a>\n                    </li>\n\n                    <li class=\"nav-item \" *ngIf=\"isLogin \">\n                        <a class=\"nav-link text-white \" routerLink=\"/schedule-cleaning\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-home \"></i>Residential cleaning\n                        </a>\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white \" routerLink=\"/login\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-building \"></i>Comercial cleanning\n                        </a>\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white \" routerLink=\"/login\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-paint-roller\"></i> Painting\n                        </a>\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white \" routerLink=\"/login\" routerLinkActive=\"active\">\n                            <i class=\"fas fa-snowplow\"></i> Snow removal\n                        </a>\n                    </li>\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link text-white \" routerLink=\"/login\" routerLinkActive=\"active\">\n                            <i class=\"fab fa-pagelines\"></i> Garden\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </nav>\n    </div>"

            /***/
        }),

        /***/
        "./src/app/nav-bar/nav-bar.component.ts":
        /*!**********************************************!*\
          !*** ./src/app/nav-bar/nav-bar.component.ts ***!
          \**********************************************/
        /*! exports provided: NavBarComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            // CRUD services API
            // Reactive form services
            // Alert message using NGX toastr
            var NavBarComponent = /** @class */ (function() {
                function NavBarComponent(authService, router, crudApi, // CRUD API services
                    fb, // Form Builder service for Reactive forms
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.router = router;
                    this.crudApi = crudApi;
                    this.fb = fb;
                    this.toastr = toastr;
                    this.noAdmin = null;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                NavBarComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.isLogin = true;
                            _this.nombreUsuario = auth.displayName;
                            _this.emailUsuario = auth.email;
                            _this.userUid = auth.uid;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        } else {
                            _this.isLogin = false;
                            _this.isAdmin = false;
                        }
                    });
                };
                NavBarComponent.prototype.clientsForm = function() {
                    this.clientForm = this.fb.group({
                        FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
                        Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
                        Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
                        time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
                        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
                        Instructions: ['']
                    });
                };
                // Reset client form's values
                NavBarComponent.prototype.ResetForm = function() {
                    this.clientForm.reset();
                };
                NavBarComponent.prototype.submitclientData = function() {
                    this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
                    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
                    this.ResetForm(); // Reset form when clicked on reset button
                    this.router.navigate(['admin-list']);
                };;
                NavBarComponent.prototype.logout = function() {
                    this.authService.logoutUser();
                    this.router.navigate(['home']);
                };
                NavBarComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-nav-bar',
                        template: __webpack_require__( /*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
                        styles: [__webpack_require__( /*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] // Toastr service for alert message
                    ])
                ], NavBarComponent);
                return NavBarComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/schedule-cleaning/schedule-cleaning.component.html":
        /*!********************************************************************!*\
          !*** ./src/app/schedule-cleaning/schedule-cleaning.component.html ***!
          \********************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"container text-center\">\r\n\r\n\r\n    <br><br><br>\r\n    <br>\r\n    <div class=\"row user-details\">\r\n        <div class=\"col-12\">\r\n            <img src=\"{{img}} \" class=\"rounded-circle img-thumbnail\" style=\"width:6%\" alt=\"profile \">\r\n            <h5 *ngIf=\"providerId != 'password'\"> {{Email}}</h5>\r\n        </div>\r\n    </div>\r\n    <h1 class=\"h2 \">Schedule <i class=\"far fa-clipboard\"></i> </h1>\r\n\r\n\r\n\r\n\r\n    <div class=\"row justify-content-center align-items-center\">\r\n\r\n        <!-- Student form -->\r\n        <form [formGroup]=\"clientForm\" (ngSubmit)=\"submitclientData()\" novalidate>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Name:</b></label>\r\n                    <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" required>\r\n                    <p *ngIf=\"FirstName.touched && FirstName.invalid\" class=\"error\"><sup>*</sup>Please enter at least first name</p>\r\n                    <p *ngIf=\"FirstName.errors?.minlength\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\r\n                </div>\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Address:</b></label>\r\n                    <input type=\"text\" formControlName=\"Address\" class=\"form-control\" required>\r\n                    <p *ngIf=\"Address.touched && Address.invalid\" class=\"error\"><sup>*</sup>Please enter at least Address</p>\r\n                    <p *ngIf=\"Address.errors?.minlength\" class=\"error\"><sup>*</sup>Address shouldn't be less than 6 words</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Date:</b></label>\r\n\r\n                    <input type=\"date\" formControlName=\"Date\" class=\"form-control text-center\" required>\r\n                    <p *ngIf=\"Date.touched && Date.invalid\" class=\"error\"><sup>*</sup>Please enter a correct date</p>\r\n\r\n                </div>\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Time:</b></label>\r\n                    <input type=\"time\" formControlName=\"time\" class=\"form-control text-center\" required>\r\n                    <p *ngIf=\"time.touched && time.invalid\" class=\"error\"><sup>*</sup>Please set the time</p>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>email:</b></label>\r\n                    <input type=\"email\" formControlName=\"email\" placeholder=\"name@email.com\" class=\"form-control\" required>\r\n                    <p *ngIf=\"email.touched && email.invalid\" class=\"error\"><sup>*</sup>Please enter an email Address</p>\r\n                    <p *ngIf=\"email.errors?.minlength\" class=\"error\"><sup>*</sup> Email shouldn't be less than 2 words</p>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Mobile:</b></label>\r\n                    <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-control\" required>\r\n                    <p *ngIf=\"mobileNumber.touched && mobileNumber.invalid\" class=\"error\"><sup>*</sup>Please provide contact number\r\n                    </p>\r\n                    <p *ngIf=\"mobileNumber.errors?.pattern\" class=\"error\"><sup>*</sup>Use numbers only number\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 mb-4\">\r\n                    <label><b>Instructions:</b></label>\r\n                    <textarea rows=\"2\" cols=\"20\" type=\"text\" formControlName=\"Instructions\" class=\"form-control\"></textarea>\r\n                    <p *ngIf=\"Instructions.touched && Instructions.invalid\" class=\"error\"><sup>*</sup>Please provide the instructions</p>\r\n                    <p *ngIf=\"Instructions.errors?.minlength\" class=\"error\"><sup>*</sup>Instructions shouldn't be less than 10 words</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group text-center\">\r\n                <button type=\"button\" class=\"btn btn-danger gap-right\" (click)=\"ResetForm()\">Reset</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!clientForm.valid\">Create </button>\r\n            </div>\r\n\r\n\r\n\r\n        </form>\r\n\r\n    </div>\r\n    <br><br>\r\n    <div class=\" text-center\">\r\n        <p class=\"custom-text\">A Company created for <strong>Detailed Residential and commercial cleaning</strong> Based in <strong>Montreal,Qc Canada</strong></p>\r\n    </div>\r\n</div>\r\n<!--        <select id=\"destination\" name=\"province\">\r\n\r\n\r\n    <option value=\"Villa Clara/Remedios\">Villa Clara/Remedios\r\n        <option value=\"Villa Clara/Santa clara\">Villa Clara/Santa clara\r\n            <option value=\"Villa Clara/Caibarien\">Villa Clara/Caibarien\r\n                <option value=\"Cienfuegos/City\">Cienfuegos/City\r\n                    <option value=\"Cienfuegos/Trinidad\">Cienfuegos/Trinidad\r\n                        <option value=\"Havana/City\">Havana/City\r\n\r\n</select>-->"

            /***/
        }),

        /***/
        "./src/app/schedule-cleaning/schedule-cleaning.component.scss":
        /*!********************************************************************!*\
          !*** ./src/app/schedule-cleaning/schedule-cleaning.component.scss ***!
          \********************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLWNsZWFuaW5nL3NjaGVkdWxlLWNsZWFuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

            /***/
        }),

        /***/
        "./src/app/schedule-cleaning/schedule-cleaning.component.ts":
        /*!******************************************************************!*\
          !*** ./src/app/schedule-cleaning/schedule-cleaning.component.ts ***!
          \******************************************************************/
        /*! exports provided: AddClientComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            // CRUD services API
            // Reactive form services
            // Alert message using NGX toastr


            var AddClientComponent = /** @class */ (function() {
                function AddClientComponent(authService, router, crudApi, // CRUD API services
                    fb, // Form Builder service for Reactive forms
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.router = router;
                    this.crudApi = crudApi;
                    this.fb = fb;
                    this.toastr = toastr;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                AddClientComponent.prototype.ngOnInit = function() {
                    this.crudApi.getAllclients(); // Call GetclientsList() before main form is being called
                    this.clientsForm();
                    this.getCurrentUser(); // Call client form when component is ready
                };
                AddClientComponent.prototype.getCurrentUser = function() {
                    var _this = this;
                    this.authService.isAuth().subscribe(function(auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.Email = auth.email;
                            _this.img = auth.photoURL;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function(userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        }
                    });
                };
                // Reactive client form
                AddClientComponent.prototype.clientsForm = function() {
                    this.clientForm = this.fb.group({
                        FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                        Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
                        Instructions: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
                    });
                };
                Object.defineProperty(AddClientComponent.prototype, "FirstName", {
                    // Accessing form control using getters
                    get: function() {
                        return this.clientForm.get('FirstName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "Address", {
                    get: function() {
                        return this.clientForm.get('Address');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "Date", {
                    get: function() {
                        return this.clientForm.get('Date');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "time", {
                    get: function() {
                        return this.clientForm.get('time');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "email", {
                    get: function() {
                        return this.clientForm.get('email');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "mobileNumber", {
                    get: function() {
                        return this.clientForm.get('mobileNumber');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddClientComponent.prototype, "Instructions", {
                    get: function() {
                        return this.clientForm.get('Instructions');
                    },
                    enumerable: true,
                    configurable: true
                });
                // Reset client form's values
                AddClientComponent.prototype.ResetForm = function() {
                    this.clientForm.reset();
                };
                AddClientComponent.prototype.submitclientData = function() {
                    this.crudApi.addclient(this.clientForm.value); // Submit client data using CRUD API
                    this.toastr.success(this.clientForm.controls['FirstName'].value + ' successfully added!'); // Show success message when data is successfully submited
                    this.ResetForm(); // Reset form when clicked on reset button
                    this.router.navigate(['profile']);
                };;
                AddClientComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-add-client',
                        template: __webpack_require__( /*! ./schedule-cleaning.component.html */ "./src/app/schedule-cleaning/schedule-cleaning.component.html"),
                        styles: [__webpack_require__( /*! ./schedule-cleaning.component.scss */ "./src/app/schedule-cleaning/schedule-cleaning.component.scss")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] // Toastr service for alert message
                    ])
                ], AddClientComponent);
                return AddClientComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/services/auth.service.ts":
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
            /* harmony import */
            var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
            /* harmony import */
            var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
            /* harmony import */
            var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */
            var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */
            var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };






            var AuthService = /** @class */ (function() {
                //public UserMail: string;
                function AuthService(afsAuth, afs) {
                    this.afsAuth = afsAuth;
                    this.afs = afs;
                }
                AuthService.prototype.registerUser = function(email, pass) {
                    var _this = this;
                    return new Promise(function(resolve, reject) {
                        _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                            .then(function(userData) {
                                resolve(userData),
                                    _this.updateUserData(userData.user);
                            }).catch(function(err) { return console.log(reject(err)); });
                    });
                };
                AuthService.prototype.loginEmailUser = function(email, pass) {
                    var _this = this;
                    return new Promise(function(resolve, reject) {
                        _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                            .then(function(userData) { return resolve(userData); }, function(err) { return reject(err); });
                    });
                };
                AuthService.prototype.loginFacebookUser = function() {
                    var _this = this;
                    return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
                        .then(function(credential) { return _this.updateUserData(credential.user); });
                };
                AuthService.prototype.loginGoogleUser = function() {
                    var _this = this;
                    return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
                        .then(function(credential) { return _this.updateUserData(credential.user); });
                };
                AuthService.prototype.logoutUser = function() {
                    return this.afsAuth.auth.signOut();
                };
                AuthService.prototype.isAuth = function() {
                    return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(auth) { return auth; }));
                };
                AuthService.prototype.updateUserData = function(user) {
                    var userRef = this.afs.doc("users/" + user.uid);
                    var data = {
                        id: user.uid,
                        email: user.email,
                        roles: {
                            editor: true
                        }
                    };
                    return userRef.set(data, { merge: true });
                };
                AuthService.prototype.getAuth = function() {
                    return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function(auth) { return auth; }));
                    //return this.afsAuth.authState.map(auth => auth);
                    ;
                };
                AuthService.prototype.isUserAdmin = function(userUid) {
                    return this.afs.doc("users/" + userUid).valueChanges();
                };
                AuthService.prototype.isUser = function(userUid) {
                    return this.afs.doc("users/" + userUid).valueChanges();
                };
                AuthService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
                ], AuthService);
                return AuthService;
            }());



            /***/
        }),

        /***/
        "./src/app/services/crud.service.ts":
        /*!******************************************!*\
          !*** ./src/app/services/crud.service.ts ***!
          \******************************************/
        /*! exports provided: CrudService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
            /* harmony import */
            var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var CrudService = /** @class */ (function() {
                function CrudService(afs) {
                    this.afs = afs;
                    this.selectedClient = {
                        id: null
                    };
                }
                // Inject AngularFireDatabase Dependency in Constructor
                CrudService.prototype.getAllclients = function() {
                    this.clientsCollection = this.afs.collection('clients');
                    return this.clients = this.clientsCollection.snapshotChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function(changes) {
                            return changes.map(function(action) {
                                var data = action.payload.doc.data();
                                data.id = action.payload.doc.id;
                                return data;
                            });
                        }));
                };
                CrudService.prototype.getAllclientsOffers = function() {
                    this.clientsCollection = this.afs.collection('clients', function(ref) { return ref.where('oferta', '==', '1'); });
                    return this.clients = this.clientsCollection.snapshotChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function(changes) {
                            return changes.map(function(action) {
                                var data = action.payload.doc.data();
                                data.id = action.payload.doc.id;
                                return data;
                            });
                        }));
                };
                CrudService.prototype.getOneclient = function(idclient) {
                    this.addDoc = this.afs.doc("clients/" + idclient);
                    return this.client = this.addDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function(action) {
                        if (action.payload.exists === false) {
                            return null;
                        } else {
                            var data = action.payload.data();
                            data.id = action.payload.id;
                            return data;
                        }
                    }));
                };
                CrudService.prototype.addclient = function(client) {
                    this.clientsCollection.add(client);
                };
                CrudService.prototype.updateclient = function(client) {
                    var idclient = client.id;
                    this.addDoc = this.afs.doc("clients/" + idclient);
                    this.addDoc.update(client);
                };
                CrudService.prototype.deleteclient = function(idclient) {
                    this.addDoc = this.afs.doc("clients/" + idclient);
                    this.addDoc.delete();
                };
                CrudService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
                ], CrudService);
                return CrudService;
            }());



            /***/
        }),

        /***/
        "./src/app/services/user.service.ts":
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
            /* harmony import */
            var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
            /* harmony import */
            var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */
            var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */
            var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };





            var UserService = /** @class */ (function() {
                function UserService(db, afAuth) {
                    this.db = db;
                    this.afAuth = afAuth;
                }
                UserService.prototype.getCurrentUser = function() {
                    return new Promise(function(resolve, reject) {
                        var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function(user) {
                            if (user) {
                                resolve(user);
                            } else {
                                reject('No user logged in');
                            }
                        });
                    });
                };
                UserService.prototype.updateCurrentUser = function(value) {
                    return new Promise(function(resolve, reject) {
                        var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
                        user.updateProfile({
                            displayName: value.name,
                            photoURL: user.photoURL
                        }).then(function(res) {
                            resolve(res);
                        }, function(err) { return reject(err); });
                    });
                };
                UserService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                    __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
                        angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
                    ])
                ], UserService);
                return UserService;
            }());



            /***/
        }),

        /***/
        "./src/app/update-schedule/update-schedule.component.css":
        /*!***************************************************************!*\
          !*** ./src/app/update-schedule/update-schedule.component.css ***!
          \***************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zY2hlZHVsZS91cGRhdGUtc2NoZWR1bGUuY29tcG9uZW50LmNzcyJ9 */"

            /***/
        }),

        /***/
        "./src/app/update-schedule/update-schedule.component.html":
        /*!****************************************************************!*\
          !*** ./src/app/update-schedule/update-schedule.component.html ***!
          \****************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"container text-center\">\r\n    <br><br> <br><br><br><br>\r\n    <h1 class=\"h2 \">Update schedule <i class=\"far fa-clipboard\"></i> </h1>\r\n\r\n    <br><br>\r\n    <div class=\"row justify-content-center align-items-center\">\r\n        <!-- Client\r\n                    form -->\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"updateForm()\" novalidate>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Name:</b></label>\r\n                    <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" required>\r\n                    <p *ngIf=\"FirstName.touched && FirstName.invalid\" class=\"error\"><sup>*</sup>Please enter at least first name</p>\r\n                    <p *ngIf=\"FirstName.errors?.minlength\" class=\"error\"><sup>*</sup>Name shouldn't be less than 2 words</p>\r\n                </div>\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Address:</b></label>\r\n                    <input type=\"text\" formControlName=\"Address\" class=\"form-control\" required>\r\n                    <p *ngIf=\"Address.touched && Address.invalid\" class=\"error\"><sup>*</sup>Please enter at least Address</p>\r\n                    <p *ngIf=\"Address.errors?.minlength\" class=\"error\"><sup>*</sup>Address shouldn't be less than 6 words</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Date:</b></label>\r\n\r\n                    <input type=\"date\" formControlName=\"Date\" class=\"form-control text-center\" required>\r\n                    <p *ngIf=\"Date.touched && Date.invalid\" class=\"error\"><sup>*</sup>Please enter a correct date</p>\r\n                </div>\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Time:</b></label>\r\n                    <input type=\"time\" formControlName=\"time\" class=\"form-control text-center\" required>\r\n                    <p *ngIf=\"time.touched && time.invalid\" class=\"error\"><sup>*</sup>Please set the time</p>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Email:</b></label>\r\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\r\n                    <p *ngIf=\"email.touched && email.invalid\" class=\"error\"><sup>*</sup>Please enter an email Address</p>\r\n                    <p *ngIf=\"email.errors?.minlength\" class=\"error\"><sup>*</sup> Email shouldn't be less than 2 words</p>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb-3\">\r\n                    <label><b>Mobile:</b></label>\r\n                    <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-control\" required>\r\n                    <p *ngIf=\"mobileNumber.touched && mobileNumber.invalid\" class=\"error\"><sup>*</sup>Please provide contact number\r\n                    </p>\r\n                    <p *ngIf=\"mobileNumber.errors?.pattern\" class=\"error\"><sup>*</sup>Use numbers only number\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 mb-4\">\r\n                    <label><b>Instructions:</b></label>\r\n                    <textarea rows=\"2\" cols=\"20\" type=\"text\" formControlName=\"Instructions\" class=\"form-control\"></textarea>\r\n                    <p *ngIf=\"Instructions.touched && Instructions.invalid\" class=\"error\"><sup>*</sup>Please provide the instructions</p>\r\n                    <p *ngIf=\"Instructions.errors?.minlength\" class=\"error\"><sup>*</sup>Instructions shouldn't be less than 10 words</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group text-center\">\r\n                <button type=\"button\" class=\"btn btn-danger gap-right\" (click)=\"ResetForm()\">Reset</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n    <br><br><br>\r\n    <div class=\" text-center\">\r\n        <p class=\"custom-text\">A Company created for <strong>Detailed Residential and commercial cleaning</strong> Based in <strong>Montreal,Qc Canada</strong></p>\r\n    </div>\r\n</div>"

            /***/
        }),

        /***/
        "./src/app/update-schedule/update-schedule.component.ts":
        /*!**************************************************************!*\
          !*** ./src/app/update-schedule/update-schedule.component.ts ***!
          \**************************************************************/
        /*! exports provided: UpdateScheduleComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UpdateScheduleComponent", function() { return UpdateScheduleComponent; });
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/crud.service */ "./src/app/services/crud.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
            /* harmony import */
            var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            // ActivatedRoue is used to get the current associated components information.
            // Location service is used to go back to previous component

            var UpdateScheduleComponent = /** @class */ (function() {
                function UpdateScheduleComponent(authService, crudApi, // Inject CRUD API in constructor
                    fb, // Inject Form Builder service for Reactive forms
                    location, // Location service to go back to previous component
                    actRoute, // Activated route to get the current component's inforamation
                    router, // Router service to navigate to specific component
                    toastr // Toastr service for alert message
                ) {
                    this.authService = authService;
                    this.crudApi = crudApi;
                    this.fb = fb;
                    this.location = location;
                    this.actRoute = actRoute;
                    this.router = router;
                    this.toastr = toastr;
                }
                UpdateScheduleComponent.prototype.ngOnInit = function() {
                    this.updateForm();
                };
                Object.defineProperty(UpdateScheduleComponent.prototype, "FirstName", {
                    // Accessing form control using getters
                    get: function() {
                        return this.editForm.get('FirstName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "Address", {
                    get: function() {
                        return this.editForm.get('Address');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "Date", {
                    get: function() {
                        return this.editForm.get('Date');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "email", {
                    get: function() {
                        return this.editForm.get('email');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "time", {
                    get: function() {
                        return this.editForm.get('time');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "mobileNumber", {
                    get: function() {
                        return this.editForm.get('mobileNumber');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateScheduleComponent.prototype, "Instructions", {
                    get: function() {
                        return this.editForm.get('Instructions');
                    },
                    enumerable: true,
                    configurable: true
                });
                // Contains Reactive Form logic
                UpdateScheduleComponent.prototype.updateScheduleData = function() {
                    this.editForm = this.fb.group({
                        FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        Address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                        Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
                        Instructions: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
                    });
                };
                // Go back to previous component
                UpdateScheduleComponent.prototype.goBack = function() {
                    this.location.back();
                };
                // Below methods fire when somebody click on submit button
                UpdateScheduleComponent.prototype.updateForm = function() {
                    this.crudApi.updateclient(this.editForm.value); // Upupdate-schedule data using CRUD API
                    this.toastr.success(this.editForm.controls['FirstName'].value + ' updated successfully'); // Show succes message when data is successfully submited
                    this.router.navigate(['my-schedule']); // Navigatupdate-schedule's list page update-schedule data is updated
                };
                UpdateScheduleComponent.prototype.ResetForm = function() {
                    this.editForm.reset();
                };
                UpdateScheduleComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: 'app-update-schedule',
                        template: __webpack_require__( /*! ./update-schedule.component.html */ "./src/app/update-schedule/update-schedule.component.html"),
                        styles: [__webpack_require__( /*! ./update-schedule.component.css */ "./src/app/update-schedule/update-schedule.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
                        _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] // Toastr service for alert message
                    ])
                ], UpdateScheduleComponent);
                return UpdateScheduleComponent;
            }());



            /***/
        }),

        /***/
        "./src/environments/environment.ts":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: "AIzaSyA6t4EsRrNcBwKGS5YhbIHRA-HmmQxhcfA",
                    authDomain: "netto-a5a4f.firebaseapp.com",
                    databaseURL: "https://netto-a5a4f.firebaseio.com",
                    projectId: "netto-a5a4f",
                    storageBucket: "netto-a5a4f.appspot.com",
                    messagingSenderId: "291519147213"
                }
            };
            /*
             * In development mode, to ignore zone related error stack frames such as
             * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
             * import the following file, but please comment it out in production mode
             * because it will have performance impact when throw error
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


            /***/
        }),

        /***/
        "./src/main.ts":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(function(err) { return console.log(err); });


            /***/
        }),

        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! C:\Users\jmisa\OneDrive\Documents\GitHub\Clean_Neto\src\main.ts */ "./src/main.ts");


            /***/
        })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main.js.map