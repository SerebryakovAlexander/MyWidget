import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {hotels$} from '../data/data';
import {Observable} from 'rxjs';
import {stringify} from 'querystring';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Output()
  public onHotelClick: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  constructor() { }

  ngOnInit() {
    this.searchCriteria = 'all';
  }

  public hotels$: Observable<IHotel[]> = hotels$;

  public searchCriteria: string;

  public onHotelLinkClick(): void {
    this.searchCriteria = 'hotel';
  }

  public onFishingClick(): void {
    this.searchCriteria = 'fishing';
  }

  public onTourClick(): void {
    this.searchCriteria = 'tour';
  }

  public onAllClick(): void {
    this.searchCriteria = 'all';
  }

  public onItemClick(hotel: IHotel): void {
    this.onHotelClick.emit(hotel);
  }
}
