import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-iot-c',
  templateUrl: './iot-c.component.html',
  styleUrls: ['./iot-c.component.scss']
})
export class IotCComponent implements OnInit {


  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false; 
  
  show:boolean = false;
  constructor(private router: Router) { }

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}

userLogStat:any = localStorage.getItem("user");

  pay1(){
    localStorage.setItem("payFor", "Internet of things");

    // alert(this.userLogStat);
    if(this.userLogStat == "null"){
      this.router.navigate(['/auth/register']);
    }
    else{
      this.router.navigate(['/pay-for']);
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
