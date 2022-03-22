import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // modalService: any;
  closeResult: string;

  show: boolean = false;

  sWidth: number = window.innerWidth;
  sHeight: number = window.innerHeight;
  scrEEn: boolean = false;
  userDetails: any;

  constructor(private router: Router, private modalService: NgbModal, private authService: AuthService) {
    this.userDetails = this.authService.isUserLoggedIn();
  }
  home: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hrs",
    Minutes: "Mins",
    Seconds: "Secs",
    MilliSeconds: "MilliSeconds"
  };

  ngOnInit() {
    if (!(this.userDetails == "" || this.userDetails == "null" || this.userDetails == null || this.userDetails == undefined)) {
      this.router.navigate(['/auth/login']);
    }
    localStorage.setItem("payFor", null);

    if (this.sWidth < this.sHeight) {
      this.scrEEn = true;
    }
  }

}