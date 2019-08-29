import { Component } from '@angular/core';
import { ResumeService } from './services/resume/resume.service';
import { Resume } from './models/resume';
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

  constructor(private resumeService: ResumeService) {
    this.config = {
      anchors: ['home', 'aboutme'],
      menu: '#menu'
    };

    this.loading = true;
    this.resumeService.getResume().pipe(delay(this.debounceTime)).subscribe(
      data => { 
        this.resume = data;
        this.loading = false;
        console.log(this.resume);
      },
      err => console.log(err)
    );
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }
}
