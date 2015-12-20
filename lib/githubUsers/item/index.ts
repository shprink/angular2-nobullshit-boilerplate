import {Component, View} from 'angular2/core';
import {Router, RouteParams, RouteData, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html'),
    directives: [ROUTER_DIRECTIVES]
})
export class Item {
    user: Object;
    constructor(private _http: Http, private _router: Router, private _params: RouteParams, private _data: RouteData) {
        this.user = {};
    }

    ngOnInit() {
        this._http.get(`https://api.github.com/users/${this._params.get('login')}`).subscribe((response) => {
            this.user = response.json();
        });
    }
}
