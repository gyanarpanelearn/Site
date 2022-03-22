import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss']
})
export class ScholarshipComponent implements OnInit {

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
    localStorage.setItem("payFor", "Scholarship");
    // localStorage.setItem("fee", "5000");
    // alert(this.userLogStat);
    if(this.userLogStat == "null" || this.userLogStat == null || this.userLogStat == undefined){
      this.router.navigate(['/auth/register']);
    }
    else{
      this.router.navigate(['/pay-for']);
    }
  }

  ngOnInit() {


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
