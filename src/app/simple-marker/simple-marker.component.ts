import { Component, OnInit, ViewChild} from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  selector: 'app-simple-marker',
  templateUrl: './simple-marker.component.html',
  styleUrls: ['./simple-marker.component.css']
})
export class SimpleMarkerComponent implements OnInit {

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

