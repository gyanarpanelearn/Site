import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HowdiffComponent } from './howdiff/howdiff.component';
import { ProgramsComponent } from './programs/programs.component';
import { PincludeComponent } from './pinclude/pinclude.component';
import { StartnowComponent } from './startnow/startnow.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [NavbarComponent, HowitworksComponent, HowdiffComponent, ProgramsComponent, PincludeComponent, StartnowComponent, TeamComponent, ContactusComponent,
    FooterComponent,
     TermsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  exports: [NavbarComponent, HowitworksComponent, HowdiffComponent, ProgramsComponent, PincludeComponent, StartnowComponent, TeamComponent, ContactusComponent, FooterComponent]

})
export class SharedModule { }
