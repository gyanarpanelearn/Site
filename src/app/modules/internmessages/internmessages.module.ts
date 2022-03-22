import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternmessagesComponent } from './internmessages.component';

@NgModule({
  declarations: [InternmessagesComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InternmessagesModule { }
 