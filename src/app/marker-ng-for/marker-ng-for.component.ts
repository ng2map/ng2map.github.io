import { Component, OnInit, ViewChild} from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  selector: 'app-marker-ng-for',
  templateUrl: './marker-ng-for.component.html',
  styleUrls: ['./marker-ng-for.component.css']
})
export class MarkerNgForComponent implements OnInit {

	@ViewChild( Ng2MapComponent ) ng2MapComponent: Ng2MapComponent;
	public map: google.maps.Map;
	
	ngOnInit() {
	  	this.ng2MapComponent.mapReady$.subscribe(map => {
    		this.map = map;
    	})
  	}

	constructor() { 
  		Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyCX39r8r3Zf5VGvKfKCjWLgfA0SFmJufPM';
  	}
}

function getRandomMarkers() {
    for (var t, e, n = [], r = 0; r < 9; r++) t = Math.random() * (43.7399 - 43.73) + 43.73, e = Math.random() * (-79.76 - -79.7699) + -79.7699, n.push([t, e]);
    return n
}

function showMarkersFromObservable() {
    var t = this;
    e.Observable.of(this.getRandomMarkers()).subscribe(function(e) {
        t.positions = e
    })
}