import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-view',
  templateUrl: './programs-view.component.html',
  styleUrls: ['./programs-view.component.scss']
})
export class ProgramsViewComponent implements OnInit {

  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;
  
  isCollapsed:boolean = true;
  show:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.sWidth < this.sHeight){
        this.scrEEn = true;
    }
  }

}
