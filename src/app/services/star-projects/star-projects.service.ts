import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/app/models/github';

@Injectable({
  providedIn: 'root'
})
export class StarProjectsService {

  private url = 'https://api.github.com';
  private starredEndpoint = "/users/armando0194/starred";

  constructor(private httpClient: HttpClient) {}

  public getResume() {
    return this.httpClient.get<Repository[]>(this.url + this.starredEndpoint);
  }
}

