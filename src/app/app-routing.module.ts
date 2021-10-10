import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {ShipsComponent} from "./ships/ships.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: ' ', component: AppComponent},
  { path: 'flights', component:  FlightsComponent},
  { path: 'ships', component:  ShipsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
