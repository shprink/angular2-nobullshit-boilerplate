/// <reference path="./typings/index.d.ts" />
/// <reference path="./typings/windows.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {bootstrap, provide, FORM_PROVIDERS} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './components/app/index';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
