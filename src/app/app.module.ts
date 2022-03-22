import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { StudentDashModule } from './student-dash/student-dash.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { F04Component } from './f04/f04.component';
// import { PlacedSComponent } from './placed-s/placed-s.component';
import { FacebookModule } from 'ngx-facebook';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
// import { SalesforceAdminComponent } from './salesforce-admin/salesforce-admin.component';
// import { IdeComponent } from './ide/ide.component';

@NgModule({
  declarations: [
    AppComponent,
    F04Component,
    // SalesforceAdminComponent,
    // IdeComponent
    // PlacedSComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    RouterModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentDashModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FacebookModule.forRoot()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
