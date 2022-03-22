import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesforceAdminRoutingModule } from './salesforce-admin-routing.module';
import { SalesforceAdminComponent } from './salesforce-admin.component';
import { SharedModule } from '../shared/shared.module';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SalesforceAdminComponent],
  imports: [
    CommonModule,
    SalesforceAdminRoutingModule,
    SharedModule,
    NgbModule,
    // NgbAccordion
  ]
})
export class SalesforceAdminModule { }
