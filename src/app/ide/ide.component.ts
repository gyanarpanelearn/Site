import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../core/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit {


  isCollapsed: boolean = true;
  closeResult: string;
  show: boolean = false;
  userDetails: any;
  showMessage: any;
  // myElement: any;

  sWidth: number = window.innerWidth;
  sHeight: number = window.innerHeight;
  scrEEn: boolean = false;
  rems: string;
  remsP: string;
  examApp: boolean = true;
  lresult: any;

  constructor(private router: Router, private modalService: NgbModal, public firebaseService: FirebaseService, private authService: AuthService) {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  ngOnInit() {

    if (this.userDetails == "" || this.userDetails == "null" || this.userDetails == null || this.userDetails == undefined) {
      this.router.navigate(['/auth/login']);
    }

    if (this.sWidth < this.sHeight) {
      this.scrEEn = true;
    }
  }


}
