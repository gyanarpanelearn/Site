import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipComponent } from './scholarship/scholarship.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScholarshipComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,
    RouterModule.forChild([
      {
      path: '',
      component: ScholarshipComponent
      }
      ])
  ]
  // exports: [ScholarshipComponent]
})
export class ScholarshipModule { }
