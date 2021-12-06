import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Class } from '../types'

const GET_CLASSES = gql`
query Query() {
  getClasses(){

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
  class!: Class;
  
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

}
