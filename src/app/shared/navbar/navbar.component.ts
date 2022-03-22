import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthService } from  '../../core/auth.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
   errorMessage: string;
  successMessage: string;

  route: string;

  show:boolean = false;

  sWidth:number = window.innerWidth;
  sHeight:number = window.innerHeight;
  scrEEn:boolean =false;

  navHome:boolean = false;
  navTeam:boolean = false;
  navCont:boolean = false;
  navAbou: boolean = false; 

  userDetails: any;
  logged: boolean = false;
    isTeamee: boolean = false;

  scrollToElement($element): void {
    //   console.log($element);
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

  constructor(public location: Location, private router: Router, private  authService:  AuthService) {
      this.userDetails = this.authService.isUserLoggedIn();
  }

  onClickN($element){
      let x = document.querySelector("#"+$element);
      if (x){
          x.scrollIntoView();
      }
  }

 

  ngOnInit() {
      if(this.sWidth < this.sHeight){
          this.scrEEn = true;
      }

      if(!(this.userDetails == "" || this.userDetails == "null" || this.userDetails == null || this.userDetails == undefined)){
          this.logged = true;
      }
      
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
         if (event.url != this.lastPoppedUrl)
             this.yScrollStack.push(window.scrollY);
     } else if (event instanceof NavigationEnd) {
         if (event.url == this.lastPoppedUrl) {
             this.lastPoppedUrl = undefined;
             window.scrollTo(0, this.yScrollStack.pop());
         } else
             window.scrollTo(0, 0);
     }
   });
   this.location.subscribe((ev:PopStateEvent) => {
       this.lastPoppedUrl = ev.url;
   });


  //  most trusted navigation
  this.isHome();
  this.isAbou();
  this.isTeame();
  }

  isTeame() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '/home' || titlee === '/about-us' ) {
        this.isTeamee = true;
    }
    else {
        this.isTeamee = false;
    }
}

// SignOut Firebase Session and Clean LocalStorage
logoutUser() {
    this.authService.logout()
      .then(res => {
        // console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      });
  }

  isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/home' ) {
          // return true;
          // alert("home");
          this.navHome = true;
          this.navTeam = false;
          this.navCont = false;
          this.navAbou = false;
      }
      else {
          return false;
      }
  }
  isTeam() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/home' ) {
          this.navHome = false;
          this.navTeam = true;
          this.navCont = false;
          this.navAbou = false;
      }
  }
  isCont() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/home' ) {
          this.navHome = false;
          this.navTeam = false;
          this.navCont = true;
          this.navAbou = false;
      }
  }
  isAbou() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/about-us' ) {
          this.navHome = false;
          this.navTeam = false;
          this.navCont = false;
          this.navAbou = true;
      }
  }
  isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/documentation' ) {
          return true;
      }
      else {
          return false;
      }
  }

  
// 
}
