import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
