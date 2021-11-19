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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apollo: Apollo) { }
  
  ngOnInit() {
    console.log(localStorage.getItem('USER_ID'))
    this.apollo.query({
      query: GET_USER,
      variables: {
        getUserId: localStorage.getItem('USER_ID')
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
