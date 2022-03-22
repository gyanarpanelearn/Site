import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ml-c',
  templateUrl: './ml-c.component.html',
  styleUrls: ['./ml-c.component.scss']
})
export class MlCComponent implements OnInit {


  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;
  
  show:boolean = false;
  constructor() { }

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}

  ngOnInit() {
    if(this.sWidth < this.sHeight){
        this.scrEEn = true;
    }

// 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// 
  }

}
