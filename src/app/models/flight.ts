import {Ship} from "./ship";

export interface Flight {
  id: number;
  ship: Ship;
  departurePlace: string;
  departureTime: number;
  destinationPlace: string;
  arrivalTime: number;
}
