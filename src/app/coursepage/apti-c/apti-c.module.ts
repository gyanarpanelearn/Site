import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptiCComponent } from './apti-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AptiCComponent],
  imports: [
    CommonModule, 
    InternmessagesModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: AptiCComponent
    }
    ])
  ]
})
export class AptiCModule { }
