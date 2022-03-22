import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IotIComponent } from './iot-i.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { InternshipModule } from 'src/app/internship/internship.module';
import { MessageModule } from 'src/app/internship/internship/message/message.module';

@NgModule({
  declarations: [IotIComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    SharedModule, 
    // InternshipModule,
    MessageModule, 
    RouterModule.forChild([
    {
    path: '',
    component: IotIComponent
    }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IotIModule { }
