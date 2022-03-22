import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacedPopComponent } from './placed-pop.component';
import { PlacedSModule } from '../placed-s/placed-s.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [PlacedPopComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule
  ],
  exports: [PlacedPopComponent]
})
export class PlacedPopModule { }
