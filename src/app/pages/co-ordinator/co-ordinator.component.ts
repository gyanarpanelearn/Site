import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-ordinator',
  templateUrl: './co-ordinator.component.html',
  styleUrls: ['./co-ordinator.component.scss']
})
export class CoOrdinatorComponent implements OnInit {

  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;
  
  show:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.sWidth < this.sHeight){
        this.scrEEn = true;
    }
  }

}