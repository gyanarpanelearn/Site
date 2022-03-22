import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Fbform6ideComponent } from './fbform6ide.component';

@NgModule({
  declarations: [Fbform6ideComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    SharedModule, NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: Fbform6ideComponent
      }
    ])
  ]
})
export class Fbform6ideModule { }
