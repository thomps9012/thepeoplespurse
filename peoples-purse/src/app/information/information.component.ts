import { Component, OnInit } from '@angular/core';
import { DeptInfo } from './deptInfo';
import { States } from './states'
declare var gapi: any;

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  DeptInfo = DeptInfo;
  States = States;

  constructor() { }

  ngOnInit(): void {
    gapi.load('client');
  }

  displayDept = (event: Event) => {
    event.preventDefault();
    const selectedDept = (event.target as HTMLSelectElement).value;
    const deptInfoDiv = document.getElementById('deptInfo');
    if (deptInfoDiv != null) { deptInfoDiv.innerHTML = ""; }
    const seal = document.createElement('img')
    const name = document.createElement('h3')
    const mission = document.createElement('p')
    const website = document.createElement('a')

    for (let i = 0; i < DeptInfo.length; i++) {
      if (DeptInfo[i].name === selectedDept) {
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

  // const officialDiv = document.getElementById('official-display');
  // if (officialDiv != null) { officialDiv.innerHTML = ""; }
  location = '';
  getAddress = (event: Event) => {
    event.preventDefault();
    const address = (event.target as HTMLInputElement).value;
    console.log(address)
    this.location = address;

  }

  loadClient() {
    gapi.client.init({
      'apiKey': "AIzaSyDsCAsDVamr-9rGO6DwtlXHcZL-8Tx5oeA"
    })
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err: any) { console.error("Error loading GAPI client for API", err); });
  }

  execute = async (location: any) => {
    await this.loadClient()
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": location,
      "includeOffices": true
    })
      .then(function (response: any) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response.result);
      },
        function (err: any) { console.error("Execute error", err); });
  }
}
