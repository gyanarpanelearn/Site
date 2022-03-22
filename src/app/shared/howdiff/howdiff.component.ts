import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howdiff',
  templateUrl: './howdiff.component.html',
  styleUrls: ['./howdiff.component.scss']
})
export class HowdiffComponent implements OnInit {

  sWidth:number = window.innerWidth;
    sHeight:number = window.innerHeight;
    scrEEn:boolean =false;

  constructor() { }

  ngOnInit() {
    if(this.sWidth < this.sHeight){
      this.scrEEn = true;
  }
  }

}
