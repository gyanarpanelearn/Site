import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-ourinternshipprograms',
  templateUrl: './ourinternshipprograms.component.html',
  styleUrls: ['./ourinternshipprograms.component.scss']
})
export class OurinternshipprogramsComponent implements OnInit {

  show:boolean = false;
  sWidth:number = window.innerWidth;
    sHeight:number = window.innerHeight;
    scrEEn:boolean =false;
  constructor() { }

  ngOnInit() {
    if(this.sWidth < this.sHeight){
      this.scrEEn = true;
  }
  }

  configD: SwiperOptions = {
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
   }, 
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    slidesPerView: 3, 
  
 };
 
 configM: SwiperOptions = {
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev'
 },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  slidesPerView: 1,  
};

}