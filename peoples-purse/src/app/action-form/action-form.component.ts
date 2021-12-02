import { HttpContext, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const TAKE_ACTION = gql`
  mutation Mutation($input: TakeAction!) {
    takeAction(input: $input) {
      name
      detail
      organization
      actionDate
      length
  }
}
`
  ;

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  name = '';
  detail = '';
  organization = '';
  actionDate = new Date();
  length = 0;

  setName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  setDetail(event: Event) {
    this.detail = (event.target as HTMLInputElement).value;
  }

  setOrganization(event: Event) {
    this.organization = (event.target as HTMLInputElement).value;
  }

  setActionDate(event: Event) {
    this.actionDate = new Date((event.target as HTMLInputElement).value);
  }

  setLength(event: Event) {
    this.length = parseInt((event.target as HTMLInputElement).value)
  }

  submitAction(event: Event) {
    event.preventDefault();
    const JWTtoken = localStorage.getItem('AUTH_TOKEN')
    console.log(JWTtoken)
    this.apollo.mutate({
      mutation: TAKE_ACTION,
      context: {'auth': JWTtoken},
      variables: {
        input: {
          jwt: JWTtoken,
          name: this.name,
          detail: this.detail,
          organization: this.organization,
          actionDate: this.actionDate,
          length: this.length
        }
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
      alert("Your action has been successfully recorded")
      // window.location.replace('/profile')
    }, (error) => {
      console.log("there was an error sending the mutation", error)
    })
  }

}
