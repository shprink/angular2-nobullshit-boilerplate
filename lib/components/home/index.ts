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
        console.log('[Component] home running');
    }
}
