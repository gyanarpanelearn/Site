import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../core/firebase.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  userDetails: any;
  res: any;

  constructor(public firebaseService: FirebaseService, private  authService:  AuthService, private router: Router) { }

  ngOnInit() {
    this.userDetails = this.authService.isUserLoggedIn();
    this.getAllExams();
  }

  getAllExams(){
    this.firebaseService.getAllExams()
    .subscribe(result => {
      this.res = result; 
      // console.log(this.items.payload.doc.data().name);
      // alert(result);
      // console.log(result);
    })
  }

}
