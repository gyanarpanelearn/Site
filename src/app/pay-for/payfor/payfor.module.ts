import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayForComponent } from './payfor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PayForComponent],
  imports: [
    CommonModule,
    SharedModule, 
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
    {
    path: '',
    component: PayForComponent
    }
    ])
  ]
})
export class PayforModule { }
