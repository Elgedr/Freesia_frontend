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


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    TabComponent,
    ShipsComponent,
    CarouselComponentComponent,
    FligtcardComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
