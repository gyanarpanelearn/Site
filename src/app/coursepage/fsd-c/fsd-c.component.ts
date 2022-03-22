import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fsd-c',
  templateUrl: './fsd-c.component.html',
  styleUrls: ['./fsd-c.component.scss']
})
export class FsdCComponent implements OnInit {

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
  pay1(name){
    localStorage.setItem("payFor", name);

    // alert(this.userLogStat);
    if(this.userLogStat == "null" || this.userLogStat == null || this.userLogStat == undefined){
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
