import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricefsd',
  templateUrl: './pricefsd.component.html',
  styleUrls: ['./pricefsd.component.scss']
})
export class PricefsdComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
  }


userLogStat:any = localStorage.getItem("user");

pay1(name){
  localStorage.setItem("payFor", name);

  // alert(this.userLogStat);
  if(this.userLogStat == "null" || this.userLogStat == null || this.userLogStat == undefined){
    this.router.navigate(['/auth/register']);
  }
  else{
    this.router.navigate(['/pay-for']);
  }
}

}
