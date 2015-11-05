import {Component, View} from 'angular2/angular2';
import {Navbar} from '../navbar/index';

@Component({
  selector: "app",
  directives: [Navbar],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class App {
    title: string;

    constructor() {
        this.title = 'app Title';
    }

    onInit() {
        console.log('[Component] app running');
    }
}
