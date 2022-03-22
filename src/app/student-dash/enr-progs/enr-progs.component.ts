import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-enr-progs',
  templateUrl: './enr-progs.component.html',
  styleUrls: ['./enr-progs.component.scss']
})
export class EnrProgsComponent implements OnInit {

  userDetails: any;
  i: number;
  arrayOfCourses: any;
  c1: boolean = false;
  enrStatus: boolean = false;
  r1: boolean = false;
  i1: boolean = false;
  r2: boolean = false;
  i2: boolean = false;
  r3: boolean = false;
  i3: boolean = false;
  r4: boolean = false;
  i4: boolean = false;
  scp: boolean = false;
  r01: boolean = false;
  rem: boolean = false;
  r02: boolean = false;
  r03: boolean = false;
  r04: boolean = false;
  r001: boolean = false;
  r002: boolean = false;
  r003: boolean = false;
  r004: boolean = false;
  
  constructor(private router: Router, private modalService: NgbModal,public firebaseService: FirebaseService, private  authService:  AuthService) { 
    this.userDetails = this.authService.isUserLoggedIn();
  }

  userLogStat:any = localStorage.getItem("user");
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

  ngOnInit() {
    this.getRes();
  }
  
  ffees: any;
  res:any;
  getRes() {

    // console.log("pawan");
    

    this.firebaseService.enrStats(this.userDetails.email)
      .subscribe(result => {

        this.arrayOfCourses = result.map(e => {
          return {
            course: e.payload.doc.data()['course'],
            paid: e.payload.doc.data()['fees'],
            // email: e.payload.doc.data()['email'],
          };
        })
        for(this.i = 0 ; this.i <= 8 ; this.i++){
          if(this.arrayOfCourses[this.i] == undefined){
            this.arrayOfCourses[this.i] = {course: "no"};
          }
        }

        // console.log("this is my courses", this.arrayOfCourses);

        if(this.arrayOfCourses[0].course == "Machine learning(ML) (R)" || this.arrayOfCourses[1].course == "Machine learning(ML) (R)" || this.arrayOfCourses[2].course == "Machine learning(ML) (R)" ||  this.arrayOfCourses[3].course == "Machine learning(ML) (R)" ||  this.arrayOfCourses[4].course == "Machine learning(ML) (R)"  || this.arrayOfCourses[5].course == "Machine learning(ML) (R)" || this.arrayOfCourses[6].course == "Machine learning(ML) (R)" ||  this.arrayOfCourses[7].course == "Machine learning(ML) (R)" ||  this.arrayOfCourses[8].course == "Machine learning(ML) (R)"){
          this.enrStatus = true;
          this.r001 = true; 
        }

        if(this.arrayOfCourses[0].course == "Machine learning(ML)" || this.arrayOfCourses[1].course == "Machine learning(ML)" || this.arrayOfCourses[2].course == "Machine learning(ML)" ||  this.arrayOfCourses[3].course == "Machine learning(ML)" ||  this.arrayOfCourses[4].course == "Machine learning(ML)" || this.arrayOfCourses[5].course == "Machine learning(ML)" || this.arrayOfCourses[6].course == "Machine learning(ML)" ||  this.arrayOfCourses[7].course == "Machine learning(ML)" ||  this.arrayOfCourses[8].course == "Machine learning(ML)"){
          this.enrStatus = true;
          this.r1 = true;
        }

        if(this.arrayOfCourses[0].course == "Machine learning(ML) R" || this.arrayOfCourses[1].course == "Machine learning(ML) R" || this.arrayOfCourses[2].course == "Machine learning(ML) R" ||  this.arrayOfCourses[3].course == "Machine learning(ML) R" ||  this.arrayOfCourses[4].course == "Machine learning(ML) R"  || this.arrayOfCourses[5].course == "Machine learning(ML) R" || this.arrayOfCourses[6].course == "Machine learning(ML) R" ||  this.arrayOfCourses[7].course == "Machine learning(ML) R" ||  this.arrayOfCourses[8].course == "Machine learning(ML) R"){
          this.enrStatus = true;
          this.r01 = true; 
          this.rem = true;
        if(!this.r001){
          localStorage.setItem('rems', 'yes');
          localStorage.setItem('remsP', "Machine learning(ML) (R)");
        }  else{
          localStorage.setItem('rems', 'no');
          localStorage.setItem('remsP', null);
        } 
        }

        if(this.arrayOfCourses[0].course == "Core of IT industry (R)" || this.arrayOfCourses[1].course == "Core of IT industry (R)" || this.arrayOfCourses[2].course == "Core of IT industry (R)" ||  this.arrayOfCourses[3].course == "Core of IT industry (R)" ||  this.arrayOfCourses[4].course == "Core of IT industry (R)" || this.arrayOfCourses[5].course == "Core of IT industry (R)" || this.arrayOfCourses[6].course == "Core of IT industry (R)" ||  this.arrayOfCourses[7].course == "Core of IT industry (R)" ||  this.arrayOfCourses[8].course == "Core of IT industry (R)"){
          this.enrStatus = true;
          this.r002 = true;
        }

        if(this.arrayOfCourses[0].course == "Core of IT industry" || this.arrayOfCourses[1].course == "Core of IT industry" || this.arrayOfCourses[2].course == "Core of IT industry" ||  this.arrayOfCourses[3].course == "Core of IT industry" ||  this.arrayOfCourses[4].course == "Core of IT industry" || this.arrayOfCourses[5].course == "Core of IT industry" || this.arrayOfCourses[6].course == "Core of IT industry" ||  this.arrayOfCourses[7].course == "Core of IT industry" ||  this.arrayOfCourses[8].course == "Core of IT industry"){
          this.enrStatus = true;
          this.r2 = true;
        }

        if(this.arrayOfCourses[0].course == "Core of IT industry R" || this.arrayOfCourses[1].course == "Core of IT industry R" || this.arrayOfCourses[2].course == "Core of IT industry R" ||  this.arrayOfCourses[3].course == "Core of IT industry R" ||  this.arrayOfCourses[4].course == "Core of IT industry R" || this.arrayOfCourses[5].course == "Core of IT industry R" || this.arrayOfCourses[6].course == "Core of IT industry R" ||  this.arrayOfCourses[7].course == "Core of IT industry R" ||  this.arrayOfCourses[8].course == "Core of IT industry R"){
          this.enrStatus = true;
          this.r02 = true;
          this.rem = true;
        if(!this.r002){
          localStorage.setItem('rems', 'yes');
          localStorage.setItem('remsP', "Core of IT industry (R)");
        }  else{
          localStorage.setItem('rems', 'no');
          localStorage.setItem('remsP', null);
        }
        }

        if(this.arrayOfCourses[0].course == "Core Development Life Cycle (R)" || this.arrayOfCourses[1].course == "Core Development Life Cycle (R)" || this.arrayOfCourses[2].course == "Core Development Life Cycle (R)" ||  this.arrayOfCourses[3].course == "Core Development Life Cycle (R)" ||  this.arrayOfCourses[4].course == "Core Development Life Cycle (R)" || this.arrayOfCourses[5].course == "Core Development Life Cycle (R)" || this.arrayOfCourses[6].course == "Core Development Life Cycle (R)" ||  this.arrayOfCourses[7].course == "Core Development Life Cycle (R)" ||  this.arrayOfCourses[8].course == "Core Development Life Cycle (R)"){
          this.enrStatus = true;
          this.r003 = true;
          this.rem = true;
        }

        if(this.arrayOfCourses[0].course == "Core Development Life Cycle" || this.arrayOfCourses[1].course == "Core Development Life Cycle" || this.arrayOfCourses[2].course == "Core Development Life Cycle" ||  this.arrayOfCourses[3].course == "Core Development Life Cycle" ||  this.arrayOfCourses[4].course == "Core Development Life Cycle" || this.arrayOfCourses[5].course == "Core Development Life Cycle" || this.arrayOfCourses[6].course == "Core Development Life Cycle" ||  this.arrayOfCourses[7].course == "Core Development Life Cycle" ||  this.arrayOfCourses[8].course == "Core Development Life Cycle"){
          this.enrStatus = true;
          this.r3 = true;
        }

        if(this.arrayOfCourses[0].course == "Core Development Life Cycle R" || this.arrayOfCourses[1].course == "Core Development Life Cycle R" || this.arrayOfCourses[2].course == "Core Development Life Cycle R" ||  this.arrayOfCourses[3].course == "Core Development Life Cycle R" ||  this.arrayOfCourses[4].course == "Core Development Life Cycle R" || this.arrayOfCourses[5].course == "Core Development Life Cycle R" || this.arrayOfCourses[6].course == "Core Development Life Cycle R" ||  this.arrayOfCourses[7].course == "Core Development Life Cycle R" ||  this.arrayOfCourses[8].course == "Core Development Life Cycle R"){
          this.enrStatus = true;
          this.r03 = true;
          this.rem = true;
          if(!this.r003){
            localStorage.setItem('rems', 'yes');
            localStorage.setItem('remsP', "Core Development Life Cycle (R)");
          }  else{
            localStorage.setItem('rems', 'no');
            localStorage.setItem('remsP', null);
          }
        }

        if(this.arrayOfCourses[0].course == "Internet of things(IOT) (R)" || this.arrayOfCourses[1].course == "Internet of things(IOT) (R)" || this.arrayOfCourses[2].course == "Internet of things(IOT) (R)" ||  this.arrayOfCourses[3].course == "Internet of things(IOT) (R)" ||  this.arrayOfCourses[4].course == "Internet of things(IOT) (R)" || this.arrayOfCourses[5].course == "Internet of things(IOT) (R)" || this.arrayOfCourses[6].course == "Internet of things(IOT) (R)" ||  this.arrayOfCourses[7].course == "Internet of things(IOT) (R)" ||  this.arrayOfCourses[8].course == "Internet of things(IOT) (R)"){
          this.enrStatus = true;
          this.r004 = true;
          this.rem = true;
        }

        if(this.arrayOfCourses[0].course == "Internet of things(IOT)" || this.arrayOfCourses[1].course == "Internet of things(IOT)" || this.arrayOfCourses[2].course == "Internet of things(IOT)" ||  this.arrayOfCourses[3].course == "Internet of things(IOT)" ||  this.arrayOfCourses[4].course == "Internet of things(IOT)" || this.arrayOfCourses[5].course == "Internet of things(IOT)" || this.arrayOfCourses[6].course == "Internet of things(IOT)" ||  this.arrayOfCourses[7].course == "Internet of things(IOT)" ||  this.arrayOfCourses[8].course == "Internet of things(IOT)"){
          this.enrStatus = true;
          this.r4 = true;
        }

        if(this.arrayOfCourses[0].course == "Internet of things(IOT) R" || this.arrayOfCourses[1].course == "Internet of things(IOT) R" || this.arrayOfCourses[2].course == "Internet of things(IOT) R" ||  this.arrayOfCourses[3].course == "Internet of things(IOT) R" ||  this.arrayOfCourses[4].course == "Internet of things(IOT) R" || this.arrayOfCourses[5].course == "Internet of things(IOT) R" || this.arrayOfCourses[6].course == "Internet of things(IOT) R" ||  this.arrayOfCourses[7].course == "Internet of things(IOT) R" ||  this.arrayOfCourses[8].course == "Internet of things(IOT) R"){
          this.enrStatus = true;
          this.r04 = true;
          this.rem = true;
          if(!this.r004){
            localStorage.setItem('rems', 'yes');
            localStorage.setItem('remsP', "Internet of things(IOT) (R)");
          } else{
            localStorage.setItem('rems', 'no');
            localStorage.setItem('remsP', null);
          }
        }

        if(this.arrayOfCourses[0].course == "Scholarship" || this.arrayOfCourses[1].course == "Scholarship" || this.arrayOfCourses[2].course == "Scholarship" ||  this.arrayOfCourses[3].course == "Scholarship" ||  this.arrayOfCourses[4].course == "Scholarship" || this.arrayOfCourses[5].course == "Scholarship" || this.arrayOfCourses[6].course == "Scholarship" ||  this.arrayOfCourses[7].course == "Scholarship" ||  this.arrayOfCourses[8].course == "Scholarship"){
          this.enrStatus = true;
          this.scp = true;
        }

        // if(this.rem == true){
        //   localStorage.setItem('rems', 'yes');
        // } 
        if(this.r001 && this.r002 && this.r003 && this.r004){
          localStorage.setItem('rems', 'no');
          localStorage.setItem('remsP', null);
        }

        // console.log(this.arrayOfCourses[0])
        // const resultq = [];
        // const map = new Map();
        // for (const item of this.arrayOfCourses) {
        //   if (!map.has(item.course)) {
        //     map.set(item.course, true);    // set any value to Map
        //     resultq.push({
        //       course: item.course,
        //       email: item.email
        //     });
        //   }
        // }
        // console.log("resq", resultq);
      })

      // console.log(this.c1, "c1");

  } 

}