import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsdCComponent } from './fsd-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PlacedSModule } from 'src/app/placed-s/placed-s.module';
import { OthercoursesModule } from '../othercourses/othercourses.module';
import { PricefsdComponent } from './pricefsd/pricefsd.component';
import { CctfsdComponent } from './cctfsd/cctfsd.component';
// import { PlacedSComponent } from 'src/app/placed-s/placed-s.component';

@NgModule({
  declarations: [FsdCComponent, PricefsdComponent, CctfsdComponent, 
  ],
  imports: [
    CommonModule,
    InternmessagesModule,
    PlacedSModule,
    OthercoursesModule,
    SharedModule,
    RouterModule.forChild([
    {
    path: '',
    component: FsdCComponent
    }
    ])
  ] 
})
export class FsdCModule { }
