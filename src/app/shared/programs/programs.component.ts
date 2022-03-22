import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;
  pHide: boolean = false;

  config: SwiperOptions = {
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      freeMode: true,
    // slidesPerView: 3,
    // spaceBetween: 200,
     loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          // spaceBetween: 200,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 200,
        },
      }
  };

  hided() {
    document.getElementById("hided1").style.display = "block";
    document.getElementById("hided2").style.display = "block";
    document.getElementById("hided3").style.display = "block";
    document.getElementById("hided4").style.display = "block";
    document.getElementById("hided0").style.display = "none";
  }

  hided3() {
    document.getElementById("hided1").style.display = "none";
    document.getElementById("hided2").style.display = "none";
    document.getElementById("hided3").style.display = "none";
    document.getElementById("hided4").style.display = "none";
    document.getElementById("hided0").style.display = "block";
  }

  constructor() { }

  ngOnInit() { 
        if(this.sWidth < this.sHeight){
            this.scrEEn = true;
        }
  }

}
