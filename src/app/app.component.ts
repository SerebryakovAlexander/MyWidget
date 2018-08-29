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
  public followers: number;
  public following: number;
  public socialImgSrc: string;
  public socialTitle: string;

  public onHotelClick(hotel: IHotel): void {
    this.weatherTitle = hotel.weather.title;
    this.airDegrre = hotel.weather.temperature;
    this.waterDegree = hotel.weather.water;
    this.followers = hotel.social_info.followers;
    this.following = hotel.social_info.following;
    this.socialImgSrc = hotel.social_info.img;
    this.socialTitle = hotel.social_info.title;
  }
}
