///<reference path="../../../types/hotels/index.d.ts"/>
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

const the_hotels: IHotel[] = [
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    img3:           'assets/images/1.jpg',
    address:        'Египет',
    phone:          1285968685,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода в Египте',
      icon:         '',
      water:        28,
      temperature:  40,
    },
    social_info: {
      title:        'С Вами едут в Египет',
      img:          'assets/images/b1.jpg',
      followers:    5850,
      following:    175,
    },
    type:           'hotel'
  },
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    img3:           'assets/images/2.jpg',
    address:        'Испания',
    phone:          1285968686,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода в Испании',
      icon:         '',
      water:        23,
      temperature:  28,
    },
    social_info: {
      title:        'С Вами едут в Испанию',
      img:          'assets/images/b1.jpg',
      followers:    3850,
      following:    975,
    },
    type:           'fishing'
  },
  {
    img1:           'assets/images/res.jpg',
    img2:           'assets/images/r1.jpg',
    img3:           'assets/images/3.jpg',
    address:        'Мальдивы',
    phone:          1285968687,               // дополнительно задание pipe для форматирования
    weather: {
      title:        'Погода на Мальдивах',
      icon:         '',
      water:        27,
      temperature:  31,
    },
    social_info: {
      title:        'С Вами едут на Мальдивы',
      img:          'assets/images/r1.jpg',
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
