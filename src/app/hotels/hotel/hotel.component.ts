import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input()
  public resortAddress: string;

  @Input()
  public hotelPhone: string;

  @Input()
  public img1Src: string;

  @Input()
  public img2Src: string;

  constructor() { }

  ngOnInit() {
  }

}
