import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: "home",
    directives: [],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class Home {

    constructor() {
    }

    onInit() {
        console.log('[Component] home onInit');
    }

    onDestroy() {
        console.log('[Component] home onDestroy');
    }

    onChanges() {
        console.log('[Component] home onChanges');
    }

    doCheck() {
        console.log('[Component] home doCheck');
    }

    afterContentInit() {
        console.log('[Component] home afterContentInit');
    }

    afterContentChecked() {
        console.log('[Component] home afterContentChecked');
    }

    afterViewInit() {
        console.log('[Component] home afterViewInit');
    }

    afterViewChecked() {
        console.log('[Component] home afterViewChecked');
    }
}
