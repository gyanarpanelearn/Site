import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdHomeComponent } from './sd-home/sd-home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnrProgsComponent } from './enr-progs/enr-progs.component';
import { OurinternshipprogramsModule } from '../modules/ourinternshipprograms/ourinternshipprograms.module';

@NgModule({
  declarations: [SdHomeComponent, EnrProgsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
    OurinternshipprogramsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StudentDashModule { }
