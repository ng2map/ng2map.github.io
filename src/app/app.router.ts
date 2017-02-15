import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { SimpleCircleComponent } from './simple-circle/simple-circle.component';
import { SimpleMarkerComponent } from './simple-marker/simple-marker.component';
import { MarkerNgForComponent } from './marker-ng-for/marker-ng-for.component';
import { SimpleInfoWindowComponent } from './simple-info-window/simple-info-window.component';
import { MultiMapComponent } from './multi-map/multi-map.component';
import { PolygonComponent } from './polygon/polygon.component';
import { SateliteViewComponent } from './satelite-view/satelite-view.component';
import { StreetViewComponent } from './street-view/street-view.component';
import { GroundOverlayComponent } from './ground-overlay/ground-overlay.component';
import { BicyclingLayerComponent } from './bicycling-layer/bicycling-layer.component';



export const router: Routes = [
	
	{path: 'simpleMap', component: SimpleMapComponent },
	{path: 'simpleCircle', component: SimpleCircleComponent},
	{path: 'simplerMarker', component: SimpleMarkerComponent},
	{path: 'markerNgFor', component: MarkerNgForComponent},
	{path: 'simpleInforWindow', component: SimpleInfoWindowComponent},
	{path: 'multiMap', component: MultiMapComponent},
	{path: 'polygon', component: PolygonComponent},
	{path: 'sateliteView', component: SateliteViewComponent},
	{path: 'streetView', component: StreetViewComponent},
	{path: 'groundOverlay', component: GroundOverlayComponent},
	{path: 'bicyclingLayer', component: BicyclingLayerComponent},
	{path: '', redirectTo: 'simpleMap', pathMatch: 'full' },
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);