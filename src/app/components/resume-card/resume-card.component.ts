import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {
  @Input() title: string;
  @Input() company: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() highlights: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
