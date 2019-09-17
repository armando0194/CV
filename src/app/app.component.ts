import { Component } from '@angular/core';
import { ResumeService } from './services/resume/resume.service';
import { StarProjectsService } from './services/star-projects/star-projects.service';
import { Resume } from './models/resume';
import { Repository } from './models/github';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CV';
  config: any;
  fullpageApi: any;
  
  private loading = true;
  private debounceTime = 100;

  private resume: Resume;
  private repos: Repository[];

  constructor(private resumeService: ResumeService, private starProjectsService: StarProjectsService) {
    this.config = {
      anchors: ['home', 'aboutme', 'projects', 'resume'],
      menu: '#menu',
      scrollOverflow: true,
    };

    this.loading = true;
    this.getResume();
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

  getResume() {
    this.resumeService.getResume().pipe(delay(this.debounceTime)).subscribe(
      data => { 
        this.resume = data;
        console.log(this.resume);
        this.getStarredProjects();
      },
      err => console.log(err)
    );
  }

  getStarredProjects() {
    this.starProjectsService.getResume().pipe(delay(this.debounceTime)).subscribe(
      data => { 
        this.repos = data;
        this.loading = false;
        console.log(this.repos);
        this.repos.forEach(element => {
          console.log(element.description);console.log(element.html_url);
        });
      },
      err => console.log(err)
    );
  }
}
