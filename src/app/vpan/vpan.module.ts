import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VpanComponent } from './vpan/vpan.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

@NgModule({
  declarations: [VpanComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FacebookModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forChild([
      {
      path: '',
      component: VpanComponent
      }
      ])
    ]
})
export class VpanModule { }
