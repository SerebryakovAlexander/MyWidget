import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedHotel: IHotel;

  public onHotelClick(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }
}
