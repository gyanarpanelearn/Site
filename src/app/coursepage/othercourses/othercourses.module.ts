import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthercoursesComponent } from './othercourses.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OthercoursesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ OthercoursesComponent ]
})
export class OthercoursesModule { }
