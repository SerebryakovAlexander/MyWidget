import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public weatherTitle: string;
  public waterDegree: number;
  public airDegrre: number;

  public onHotelClick(hotel: IHotel): void {
    this.weatherTitle = hotel.weather.title;
    this.airDegrre = hotel.weather.temperature;
    this.waterDegree = hotel.weather.water;
  }
}
