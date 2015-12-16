/// <reference path="./typings/tsd.d.ts" />

import 'angular2/bundles/angular2-polyfills';
import 'reflect-metadata';
import 'es6-shim';

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app/index';
import {Http} from 'angular2/http';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    // PathLocationStrategy being the default, we only need to define APP_BASE_HREF
    // provide(APP_BASE_HREF, {useValue: '/'})
    // Here we want to use the # strategy instead:
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
