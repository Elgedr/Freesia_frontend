import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from
    '@angular/platform-browser/animations';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ShipsComponent } from './ships/ships.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { FligtcardComponent } from './fligtcard/fligtcard.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ShipcardComponent } from './shipcard/shipcard.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import {MatIconModule} from "@angular/material/icon";
import {SafePipeModule} from "safe-pipe";
import {HttpClientModule} from "@angular/common/http";
import { ShipDetailsComponent } from './ship-details/ship-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    TabComponent,
    ShipsComponent,
    CarouselComponentComponent,
    FligtcardComponent,
    FlightDetailsComponent,
    ShipcardComponent,
    FlightBookingComponent,
    ShipDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SafePipeModule,
    HttpClientModule

  ],
  providers: [FligtcardComponent, FlightDetailsComponent, FlightsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
