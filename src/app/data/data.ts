///<reference path="../../../types/hotels/index.d.ts"/>
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

const the_hotels: IHotel[] = [
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    address:        'Египет',
    phone:          1285968685,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода в Египте',
      icon:         '',
      water:        28,
      temperature:  40,
    },
    social_info: {
      title:        'Nam libero voluptatem',
      img:          'assets/images/b1.jpg',
      followers:    2850,
      following:    675,
    },
    type:           'hotel'
  },
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    address:        'Испания',
    phone:          1285968686,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода в Испании',
      icon:         '',
      water:        23,
      temperature:  28,
    },
    social_info: {
      title:        'Nam libero voluptatem',
      img:          'assets/images/b1.jpg',
      followers:    2850,
      following:    675,
    },
    type:           'fishing'
  },
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    address:        'Мальдивы',
    phone:          1285968687,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода на Мальдивах',
      icon:         '',
      water:        27,
      temperature:  31,
    },
    social_info: {
      title:        'Nam libero voluptatem',
      img:          'assets/images/b1.jpg',
      followers:    2850,
      following:    675,
    },
    type:           'tour'
  }
];

export const hotels$: Observable<IHotel[]> = of(the_hotels)
  .pipe (
    map((hotelsArr: IHotel[]) =>
      hotelsArr.filter((hotel: IHotel) => hotel)),
    delay(3000)
  );
