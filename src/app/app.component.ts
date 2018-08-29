import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWidget';

  public onHotelClick(hotel: IHotel): void {
    console.log(JSON.stringify(hotel));
  }
}
