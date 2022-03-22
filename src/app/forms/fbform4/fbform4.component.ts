import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fbform4',
  templateUrl: './fbform4.component.html',
  styleUrls: ['./fbform4.component.scss']
})
export class Fbform4Component implements OnInit {

  show:boolean = false;

  closeResult: string;
  isCollapsed :boolean = true;
  fname: any;
  lname: any;
  phone: number;
  qualification: any;
  courseToTeach:any;
  currentJob:any;
  purpose:any;
  city: any;
  dob: any;
  email: any;
  msg:any;
  

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
  }
  constructor(config: NgbModalConfig,private modalService: NgbModal,public firebaseService: FirebaseService, public router : Router) { }



  pushFeedBack() {
    // console.log( "out put check",
    // this.fname, this.lname, this.email,this.phone,this.dob,this.city,this.qualification,
    // this.currentJob,
    // this.courseToTeach,this.msg

    // );
   // alert("sdsd");
    this.firebaseService.postFeebBack3(this.fname, this.lname, this.email,this.phone)
    .then(
      res => {
         // this.router.navigate(['/home']);
        //  alert(res);
        //  alert("Thank's we will contact you soon");

        Swal.fire(
          '',
          'Thank you for your interest. Our course shall be available from 28<sup>th</sup> February 2021. Our team will reach out to you shortly.<br>You can also explore our other preplacement program in this page.',
          'success'
        );

        this.fname = "";
        this.lname = "";
        this.phone = null; 
        this.email = ""; 

        this.router.navigate(['/preplacement/full-stack-development-training']);

      }
    );
    }
  ngOnInit() {
  }

}