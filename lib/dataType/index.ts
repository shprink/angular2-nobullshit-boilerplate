import {Component, View} from 'angular2/core';
import DataTypeService from './service';

@Component({
    selector: "home",
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
