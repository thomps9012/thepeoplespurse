import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


const LOGIN = gql`
mutation Mutation($input: LoginInput!) {
  login(input: $input) {
    token
    user {
    id
    username
  }
}
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
    // comment out
    event.preventDefault()
    console.log(this.email)
    console.log(this.password)
    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        input: {
          email: this.email,
          password: this.password
        }
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
      const username = data.login.user.username;
      const userId = data.login.user.id;
      const token = data.login.token;
      localStorage.setItem('USER', username)
      localStorage.setItem('USER_ID', userId)
      localStorage.setItem('AUTH_TOKEN', token)
      // load to profile page
      window.location.replace('/profile')
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
