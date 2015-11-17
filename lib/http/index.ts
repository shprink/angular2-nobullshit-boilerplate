import {Component, View, NgIf} from 'angular2/angular2';
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import '!file?name=data/[name].[ext]!./octocat.json';

@Component({
    selector: "http",
    directives: [NgIf],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class HttpPage {
    octocat: Object;

    constructor(public http: Http) {

    }

    getGoogleHomePage() {
        console.log('[method] getGoogleHomePage called', this.http);
        this.http.get('data/octocat.json').subscribe((response) => {
            this.octocat = response.json();
        });
    }

    onInit() {
        console.log('[Component] http running');
    }
}
