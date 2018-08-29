import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {
  @Input()
  public followers: number;
  @Input()
  public following: number;
  @Input()
  public imgSrc: string;
  @Input()
  public socialTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
