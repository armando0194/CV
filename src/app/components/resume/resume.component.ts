import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Work } from 'src/app/models/work';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @Input() education: Education[];
  @Input() work: Work[];
  
  constructor() { }

  ngOnInit() {
    console.log(this.education);
    console.log(this.work);
  }

}
