import {Component, View} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import '!file?name=data/[name].[ext]!./octocat.json';

@Component({
    selector: "http",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class HttpPage {
    octocat: Object;

    constructor(public http: Http) {

    }

    getOctocatProfile() {
        console.log('[method] getOctocatProfile called', this.http);
        this.http.get('data/octocat.json').subscribe((response) => {
            this.octocat = response.json();
        });
    }

    ngOnInit() {
        console.log('[Component] http running');
    }
}
