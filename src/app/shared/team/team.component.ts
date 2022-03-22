import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  // t1:boolean = false;
  // t2:boolean = false;
  // t3:boolean = false;
  // t4:boolean = false;
  // t5:boolean = false;
  // t6:boolean = false;
  // t7:boolean = false;

  sWidth: number = window.innerWidth;
  sHeight: number = window.innerHeight;
  scrEEn: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.sWidth < this.sHeight) {
      this.scrEEn = true;
    }
  }


  configD: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    //  effect: 'coverflow',
    //  grabCursor: true,
    //  centeredSlides: true,
    //  freeMode: true,
    //  slidesPerView: 3,
    //  spaceBetween: 200,
    // direction: 'horizontal',
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // speed: 600,
    //     parallax: true,
    // loop: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },

    slidesPerView: 2,
    // spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

  };

  configM: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    slidesPerView: 1,


  };


}