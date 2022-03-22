import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-fbform',
  templateUrl: './fbform.component.html',
  styleUrls: ['./fbform.component.scss']
})
export class FbformComponent implements OnInit {

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
  constructor(config: NgbModalConfig,private modalService: NgbModal,public firebaseService: FirebaseService) { }



  pushFeedBack() {
    // console.log( "out put check",
    // this.fname, this.lname, this.email,this.phone,this.dob,this.city,this.qualification,
    // this.currentJob,
    // this.courseToTeach,this.msg

    // );
   // alert("sdsd");
    this.firebaseService.postFeebBack(this.fname, this.lname, this.email,this.phone,this.dob,this.city,this.qualification,
      this.currentJob,
      this.courseToTeach,
      this.msg)
    .then(
      res => {
         // this.router.navigate(['/home']);
        //  alert(res);
        //  alert("Thank's we will contact you soon");

        Swal.fire(
          '',
          'Thank you for showing interest in contributing fresh graduate future. Our team will call you shortly.',
          'success'
        );

        this.fname = "";
        this.lname = "";
        this.phone = null;
        this.qualification = "";
        this.courseToTeach = "";
        this.currentJob = "";
        this.purpose = "";
        this.city = "";
        this.dob = "";
        this.email = "";
        this.msg = "";

      }
    );
    }
  ngOnInit() {
  }

}
