import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  userLoggedIn = sessionStorage.getItem('USER_ID') || sessionStorage.getItem('TEACHER_ID')

  ngOnInit(): void {
  }

}
