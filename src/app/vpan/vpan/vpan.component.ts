import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from  '../../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../../core/firebase.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-vpan',
  templateUrl: './vpan.component.html',
  styleUrls: ['./vpan.component.scss']
})
export class VpanComponent implements OnInit {

  isCollapsed: boolean = true;
  closeResult: string;
  show : boolean = false;
    userDetails: any;
    showMessage: any;
    // myElement: any;

    sWidth:number = window.innerWidth;
    sHeight:number = window.innerHeight;
    scrEEn:boolean =false;
    rems: string;
    remsP: string;
  applicationId: string;

    constructor(private router: Router, private modalService: NgbModal,public firebaseService: FirebaseService, private  authService:  AuthService, private fb: FacebookService) {
        this.userDetails = this.authService.isUserLoggedIn();
        this.getRems();
        console.log(this.rems);

        let initParams: InitParams = {
          appId: '1444291749057682',
          xfbml: true,
          version: 'v2.8'
        };
        fb.init(initParams);
      
    }    

    getRems(){
      this.rems = localStorage.getItem('rems');
      this.remsP = localStorage.getItem('remsP');
    }

    pay1(name){
      localStorage.setItem("payFor", name);
      localStorage.setItem("payForR", 'yes');
  
      // alert(this.userLogStat);
      // if(this.userLogStat == "null" || this.userLogStat == null || this.userLogStat == undefined){
      //   this.router.navigate(['/auth/register']);
      // }
      // else{
        this.router.navigate(['/pay-for']);
      // }
    }

     // SignOut Firebase Session and Clean LocalStorage
   logoutUser() {
    this.authService.logout()
      .then(res => {
        // console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  enrollForSch(){
    localStorage.setItem("payFor", "Scholarship");
    this.router.navigate(['/pay-for']);
  }
      
    open(content, type, modalDimension) {
        if (modalDimension === 'lg' && type === 'myCustomModalClass') {
            this.modalService.open(content, { windowClass: 'myCustomModalClass', size: 'lg', centered: true }).result.then((result) => {
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

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  'with: $reason';
        }
    }


  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}
 
  ngOnInit() {

    if(this.userDetails == "" || this.userDetails == "null" || this.userDetails == null || this.userDetails == undefined){
      this.router.navigate(['/auth/login']);
    }

        if(this.sWidth < this.sHeight){
            this.scrEEn = true;
        }
    // this.getRes();

  }

  hided() {
    document.getElementById("res").style.display = "block";
  }

  
}