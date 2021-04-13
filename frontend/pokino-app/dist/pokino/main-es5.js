(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+RMX":
    /*!*********************************************!*\
      !*** ./src/app/model/app-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function RMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _view_render_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../view/render/render.component */
      "0Mp/");
      /* harmony import */


      var _view_main_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../view/main-menu.component */
      "PKU+");
      /* harmony import */


      var _view_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../view/leaderboard.component */
      "ahgL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _view_main_menu_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuComponent"]
      }, {
        path: 'mainMenu',
        component: _view_main_menu_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuComponent"]
      }, {
        path: 'gameScreen',
        component: _view_render_render_component__WEBPACK_IMPORTED_MODULE_1__["RenderComponent"]
      }, {
        path: 'leaderboard',
        component: _view_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\leoru\IdeaProjects\pokino\frontend\pokino-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Mp/":
    /*!*************************************************!*\
      !*** ./src/app/view/render/render.component.ts ***!
      \*************************************************/

    /*! exports provided: RenderComponent */

    /***/
    function Mp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderComponent", function () {
        return RenderComponent;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var _model_render_PokinoScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../model/render/PokinoScene */
      "eXiH");
      /* harmony import */


      var _model_render_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model/render/player */
      "WP8V");
      /* harmony import */


      var _model_render_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model/render/enemy */
      "CVse");
      /* harmony import */


      var _model_render_handleInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../model/render/handleInput */
      "CA6u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["rendererContainer"];

      var RenderComponent = /*#__PURE__*/function () {
        function RenderComponent() {
          _classCallCheck(this, RenderComponent);

          this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]();
          this.width = 600;
          this.height = 300;
          this.m_scene = new _model_render_PokinoScene__WEBPACK_IMPORTED_MODULE_1__["PokinoScene"]();
          this.m_scene.init(this.width, this.height);
          this.m_player = new _model_render_player__WEBPACK_IMPORTED_MODULE_2__["player"]();
          this.m_player.width = this.width;
          this.m_player.height = this.height;
          this.m_enemy = new _model_render_enemy__WEBPACK_IMPORTED_MODULE_3__["enemy"]();
          this.m_scene.addPlayer(this.m_player);
          this.m_scene.addEnemy(this.m_enemy);
          this.m_mouseInfo = new _model_render_handleInput__WEBPACK_IMPORTED_MODULE_4__["mouseInfo"]();
        }

        _createClass(RenderComponent, [{
          key: "onMousemove",
          value: function onMousemove(event) {
            this.m_mouseInfo.x = event.x - this.width / 2;
            this.m_mouseInfo.y = (event.y - this.height / 2) * -1;
          }
        }, {
          key: "onMousedown",
          value: function onMousedown() {
            this.m_mouseInfo.isPressed = true;
          }
        }, {
          key: "onMouseup",
          value: function onMouseup() {
            this.m_mouseInfo.isPressed = false;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // setup render context
            this.renderer.setSize(this.width, this.height);

            if (this.rendererContainer != undefined) {
              this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
            }

            this.renderScene();
          }
        }, {
          key: "renderScene",
          value: function renderScene() {
            var _this = this;

            // render loop
            window.requestAnimationFrame(function () {
              return _this.renderScene();
            }); // update

            this.m_player.update(this.m_mouseInfo);
            this.m_enemy.update();
            this.m_scene.update(); // render

            this.renderer.render(this.m_scene, this.m_scene.m_camera);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RenderComponent;
      }();

      RenderComponent.ɵfac = function RenderComponent_Factory(t) {
        return new (t || RenderComponent)();
      };

      RenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: RenderComponent,
        selectors: [["app-render"]],
        viewQuery: function RenderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rendererContainer = _t.first);
          }
        },
        hostBindings: function RenderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousemove", function RenderComponent_mousemove_HostBindingHandler($event) {
              return ctx.onMousemove($event);
            })("mousedown", function RenderComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMousedown($event);
            })("mouseup", function RenderComponent_mouseup_HostBindingHandler() {
              return ctx.onMouseup();
            });
          }
        },
        decls: 4,
        vars: 0,
        consts: [["rendererContainer", ""]],
        template: function RenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "render works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", null, 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "CA6u":
    /*!*********************************************!*\
      !*** ./src/app/model/render/handleInput.ts ***!
      \*********************************************/

    /*! exports provided: mouseInfo */

    /***/
    function CA6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mouseInfo", function () {
        return mouseInfo;
      });

      var mouseInfo = function mouseInfo() {
        _classCallCheck(this, mouseInfo);

        this.x = 0;
        this.y = 0;
        this.isPressed = false;
      };
      /***/

    },

    /***/
    "CVse":
    /*!***************************************!*\
      !*** ./src/app/model/render/enemy.ts ***!
      \***************************************/

    /*! exports provided: enemy */

    /***/
    function CVse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enemy", function () {
        return enemy;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");

      var enemy = /*#__PURE__*/function () {
        function enemy() {
          _classCallCheck(this, enemy);

          this.amplitude = 10;
          this.x = 0;
          var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](50, 50, 32);
          var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
          var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
            map: loader.load('../../assets/images/pikachu.png'),
            transparent: true,
            alphaTest: 0.5
          });
          this.m_mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
          this.m_mesh.translateX(-this.amplitude * 10);
          this.m_mesh.translateY(-300 / 2 + 50 / 2);
        }

        _createClass(enemy, [{
          key: "update",
          value: function update() {
            this.x += 0.1;
            var f = Math.sin(this.x) * this.amplitude;
            this.m_mesh.translateX(f);
            if (f >= this.amplitude - 0.05) this.m_mesh.scale.x = -1;
            if (f <= -this.amplitude + 0.05) this.m_mesh.scale.x = 1;
          }
        }]);

        return enemy;
      }();
      /***/

    },

    /***/
    "Cm2q":
    /*!*****************************************!*\
      !*** ./src/app/model/render/physics.ts ***!
      \*****************************************/

    /*! exports provided: physics */

    /***/
    function Cm2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "physics", function () {
        return physics;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");

      var physics = /*#__PURE__*/function () {
        function physics() {
          _classCallCheck(this, physics);

          this.x = -250;
        }

        _createClass(physics, [{
          key: "updatePositionAccordingToVeloctiy",
          value: function updatePositionAccordingToVeloctiy() {
            var posY = -100;
            this.x += 1.0;
            posY = -0.003 * (this.x * this.x) + 100;
            return new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](this.x, posY);
          }
        }]);

        return physics;
      }();
      /***/

    },

    /***/
    "Ednl":
    /*!***************************************!*\
      !*** ./src/app/view/app.component.ts ***!
      \***************************************/

    /*! exports provided: AppComponent */

    /***/
    function Ednl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/api.service */
      "yZrb");

      var AppComponent = function AppComponent(router, apiService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.apiService = apiService;
        this.title = 'pokino';
        this.ready = false;
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "header"], [1, "root"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "POKINO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: block;\n  align-items: center;\n  vertical-align: center;\n  background-color: #44BB55;\n  color: #fff;\n  font-weight: 6000;\n  font-family: \"Courier New\";\n  margin-bottom: 5%;\n}\n\ndiv[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 0.7%;\n  margin: auto;\n}\n\n.root[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: left;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0gsMEJBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0QkI1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIjtcclxuXHRtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4gIFxyXG5kaXYgPiBoMSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctdG9wOiAuNyU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucm9vdCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbjogYXV0bztcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "OoH1":
    /*!**************************************!*\
      !*** ./src/app/model/render/ball.ts ***!
      \**************************************/

    /*! exports provided: ball */

    /***/
    function OoH1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ball", function () {
        return ball;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var _physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./physics */
      "Cm2q");

      var ball = /*#__PURE__*/function () {
        function ball() {
          _classCallCheck(this, ball);

          this.m_veloctiy = false;
          var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](25, 25, 32);
          var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
          var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
            map: loader.load('../../assets/images/pokeball.png'),
            transparent: true,
            alphaTest: 0.5
          });
          this.m_mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
          this.m_physics = new _physics__WEBPACK_IMPORTED_MODULE_1__["physics"]();
          this.setPosition(400, 0);
        }

        _createClass(ball, [{
          key: "setPosition",
          value: function setPosition(x, y) {
            this.m_mesh.position.set(x, y, 0);
          }
        }, {
          key: "updateVelocity",
          value: function updateVelocity() {
            this.m_veloctiy = true;
          }
        }, {
          key: "update",
          value: function update() {
            if (this.m_veloctiy) {
              var newPos = this.m_physics.updatePositionAccordingToVeloctiy();
              this.setPosition(newPos.x, newPos.y);
            }
          }
        }]);

        return ball;
      }();
      /***/

    },

    /***/
    "PKU+":
    /*!*********************************************!*\
      !*** ./src/app/view/main-menu.component.ts ***!
      \*********************************************/

    /*! exports provided: MainMenuComponent */

    /***/
    function PKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
        return MainMenuComponent;
      });
      /* harmony import */


      var _api_json_pokemon_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api/json-pokemon-object */
      "QQd9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/api.service */
      "yZrb");

      var MainMenuComponent = /*#__PURE__*/function () {
        function MainMenuComponent(router, apiService) {
          _classCallCheck(this, MainMenuComponent);

          this.router = router;
          this.apiService = apiService;
          this.title = 'pokino';
          this.ready = false;
          this.pokemon = new _api_json_pokemon_object__WEBPACK_IMPORTED_MODULE_0__["JsonPokemonObject"]();
        }

        _createClass(MainMenuComponent, [{
          key: "toggleReady",
          value: function toggleReady() {
            this.ready = !this.ready;
          }
        }, {
          key: "getReadyMessage",
          value: function getReadyMessage() {
            return (this.ready ? '' : 'not ') + 'ready';
          }
        }, {
          key: "gotoGameScreen",
          value: function gotoGameScreen() {
            this.router.navigate(['/gameScreen']);
          }
        }, {
          key: "gotoLeaderboard",
          value: function gotoLeaderboard() {
            this.router.navigate(['/leaderboard']);
          }
        }, {
          key: "getRandomPokemon",
          value: function getRandomPokemon() {
            this.apiService.getRandomPokemon().subscribe(function (data) {
              console.log(data);
            });
          }
        }]);

        return MainMenuComponent;
      }();

      MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
        return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MainMenuComponent,
        selectors: [["app-root"]],
        decls: 21,
        vars: 1,
        consts: [[1, "mainMenu"], [1, "container"], ["src", "../../assets/images/squirtle_probably_copyrighted.png"], [1, "button", 3, "click"], [1, "playerName", "playerMe"], [1, "playerName", "ready"]],
        template: function MainMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_4_listener() {
              return ctx.gotoGameScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "test Game");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_6_listener() {
              return ctx.toggleReady();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "I Am Ready");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_8_listener() {
              return ctx.gotoLeaderboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Leaderboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainMenuComponent_Template_button_click_10_listener() {
              return ctx.getRandomPokemon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "API Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Active Players:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Another player (ready) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Me (", ctx.getReadyMessage(), ")");
          }
        },
        styles: [".button[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  border: none;\n  background-color: #33AA44;\n  color: #fff;\n  padding: 14px 28px;\n  font-size: 16px;\n  margin: 1%;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.playerName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: red;\n}\n\n.ready[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #66CC00;\n  color: #333;\n  box-shadow: 2px -2px 2px #55BF55;\n}\n\n.mainMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  float: left;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0Q7O0FBR0E7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRCIsImZpbGUiOiJtYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogODAlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzNBQTQ0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDE0cHggMjhweDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luOiAxJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGxheWVyTmFtZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5yZWFkeSB7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjZDQzAwO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJveC1zaGFkb3c6IDJweCAtMnB4IDJweCAjNTVCRjU1O1xyXG59XHJcblxyXG5cclxuLm1haW5NZW51IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogNDklO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbjogYXV0bztcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "QQd9":
    /*!********************************************!*\
      !*** ./src/app/api/json-pokemon-object.ts ***!
      \********************************************/

    /*! exports provided: JsonPokemonObject */

    /***/
    function QQd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonPokemonObject", function () {
        return JsonPokemonObject;
      });

      var JsonPokemonObject = function JsonPokemonObject() {
        _classCallCheck(this, JsonPokemonObject);

        this.name = '';
      };
      /***/

    },

    /***/
    "WP8V":
    /*!****************************************!*\
      !*** ./src/app/model/render/player.ts ***!
      \****************************************/

    /*! exports provided: player */

    /***/
    function WP8V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "player", function () {
        return player;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var _model_render_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../model/render/ball */
      "OoH1");

      var player = /*#__PURE__*/function () {
        function player() {
          _classCallCheck(this, player);

          this.width = 600;
          this.height = 300;
          var playerWidth = 100;
          var playerHeight = 100;
          var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](playerWidth, playerHeight, 32);
          var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
          var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
            map: loader.load('../../assets/images/ash.png'),
            transparent: true,
            alphaTest: 0.5
          });
          this.m_mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
          this.m_mesh.translateX(-this.width / 2 + playerWidth / 2);
          this.m_mesh.translateY(-this.height / 2 + playerHeight / 2);
          this.m_ball = new _model_render_ball__WEBPACK_IMPORTED_MODULE_1__["ball"]();
        }

        _createClass(player, [{
          key: "update",
          value: function update(mouseInfo) {
            if (mouseInfo.isPressed) {
              this.m_ball.setPosition(-250, -100);
              this.m_ball.updateVelocity();
            }

            this.m_ball.update();
          }
        }]);

        return player;
      }();
      /***/

    },

    /***/
    "ahgL":
    /*!***********************************************!*\
      !*** ./src/app/view/leaderboard.component.ts ***!
      \***********************************************/

    /*! exports provided: LeaderboardComponent */

    /***/
    function ahgL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function () {
        return LeaderboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/api.service */
      "yZrb");

      var LeaderboardComponent = /*#__PURE__*/function () {
        function LeaderboardComponent(router, apiService) {
          _classCallCheck(this, LeaderboardComponent);

          this.router = router;
          this.apiService = apiService;
          this.title = 'pokino';
          this.ready = false;
        }

        _createClass(LeaderboardComponent, [{
          key: "gotoMainMenu",
          value: function gotoMainMenu() {
            this.router.navigate(['/mainMenu']);
          }
        }]);

        return LeaderboardComponent;
      }();

      LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
        return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LeaderboardComponent,
        selectors: [["app-root"]],
        decls: 15,
        vars: 0,
        consts: [[1, "mainMenu"], [1, "container"], ["src", "../../assets/images/squirtle_probably_copyrighted.png"], [1, "button", 3, "click"], [1, "playerName", "playerMe"], [1, "playerName", "ready"]],
        template: function LeaderboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardComponent_Template_button_click_4_listener() {
              return ctx.gotoMainMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Leaderboard:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Another player");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: block;\n  align-items: center;\n  vertical-align: center;\n  background-color: #44BB55;\n  color: #fff;\n  font-weight: 6000;\n  font-family: \"Courier New\";\n  margin-bottom: 5%;\n}\n\ndiv[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 0.7%;\n  margin: auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  border: none;\n  background-color: #33AA44;\n  color: #fff;\n  padding: 14px 28px;\n  font-size: 16px;\n  margin: 1%;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.playerName[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: red;\n}\n\n.ready[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #66CC00;\n  color: #333;\n  box-shadow: 2px -2px 2px #55BF55;\n}\n\n.mainMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  float: left;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDSCwwQkFBQTtFQUNBLGlCQUFBO0FBQ0Q7O0FBRUU7RUFDRCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUdFO0VBQ0MsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUg7O0FBR0M7RUFDRSxlQUFBO0VBQ0QsVUFBQTtBQUFGOztBQUdDO0VBQ0UsWUFBQTtBQUFIOztBQUdDO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFJQztFQUNDLFdBQUE7RUFDQSxhQUFBO0FBREY7O0FBR0M7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0QkI1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIjtcclxuXHRtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgZGl2ID4gaDEge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLXRvcDogLjclO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiB7XHJcblx0ICBkaXNwbGF5OiBibG9jaztcclxuXHQgIHdpZHRoOiA4MCU7XHJcblx0ICBib3JkZXI6IG5vbmU7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNBQTQ0O1xyXG5cdCAgY29sb3I6ICNmZmY7XHJcblx0ICBwYWRkaW5nOiAxNHB4IDI4cHg7XHJcblx0ICBmb250LXNpemU6IDE2cHg7XHJcblx0ICBtYXJnaW46IDElO1xyXG5cdCAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5wbGF5ZXJOYW1lIHtcclxuXHQgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGNvbG9yOiByZWQ7XHJcblx0fVxyXG5cdFxyXG5cdC5yZWFkeSB7XHJcblx0ICBjb2xvcjogZ3JlZW47XHJcblx0fVxyXG5cdFxyXG5cdC5idXR0b246aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2Q0MwMDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Ym94LXNoYWRvdzogMnB4IC0ycHggMnB4ICM1NUJGNTU7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC5tYWluTWVudSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0d2lkdGg6IDQ5JTtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH0iXX0= */"]
      });
      /***/
    },

    /***/
    "eXiH":
    /*!*********************************************!*\
      !*** ./src/app/model/render/PokinoScene.ts ***!
      \*********************************************/

    /*! exports provided: PokinoScene */

    /***/
    function eXiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PokinoScene", function () {
        return PokinoScene;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");

      var PokinoScene = /*#__PURE__*/function (_three__WEBPACK_IMPOR) {
        _inherits(PokinoScene, _three__WEBPACK_IMPOR);

        var _super = _createSuper(PokinoScene);

        function PokinoScene() {
          _classCallCheck(this, PokinoScene);

          return _super.apply(this, arguments);
        }

        _createClass(PokinoScene, [{
          key: "init",
          value: function init(width, height) {
            //setup camera
            this.m_camera = new three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"](width / -2, width / 2, height / 2, height / -2, 1, 1000);
            this.m_camera.position.z = 1000;
            var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
            var bgTexture = loader.load('../../assets/images/bg.jpg');
            this.background = bgTexture;
          }
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "addPlayer",
          value: function addPlayer(player) {
            this.add(player.m_mesh);
            this.add(player.m_ball.m_mesh);
          }
        }, {
          key: "addEnemy",
          value: function addEnemy(enemy) {
            this.add(enemy.m_mesh);
          }
        }]);

        return PokinoScene;
      }(three__WEBPACK_IMPORTED_MODULE_0__["Scene"]);
      /***/

    },

    /***/
    "y4CA":
    /*!*************************************!*\
      !*** ./src/app/model/app.module.ts ***!
      \*************************************/

    /*! exports provided: AppModule */

    /***/
    function y4CA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "+RMX");
      /* harmony import */


      var _view_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../view/app.component */
      "Ednl");
      /* harmony import */


      var _view_render_render_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view/render/render.component */
      "0Mp/");
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api/api.service */
      "yZrb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_view_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_view_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _view_render_render_component__WEBPACK_IMPORTED_MODULE_4__["RenderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "yZrb":
    /*!************************************!*\
      !*** ./src/app/api/api.service.ts ***!
      \************************************/

    /*! exports provided: ApiService */

    /***/
    function yZrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.pokemonUrl = 'localhost:8000/pokemon';
        }

        _createClass(ApiService, [{
          key: "getRandomPokemon",
          value: function getRandomPokemon() {
            console.log(this.pokemonUrl + '/random');
            var url = this.pokemonUrl + '/random';
            return this.get(url);
          }
        }, {
          key: "get",
          value: function get(url) {
            return this.http.get(url);
          }
        }, {
          key: "post",
          value: function post(url, payload) {
            return this.http.post(url, payload);
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_model_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/model/app.module */
      "y4CA");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_model_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map