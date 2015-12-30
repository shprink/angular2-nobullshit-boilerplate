import {Injectable} from 'angular2/core';

@Injectable()
export default class DataTypeService {

    constructor() {

    }

    getRandowString(length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
}
