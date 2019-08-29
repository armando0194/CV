import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HeroComponent } from './components/hero/hero.component';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResumeService } from './services/resume/resume.service';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AboutmeComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
