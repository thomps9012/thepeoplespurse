import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const CREATE_CLASS = gql`
mutation Mutation($input: CreateClassInput!) {
  createClass(input: $input)
}
`;

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})

export class ClassCreateComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  classCode = '';

  setClassCode(event: Event) {
    this.classCode = (event.target as HTMLInputElement).value;
  }

  randomClass() {
    const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let pwd = '';

    let getNextRandomValue = () => {
      return Math.floor(Math.random() * 256)+0;
    }

    let randomNumber = (max: number) => {
      var rand = getNextRandomValue();
      while (rand >= 256 - (256 % max)) {
        rand = getNextRandomValue();
      }
      return rand % max;
    }

    for (let i = 0; i < 10; i++) {
      pwd += pool[randomNumber(62)]
    }
    const codeDiv = document.getElementById('generatedCode') as HTMLElement
    codeDiv.innerHTML = `Class Code: ${pwd}`
    this.classCode = pwd;
  }

  saveClass() {
    this.apollo.mutate({
      mutation: CREATE_CLASS,
      variables: {
        input: {
          classCode: this.classCode,
          teacher: localStorage.getItem('TEACHER_ID')
        }
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
      window.location.replace('/educatorProfile')
    }, (error) => {
      console.log("there was an error sending the mutation", error)
    })
  }
}
