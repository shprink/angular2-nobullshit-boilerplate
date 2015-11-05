import {Component, View} from 'angular2/angular2';
import {Navbar} from '../navbar/index';
import {Home} from '../home/index';
import {About} from '../about/index';
import {HttpModule} from '../http/index';
import {RouterOutlet, RouteConfig, Route} from 'angular2/router';

@Component({
    selector: "app"
})
@View({
    directives: [Navbar, RouterOutlet],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
@RouteConfig([
    new Route({ path: '/', component: Home, as: 'Home' }),
    new Route({path: '/about', component: About, as: 'About'}),
    new Route({path: '/http', component: HttpModule, as: 'Http'})
])
export class App {

    constructor() {

    }

    onInit() {
        console.log('[Component] app running');
    }
}
