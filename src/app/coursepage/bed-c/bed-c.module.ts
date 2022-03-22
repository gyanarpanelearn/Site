import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedCComponent } from './bed-c.component';
import { InternmessagesModule } from 'src/app/modules/internmessages/internmessages.module';
import { SharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BedCComponent],
  imports: [
    CommonModule,
    InternmessagesModule,
    SharedModule,
    RouterModule
  ]
})
export class BedCModule { }
