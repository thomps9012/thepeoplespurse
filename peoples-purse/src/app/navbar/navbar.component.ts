import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_USER = gql`
query Query($getUserId: ID!) {
  getUser(id: $getUserId) {
    username
  }
}
`;

const GET_TEACHER = gql`
query Query($getTeacherId: ID!) {
  getTeacher(id: $getTeacherId) {
    username
  }
}
`;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data?: any
  username?: string
  teachername?: string
  constructor(private apollo: Apollo) { }

  logout() {
    sessionStorage.removeItem('USER_ID')
    sessionStorage.removeItem('USER')
    sessionStorage.removeItem('TEACHER_ID')
    sessionStorage.removeItem('TEACHER')
    sessionStorage.removeItem('AUTH_TOKEN')
    sessionStorage.removeItem('CLASS_CODE')
    window.location.replace('/');
  }
  userId = sessionStorage.getItem('USER_ID')
  teacherId = sessionStorage.getItem('TEACHER_ID')

  ngOnInit() {
    if (this.userId != null) {
      this.data = this.apollo.query({
        query: GET_USER,
        variables: {
          getUserId: localStorage.getItem('USER_ID')
        }
      }).subscribe(({ data }: any) => {
        this.username = data.getUser.username
      }, (error) => {
        console.log('there was an error sending the query', error);
      })
    } else if (this.teacherId != null) {
      this.data = this.apollo.query({
        query: GET_TEACHER,
        variables: {
          getTeacherId: localStorage.getItem('TEACHER_ID')
        }
      }).subscribe(({ data }: any) => {
        this.teachername = data.getTeacher.username
      }, (error) => {
        console.log('there was an error sending the query', error);
      })
    }
    else {}

  }
}
