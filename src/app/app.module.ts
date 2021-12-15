import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from
    '@angular/platform-browser/animations';
import { TabComponent } from './components/tab/tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ShipsComponent } from './components/ships/ships.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponentComponent } from './components/carousel-component/carousel-component.component';
import { FligtcardComponent } from './components/fligtcard/fligtcard.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { ShipcardComponent } from './components/shipcard/shipcard.component';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import {MatIconModule} from "@angular/material/icon";
import {SafePipeModule} from "safe-pipe";
import {HttpClientModule} from "@angular/common/http";
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
import { SpaceWeatherWidgetComponent } from './components/space-weather-widget/space-weather-widget.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { UsersInfoFormComponent } from './components/users-info-form/users-info-form.component';
import { BookingSucceedComponent } from './components/booking-succeed/booking-succeed.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzCardModule} from "ng-zorro-antd/card";
import {FlightService} from "./services/flight.service";
import {ShipService} from "./services/ship.service";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import { ProfileComponent } from './components/profile/profile.component';

// @ts-ignore
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
    ShipDetailsComponent,
    SpaceWeatherWidgetComponent,
    ShipDetailsComponent,
    UsersInfoFormComponent,
    BookingSucceedComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent,
    ProfileComponent,
    TabComponent

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
    HttpClientModule,
    MatTooltipModule,
    MatGridListModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
    NzSpaceModule,
    NzCardModule
  ],
  providers: [FligtcardComponent, FlightDetailsComponent, FlightsComponent, FlightService, ShipService, Title],
  bootstrap: [AppComponent]
})

export class AppModule { }
