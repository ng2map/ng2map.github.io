import { Component, OnInit } from '@angular/core';

export class mapFunction {
	id: number;
	name: string;
	routes: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	mapfunctions: mapFunction[] = [
		{id: 1, name: 'Simple Map', routes: 'simpleMap'},
		{id: 2, name: 'Simple Circle', routes: 'simpleCircle'},
		{id: 3, name: 'Simple Marker', routes: 'simpleMarker'},
		{id: 4, name: 'Marker *ng-for', routes: 'markerNgFor'},
		{id: 5, name: 'Simple Info Window', routes: 'simpleInfoWindow'},
		{id: 6, name: 'Multiple Maps', routes: 'multiMap'},
		{id: 7, name: 'Polygon', routes: 'polygon'},
		{id: 8, name: 'Satelite View', routes: 'sateliteView'},
		{id: 9, name: 'Street View', routes: 'streetView'},
		{id: 10, name: 'Simple Ground Overlay', routes: 'groundOverlay'},
		{id: 11, name: 'Bicycling Layer', routes: 'bicyclingLayer'},
		{id: 12, name: 'Traffic Layer', routes: 'trafficLayer'},
		{id: 13, name: 'Transit Layer', routes: 'transitLayer'},
		{id: 14, name: 'Simple Polyline', routes: 'simplePolyline'},
		{id: 15, name: 'Heatmap Layer', routes: 'heatMapLayer'},
		{id: 16, name: 'KML Layer', routes: 'kmlLayer'},
		{id: 17, name: 'Data Layer', routes: 'dataLayer'},
		{id: 18, name: 'Simple Streetview', routes: 'streetView'}
	];

  constructor() { }

  ngOnInit() {
  }

}
