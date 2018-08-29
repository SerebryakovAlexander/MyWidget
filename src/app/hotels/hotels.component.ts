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
  }

  public hotels$: Observable<IHotel[]> = hotels$;

}
