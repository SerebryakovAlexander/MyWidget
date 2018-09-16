import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WeatherComponent } from './weather/weather.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { HotelFilterPipe } from './hotels/pipes/hotel-filter-pipe.pipe';
import { PhoneFormatPipe } from './hotels/pipes/phone-format-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    TeddyBearComponent,
    HotelComponent,
    HotelFilterPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
