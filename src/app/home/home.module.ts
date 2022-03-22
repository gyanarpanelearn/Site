import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { HomeComponent } from '../landing/home/home.component';
import { CountdownModule } from '../countdown/countdown/countdown.module';
import { PlacedSComponent } from '../placed-s/placed-s.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { PlacedSModule } from '../placed-s/placed-s.module';
import { PlacedPopModule } from '../placed-pop/placed-pop.module';
// import {CountDown, CountdownModule} from "ng2-date-countdown";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    HomeRoutingModule,
    PlacedSModule,
    SharedModule, 
    PlacedPopModule,
    CountdownModule,
    RouterModule.forChild([
    {
    path: '',
    component: HomeComponent,
    },
    {
    path: 'home',
    component: HomeComponent,
    }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

