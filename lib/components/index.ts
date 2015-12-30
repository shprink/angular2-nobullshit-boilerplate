import {Component, View} from 'angular2/core';
import {Navbar} from './navbar/index';
import {Home} from './home/index';
import {About} from './about/index';
import {GithubUsers} from './githubUsers/index';
import {HttpPage} from './http/index';
import {DataType} from './dataType/index';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: "app"
})
@View({
    directives: [Navbar, ROUTER_DIRECTIVES],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
@RouteConfig([
    new Route({ path: '/', component: Home, name: 'Home' }),
    new Route({ path: '/about', component: About, name: 'About', data: { pageId: null } }),
    new Route({ path: '/http', component: HttpPage, name: 'Http' }),
    new Route({ path: '/datatype', component: DataType, name: 'DataType' }),
    new Route({ path: '/github-users/...', component: GithubUsers, name: 'GithubUsers'})
])
export class App {

    constructor() {

    }

    ngOnInit() {
        console.log('[Component] app running');
    }
}
