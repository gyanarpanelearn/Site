import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-testf1',
  templateUrl: './testf1.component.html',
  styleUrls: ['./testf1.component.scss']
})
export class Testf1Component implements OnInit {

  show: boolean = false;

  closeResult: string;
  isCollapsed: boolean = true;
  fname: any;
  lname: any;
  phone: number;
  qualification: any;
  courseToTeach: any;
  currentJob: any;
  purpose: any;
  city: any;
  dob: any;
  email: any;
  msg: any;


  onClickN($element) {
    let x = document.querySelector("#" + $element);
    if (x) {
      x.scrollIntoView();
    }
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal, public firebaseService: FirebaseService, public router: Router) { }



  pushFeedBack() {

    this.firebaseService.addRes(this.fname, "exam-3mar", this.lname)
      .then(
        res => {

          // Swal.fire(
          //   '',
          //   'Conf added 1',
          //   'success'
          // );

          this.fname = "";
          this.lname = "";
        }
      );
  }
  ngOnInit() {
  }

}