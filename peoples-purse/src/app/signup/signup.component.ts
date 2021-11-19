import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


const SIGN_UP = gql`
mutation Mutation($input: UserSignUpInput!) {
  signUp(input: $input){
    token
    user {
      id
    }
  }
}
`;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  showClassInput() {
    let classCodeDiv = document.getElementById('ClassCodeInput');
    classCodeDiv?.style.display != 'none' ? classCodeDiv?.setAttribute('style', 'display: none') : classCodeDiv.setAttribute('style', 'display: block')
  }

  username = '';
  email = '';
  password = '';
  classCode = '';

  setUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  setEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  setPassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  setClassCode(event: Event) {
    this.classCode = (event.target as HTMLInputElement).value;
  }

  signUp(event: Event) {
    // comment out
    event.preventDefault()

    this.apollo.mutate({
      mutation: SIGN_UP,
      variables: {
        input: {
          email: this.email,
          username: this.username,
          password: this.password,
          classCode: this.classCode
        }
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
      const token = data.signUp.token;
      const userId = data.signUp.user.id
      localStorage.setItem('USER', this.username)
      localStorage.setItem('USER_ID', userId)
      localStorage.setItem('AUTH_TOKEN', token)
      // load to profile page
      window.location.replace('/profile')
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
