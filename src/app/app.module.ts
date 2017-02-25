import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { Ng2MapModule } from 'ng2-map';
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
import { TrafficLayerComponent } from './traffic-layer/traffic-layer.component';
import { TransitLayerComponent } from './transit-layer/transit-layer.component';
import { PolylineComponent } from './polyline/polyline.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { KmlComponent } from './kml/kml.component';
import { DataLayerComponent } from './data-layer/data-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    SimpleMapComponent,
    SimpleCircleComponent,
    SimpleMarkerComponent,
    MarkerNgForComponent,
    SimpleInfoWindowComponent,
    MultiMapComponent,
    PolygonComponent,
    SateliteViewComponent,
    StreetViewComponent,
    GroundOverlayComponent,
    BicyclingLayerComponent,
    TrafficLayerComponent,
    TransitLayerComponent,
    PolylineComponent,
    HeatMapComponent,
    KmlComponent,
    DataLayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCX39r8r3Zf5VGvKfKCjWLgfA0SFmJufPM'}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
