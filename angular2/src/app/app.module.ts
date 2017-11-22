import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './hero-search.component';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent }  from './app.component';



@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  AppRoutingModule
  ],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent,HeroSearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }