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
    var randomIndex: number | undefined;
    var randomBytes: string | any[];
    let getNextRandomValue = () => {
      if (randomIndex === undefined || randomIndex >= randomBytes.length) {
        randomIndex = 0;
      }

      var result = randomBytes[randomIndex];
      randomIndex += 1;

      return result;
    }
    let randomNumber = (max: number) => {
      var rand = getNextRandomValue();
      while (rand >= 256 - (256 % max)) {
        rand = getNextRandomValue();
      }
      return rand % max;
    }
    for (let i = 0; i < 3; i++) {
      pwd += pool[randomNumber(64)]
    }
    let randomClassInput = document.getElementById('classCode') as HTMLElement
    randomClassInput.innerHTML = pwd
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
