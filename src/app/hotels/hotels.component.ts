import { Component, OnInit } from '@angular/core';
import {hotels$} from '../data/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchCriteria = 'all';
  }

  public hotels$: Observable<IHotel[]> = hotels$;

  public searchCriteria: string;

  public onHotelClick(): void {
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
}
