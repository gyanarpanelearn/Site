import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacedSComponent } from './placed-s.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [PlacedSComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PlacedSComponent]
})
export class PlacedSModule { }
