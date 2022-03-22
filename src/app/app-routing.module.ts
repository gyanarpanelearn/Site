import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdHomeComponent } from './student-dash/sd-home/sd-home.component';
import { TermsComponent } from './shared/terms/terms.component';
import { F04Component } from './f04/f04.component';
// import { SalesforceAdminModule } from './salesforce-admin/salesforce-admin.module';
// import { IdeComponent } from './ide/ide.component';

const routes: Routes = [
  { path: 'student-dash', component: SdHomeComponent },
  { path: 'terms', component: TermsComponent },

  { path: '', loadChildren: './home/home.module#HomeModule' },

  { path: 'salesforce-admin', loadChildren: './salesforce-admin/salesforce-admin.module#SalesforceAdminModule' },

  { path: 'preplacement-scholarship-exam-for-computer-it-and-electronics-engineers', loadChildren: './scholarship/scholarship.module#ScholarshipModule' },
  { path: 'internship-for-computer-and-it-engineers', loadChildren: './internship/internship.module#InternshipModule' },
  // { path: 'programs', loadChildren: './programs/programs.module#ProgramsModule' },
  { path: 'join-as-a-coordinator', loadChildren: './pages/co-ordinator/co-ordinator.module#CoOrdinatorModule' },
  { path: 'about-us', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'contact-us', loadChildren: './pages/contact/contact.module#ContactModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'pay-for', loadChildren: './pay-for/payfor/payfor.module#PayforModule' },
  // { path: 'enroll-now', loadChildren: './forms/fbform4/fbform4.module#Fbform4Module' },
  // { path: 'ot1', loadChildren: './forms/testf1/testf1.module#Testf1Module' },
  { path: 'fb', loadChildren: './forms/fbform/fbform.module#FbformModule' },
  { path: 'earnnlearn', loadChildren: './forms/fbform3/fbform3.module#Fbform3Module' },
  { path: 'enq', loadChildren: './forms/fbform2/fbform2.module#Fbform2Module' },
  { path: 'join-coordinator', loadChildren: './forms/fbform5/fbform5.module#Fbform5Module' },
  // { path: 'inter-coit', loadChildren: './coursepage/coit-i/coit-i.module#CoitIModule' },
  // { path: 'inter-cdlc', loadChildren: './coursepage/cdlc-i/cdlc-i.module#CdlcIModule' },
  { path: 'inter-cdlc', redirectTo: 'internship-for-computer-and-it-engineers', pathMatch: 'full' },
  { path: 'internship', redirectTo: 'internship-for-computer-and-it-engineers', pathMatch: 'full' },
  // { path: 'inter-iot', loadChildren: './coursepage/iot-i/iot-i.module#IotIModule' },
  // { path: 'inter-ml', loadChildren: './coursepage/ml-i/ml-i.module#MlIModule' },
  // { path: 'preplacement/full-stack-development-training', loadChildren: './coursepage/fsd-c/fsd-c.module#FsdCModule' }, 
  { path: 'preplacement/sales-force-development-training', loadChildren: './coursepage/salf-c/salf-c.module#SalfCModule' },
  // { path: 'course-apti', loadChildren: './coursepage/apti-c/apti-c.module#AptiCModule' },
  // { path: 'course-iot', loadChildren: './coursepage/iot-c/iot-c.module#IotCModule' },
  // { path: 'course-ml', loadChildren: './coursepage/ml-c/ml-c.module#MlCModule' },
  { path: 'exams', loadChildren: './exams/exams/exams.module#ExamsModule' },
  { path: 'videos', loadChildren: './vpan/vpan.module#VpanModule' },

  { path: 'course-apti', redirectTo: 'preplacement/full-stack-development-training', pathMatch: 'full' },
  { path: 'course-iot', redirectTo: 'preplacement/full-stack-development-training', pathMatch: 'full' },
  { path: 'course-ml', redirectTo: 'preplacement/full-stack-development-training', pathMatch: 'full' },
  // { path: 'course-fsd', redirectTo: 'preplacement/full-stack-development-training', pathMatch: 'full' },
  { path: 'course-sforce', redirectTo: 'preplacement/sales-force-development-training', pathMatch: 'full' },
  // { path: 'test', loadChildren: './test/test/test.module#TestModule' },
  // { path: 'ide', loadChildren: './forms/fbform6ide/fbform6ide.module#Fbform6ideModule' },
  // { path: 'ide', component: IdeComponent },

  { path: '**', component: F04Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
