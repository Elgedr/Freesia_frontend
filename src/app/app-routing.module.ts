import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {ShipsComponent} from "./ships/ships.component";
import {AppComponent} from "./app.component";
import {FlightDetailsComponent} from "./flight-details/flight-details.component";
import {ShipDetailsComponent} from "./ship-details/ship-details.component";

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'ships', component: ShipsComponent},
  {path: 'flights/:id/details', component: FlightDetailsComponent},
  {path: 'ships/:id/flights', component: ShipDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
