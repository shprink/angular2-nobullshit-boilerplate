import {Component, View}    from 'angular2/core';
import {SebmGoogleMap,
    MapMouseEvent,
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES}      from 'angular2-google-maps/core';

@Component({
    selector: "map",
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class Map {

    constructor() {

    }

    zoom: number = 5;

    lat: number = 46.5286;
    lng: number = -10.43896;

    markers = [{
        lat : 48.8589,
        lng : 2.350387,
        label : 'Paris'
    }];

    onClickMap ($event: MapMouseEvent) {
        this.markers.push({
            lat : $event.coords.lat,
            lng : $event.coords.lng,
            label : 'A'
        });
    }

    onClickMarker ($event) {
        console.log(this, $event);
    }




}
