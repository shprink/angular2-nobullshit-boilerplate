var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var index_1 = require('../navbar/index');
var index_2 = require('../home/index');
var index_3 = require('../about/index');
var index_4 = require('../http/index');
var router_1 = require('angular2/router');
var App = (function () {
    function App() {
    }
    App.prototype.onInit = function () {
        console.log('[Component] app running');
    };
    App = __decorate([
        angular2_1.Component({
            selector: "app"
        }),
        angular2_1.View({
            directives: [index_1.Navbar, router_1.RouterOutlet],
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
            template: require('./index.html')
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: index_2.Home, name: 'Home' }),
            new router_1.Route({ path: '/about', component: index_3.About, name: 'About' }),
            new router_1.Route({ path: '/http', component: index_4.HttpModule, name: 'Http' })
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=index.js.map