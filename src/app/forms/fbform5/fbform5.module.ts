import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fbform5Component } from './fbform5.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Fbform5Component],
  imports: [
    CommonModule, 
    FormsModule,ReactiveFormsModule,
    SharedModule,NgbModule,
    RouterModule.forChild([
    {
    path: '',
    component: Fbform5Component
    }
    ])
  ]
})
export class Fbform5Module { }
