import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipComponent } from './internship/internship.component';
import { OurinternshipprogramsComponent } from './internship/ourinternshipprograms/ourinternshipprograms.component';
import { MessageComponent } from './internship/message/message.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
// import { CountdownModule } from 'ng2-date-countdown';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './internship/message/message.module';
import { CountdownModule } from '../countdown/countdown/countdown.module';
import { PricecdlcComponent } from './internship/pricecdlc/pricecdlc.component';
import { CctfsdComponent } from './internship/cctfsd/cctfsd.component';

@NgModule({
  declarations: [InternshipComponent, OurinternshipprogramsComponent, PricecdlcComponent, CctfsdComponent ],
  imports: [
    CommonModule, 
    NgbModule,
    SharedModule,
    AngularFireAuthModule,
    CountdownModule,
    NgxUsefulSwiperModule,
    FormsModule, ReactiveFormsModule,
    MessageModule, 
    RouterModule.forChild([
      {
      path: '',
      component: InternshipComponent
      }
      ])
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  // providers: [
  //   AngularFireAuth
  // ],
  // exports: [MessageComponent]
})
export class InternshipModule { }
