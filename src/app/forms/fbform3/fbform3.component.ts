import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-fbform3',
  templateUrl: './fbform3.component.html',
  styleUrls: ['./fbform3.component.scss']
})
export class Fbform3Component implements OnInit {

  closeResult: string;
  isCollapsed :boolean = true;
  fname: any;
  lname: any;
  phone: number;
  collageName: any;
  msg: any;
  email: any;
  dob:any;
  city: any;
  currentYear: any;

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}



  constructor(config: NgbModalConfig,private modalService: NgbModal,public firebaseService: FirebaseService) { }

  enqEarnnLearn() {
    // alert("sdsd");
    this.firebaseService.enqEarnnLearn(this.fname, this.lname,this.phone, this.email, this.dob,
      this.city, this.currentYear,this.collageName,this.msg)
    .then(
      res => {
         // this.router.navigate(['/home']);
        //  alert(res);
        //  alert("Thank's we will contact you soon");

        Swal.fire(
          '',
          'Thank you for showing interest. Our team will reachout to you shortly.',
          'success'
        );

      }
    );
    }


  ngOnInit() {
  }

}
