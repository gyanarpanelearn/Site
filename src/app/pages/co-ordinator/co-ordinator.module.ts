import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoOrdinatorComponent } from './co-ordinator.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoOrdinatorComponent],
  imports: [
    CommonModule, 
    NgbModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: CoOrdinatorComponent
    }
    ])
    ]
})
export class CoOrdinatorModule { }
