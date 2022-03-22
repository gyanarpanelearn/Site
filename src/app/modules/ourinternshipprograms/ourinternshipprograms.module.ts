import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurinternshipprogramsComponent } from './ourinternshipprograms.component';
import  "swiper";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OurinternshipprogramsComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxUsefulSwiperModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [OurinternshipprogramsComponent]
})
export class OurinternshipprogramsModule { }
