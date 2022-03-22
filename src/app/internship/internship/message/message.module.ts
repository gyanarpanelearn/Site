import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
