import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../../core/firebase.service';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

declare var Razorpay: any;

@Component({
  selector: 'app-payfor',
  templateUrl: './payfor.component.html',
  styleUrls: ['./payfor.component.scss']
})
export class PayForComponent implements OnInit {

  loadAPI: Promise<any>;
  userDetails: any;
  haveCoupon: boolean = false;
  haveCoupon2: boolean;
  show: boolean = false;

  showName: string;
  elementRef: any;
  rem: string;
  onlyR: any;
  noR: any;
  refCodeStat: string;

  constructor(private router: Router, private modalService: NgbModal, public firebaseService: FirebaseService, private authService: AuthService) {

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    // this.addJsToElement('https://checkout.razorpay.com/v1/checkout.js').onload = () => {
    //     console.log('Script 2loaded');
    // }

    this.userDetails = this.authService.isUserLoggedIn();
    this.email = this.userDetails.email;
    // alert(JSON.stringify(this.userDetails));
    // console.log(" this userdetails ",this.userDetails);

    this.pType = localStorage.getItem("payFor");
    this.rem = localStorage.getItem("payForR");
    localStorage.setItem("payForR", "no");
    // localStorage.setItem("rems", "no");
    // console.log(this.rem);
    // this.fees = localStorage.getItem("fees");

    this.getFees();
    // console.log(this.fees, this.pType, this.email);

  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["https://checkout.razorpay.com/v1/checkout.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  fname: any;
  lname: any;
  email: any;
  msg: any;
  mob: number;
  options: any;
  enablePayment: boolean = false;

  pType: any;
  fees: any;
  Tfees: any;
  gw: any;
  refCode: string;

  title = 'client';

  setOptions(amount, pType, email, name) {

    let fireserv = this.firebaseService;
    let routter = this.router;
    let refC = this.refCode;

    this.options = {
      "key": 'rzp_test_USRzlhpdzmLnFS', // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      "currency": "INR",
      "name": "Gyanarpan",
      // "description": "Gyanarpan Learning",
      "image": "https://firebasestorage.googleapis.com/v0/b/gyanarpanlearning-live.appspot.com/o/brand%2Fpravakti_logo.png?alt=media&token=2dfb3014-6163-40d7-8187-3384972e2782",
      "handler": function (response) {
        // alert(response.razorpay_payment_id);

        // console.log(email);

        // console.log(response.razorpay_payment_id, email, pType, amount);

        // fireserv.paySuccess("123456jj", "abc@abc.cc", "Core Of IT In", amount)
        // .then(
        //   res => {
        //     console.log("Nav to studdash")
        //    routter.navigate(['/student-dash']);
        //   }
        // );

        fireserv.paySuccess(response.razorpay_payment_id, email, pType, amount)
          .then(
            res => {
              // console.log("Nav to studdash")
              fireserv.payMailSuccess(response.razorpay_payment_id, email, pType, amount, name)
                .then(
                  res => {

                    if (sessionStorage.getItem("refCode") != null || sessionStorage.getItem("refCode") != "null") {
                      fireserv.applyRefCode(email, refC, pType, response.razorpay_payment_id, amount)
                        .then(
                          res => {
                            // this.router.navigate(['/home']);
                            sessionStorage.setItem("refCode", null);
                            console.log(res);
                            // this.refCode = "";
                          }
                        );
                    }
                    routter.navigate(['/student-dash']);
                  }
                )
            }
          );

      },

      "prefill": {
        "name": this.userDetails.displayName,
        "email": this.email,
        // "contact": this.mob
      },
      "notes": {
        // "Notes": this.msg
      },
      "theme": {
        "color": "#126f9a"
      }
    };
  }

  ffees: any;
  getFees() {

    this.firebaseService.getFees(this.pType)
      .subscribe(result => {
        this.ffees = result.map(e => {
          return {
            Tfees: e.payload.doc.data()['Tfees'],
            fees: e.payload.doc.data()['fees'],
            course: e.payload.doc.data()['cName'],
            gw: e.payload.doc.data()['gw']
          };
        })
        if (this.ffees.length == 1) {
          this.fees = this.ffees[0].fees;
          this.Tfees = this.ffees[0].Tfees;
          this.gw = this.ffees[0].gw;
          // console.log("fees ", this.fees);
          this.enablePayment = true;
        } else {
          Swal.fire(
            'Error',
            'Something went wrong',
            'error'
          );
          // console.log("error");
        }
      });

    if (this.rem === "yes") {
      this.onlyR = this.pType.substring(0, this.pType.length - 4);
      this.onlyR = this.onlyR + ' R';
      // console.log( this.onlyR)
      this.firebaseService.getFees(this.onlyR)
        .subscribe(result => {
          this.ffees = result.map(e => {
            return {
              Tfees: e.payload.doc.data()['Tfees'],
              fees: e.payload.doc.data()['fees'],
              course: e.payload.doc.data()['cName'],
              gw: e.payload.doc.data()['gw']
            };
          })
          if (this.ffees.length == 1) {
            this.onlyR = this.ffees[0].fees;
            // console.log("fees ", this.fees);
            this.enablePayment = true;
          } else {
            Swal.fire(
              'Error',
              'Something went wrong',
              'error'
            );
            // console.log("error");
          }
        });

      this.noR = this.pType.substring(0, this.pType.length - 4);
      // this.noR = this.noR + '';
      // console.log( this.noR)
      this.firebaseService.getFees(this.noR)
        .subscribe(result => {
          this.ffees = result.map(e => {
            return {
              Tfees: e.payload.doc.data()['Tfees'],
              fees: e.payload.doc.data()['fees'],
              course: e.payload.doc.data()['cName'],
              gw: e.payload.doc.data()['gw']
            };
          })
          if (this.ffees.length == 1) {
            this.noR = this.ffees[0].fees;
            // console.log("fees ", this.fees);
            this.enablePayment = true;
          } else {
            Swal.fire(
              'Error',
              'Something went wrong',
              'error'
            );
            // console.log("error");
          }
        });
    }
  }

  // this.mallService.readMalls().subscribe(data => { this.malls = data.map(e => { return { id: e.payload.doc.id, isEdit: false, name: e.payload.doc.data()['name'], address: e.payload.doc.data()['address'], mallId: e.payload.doc.data()['mallId'], }; }) 

  initPay() {
    // console.log(this.fees);
    this.setOptions(this.fees, this.pType, this.email, this.userDetails.displayName);
    // console.log("this is option", this.options);
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    // console.log("works");
  }

  applyRefCode() {
    sessionStorage.setItem("refCode", this.refCode);
    this.chkRefCode();
    // this.firebaseService.applyRefCode(this.email, this.refCode, this.pType)
    // .then(
    //   res => {
    //      // this.router.navigate(['/home']);
    //     console.log(res);
    //     this.refCode = "";
    //   }
    // );
  }

  chkRefCode() {
    this.refCodeStat = sessionStorage.getItem("refCode");
    // alert(this.refCodeStat);
  }

  ngOnInit() {
    if (!(this.authService.isUserLoggedIn())) {
      this.router.navigate(['/auth/register']);
    }

    // this.addJsToElement('https://checkout.razorpay.com/v1/checkout.js').onload = () => {
    //     console.log('Script 2loaded');
    // }

    if (this.pType == "Scholarship") {
      this.showName = "Scholarship Test"
    }
    else {
      this.showName = this.pType;
    }

    this.chkRefCode();

    // this.getFees();
    // console.log(this.fees);
    // this.setOptions(this.fees);

  }

}