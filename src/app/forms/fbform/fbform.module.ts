import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbformComponent } from './fbform.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FbformComponent],
  imports: [
    CommonModule, 
    SharedModule,
    NgbModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild([
    {
    path: '',
    component: FbformComponent
    }
    ])
  ]
})
export class FbformModule { }
