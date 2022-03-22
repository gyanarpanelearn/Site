import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2' 
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  fname : any;
  lname : any;
  email : any;
  msg : any;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  contactus() {

    this.firebaseService.contactus(this.fname, this.lname, this.email, this.msg)
    .then(
      res => {
         // this.router.navigate(['/home']);
        //  alert(res);
        //  alert("Thanks for Contacting us");
        Swal.fire(
          '',
          'Thank you for choosing us. Our team shall be reaching you shortly',
          'success'
        );
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.msg = "";
      }
    );
    }

}
