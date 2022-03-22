import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fbform2Component } from './fbform2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Fbform2Component],
  imports: [
    CommonModule,   
    SharedModule,
    NgbModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
    {
    path: '',
    component: Fbform2Component
    }
    ])
  ]
})
export class Fbform2Module { }
