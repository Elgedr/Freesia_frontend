import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {ShipsComponent} from "./ships/ships.component";
import {AppComponent} from "./app.component";
import {FlightDetailsComponent} from "./flight-details/flight-details.component";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {ShipDetailsComponent} from "./ship-details/ship-details.component";
import {UsersInfoFormComponent} from "./users-info-form/users-info-form.component";
import {BookignSucceedComponent} from "./bookign-succeed/bookign-succeed.component";

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'ships', component: ShipsComponent},
  {path: 'flights/:id/:sid/details', component: FlightDetailsComponent},
  {path: 'flights/:id/:sid/booking', component: FlightBookingComponent},
  {path: 'ships/:id/flights', component: ShipDetailsComponent},
  {path: 'flight/:fid/form', component: UsersInfoFormComponent},
  {path: 'bookingSucceed', component: BookignSucceedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
