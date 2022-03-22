import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../core/auth.service';
import Swal from 'sweetalert2'
import { FirebaseService } from '../../core/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  show: boolean = false;
  // userLogStat:any = this.isUserLoggedIn();

  enrolStat:any  ;
  userExist: string = 'no';
  ngOnInit() {
    

  }

   selectedVal: string;
   responseMessage: string = '';
   responseMessageType: string = '';
  //  nameInput: string;
  fname: string = '';
  lname: string = '';
  contact: number = null;
   emailInput: string = '';
   passwordInput: string = '';
   cpasswordInput: string = '';
   isForgotPassword: boolean;
   userDetails: any;
  
   constructor(public firebaseService: FirebaseService,private  authService:  AuthService, private router: Router) { 
    this.isForgotPassword = false;
  }
  
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

        // console.log("exiting payStat");
      }, err => {
        this.showMessage("danger", err.message);
      });
  }
  
   // Register user with  provided Email/ Password
   registerUser() {
 
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

        // this.payStat();
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
  
  
   // Open Popup to Login with Google Account
   googleLogin() {
     this.authService.loginWithGoogle()
       .then(res => {
        //  console.log(res);
         this.showMessage("success", "Successfully Registered with Google");
         Swal.fire(
          'Success',
          'Successfully Registered with Google',
          'success'
        );
        //  this.isUserLoggedIn();
        //  this.router.navigate(['/student-dash']);
        // this.payStatG();
       }, err => {
         this.showMessage("danger", err.message);
       });
   }
  

}