import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsViewComponent } from './programs-view/programs-view.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProgramsViewComponent],
  imports: [
    CommonModule, 
    NgbModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: ProgramsViewComponent
    }
    ])
  ]
})
export class ProgramsModule { }
