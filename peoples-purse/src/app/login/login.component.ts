import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


const LOGIN = gql`
mutation Mutation($input: LoginInput!) {
  login(input: $input)
}
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  email = '';
  password = '';

  setEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  setPassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  login(event: Event) {
    event.preventDefault()

    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        input: {
          email: this.email,
          password: this.password
        }
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
