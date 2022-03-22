import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TeamAbtComponent } from './team-abt/team-abt.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AboutComponent, TeamAbtComponent],
  imports: [
    CommonModule,
    SharedModule, 
    NgbModule,
    RouterModule.forChild([
    {
    path: '',
    component: AboutComponent
    }
    ])
    ]
})
export class AboutModule { }
