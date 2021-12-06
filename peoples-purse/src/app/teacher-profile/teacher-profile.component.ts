import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Class } from '../types'

const GET_CLASSES = gql`
query Query($teacherId: ID!) {
  classes(teacherID: $teacherId) {
    id
    classCode
    createdAt
  }
}
`;

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  data: any
  classes?: [Class];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    // replace with a local storage variable
    let teacher = '61a9367059f1854613bc578e';

    this.data = this.apollo.query({
      query: GET_CLASSES,
      variables: {
        teacherId: teacher
      }
    }).subscribe(({ data }: any) => {
      console.log('got data', data);
      this.classes = data.classes
    })
  }

}
