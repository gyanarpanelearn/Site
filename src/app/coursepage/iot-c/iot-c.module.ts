import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IotCComponent } from './iot-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({ 
  declarations: [IotCComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: IotCComponent
    }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IotCModule { }
