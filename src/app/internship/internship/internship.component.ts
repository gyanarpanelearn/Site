import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {

    sWidth:number = window.innerWidth;
    sHeight:number = window.innerHeight;
    scrEEn:boolean =false;
    show:boolean = false;

  public isCollapsed = true;
  closeResult: string;
   
    
  into:any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hrs",
    Minutes: "Mins",
    Seconds: "Secs",
    MilliSeconds: "MilliSeconds"
  };

   timer: any ;

   compareDate = new Date();
  fname: any;
  lname: any;
  phone: any;
  degree: any;
  projectType: any;
  year: any;
  collegeName: any;
  email: any;
  
  
  ngOnInit() {
    if(this.sWidth < this.sHeight) {
      this.scrEEn = true
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

// ends


  }
  
  constructor(public firebaseService: FirebaseService,config: NgbModalConfig,private modalService: NgbModal,private router: Router) { 

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


open(content, type, modalDimension) {
  if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'my-class', size: 'sm', centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
  } else if (modalDimension === '' && type === 'Notification') {
    this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
    }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
  } else {
      this.modalService.open(content,{ centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
  }
}


onClickN($element){
  let x = document.querySelector("#"+$element);
  if (x){
      x.scrollIntoView();
  }
}

internshipEnquire() {
  alert(this.fname+" "+ this.lname+" "+ this.phone +" "+ this.email+" "+this.collegeName +" "+this.year+" "+this.projectType +" "+ this.degree);

  this.firebaseService.internshipEnquire(this.fname, this.lname, this.phone , this.email,this.collegeName ,this.year ,this.projectType , this.degree)
  .then(
    res => {
       // this.router.navigate(['/home']);
      //  alert(res);
       alert("Thank's we will contact you soon");
    }
  );
  }


}
