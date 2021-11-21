import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_USER = gql`
query Query($getUserId: ID!) {
  getUser(id: $getUserId) {
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
  constructor(private apollo: Apollo) { }

  logout() {
    localStorage.removeItem('USER_ID')
    localStorage.removeItem('USER')
    localStorage.removeItem('AUTH_TOKEN')
    window.location.replace('/');
  }
  ngOnInit() {
    const userId = localStorage.getItem('USER_ID')
    if (userId != null) {
      this.data = this.apollo.query({
        query: GET_USER,
        variables: {
          getUserId: localStorage.getItem('USER_ID')
        }
      }).subscribe(({ data }: any) => {
        this.username = data.getUser.username
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
    }
  }
}
