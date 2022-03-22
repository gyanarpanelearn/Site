import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;
  
  isCollapsed:boolean = true;
  show:boolean  = false;
  constructor() { }

  ngOnInit() {
    if(this.sWidth < this.sHeight){
      this.scrEEn = true;
  }
  }

}
