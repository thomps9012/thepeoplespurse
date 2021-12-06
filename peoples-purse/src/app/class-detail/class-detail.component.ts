import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Class, User, UserQuery } from '../types';

const CLASS_DETAIL = gql`
query Query($classId: ID!) {
  classInfo(classID: $classId) {
    classCode
    users
    votes
    createdAt
  }
}
`;

const STUDENT_DETAIL = gql`
query Query($getUserId: ID!) {
  getUser(id: $getUserId) {
    username
    email
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
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})

export class ClassDetailComponent implements OnInit {

  data: any;
  studentData: any;
  class?: Class;
  classID?: string;
  studentList?: [string];
  studentDetails?: any

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentDetails = [];
    this.route.params.subscribe(params => {
      this.classID = params.id
    })
    this.data = this.apollo.query({
      query: CLASS_DETAIL,
      variables: {
        classId: this.classID
      }
    }).subscribe(({ data }: any) => {
      this.class = data.classInfo
      this.studentList = data.classInfo.users
      this.studentList?.map(student => {
        this.studentData = this.apollo.query({
          query: STUDENT_DETAIL,
          variables: {
            getUserId: student
          }
        }).subscribe(({data}: any) => {
          let studentDetail = data.getUser
          console.log(studentDetail)
          this.studentDetails.push(studentDetail)
          console.log('student details', this.studentDetails)
        })
      })
    })

  }


}
