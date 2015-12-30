import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html'),
    directives: [ROUTER_DIRECTIVES]
})
export class List {
    users: Array<Object>;

    constructor(public http: Http) {

    }

    ngOnInit() {
        this.http.get('https://api.github.com/search/users?q=location:mexico,mexico&sort=followers&order=desc').subscribe((response) => {
            this.users = response.json().items;
        });
    }
}
