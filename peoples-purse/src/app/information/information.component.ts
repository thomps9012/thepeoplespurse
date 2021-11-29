import { Component, OnInit } from '@angular/core';
import { DeptInfo } from './deptInfo';

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  DeptInfo = DeptInfo;

  constructor() { }

  ngOnInit(): void {
    // api call to opensecrets
  }
  displayDept = (event: Event) => {
    event.preventDefault();
    const selectedDept = (event.target as HTMLSelectElement).value; 
    const deptInfoDiv = document.getElementById('deptInfo');
    if(deptInfoDiv != null) {deptInfoDiv.innerHTML = "";}
    const seal = document.createElement('img')
    const name = document.createElement('h3')
    const mission = document.createElement('p')
    const website = document.createElement('a')

    for(let i=0; i < DeptInfo.length; i++){
      if(DeptInfo[i].name === selectedDept) {
        console.log(DeptInfo[i])
        seal.src = DeptInfo[i].icon;
        seal.width = 200;
        seal.height = 200;
        name.append(DeptInfo[i].name);
        mission.append(DeptInfo[i].mission);
        website.href = DeptInfo[i].website;
        website.target = '_blank';
        website.append('Visit the Department Website');
        
        deptInfoDiv?.append(name)
        deptInfoDiv?.append(seal)
        deptInfoDiv?.append(mission)
        deptInfoDiv?.append(website)
      }
    }
  }
}
