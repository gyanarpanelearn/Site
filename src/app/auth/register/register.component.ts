import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../../core/firebase.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  show: boolean = false;
  userLogStat: any = this.isUserLoggedIn();
  myRecaptcha = new FormControl(false);

  enrolStat: any;
  userExist: string = 'no';

  onScriptLoad() {
    // console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    // console.log('Something went long when loading the Google reCAPTCHA')
  }

  ngOnInit() {
    if (this.userLogStat != undefined) {
      this.router.navigate(['/student-dash']);
    }


    this.enrolStat = localStorage.getItem("payFor");

  }

  payStat() {
    if (this.enrolStat == "Scholarship" || this.enrolStat == "Core Development Life Cycle" || this.enrolStat == "Core of IT industry" || this.enrolStat == "Internet of things(IOT)" || this.enrolStat == "Machine learning(ML)") {
      this.router.navigate(['/pay-for']);
    }

    else {
      this.router.navigate(['/auth/login']);
    }
  }

  payStatG() {
    if (this.enrolStat == "Scholarship" || this.enrolStat == "Core Development Life Cycle" || this.enrolStat == "Core of IT industry" || this.enrolStat == "Internet of things(IOT)" || this.enrolStat == "Machine learning(ML)") {
      this.router.navigate(['/pay-for']);
    }

    else {
      this.router.navigate(['/student-dash']);
    }
  }

  //  
  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  //  nameInput: string;
  fname: string = '';
  lname: string = '';
  dob: any;
  contact: string;
  emailInput: string = '';
  collegeName: string;
  branch: string;
  degree: string;
  intIn: string;
  refCode: string;
  passwordInput: string = '';
  cpasswordInput: string = '';
  isForgotPassword: boolean;
  userDetails: any;

  constructor(public firebaseService: FirebaseService, private authService: AuthService, private router: Router) {
    this.isForgotPassword = false;

  }


  // Comman Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = "";
    }, 2000);
  }

  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        //  console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  logoutUser2() {
    this.authService.logout()
      .then(res => {
        // console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
        // console.log("calling payStat");

        this.payStat();
        // console.log("exiting payStat");
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        //  console.log(res);
        this.showMessage("success", "Successfully Logged In!");
        this.isUserLoggedIn();
        Swal.fire(
          'Good',
          'Login Success',
          'success'
        );
      }, err => {
        this.showMessage("danger", err.message);
        Swal.fire(
          'Bad',
          'Something went wrong',
          'error'
        );

      });

  }

  // Register user with  provided Email/ Password
  registerUser() {

    this.firebaseService.createUser2(this.fname, this.lname, this.emailInput, this.contact, this.dob, this.collegeName, this.branch, this.degree, this.intIn, this.refCode)
      .then(
        res => {
          // this.router.navigate(['/home']);


        }
      );

    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {

        // Send Varification link in email
        this.authService.sendEmailVerification().then(res => {
          //  console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Registration Successful! Please Verify Your Email");
          Swal.fire(
            'Good',
            'Registration Successful! Please Check Your Email for more details. <br><b>Note :</b> Mail could be in promotions or spam.',
            'success'
          );
        }, err => {
          this.showMessage("danger", err.message);
          Swal.fire(
            'Bad',
            'Something went wrong',
            'warning'
          );
        });
        //  this.isUserLoggedIn();
        // console.log("calling user Logout");
        this.logoutUser2();
        // console.log("calling payStat");

        this.payStat();
        // console.log("exiting payStat");


      }, err => {
        this.showMessage("danger", err.message);
        Swal.fire(
          'Bad',
          'Something went wrong2',
          'error'
        );
      });
  }

  // Send link on given email to reset password
  forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
      .then(res => {
        //  console.log(res);
        this.isForgotPassword = false;
        this.showMessage("success", "Please Check Your Email");
      }, err => {
        this.showMessage("danger", err.message);
        Swal.fire(
          'Good',
          'Password reset! Please Check Your Email',
          'success'
        );
      });
  }

  // Open Popup to Login with Google Account
  googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        //  console.log(res);
        this.showMessage("success", "Successfully Logged In with Google");
        this.isUserLoggedIn();
        //  this.router.navigate(['/student-dash']);
        this.firebaseService.createUser3(this.userDetails.email)
          .then(
            res => {
              console.log(res);
            }
          );
        this.payStatG();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
  //check if user registered
  // ffees: any;
  // getFees() {

  //   this.firebaseService.getUserReg(this.userDetails.email)
  //     .subscribe(result => {
  //       this.ffees = result.map(e => {
  //         return {
  //           fees: e.payload.doc.data()['fees'],
  //         };
  //       })
  //       if (this.ffees.length == 1) {
  //         this.userExist = this.ffees[0].fees;
  //       }
  //     });
  //     if(this.userExist == 'no'){

  //     }
  //   }

}
