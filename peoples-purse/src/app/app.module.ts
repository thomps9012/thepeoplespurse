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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavCardComponent,
    LandingComponent,
    InformationComponent,
    VotingComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'info', component: InformationComponent},
      {path: 'voting', component: VotingComponent},
      {path: 'results', component: ResultsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
