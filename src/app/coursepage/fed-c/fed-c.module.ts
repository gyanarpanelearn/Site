import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedCComponent } from './fed-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FedCComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    SharedModule,
    RouterModule
  ]
})
export class FedCModule { }
