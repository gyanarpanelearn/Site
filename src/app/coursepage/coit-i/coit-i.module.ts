import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoitIComponent } from './coit-i.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { Router, RouterModule } from '@angular/router';
import { InternshipModule } from 'src/app/internship/internship.module';
import { MessageModule } from 'src/app/internship/internship/message/message.module';

@NgModule({
  declarations: [CoitIComponent],
  imports: [
    CommonModule,
    SharedModule,
    InternmessagesModule, 
    MessageModule,
    // InternshipModule,
    RouterModule.forChild([
    {
    path: '',
    component: CoitIComponent
    }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoitIModule { }
