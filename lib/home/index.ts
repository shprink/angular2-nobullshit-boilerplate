import {Component, View} from 'angular2/core';

@Component({
    selector: "home",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class Home {

    constructor() {
    }

    ngOnInit() {
        console.log('[Component] home ngOnInit');
    }

    ngOnDestroy() {
        console.log('[Component] home onDestroy');
    }

    ngOnChanges() {
        console.log('[Component] home onChanges');
    }

    ngDoCheck() {
        console.log('[Component] home doCheck');
    }

    ngAfterContentInit() {
        console.log('[Component] home afterContentInit');
    }

    ngAfterContentChecked() {
        console.log('[Component] home afterContentChecked');
    }

    ngAfterViewInit() {
        console.log('[Component] home afterViewInit');
    }

    ngAfterViewChecked() {
        console.log('[Component] home afterViewChecked');
    }
}
