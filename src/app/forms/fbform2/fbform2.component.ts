import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-fbform2',
  templateUrl: './fbform2.component.html',
  styleUrls: ['./fbform2.component.scss']
})
export class Fbform2Component implements OnInit {
  closeResult: string;
  isCollapsed :boolean = true;
  fname: any;
  lname: any;
  phone: number;
  collageName: any;
  msg: any;
  email: any;
  city: any;
  desig: any;

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}



  constructor(config: NgbModalConfig,private modalService: NgbModal,public firebaseService: FirebaseService) { }

  enqSend() {
    // alert("sdsd");
    this.firebaseService.enqSend(this.fname, this.lname,this.phone, this.email, this.collageName, this.city, this.desig,this.msg)
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

        this.fname = "";
        this.lname = "";
        this.phone = null; 
        this.city = ""; 
        this.email = "";
        this.msg = "";
        this.collageName = "";
        this.msg = "";
        this.email = "";
        this.city = "";
        this.desig = "";
      }
    );
    }


  ngOnInit() {
  }

}
