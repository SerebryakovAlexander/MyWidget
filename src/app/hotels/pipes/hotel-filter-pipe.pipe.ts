import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotels: IHotel[], criteria: string): IHotel[] {
    if (!criteria) {
      return hotels;
    }
    return hotels.filter((hotel: IHotel) => {
      return hotel.type === criteria || criteria === 'all';
    });
  }

}
