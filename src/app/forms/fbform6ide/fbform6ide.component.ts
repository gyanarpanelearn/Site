import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../core/firebase.service';
import Swal from 'sweetalert2'
import { IdeService } from 'src/app/core/ide.service';
@Component({
  selector: 'app-fbform6ide',
  templateUrl: './fbform6ide.component.html',
  styleUrls: ['./fbform6ide.component.scss']
})
export class Fbform6ideComponent implements OnInit {

  show: boolean = false;

  closeResult: string;
  isCollapsed: boolean = true;

  lang: number = 50;
  expectedop: string = "Write a.";
  program: any = '#include <stdio.h>\n\
  int main(void) {\n\
    char name[10];\n\
    scanf("%s", name);\n\
    printf("hello, %s\\n", name);\n\
    return 0;\n\
  }';
  stdin: string = "a."

  constructor(config: NgbModalConfig, private modalService: NgbModal, public ideService: IdeService) { }

  pushProgram() {
 
    // this.ideService.sProg()
    //   .then(
    //     res => {

    //     }
    //   );

    // createOrUpdatePolicy(form){
    //   if(this.selectedPolicy && this.selectedPolicy.id){
    //     form.value.id = this.selectedPolicy.id;
    //     this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
    //       console.log("Policy updated" , policy);
    //     });
    //   }
    //   else{
  
    //     this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
    //       console.log("Policy created, ", policy);
    //     });
    //   }
  
    // }
  }
  ngOnInit() {
  }

}
