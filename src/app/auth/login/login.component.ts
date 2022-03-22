import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  constructor(public firebaseService: FirebaseService, private router: Router, private authService: AuthService) {
    this.isForgotPassword = false;

  }

  emailInput: any;
  passwordInput: any;

  // loginUser(){
  //   if(this.emailInput == "student@example.com" && this.passwordInput == "123456"){
  //         this.router.navigate(['/student-dash']);

  //   }
  // }

  userLogStat: any;
  enrolStat: any;

  payStat() {
    // console.log("in pay syat i am null",this.userLogStat);
    this.userLogStat = localStorage.getItem('user');
    // console.log("in pay2 syat i am null",this.userLogStat);
    if (this.enrolStat == "Scholarship" || this.enrolStat == "Core Development Life Cycle" || this.enrolStat == "Core of IT industry" || this.enrolStat == "Internet of things(IOT)" || this.enrolStat == "Machine learning(ML)" || this.enrolStat == "Core Development Life Cycle R" || this.enrolStat == "Core of IT industry R" || this.enrolStat == "Internet of things(IOT) R" || this.enrolStat == "Machine learning(ML) R") {
      this.router.navigate(['/pay-for']);
    }
    else if (this.userLogStat == "null" || this.userLogStat == null) {
    } else {
      this.router.navigate(['/student-dash']);
    }




    // if(this.userLogStat != null){

    //   console.log("i am null",this.userLogStat);

    //   if(this.userLogStat != "null"){
    //     console.log("this is userlogstat ",this.userLogStat );
    //     this.router.navigate(['/student-dash']);
    //   }
    //   }
  }


  ngOnInit() {
    this.userLogStat = localStorage.getItem('user');
    this.enrolStat = localStorage.getItem('payFor');
    // console.log("checking user stat",this.userLogStat);
    if (this.userLogStat == "null" || this.userLogStat == null) {
    } else {
      this.router.navigate(['/student-dash']);
    }




  }



  //  
  selectedVal: string;
  responseMessage: string = ' ';
  responseMessageType: string = '';
  nameInput: string;
  isForgotPassword: boolean;
  userDetails: any;



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

  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        //  console.log(res);
        //  this.showMessage("success", "Successfully Logged In!");
        this.isUserLoggedIn();
        //  Swal.fire(
        //    'Good',
        //    'Login Success',
        //    'success'
        //  );
        //  this.router.navigate(['/student-dash']);
        this.payStat();
      }, err => {
        //  this.showMessage("danger", err.message);
        Swal.fire(
          'Bad',
          'Invalid Creentials',
          'error'
        );

      });


  }

  // Register user with  provided Email/ Password
  registerUser() {

    //  this.firebaseService.createUser2(this.nameInput, this.emailInput)
    //  .then(
    //    res => {
    //       // this.router.navigate(['/home']);


    //    }
    //  );

    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {

        // Send Varification link in email
        this.authService.sendEmailVerification().then(res => {
          //  console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Registration Successful! Please Verify Your Email");
          Swal.fire(
            'Good',
            'Registration Successful! Please Check Your Email for more details<br><button>dcdx</button>',
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
        this.isUserLoggedIn();


      }, err => {
        this.showMessage("danger", err.message);
        Swal.fire(
          'Bad',
          'Something went wrong',
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
        console.log(res);
        this.isUserLoggedIn();

        this.firebaseService.loginSuccessMail(this.userDetails.email, this.userDetails.displayName)
          .then(
            res => {
              console.log(res);
            }
          );
        this.showMessage("success", "Successfully Logged In with Google");
        this.isUserLoggedIn();
        // this.router.navigate(['/student-dash']);
        this.payStat();
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
  // 
}
