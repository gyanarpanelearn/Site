import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesforceAdminComponent } from './salesforce-admin.component';

const routes: Routes = [
  {
    path: '',
    component: SalesforceAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesforceAdminRoutingModule { }
