import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testf1Component } from './testf1.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Testf1Component],
  imports: [
    CommonModule, 
    SharedModule,
    NgbModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
    {
    path: '',
    component: Testf1Component
    }
    ])
  ]
})
export class Testf1Module { }
