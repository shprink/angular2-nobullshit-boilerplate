require('zone.js');
require('reflect-metadata');
require('es6-shim');
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var index_1 = require('./app/index');
angular2_1.bootstrap(index_1.App, [
    angular2_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=index.js.map