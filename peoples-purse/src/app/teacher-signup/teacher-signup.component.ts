import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const TEACHER_SIGN_UP = gql `
mutation Mutation($input: TeacherSignUpInput!) {
  teacherteacherSignUp(input: $input){
    token
    user {
      id
    }
  }
}
`;

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  username = '';
  email = '';
  password = '';

  setUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  setEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value
  }

  setPassowrd(event: Event) {
    this.password = (event.target as HTMLInputElement).value
  }

  signUp(event: Event) {
    event.preventDefault();

    this.apollo.mutate({
      mutation: TEACHER_SIGN_UP,
      variables: {
        input: {
          email: this.email,
          username: this.username,
          password: this.password
        }
      }
    }).subscribe(({data}: any) => {
      console.log('got data', data);
      const token = data.teacherSignUp.token;
      const userId = data.teacherSignUp.userId;
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
