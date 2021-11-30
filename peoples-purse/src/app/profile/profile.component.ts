import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Action } from '../types'
import { Observable } from 'rxjs';

const GET_USER = gql`
query Query($getUserId: ID!) {
  getUser(id: $getUserId) {
    username
    actions {
      name
      detail
      organization
      actionDate
      length
    }
  }
}
`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any
  username?: string
  actions?: [Action];
  action!: Action;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    console.log(localStorage.getItem('USER_ID'))
    this.data = this.apollo.query({
      query: GET_USER,
      variables: {
        getUserId: localStorage.getItem('USER_ID')
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data.getUser.actions);
      this.username = data.getUser.username
      this.actions = (data.getUser.actions)
      console.log(this.actions)
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
