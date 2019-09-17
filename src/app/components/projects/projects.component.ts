import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/github';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() repos: Repository[];
  
  constructor() { 
    console.log("constructor");
    console.log(this.repos);
  }

  ngOnInit() {
  }

}
