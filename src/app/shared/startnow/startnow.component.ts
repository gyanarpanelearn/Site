import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startnow',
  templateUrl: './startnow.component.html',
  styleUrls: ['./startnow.component.scss']
})
export class StartnowComponent implements OnInit {

  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;

  constructor() {}
  

ngOnInit() {

  if(this.sWidth < this.sHeight){
      this.scrEEn = true;
  }

}

}
