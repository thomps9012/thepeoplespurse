import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { LandingComponent } from './landing/landing.component';
import { InformationComponent } from './information/information.component';
import { VotingComponent } from './voting/voting.component';
import { ResultsComponent } from './results/results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ActionFormComponent } from './action-form/action-form.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavCardComponent,
    LandingComponent,
    InformationComponent,
    VotingComponent,
    ResultsComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ActionFormComponent,
    TeacherSignupComponent,
    TeacherProfileComponent,
    TeacherLoginComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'info', component: InformationComponent},
      {path: 'voting', component: VotingComponent},
      {path: 'results', component: ResultsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'educatorLogin', component: TeacherLoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'educatorSignUp', component: TeacherSignupComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'educatorProfile', component: TeacherProfileComponent},
      {path: 'action', component: ActionFormComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

