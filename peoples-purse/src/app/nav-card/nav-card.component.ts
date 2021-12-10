import { Component, OnInit } from '@angular/core';
import { navcards } from './navcards';

@Component({
  selector: 'nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.css']
})
export class NavCardComponent implements OnInit {
  navcards = navcards
  
  constructor() { }

  ngOnInit(): void {
  }

}
