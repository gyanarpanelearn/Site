import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othercourses',
  templateUrl: './othercourses.component.html',
  styleUrls: ['./othercourses.component.scss']
})
export class OthercoursesComponent implements OnInit {

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
