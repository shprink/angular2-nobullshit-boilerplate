import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: "home",
    directives: [FORM_DIRECTIVES],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class DataType {

    firstName: String;
    lastName: String;

    constructor() {
        this.firstName = "Julien";
        this.lastName = "Renaux";
    }

    onInit() {
        console.log('[Component] datatype running');
    }
}
