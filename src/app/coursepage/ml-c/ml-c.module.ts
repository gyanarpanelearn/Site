import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlCComponent } from './ml-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MlCComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: MlCComponent
    }
    ])
  ]
})
export class MlCModule { }
