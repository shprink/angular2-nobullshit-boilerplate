/// <reference path="./typings/index.d.ts" />
/// <reference path="./typings/windows.d.ts" />


import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {bootstrap, FORM_PROVIDERS} from 'angular2/angular2';
import {App} from './components/app/index';

bootstrap(App, [
    FORM_PROVIDERS
]);
