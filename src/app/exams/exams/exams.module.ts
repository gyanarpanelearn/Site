import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      {
      path: '',
      component: ExamsComponent
      }
      ])
  ],
  // exports: [ExamsComponent]
})
export class ExamsModule { }
 