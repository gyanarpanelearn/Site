import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdlcIComponent } from './cdlc-i.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { InternshipModule } from 'src/app/internship/internship.module';
import { MessageModule } from 'src/app/internship/internship/message/message.module';

@NgModule({
  declarations: [CdlcIComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    MessageModule,
    SharedModule, 
    // InternshipModule,
    RouterModule.forChild([
    {
    path: '',
    component: CdlcIComponent
    }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CdlcIModule { }
