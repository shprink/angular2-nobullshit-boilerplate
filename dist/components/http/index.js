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
var http_1 = require('angular2/http');
require('!file?name=data/[name].[ext]!./octocat.json');
var HttpModule = (function () {
    function HttpModule(http) {
        this.http = http;
    }
    HttpModule.prototype.getGoogleHomePage = function () {
        var _this = this;
        console.log('[method] getGoogleHomePage called', this.http);
        this.http.get('data/octocat.json').subscribe(function (response) {
            _this.octocat = response.json();
        });
    };
    HttpModule.prototype.onInit = function () {
        console.log('[Component] http running');
    };
    HttpModule = __decorate([
        angular2_1.Component({
            selector: "http",
            directives: [angular2_1.NgIf],
            styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
            template: require('./index.html')
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpModule);
    return HttpModule;
})();
exports.HttpModule = HttpModule;
//# sourceMappingURL=index.js.map