import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import DataTypeService from './service';

@Component({
    selector: "home",
    directives: [FORM_DIRECTIVES],
    providers: [DataTypeService],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class DataType {

    firstName: String;
    lastName: String;

    constructor(public service:DataTypeService) {
        this.firstName = "Julien";
    }

    onInit() {
        console.log('[Component] datatype running');
    }

    triggerModelChange(){
        this.firstName = this.service.getRandowString(8);
    }
}
