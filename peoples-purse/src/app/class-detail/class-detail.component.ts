import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Class } from '../types';

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

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})

export class ClassDetailComponent implements OnInit {

  data: any
  class?: Class;
  classID?: string;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.classID = params.id
    })
    this.data = this.apollo.query({
      query: CLASS_DETAIL,
      variables: {
        classId: this.classID
      }
    }).subscribe(({data}: any) => {
      console.log('got data', data);
      this.class = data.classInfo
      console.log(this.class)
    })
  }


}
