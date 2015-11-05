import {Component, View} from 'angular2/angular2';
import { RouterLink} from 'angular2/router';

@Component({
  selector: "navbar",
  directives: [RouterLink],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class Navbar {
    title: string;

    constructor() {
        this.title = window.noBullshitBoilerplate.name;
    }

    onInit() {
        console.log('[Component] navbar running');
    }
}
