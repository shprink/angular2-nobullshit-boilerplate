import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: "about",
  directives: [],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class About {

    constructor() {
    }

    onInit() {
        console.log('[Component] home running');
    }
}
