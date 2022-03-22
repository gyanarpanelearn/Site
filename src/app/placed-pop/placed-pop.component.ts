import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-placed-pop',
  templateUrl: './placed-pop.component.html',
  styleUrls: ['./placed-pop.component.scss']
})
export class PlacedPopComponent implements OnInit {


  sWidth: number = window.innerWidth;
  sHeight: number = window.innerHeight;
  scrEEn: boolean = false;

  lppop: any = sessionStorage.getItem("ppop");

  @ViewChild("classic") modalContent: TemplateRef<any>;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    if (this.lppop != "y") {
      this.modal.open(this.modalContent).result.then((result) => {
      });
    }
    sessionStorage.setItem("ppop", "y");

    if (this.sWidth < this.sHeight) {
      this.scrEEn = true;
    }

  }

  configD: SwiperOptions = {
    navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev'
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
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  };

  configM: SwiperOptions = {
    navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev'
    },

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };


}
