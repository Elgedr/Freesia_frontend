import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from "./components/flights/flights.component";
import {ShipsComponent} from "./components/ships/ships.component";
import {AppComponent} from "./app.component";
import {FlightDetailsComponent} from "./components/flight-details/flight-details.component";
import {FlightBookingComponent} from "./components/flight-booking/flight-booking.component";
import {ShipDetailsComponent} from "./components/ship-details/ship-details.component";
import {UsersInfoFormComponent} from "./components/users-info-form/users-info-form.component";
import {BookingSucceedComponent} from "./components/booking-succeed/booking-succeed.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'ships', component: ShipsComponent},
  {path: 'flights/:id/:sid/details', component: FlightDetailsComponent},
  {path: 'flights/:id/:sid/booking', component: FlightBookingComponent},
  {path: 'ships/:id/flights', component: ShipDetailsComponent},
  {path: 'flight/:fid/form', component: UsersInfoFormComponent},
  {path: 'bookingSucceed', component: BookingSucceedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
