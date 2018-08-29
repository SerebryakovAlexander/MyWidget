import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input()
  public hotel: IHotel;

  @Output()
  public onHotelClick: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    this.onHotelClick.emit(this.hotel);
  }
}
