export class Seat {
  public id: number;
  public booked: boolean;
  public reserved: boolean;

  constructor(id: number, booked: boolean, reserved: boolean) {
    this.id = id;
    this.booked = booked;
    this.reserved = reserved;
  }
}
