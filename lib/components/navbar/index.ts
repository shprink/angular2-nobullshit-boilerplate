import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: "navbar",
  directives: [NgFor],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class Navbar {
    title: string;
    items: Object[];

    constructor() {
        this.title = window.noBullshitBoilerplate.name;
        this.items = require('./items.json');
    }

    onInit() {
        console.log('[Component] navbar running');
    }
}
