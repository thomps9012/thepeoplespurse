import { NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';

// const token = localStorage.getItem('AUTH_TOKEN')

@NgModule({
  exports: [
    HttpClientModule
  ],
})


export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        // change on PROD
        uri: 'http://localhost:4201/',
        // headers: new HttpHeaders().set('auth', token || '')
      }),
      cache: new InMemoryCache(),
    });
  }
}
