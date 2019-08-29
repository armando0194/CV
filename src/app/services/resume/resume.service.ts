import { Injectable } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private url = 'https://gist.githubusercontent.com/';
  private username = 'armando0194/';
  private endpoint = '39dd29b69b3ba64db287a05af13e41e0/raw/7492cfff89ba2ac6a9d3d51a46c1e515bb53b6bb/resume.json';

  constructor(private httpClient: HttpClient) {}

  public getResume() {
    return this.httpClient.get<Resume>(this.url + this.username + this.endpoint);
  }
}
