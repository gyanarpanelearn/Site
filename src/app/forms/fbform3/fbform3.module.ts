import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fbform3Component } from './fbform3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Fbform3Component],
  imports: [
    CommonModule,
    SharedModule,  
    NgbModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
    {
    path: '',
    component: Fbform3Component
    }
    ])
  ]
})
export class Fbform3Module { }
