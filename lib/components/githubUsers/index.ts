import {Component, View} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {Item} from './item/index';
import {List} from './list/index';


@Component({
    selector: "list",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html'),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/list', component: List, name: 'GithubUsersList' , useAsDefault: true}),
    new Route({ path: '/list/:login', component: Item, name: 'GithubUsersItem'})
])
export class GithubUsers {

    constructor() {}
}
